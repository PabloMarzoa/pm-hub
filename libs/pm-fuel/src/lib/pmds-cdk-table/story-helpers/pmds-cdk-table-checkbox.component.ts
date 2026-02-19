////////Angular imports
import { Component } from '@angular/core';
////////Component imports
import { PmdsCdkTableComponent } from '../pmds-cdk-table.component';
import { PmdsCdkCardRowStoryRowComponent } from './pmds-cdk-table-card-story.component';
import { PmdsCdkTableRowStoryRowComponent } from './pmds-cdk-table-row-story.component';
import { data } from './pmds-cdk-table-component-const-story';

@Component({
	selector: 'pmds-cdk-table-checkbox',
	standalone: true,
	imports: [PmdsCdkTableComponent],
	template: `
		<pmds-cdk-table
			[showSelectRow]="showSelectRow"
			[tableData]="data"
			[paginationInfo]="paginationInfo"
			[tableConfig]="tableConfig"
			(selectedRows)="selectedRows()"
		/>
		<br />
		Rows selected: {{ row }}
	`,
})
export class PmdsCdkTableCheckboxComponent {
	data = data;
	paginationInfo = {
		total: 20,
		actualPage: 1,
		itemsPage: 5,
	};
	row: any = '[]';
	showSelectRow = true;
	tableConfig = {
		headerColumns: [
			{ label: 'Header 1' },
			{ label: 'Header 2' },
			{ label: 'Header 3' },
			{ label: 'Header 4' },
			{ label: 'Header 5' },
		],
		rowComponent: {
			component: PmdsCdkTableRowStoryRowComponent,
			cardComponent: PmdsCdkCardRowStoryRowComponent,
			stylesCard: 'bg-white',
			selectedRows: (rows: any) => (this.row = JSON.stringify(rows)),
		},
	};

	selectedRows() {
		alert('Selected');
	}
}
