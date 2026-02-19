////////Angular imports
import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges,
	ViewChild
} from '@angular/core';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../../../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkLoaderComponent } from '../../../pmds-cdk-loader/pmds-cdk-loader.component';
////////Component imports
import {
	PmdsCdkAutocompleteDynamicRowComponent
} from './pmds-cdk-autocomplete-dynamic-row/pmds-cdk-autocomplete-dynamic-row.component';
import {
	IPmdsCdkAutocompleteDynamicRowComponentConfig,
	IPmdsCdkAutocompleteTableConfig
} from '../../models/pmds-cdk-autocomplete-table.model';
import { IPmdsCdkAutocompleteStates } from '../../models/pmds-cdk-autocomplete.model';
import {
	PmdsCdkAutocompleteDynamicCardComponent
} from './pmds-cdk-autocomplete-dynamic-card/pmds-cdk-autocomplete-dynamic-card.component';

@Component({
	selector: 'pmds-cdk-autocomplete-table',
	standalone: true,
	imports: [
		NgClass,
		NgTemplateOutlet,
		PmdsCdkAutocompleteDynamicRowComponent,
		PmdsCdkAutocompleteDynamicCardComponent,
		PmdsCdkButtonComponent,
		PmdsCdkLoaderComponent
	],
	templateUrl: './pmds-cdk-autocomplete-table.component.html'
})
export class PmdsCdkAutocompleteTableComponent implements OnInit, OnChanges {
	@ViewChild('scrollableDiv') scrollableDiv!: ElementRef;

	private _states!: IPmdsCdkAutocompleteStates;
	@Input()
	get states(): IPmdsCdkAutocompleteStates {
		return this._states;
	}

	set states(value: IPmdsCdkAutocompleteStates) {
		if (value) {
			this._states = value;
		}
	}

	@Input() config!: IPmdsCdkAutocompleteTableConfig;
	@Input() data!: unknown[];
	@Input() dataQA!: string;
	@Input() suggestions!: string;
	@Input() paginationInfo = {
		total: 0,
		actualPage: 1,
		itemsPage: 10
	};

	@Output() scrollEnd: EventEmitter<void> = new EventEmitter();
	@Output() selectRow: EventEmitter<unknown> = new EventEmitter();

	componentSelector = 'pmds-cdk-autocomplete-table-'
	noMoreData = false;
	dataCurrentPage!: any[];
	hoverOnTable = false;
	rowComponentConfig!: IPmdsCdkAutocompleteDynamicRowComponentConfig;

	ngOnInit() {
		if (this.config && this.config?.rowComponent) {
			const {rowComponent} = this.config;
			this.rowComponentConfig = rowComponent;
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		this.noMoreData = changes['data']?.currentValue?.length && this.paginationInfo.total && changes['data']?.currentValue?.length >= this.paginationInfo.total;

		if (this.paginationInfo.actualPage === 1 && this.scrollableDiv)
			this.scrollableDiv.nativeElement.scrollTo(0, 0);


		if (changes['data']?.currentValue?.length > this.paginationInfo.itemsPage) {
			const data = changes['data']?.currentValue;
			this.dataCurrentPage = [];
			for (
				let index =
					this.paginationInfo.itemsPage * (this.paginationInfo.actualPage - 1);
				index < data.length;
				index++
			) {
				const element = data[index];
				this.dataCurrentPage.push(element);
			}
		} else {
			this.dataCurrentPage = changes['data']?.currentValue;
		}
	}

	onClick(item: unknown) {
		this.rowComponentConfig?.selectRowAction
			? this.rowComponentConfig.selectRowAction(item)
			: null;
		this.selectRow.emit(item);
	}

	onScroll() {
		const element = this.scrollableDiv.nativeElement;
		if (element.scrollTop + element.clientHeight >= element.scrollHeight && !this.noMoreData && this.data.length) {
			setTimeout(() => {
				this.scrollEnd.emit();
			}, 300);
		}
	}

	updateTableHover(hover: boolean) {
		this.hoverOnTable = hover;
	}
}
