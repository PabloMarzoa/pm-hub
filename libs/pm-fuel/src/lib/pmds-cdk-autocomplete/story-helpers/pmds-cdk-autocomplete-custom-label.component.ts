////////Angular imports
import { Component, Input, OnInit } from '@angular/core';
////////Component imports
import { IData } from './pmds-cdk-autocomplete-component-models-story';

@Component({
	standalone: true,
	imports: [],
	template: `
		@if (data) {
			<span
				class="absolute w-5/6 bg-white cursor-text top-5 left-0 pt-0 ml-[2px] pl-[13px] pr-[14px] text-sm font-body-m-regular text-color-text-primary transform duration-300"
			>
				<span class="font-body-m-bold">{{ data.id }}</span> -
				{{ data.firstName }} {{ data.lastName }} - {{ data.email }}</span
			>
		}

	`,
})
export class AutocompleteCustomLabelComponent implements OnInit {
	@Input() labelConfig!: { data: IData };
	data!: IData;
	ngOnInit() {
		this.data = this.labelConfig?.data;
	}
}
