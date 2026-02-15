////////Angular imports
import { Component, Input, OnInit } from '@angular/core';
////////Component imports
import { IData } from './pmds-cdk-autocomplete-component-models-story';

@Component({
	standalone: true,
	template: `
		<td class="pl-4 h-14 w-80">
			<div
				class="flex h-14 items-center justify-start font-SantanderMicroTextBold"
			>
				{{ data.id }}
			</div>
		</td>
		<td class="w-52">
			<div class="flex h-14 items-center justify-start">
				{{ data.firstName }} {{ data.lastName }}
			</div>
		</td>
		<td class="w-52">
			<div class="flex h-14 items-center justify-start">
				{{ data.amount }}
			</div>
		</td>
		<td class="pr-4 w-64">
			<div class="flex h-14 items-center justify-end">
				{{ data.email }}
			</div>
		</td>
	`,
})
export class AutocompleteCustomRowComponent implements OnInit {
	@Input() rowConfig!: { data: IData };
	data!: IData;
	ngOnInit() {
		this.data = this.rowConfig?.data;
	}
}
