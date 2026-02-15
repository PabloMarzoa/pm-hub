////////Angular imports
import { Component } from '@angular/core';
////////Component imports
import { PmdsCdkTableComponent } from '../pmds-cdk-table.component';
import { PmdsCdkCardRowStoryRowComponent } from './pmds-cdk-table-card-story.component';
import { data } from './pmds-cdk-table-component-const-story';
import { PmdsCdkTableRowStoryRowComponent } from './pmds-cdk-table-row-story.component';

@Component({
	selector: 'pmds-cdk-table-scroll-end',
	standalone: true,
	imports: [PmdsCdkTableComponent],
	template: `
		<pmds-cdk-table
			[tableData]="data"
			[paginationInfo]="paginationInfo"
			[tableConfig]="tableConfig"
			(scrollEnd)="scrollEnd()"
			(selectedRows)="selectedRows()"
		/>
	`,
})
export class PmdsCdkTableScrollEndComponent {
	data = data;
	paginationInfo = {
		total: 20,
		actualPage: 1,
		itemsPage: 5,
	};
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
			selectRowAction: () => alert('Select Row'),
			cardComponent: PmdsCdkCardRowStoryRowComponent,
			selectCardAction: () => alert('Select Card'),
			stylesCard: 'bg-white',
			selectedRows: (rows: any) => console.log(rows),
		},
	};

    selectedRows() {
        alert('Selected')
    }
    
	scrollEnd() {
		setTimeout(() => {
			this.paginationInfo.actualPage++;
			this.data = [...this.data, ...data];
		}, 2000);
	}
}
