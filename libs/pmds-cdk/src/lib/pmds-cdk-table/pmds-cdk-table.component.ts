////////Angular imports
import {CommonModule, NgClass, NgStyle} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	HostListener,
	inject,
	Input,
	NgZone,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
	SimpleChanges,
	Type,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
////////Third party libraries
import {Subject, takeUntil} from "rxjs";
////////PPMDS libraries
import { PmdsCdkLoaderComponent } from '../pmds-cdk-loader/pmds-cdk-loader.component';
import { PmdsCdkCheckboxComponent } from '../pmds-cdk-checkbox/pmds-cdk-checkbox.component';

import { PmdsDirectiveTitle } from '@pmhub/pmds-common';
import { PmdsDirectiveTooltip } from '@pmhub/pmds-common';
////////Component imports
import {
	PmdsCdkDynamicCardComponent
} from './components/pmds-cdk-table-dynamic-card/pmds-cdk-table-dynamic-card.component';
import {
	PmdsCdkDynamicRowComponent
} from './components/pmds-cdk-table-dynamic-row/pmds-cdk-table-dynamic-row.component';
import {IPmdsCdkDynamicRowComponentConfig} from './models/pmds-cdk-table-dynamic-row-component-config.model';
import {IPmdsCdkHeaderConfig} from './models/pmds-cdk-table-header-config.model';
import {IPmdsCdkTableConfig, IPmdsCdkTablePaginationInfo,} from './models/pmds-cdk-table.config.model';

const MOBILE_BREAKPOINT = 768;

