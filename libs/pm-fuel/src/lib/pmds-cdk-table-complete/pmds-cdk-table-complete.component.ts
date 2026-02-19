////////Angular imports
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Type
} from "@angular/core";
import {AsyncPipe, NgClass} from "@angular/common";
////////Third party libraries
import {Subject, takeUntil} from "rxjs";
////////PPMDS libraries
import { IPmdsCdkHeaderConfig } from '../pmds-cdk-table/models/pmds-cdk-table-header-config.model';
import { IPmdsCdkTableConfig } from '../pmds-cdk-table/models/pmds-cdk-table.config.model';
import { PmdsCdkTableComponent } from '../pmds-cdk-table/pmds-cdk-table.component';
import { PmdsCdkLoaderComponent } from '../pmds-cdk-loader/pmds-cdk-loader.component';
import { IPmdsCdkPaginationInfo } from '../pmds-cdk-paginator/models/pmds-cdk-pagination-info.model';
import { PmdsCdkPaginatorComponent } from '../pmds-cdk-paginator/pmds-cdk-paginator.component';
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import {
	IPmdsCdkHeaderCompleteConfig,
	IPmdsCdkTableCompleteConfig
} from "./models/pmds-cdk-table-complete-config.model";
import {
	PmdsCdkTableRowDefaultComponent
} from "./components/pmds-cdk-table-row-default/pmds-cdk-table-row-default.component";
import {
	PmdsCdkTableCardDefaultComponent
} from "./components/pmds-cdk-table-default-card/pmds-cdk-table-card-default.component";
import { PmdsCdkTableCompleteSkeletonComponent } from "./components/pmds-cdk-table-complete-skeleton/pmds-cdk-table-complete-skeleton.component";

const MOBILE_BREAKPOINT = 768;

@Component({
	templateUrl: 'pmds-cdk-table-complete.component.html',
	selector: 'pmds-cdk-table-complete',
	imports: [
		PmdsCdkTableComponent,
		AsyncPipe,
		PmdsCdkLoaderComponent,
		PmdsCdkPaginatorComponent,
		NgClass,
		PmdsCdkButtonComponent,
		PmdsCdkTableCompleteSkeletonComponent
	],
	standalone: true
})
export class PmdsCdkTableCompleteComponent implements OnInit, OnDestroy, OnChanges {

	@Input() tableConfiguration!: IPmdsCdkTableCompleteConfig;
	@Input() dataQA!: string;
	@Input() sortOneColumnAtATime = true;
	@Input() filteredFields: string[] = [];
	@Input() cardItemsPerLoad = 5;
	@Input() skeleton!: boolean;
	@Input() itemsPage: number[] = [10, 25, 50];
	@Input() forceTabletView: boolean = false;
	@Input() initialPaginationInfo: Partial<IPmdsCdkPaginationInfo> = {
		actualPage: 1,
		itemsPage: 10,
		total: 0
	};

	@Output() changePage: EventEmitter<number> = new EventEmitter<number>();
	@Output() changeView: EventEmitter<'card' | 'table'> = new EventEmitter<'card' | 'table'>();
	@Output() clearFilters = new EventEmitter<void>();
	@Output() itemChangedPerPage: EventEmitter<number> = new EventEmitter<number>();

	actualView: 'card' | 'table' = window.innerWidth < MOBILE_BREAKPOINT ? 'card' : 'table';
	componentSelector = 'pmds-cdk-table-complete-'
	data = [];
	initialLoading = true;
	loadingOnFilterChange = false;
	loadingOnViewChange = false;
	paginationInfo: IPmdsCdkPaginationInfo = {
		actualPage: 1,
		itemsPage: 10,
		total: 0
	};
	sortableFields: {field: string, order: 'DES' | 'ASC'}[] = [];
	tableConfig: IPmdsCdkTableConfig | null = null;

	private destroy$: Subject<boolean> = new Subject<boolean>();

