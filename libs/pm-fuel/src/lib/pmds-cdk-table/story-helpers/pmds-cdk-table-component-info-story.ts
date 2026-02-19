export const componentInfo = `

Create component for table view

~~~~
@Component({
	selector: 'pmds-cdk-table-row-story',
	standalone: true,
	template: '<td>{{ rowConfig.data.col1 }}</td>'
})
export class PmdsCdkTableRowStoryRowComponent {
	@Input() rowConfig!: IPmdsCdkRowConfigParam<any>;
}
~~~~

Create component for card view

~~~~
@Component({
	selector: 'pmds-cdk-table-card-story',
	standalone: true,
	template: '<section>{{ rowConfig.data.col1 }}</section>'
})
export class PmdsCdkTableCardStoryRowComponent {
	@Input() rowConfig!: IPmdsCdkRowConfigParam<any>;
}
~~~~

Import: **../../../index**

~~~~
import { PmdsCdkTableComponent } from '../pmds-cdk-table.component';
~~~~

Add to import array the **PmdsCdkTableComponent** in your component

~~~~
imports: [
	PmdsCdkTableComponent
]
~~~~

Create a tableConfig data in your component

~~~~
tableConfig = {
	headerColumns: [
		{ label: 'Header 1' },
	],
	rowComponent: {
		component: PmdsCdkTableRowStoryRowComponent,
		cardComponent: PmdsCdkCardRowStoryRowComponent,
	},
};
~~~~

Selector: **pmds-cdk-table**

~~~~
<pmds-cdk-table>
</pmds-cdk-table>
~~~~
`;
