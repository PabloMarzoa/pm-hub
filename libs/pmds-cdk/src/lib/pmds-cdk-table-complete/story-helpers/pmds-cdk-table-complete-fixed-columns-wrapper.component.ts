////////Angular imports
import {HttpClient, } from '@angular/common/http';
import {Component, inject, Input, OnInit} from '@angular/core';
////////PPMDS libraries
import { IPmdsCdkPaginationInfo } from '../../pmds-cdk-paginator/models/pmds-cdk-pagination-info.model';
////////Component imports
import {IPmdsCdkTableCompleteConfig} from '../models/pmds-cdk-table-complete-config.model';
import {PmdsCdkTableCompleteComponent} from '../pmds-cdk-table-complete.component';
import {PokemonApiXXLService} from "./pokemon-api-xxl.service";

@Component({
	selector: 'pmds-cdk-complete-table-fixed-columns-wrapper',
	standalone: true,
	imports: [PmdsCdkTableCompleteComponent],
	providers: [HttpClient],
	template: `
		<div class="w-full h-full">
			<div [class]="'!pb-12 overflow-x-auto m-auto max-w-[720px]'">
				@if (canShowTable && tableOptionsComplete) {				 
					<pmds-cdk-table-complete
						[tableConfiguration]="tableOptionsComplete"
						[itemsPage]="itemsPage"
						[dataQA]="dataQA"
						[sortOneColumnAtATime]="sortOneColumnAtATime"
						[initialPaginationInfo]="initialPaginationInfo"
						[filteredFields]="filteredFields"
					></pmds-cdk-table-complete>
				}
			</div>
		</div>`,
})
export class PmdsCdkCompleteTableFixedColumnsWrapperComponent implements OnInit {
	@Input() tableOptions: Partial<IPmdsCdkTableCompleteConfig> | null = null;
	@Input() dataQA!: string;
	@Input() filteredFields: string[] = [];
	@Input() sortOneColumnAtATime = true;
	@Input() itemsPage: number[] = [10, 25, 50];
	@Input() initialPaginationInfo: IPmdsCdkPaginationInfo = {
		actualPage: 1,
		itemsPage: 10,
		total: 0
	};
	public restServ = inject(PokemonApiXXLService);
	public tableOptionsComplete!: IPmdsCdkTableCompleteConfig;
	public canShowTable = false;

	ngOnInit() {
		this.tableOptionsComplete = {
			...this.tableOptions,
			resService: this.restServ,
		} as IPmdsCdkTableCompleteConfig;
		this.canShowTable = true;
	}
}