@Component({
	selector: 'pmds-cdk-table',
	standalone: true,
	imports: [
		NgClass,
		NgStyle,
		PmdsCdkDynamicCardComponent,
		PmdsCdkDynamicRowComponent,
		PmdsCdkLoaderComponent,
		PmdsCdkCheckboxComponent,
		ReactiveFormsModule,
		CommonModule,
		FormsModule,
		PmdsDirectiveTitle,

		PmdsDirectiveTooltip
	],
	styleUrls: ['./pmds-cdk-table.component.scss'],
	templateUrl: './pmds-cdk-table.component.html',
})
export class PmdsCdkTableComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
	@ViewChild('infinityScroll') infinityScroll!: ElementRef;
	@ViewChild('content') content: ElementRef<HTMLElement> | null = null;
	@ViewChild('tableContainer', {static: false}) tableContainer: ElementRef<HTMLElement> | null = null;

	@Input() dataQA!: string;
	@Input() showOnlyHeader = false;
	@Input() itemsPerPage = 10;
	@Input() paginationInfo: IPmdsCdkTablePaginationInfo = {
		total: 0,
		actualPage: 1,
		itemsPage: 10,
	};
	@Input() showSelectRow!: boolean;
	@Input() tableConfig!: IPmdsCdkTableConfig;
	@Input() tableData!: any[];
	@Input() filteredFields: string[] = [];
	@Input() showBottomBorder = true;

	@Output() scrollEnd: EventEmitter<void> = new EventEmitter<void>();
	@Output() changeView: EventEmitter<'card' | 'table'> = new EventEmitter<'card' | 'table'>();
	@Output() clearFilters = new EventEmitter<void>();

	componentSelector = 'pmds-cdk-table-';
	form: FormGroup | undefined;
	headerColumnsConfig!: IPmdsCdkHeaderConfig[];
	infinityScrollLoading!: boolean;
	headerHoverIndex: number | undefined;
	noMoreData!: boolean;
	dataCurrentPage!: any[];
	rowComponentConfig!: IPmdsCdkDynamicRowComponentConfig;
	vcRef = inject(ViewContainerRef);
	render = inject(Renderer2);
	zone = inject(NgZone);
	actualView: 'card' | 'table' = window.innerWidth < MOBILE_BREAKPOINT ? 'card' : 'table';

	private destroy$: Subject<boolean> = new Subject<boolean>();

	@HostListener('window:resize', ['$event'])
	onResize() {
		const actualActualView = this.actualView;
		this.actualView = window.innerWidth < MOBILE_BREAKPOINT ? 'card' : 'table';
		if (actualActualView !== this.actualView) {
			this.changeView.emit(this.actualView);
		}
	}

	ngOnInit() {
		if (this.tableConfig) {
			const {headerColumns, rowComponent} = this.tableConfig;
			this.headerColumnsConfig = headerColumns;
			this.rowComponentConfig = rowComponent;
		}

		this.form = new FormBuilder().group({
			checkbox: [false, [Validators.required]],
		});

		this.form?.get('checkbox')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v: any) => {
			if (this.dataCurrentPage) {
				this.dataCurrentPage = this.dataCurrentPage.map((item) => {
					return {
						...item,
						selected: v,
					};
				});

				this.getSelectedRows();
			}
		});
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}

	ngOnChanges(changes: SimpleChanges) {
		changes['tableData'] && this.form?.get('checkbox')?.setValue(false, {emmitEvent: false})
		changes['tableData'] && (this.infinityScrollLoading = false);
		changes['tableData']?.currentValue?.length >= this.paginationInfo.total && (this.noMoreData = true);

		if (changes['tableConfig']) {
			if (changes['tableConfig'].previousValue) {
				this.headerColumnsConfig = changes['tableConfig'].currentValue.headerColumns;
			}
		}

		if (changes['tableData']?.currentValue?.length > this.paginationInfo.itemsPage) {
			const data = changes['tableData']?.currentValue;
			this.dataCurrentPage = [];
			for (let index = this.paginationInfo.itemsPage * (this.paginationInfo.actualPage - 1); index < data.length; index++) {
				const element = data[index];
				this.dataCurrentPage.push(element);
			}
		} else {
			this.dataCurrentPage = changes['tableData']?.currentValue;
		}

		this.tableConfig.fixedColumns && this.updateStyles();
	}

	ngAfterViewInit() {
		const observer = new IntersectionObserver(([entry]) => {
			this.renderContents(entry.isIntersecting);
		});
		observer.observe(this.infinityScroll.nativeElement);
		this.tableConfig.fixedColumns && this.updateStyles();
	}

	renderContents(isIntersecting: boolean) {
		this.vcRef.clear();
		if (isIntersecting && !this.infinityScrollLoading && !this.noMoreData) {
			this.scrollEnd.emit();
			this.infinityScrollLoading = true;
		}
	}

	onHeadClicked(action: (() => void) | undefined, index: number) {
		if (action) {
			action();
			const actualOrder = this.headerColumnsConfig[index]?.order;
			this.headerColumnsConfig[index].order = actualOrder
				? actualOrder === 'ASC'
					? 'DES'
					: 'ASC'
				: 'ASC';
		}
	}

	onClicked(item: any) {
		if (!item.disabledAction) {
			this.rowComponentConfig.selectRowAction
				? this.rowComponentConfig.selectRowAction(item)
				: null;
		}
	}

	onCardClicked(item: Type<unknown>) {
		this.rowComponentConfig.selectCardAction
			? this.rowComponentConfig.selectCardAction(item)
			: null;
	}

	getSelectedRows() {
		const selectedRows: any = this.dataCurrentPage.filter(
			(item) => item.selected
		);

		this.rowComponentConfig.selectedRows
			? this.rowComponentConfig.selectedRows(selectedRows)
			: null;
	}

	ngContentIsEmpty() {
		return !((this.content?.nativeElement.children.length as number) > 0);
	}

	onHeaderMouseEnter(index: number) {
		this.headerHoverIndex = index;
	}

	onHeaderMouseOut() {
		this.headerHoverIndex = undefined;
	}

	private updateStyles() {
		this.zone.runOutsideAngular(() => {
			let tableClass = '';
			if (this.tableConfig.fixedColumns === 'first') {
				tableClass = this.showSelectRow ? 'static-first-with-checkbox' : 'static-first';
			}
			if (this.tableConfig.fixedColumns === 'first-second') {
				tableClass = this.showSelectRow ? 'static-second-with-checkbox' : 'static-second';
			}

			setTimeout(() => {
				this.render.addClass(this.tableContainer?.nativeElement, tableClass);

				// Fix left distance to the 1º column if showSelectRow or second column if not
				if (this.tableContainer?.nativeElement && tableClass !== 'static-first') {
					const firstWidth = this.tableContainer?.nativeElement?.querySelector('tr > th')?.getBoundingClientRect().width;

					this.render.setStyle(this.tableContainer?.nativeElement.children[0].children[0].children[0].children[1], 'left', firstWidth + 'px');

					// If is checkbox, we need to add styles to the 2º column bur is in another child, so we need to add the left distance to different elements
					for (let i = 0; i < this.tableData.length; i++) {
						const row = this.showSelectRow ? this.tableContainer?.nativeElement?.children[0]?.children[1]?.children[i]?.children[1]?.children[0] :
							this.tableContainer.nativeElement?.children[0]?.children[1]?.children[i]?.children[0]?.children[1];

						!!row && this.render.setStyle(row, 'left', firstWidth + 'px');
					}

					// Fix left distance to the 3º column in case showSelectRow is true
					if (tableClass === 'static-second-with-checkbox') {
						const firstWidth = this.tableContainer?.nativeElement.children[0].children[0].children[0].children[0]?.getBoundingClientRect().width;
						const secondWidth = this.tableContainer?.nativeElement.children[0].children[0].children[0].children[1]?.getBoundingClientRect().width;
						const columnHeader = this.tableContainer?.nativeElement.children[0].children[0].children[0].children[2];
						this.render.setStyle(columnHeader, 'left', (firstWidth + secondWidth) + 'px');

						// We need to add styles to the 3º column bur is in another child, so we need to add the left distance to different elements
						for (let i = 0; i < this.tableData.length; i++) {
							const row = this.tableContainer?.nativeElement?.children[0]?.children[1]?.children[i]?.children[1]?.children[1];

							!!row && this.render.setStyle(row, 'left', (firstWidth + secondWidth) + 'px');
						}
					}
				}
			}, 50);
		});
	}
}
