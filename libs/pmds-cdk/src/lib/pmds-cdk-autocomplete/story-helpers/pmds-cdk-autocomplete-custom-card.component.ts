////////Angular imports
import { Component, Input, OnInit } from '@angular/core';
////////Component imports
import { IData } from './pmds-cdk-autocomplete-component-models-story';

@Component({
	standalone: true,
	template: `
		<section class="flex flex-col gap-1">
			<div
				class="font-body-s-bold"
			>
				{{ data.id }}
			</div>

			<div class="font-body-s-regular">
				{{ data.firstName }} {{ data.lastName }} - {{data.email }}
			</div>

			<div class="font-body-m-bold text-right">
				{{ data.amount }}
			</div>

		</section>
	`,
})
export class AutocompleteCustomCardComponent implements OnInit {
	@Input() rowConfig!: { data: IData };
	data!: IData;
	ngOnInit() {
		this.data = this.rowConfig?.data;
	}
}
