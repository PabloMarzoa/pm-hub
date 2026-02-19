////////Angular imports
import { Component, Input } from "@angular/core";
////////Component imports
import { IPmdsCdkRowConfigParam } from "../models/pmds-cdk-table-row-config-params.model";

@Component({
	selector: 'pmds-cdk-table-card-story',
	standalone: true,
	imports: [],
	template: `
<div>
	<strong class="font-body-m-bold block">{{
		rowConfig.data.col1.label
	}}</strong>
</div>
<div>{{ rowConfig.data.col1.sublabel }}</div>
<div class="pt-2">
	<strong class="font-body-m-bold block">{{
		rowConfig.data.col2.label
	}}</strong>
</div>
<div>{{ rowConfig.data.col2.sublabel }}</div>
<div class="pt-2">{{ rowConfig.data.col3 }}</div>
<div class="font-body-m-bold pt-2">
	{{ rowConfig.data.col4 }}
</div>
<div class="pt-2">{{ rowConfig.data.col5 }}</div>
	`,
})
export class PmdsCdkCardRowStoryRowComponent {
	@Input() rowConfig!: IPmdsCdkRowConfigParam<any>;
}