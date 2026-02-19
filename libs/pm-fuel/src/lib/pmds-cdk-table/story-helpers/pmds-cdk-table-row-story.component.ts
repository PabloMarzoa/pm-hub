////////Angular imports
import { Component, Input } from "@angular/core";
////////Component imports
import { IPmdsCdkRowConfigParam } from "../models/pmds-cdk-table-row-config-params.model";

@Component({
	selector: 'pmds-cdk-table-row-story',
	standalone: true,
	template: `
		<td>
			<strong class="block font-body-m-bold">{{
				rowConfig.data.col1.label
			}}</strong>
			<span> {{ rowConfig.data.col1.sublabel }} </span>
		</td>
		<td>
			<strong class="block font-body-m-bold">{{
				rowConfig.data.col2.label
			}}</strong>
			<span> {{ rowConfig.data.col2.label }} </span>
		</td>
		<td>
			<div>{{ rowConfig.data.col3 }}</div>
		</td>
		<td>
			<strong class="font-body-m-bold">{{
				rowConfig.data.col4
			}}</strong>
		</td>
		<td>{{ rowConfig.data.col5 }}</td>
	`,
})
export class PmdsCdkTableRowStoryRowComponent {
	@Input() rowConfig!: IPmdsCdkRowConfigParam<any>;
}