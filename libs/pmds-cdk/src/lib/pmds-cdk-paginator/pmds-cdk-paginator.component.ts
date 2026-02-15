////////Angular imports
import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
} from '@angular/core';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkPaginatorLiterals } from './models/pmds-cdk-pagination-info-literals.model';
import { IPmdsCdkPaginationInfo } from './models/pmds-cdk-pagination-info.model';
import { PmdsCdkSelectPaginatorComponent } from './components/select-paginator/pmds-cdk-select-paginator.component';
import { PmdsCdkPaginatorSkeletonComponent } from './components/pmds-cdk-paginator-skeleton/pmds-cdk-paginator-skeleton.component';

@Component({
	selector: 'pmds-cdk-paginator',
	standalone: true,
	imports: [
		NgClass,
		NgTemplateOutlet,
		PmdsCdkButtonComponent,
		PmdsCdkPaginatorSkeletonComponent,
		PmdsCdkSelectPaginatorComponent,
	],
	templateUrl: './pmds-cdk-paginator.component.html',
})
export class PmdsCdkPaginatorComponent implements OnInit, OnChanges {
	@Input() dataQA!: string;
	@Input() itemsPage: number[] = [10, 25, 50];
	@Input() literals!: IPmdsCdkPaginatorLiterals | undefined;
	@Input() skeleton!: boolean;
	@Input() forceTabletView: boolean = false;
	@Input() paginationInfo: IPmdsCdkPaginationInfo = {
		total: 10,
		actualPage: 1,
		itemsPage: 10,
	};

	@Output() changePage: EventEmitter<number> = new EventEmitter<number>();
	@Output() itemChangedPerPage: EventEmitter<number> =
		new EventEmitter<number>();

	componentSelector = 'pmds-cdk-paginator-';
	arrayPages: number[] = [];
	jumpToOpen = false;
	lastPage!: number;
	numericalPage: number[] = [1, 2, 3, 4, 5];
	selectValue = 10;

	ngOnInit() {
		this.calculateLastPage();
		this.changeInitialNumberPage();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['paginationInfo']) {
			this.recalculateInfo();
		}
	}

	calculateLastPage() {
		this.lastPage = Math.ceil(
			this.paginationInfo.total / this.paginationInfo.itemsPage
		);
	}

	calculateNumericalPage(page: number) {
		this.numericalPage = [page - 1, page, page + 1];
		this.checkLimitsPage();
	}

	changeInitialNumberPage() {
		this.lastPage > 7 && this.checkLimitsPage();
		this.arrayPages = Array.from(Array(this.lastPage).keys()).map(
			(value) => value + 1
		);
	}

	changePageEmit(page: number, next = false) {
		const { actualPage } = this.paginationInfo;

		if (
			(actualPage === 1 && page <= 1) ||
			(actualPage >= this.lastPage && next) ||
			(actualPage === this.lastPage && page === this.lastPage)
		) {
			return;
		}
		if (this.lastPage > 7) {
			this.calculateNumericalPage(page);
		}
		this.paginationInfo = {
			...this.paginationInfo,
			actualPage: page,
		};
		this.changePage.emit(page);
	}

	jumpToPage(value: number) {
		this.changePageEmit(value);
	}

	changeItemPerPage(value: number) {
		this.numericalPage = [1, 2, 3, 4, 5];
		this.itemChangedPerPage.emit(value);
		this.selectValue = value;
		this.paginationInfo = {
			...this.paginationInfo,
			actualPage: 1,
			itemsPage: value,
		};
		this.recalculateInfo();
	}

	private checkLimitsPage() {
		if (this.numericalPage[0] < 1) {
			this.numericalPage =
				this.lastPage > 5 ? [1, 2, 3] : [1, 2, 3, 4, 5];
		}
		if (this.numericalPage[2] >= this.lastPage - 1) {
			this.numericalPage = [
				this.lastPage - 2,
				this.lastPage - 1,
				this.lastPage,
			];
		}
	}

	private recalculateInfo() {
		this.calculateLastPage();
		this.changeInitialNumberPage();
		if (
			this.itemsPage &&
			this.paginationInfo.itemsPage !== this.paginationInfo.total
		) {
			this.selectValue = this.paginationInfo.itemsPage;
		}
		this.calculateNumericalPage(this.paginationInfo.actualPage);
	}
}
