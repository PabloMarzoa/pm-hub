////////Angular imports
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
////////PPMDS libraries
import { IPmdsCdkPaginationInfo } from '../../pmds-cdk-paginator/models/pmds-cdk-pagination-info.model';
////////Component imports
import { IPmdsCdkTableCompleteConfig } from '../models/pmds-cdk-table-complete-config.model';
import { PmdsCdkTableCompleteComponent } from '../pmds-cdk-table-complete.component';
import { PokemonApiService } from './pokemon-api.service';

@Component({
	selector: 'pmds-cdk-complete-table-wrapper',
	standalone: true,
	imports: [PmdsCdkTableCompleteComponent],
	providers: [HttpClient],
	template: ` <div [class]="'!pb-12 md:overflow-x-auto ' + style">
		@if (canShowTable && tableOptionsComplete) {
		<pmds-cdk-table-complete
			[tableConfiguration]="tableOptionsComplete"
			[itemsPage]="itemsPage"
			[dataQA]="dataQA"
			[skeleton]="skeleton"
			[forceTabletView]="forceTabletView"
			[sortOneColumnAtATime]="sortOneColumnAtATime"
			[initialPaginationInfo]="initialPaginationInfo"
			[filteredFields]="filteredFields"
		></pmds-cdk-table-complete>
		}
	</div>`,
})
export class PmdsCdkCompleteTableWrapperComponent implements OnInit {
	@Input() tableOptions: Partial<IPmdsCdkTableCompleteConfig> | null = null;
	@Input() dataQA!: string;
	@Input() filteredFields: string[] = [];
	@Input() sortOneColumnAtATime = true;
	@Input() itemsPage: number[] = [10, 25, 50];
	@Input() style!: string;
	@Input() skeleton!: boolean;
	@Input() forceTabletView!: boolean;
	@Input() initialPaginationInfo: IPmdsCdkPaginationInfo = {
		actualPage: 1,
		itemsPage: 10,
		total: 0,
	};

	public restSrv = inject(PokemonApiService);
	public tableOptionsComplete!: IPmdsCdkTableCompleteConfig;
	public canShowTable = false;

	ngOnInit() {
		this.tableOptionsComplete = {
			...this.tableOptions,
			resService: this.restSrv,
		} as IPmdsCdkTableCompleteConfig;
		this.canShowTable = true;
	}
}