	ngOnInit() {
		if(!this.skeleton) {
			this.paginationInfo = {...this.paginationInfo, ...this.initialPaginationInfo};
			this.paginationInfo.itemsPage = this.actualView === 'card' ? this.cardItemsPerLoad : this.paginationInfo.itemsPage;
			this.setDefaultComponentsIfNecessary();
			this.setInitialSortFields();
			this.parseTableConfig(this.tableConfiguration);
			this.getData();
			this.tableConfiguration.resService.dataCollectionHasChanged.pipe(takeUntil(this.destroy$)).subscribe(res => {
				// IF IS CARD VIEW, CONCAT RESULTS, LOADING NEW 5 BY 5
				if (this.actualView === 'card') {
					this.data = this.data.concat(res.registers as any);
				} else {
					this.data = res.registers as any;
				}
				this.paginationInfo = {
					...this.paginationInfo as IPmdsCdkPaginationInfo,
					total: res.total
				};
				this.loadingOnFilterChange = false;
				this.loadingOnViewChange = false;
				this.initialLoading = false;
			});
			// GO TO FIRST PAGE WHEN FILTER CHANGED
			this.tableConfiguration.resService.filterHasChanged.pipe(takeUntil(this.destroy$)).subscribe(() => {
				this.initialLoading = true;
				this.paginationInfo.actualPage = 1;
				this.changePage.emit(1);
				this.loadingOnFilterChange = true;
				this.data = [];
				this.getData();
			});
		}
	}

	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}

	ngOnChanges() {
		if (!this.skeleton && this.tableConfiguration.tableConfig.headerColumns) {
			this.tableConfig && (this.tableConfig = {...this.tableConfig, headerColumns: this.getParsedHeaders(this.tableConfiguration)});
			this.data = [...this.data];
		}
	}

	get filteredFieldsString() {
		let fieldsString = '';
		this.filteredFields.forEach(el => fieldsString = fieldsString + `"${el}"` + `, `);
		return fieldsString.substring(0, fieldsString.length - 2);
	}

	get infoHeaderActions() {
		return this.tableConfiguration.tableInfoHeader?.actions || [];
	}

	get showPagination() {
		return this.tableConfiguration.paginatorLiterals && this.tableConfiguration.paginatorLiterals && this.data.length > 0 && !this.initialLoading && !this.loadingOnViewChange && this.actualView !== 'card';
	}

	// UPDATE ON PAGINATOR ITEMS PER PAGE EVENT
	onItemChangedPerPage(itemsPage: number): void {
		this.paginationInfo = {
			...this.paginationInfo as IPmdsCdkPaginationInfo,
			actualPage: 1,
			itemsPage
		};
		this.getData();
		this.changePage.emit(1);
		this.itemChangedPerPage.emit(itemsPage);
	}

	// UPDATE ON PAGINATOR PAGE EVENT
	onChangePage(page: number) {
		this.paginationInfo = {
			...this.paginationInfo as IPmdsCdkPaginationInfo,
			actualPage: page
		}
		this.getData();
		this.changePage.emit(page);
	}

	tableScrollEnd() {
		this.paginationInfo = {...this.paginationInfo, actualPage: this.paginationInfo.actualPage + 1, itemsPage: this.cardItemsPerLoad};
		this.getData();
	}

	// IF TABLE CHANGES VIEW, RESET THE PAGINATOR OPTIONS AND UPDATE DATA
	tableChangeView(ev: 'card' | 'table') {
		this.loadingOnViewChange = true;
		this.actualView = ev;
		ev === 'card' && (this.data = []);
		this.paginationInfo = {...this.paginationInfo, actualPage: 1, itemsPage: ev === 'table' ? 10 : this.cardItemsPerLoad};
		this.changePage.emit(this.paginationInfo.actualPage);
		this.itemChangedPerPage.emit(this.paginationInfo.itemsPage);
		this.tableConfiguration.resService.setOffset(0);
		this.tableConfiguration.resService.setLimit(ev === 'table' ? 10 : this.cardItemsPerLoad);
		this.changeView.next(ev);
		this.getData();
	}

	sortByField(field: string) {
		const index = this.sortableFields.findIndex(el => el.field === field);
		if (index === -1) {
			this.sortOneColumnAtATime && (this.sortableFields = []);
			this.sortableFields.push({field, order: 'ASC'})
		} else {
			const currentFieldState = this.sortableFields[index].order;
			if (currentFieldState === 'ASC') {
				this.sortableFields[index].order = 'DES'
			} else {
				this.sortableFields.splice(index, 1);
			}
		}
		this.parseTableConfig(this.tableConfiguration);
		this.getData();
	}

	// GET DATA FROM REST SERVICE
	private getData() {
		this.tableConfiguration.resService.setLimit(this.paginationInfo?.itemsPage || 10)
		this.tableConfiguration.resService.setOffset(this.paginationInfo ? (this.paginationInfo.actualPage - 1) * this.paginationInfo.itemsPage : 10);
		this.tableConfiguration.resService.getData(this.sortableFields);
	}

	// IF CONFIG HAS NOT ROWS AND CARDS COMPONENTS, THIS TABLE USE THE DEFAULT ONES
	private setDefaultComponentsIfNecessary() {
		!this.tableConfiguration.tableConfig.rowComponent.component && (this.tableConfiguration.tableConfig.rowComponent.component = PmdsCdkTableRowDefaultComponent);
		!this.tableConfiguration.tableConfig.rowComponent.cardComponent && (this.tableConfiguration.tableConfig.rowComponent.cardComponent = PmdsCdkTableCardDefaultComponent);
	}

	// SET INITIAL SORT OPTIONS SEND ON CONFIG
	private setInitialSortFields() {
		this.sortableFields = this.tableConfiguration.tableConfig.headerColumns
			.filter((header: IPmdsCdkHeaderCompleteConfig) => !!header.order)
			.map((header: IPmdsCdkHeaderCompleteConfig) => {return {field: header.sortableField, order: header.order}}) as {field: string, order: 'DES' | 'ASC'}[];
	}

	// CREATE SIMPLE TABLE CONFIG
	private parseTableConfig(tableCompleteConfig: IPmdsCdkTableCompleteConfig) {
		this.tableConfig = {
			headerColumns: this.getParsedHeaders(tableCompleteConfig),
			rowComponent: {
				component: tableCompleteConfig.tableConfig.rowComponent.component as Type<any>,
				cardComponent: tableCompleteConfig.tableConfig.rowComponent.cardComponent as Type<any>,
				selectRowAction: tableCompleteConfig.tableConfig.rowComponent.selectRowAction,
				selectCardAction: tableCompleteConfig.tableConfig.rowComponent.selectCardAction,
				selectedRows: tableCompleteConfig.tableConfig.rowComponent.selectedRows,
			},
			emptyStateLiterals: tableCompleteConfig.tableConfig.emptyStateLiterals
		};
		tableCompleteConfig.tableConfig.fixedColumns && (this.tableConfig['fixedColumns'] = tableCompleteConfig.tableConfig.fixedColumns);
	}

	private getParsedHeaders(tableCompleteConfig: IPmdsCdkTableCompleteConfig): IPmdsCdkHeaderConfig[] {
		const headers: IPmdsCdkHeaderConfig[] = [];
		tableCompleteConfig.tableConfig.headerColumns.forEach(header => {
			let newHeader: IPmdsCdkHeaderConfig = {label: header.label, tooltip: header.tooltip, tooltipPosition: header.tooltipPosition || 'bottom-center'};
			!!header.tooltipPosition && (newHeader.tooltipPosition = header.tooltipPosition);
			!!header.tooltipTitle && (newHeader.tooltipTitle = header.tooltipTitle);
			if (header.sortableField) {
				const action = () => {
					this.sortByField(header.sortableField as string);
				};

				newHeader = {...newHeader, action};

				const index = this.sortableFields.findIndex(el => el.field === header.sortableField);
				index !== -1 && (newHeader.order = this.sortableFields[index].order)
			}
			!!header.styles  && (newHeader.styles = header.styles);
			headers.push(newHeader);
		});
		return headers;
	}
}
