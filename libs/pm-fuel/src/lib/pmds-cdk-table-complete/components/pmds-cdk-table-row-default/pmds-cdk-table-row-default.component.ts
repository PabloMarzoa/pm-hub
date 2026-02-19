////////Angular imports
import { Component, Input, OnInit } from '@angular/core';
////////PPMDS libraries
import { IPmdsCdkRowConfigParam } from '../../../pmds-cdk-table/models/pmds-cdk-table-row-config-params.model';

@Component({
	selector: 'pmds-cdk-table-row-default.contents',
	standalone: true,
	templateUrl: './pmds-cdk-table-row-default.component.html',
})
export class PmdsCdkTableRowDefaultComponent implements OnInit {
	@Input() rowConfig!: IPmdsCdkRowConfigParam<any>;
	@Input() filteredFields: string[] = [];

	keys: string[] = [];
	rowData: any | null = null;

	ngOnInit(): void {
		this.rowData = this.rowConfig.data;
		this.keys = Object.keys(this.rowData as Object).filter(
			(key) => key !== 'disabledAction' && key !== 'selected'
		);
	}
}
