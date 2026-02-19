////////Angular imports
import { Component, Input } from '@angular/core';
import {
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
////////Third party libraries
import { timer } from 'rxjs';
////////PNXT libraries
import { IPmdsCdkFormErrorMessage } from '../../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
////////Component imports
import { PmdsCdkAutocompleteMultidestinataryComponent } from '../pmds-cdk-autocomplete-multidestinatary.component';
import { IPmdsCdkAutocompleteMultidestinataryItem } from '../models/pmds-cdk-autocomplete-multidestinatary-item.model';
import { IPmdsCdkAutocompleteMultidestinataryStates } from '../models/pmds-cdk-autocomplete-multidestinatary-states.model';
import { IPmdsCdkAutocompleteMultidestinataryConfig } from '../models/pmds-cdk-autocomplete-multidestinatary-config.model';

const RESULTS = new Array(25).fill(0).map((_, index) => ({
	id: index.toString(),
	label: `example${index}@example.com`,
}));

@Component({
	selector: 'autocomplete-multidestinatary-wrapper',
	standalone: true,
	imports: [
		PmdsCdkAutocompleteMultidestinataryComponent,
		NgIf,
		NgClass,
		FormsModule,
		ReactiveFormsModule,
	],
	template: `
		@if (!form) {
			<section class="w-full" [ngClass]="{'h-[500px]': !skeleton}">
				<pmds-cdk-autocomplete-multidestinatary
					[config]="config"
					[dataQA]="dataQA"
					[isDisabled]="isDisabled"
					[results]="results"
					[states]="states"
					[skeleton]="skeleton"
					[suggestionsLabel]="suggestionsLabel"
					(byTyping)="byTyping($event)"
					(selectValue)="selectValue($event)"
				/>
			</section>
		} @else {
			<section class="w-full h-[500px]" [formGroup]="form">
				<pmds-cdk-autocomplete-multidestinatary
					[config]="config"
					[dataQA]="dataQA"
					[formControlName]="nameControl"
					[isDisabled]="isDisabled"
					[results]="results"
					[states]="states"
					[skeleton]="skeleton"
					[literalsErrorFn]="literalsErrorFn"
					[suggestionsLabel]="suggestionsLabel"
					(byTyping)="byTyping($event)"
					(selectValue)="selectValue($event)"
				/>
			</section>
		}
	`,
})
export class AutocompleteMultidestinataryWrapperComponent {
	@Input() config!: IPmdsCdkAutocompleteMultidestinataryConfig;
	@Input() dataQA!: string;
	@Input() nameControl!: string;
	@Input() form!: FormGroup;
	@Input() isDisabled!: boolean;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() results!: IPmdsCdkAutocompleteMultidestinataryItem[];
	@Input() skeleton = false;
	@Input() states!: IPmdsCdkAutocompleteMultidestinataryStates;
	@Input() suggestionsLabel!: string;

	byTyping(query: string) {
		if (query) {
			this.results = [];
			this.suggestionsLabel = `Suggestions for “${query}”`;
			this.states = {
				isLoading: true,
			};
			timer(2000).subscribe((_) => {
				this.results = RESULTS.filter((res) =>
					res.label
						.toLocaleLowerCase()
						.includes(query.toLocaleLowerCase())
				);
				this.states = {
					isLoading: false,
					isNoResults: !this.results.length,
				};
				this.suggestionsLabel = `Suggestions for “${query}” (${this.results.length} results)`;
			});
		}
	}

	selectValue(data: IPmdsCdkAutocompleteMultidestinataryItem) {
		alert(data.label);
	}
}
