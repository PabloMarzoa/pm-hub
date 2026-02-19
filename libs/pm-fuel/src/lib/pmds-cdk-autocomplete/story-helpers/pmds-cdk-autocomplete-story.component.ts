////////Angular imports
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
	FormsModule,
	ReactiveFormsModule,
	FormBuilder,
	Validators,
} from '@angular/forms';
////////Third party libraries
import { timer } from 'rxjs';
////////Component imports
import {
	IPmdsCdkAutocompleteConfig,
	IPmdsCdkAutocompleteStates,
} from '../models/pmds-cdk-autocomplete.model';
import { PmdsCdkAutocompleteComponent } from '../pmds-cdk-autocomplete.component';
import { IData } from './pmds-cdk-autocomplete-component-models-story';
import { data } from './pmds-cdk-autocomplete-component-const-story';

@Component({
	selector: 'pmds-cdk-autocomplete-story',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		PmdsCdkAutocompleteComponent,
	],
	template: `
		<section [formGroup]="form" [ngClass]="{'h-[420px]': !skeleton}">
			<pmds-cdk-autocomplete
				formControlName="search"
				[config]="config"
				[data]="data"
				[dataQA]="dataQA"
				[suggestions]="suggestions"
				[states]="states"
				[skeleton]="skeleton"
				[isDisabled]="isDisabled"
				[labelErrorNotSelected]="labelErrorNotSelected"
				[labelError]="labelError"
				[literalsErrorFn]="literalsErrorFn"
				(keyEnter)="search($event)"
				(scrollEnd)="search($event)"
			/>
		</section>
	`,
})
export class AutocompleteStoryComponent {
	@Input() config!: IPmdsCdkAutocompleteConfig;
	@Input() data!: IData[];
	@Input() dataQA!: string;
	@Input() isDisabled!: boolean;
	@Input() literalsErrorFn!: (
		name: string,
		error: string,
		value?: any
	) => string;
	@Input() states: IPmdsCdkAutocompleteStates = {
		isLoading: false,
		isError: false,
	};
	@Input() suggestions!: string;
	@Input() labelError!: string;
	@Input() labelErrorNotSelected!: string;
	@Input() error = false;
	@Input() skeleton = false;
	@Input() empty = false;

	form = new FormBuilder().group({
		search: ['', Validators.required],
	});

	search(event: { search: string }) {
		event?.search
			? this.getResults(event, this.error, this.empty)
			: this.resetResults();
	}

	private getResults(event: { search: string }, error: boolean, empty: boolean) {
		const button = this.config.table.button
			? this.config.table.button
			: { show: false };
		this.states = { isLoading: true, isError: false };
		timer(3000).subscribe(() => {
			(error || empty) ? [] : (this.data = [...data]);
			const suggestion = `Suggestions for <span class="font-SantanderMicroTextBold">"${
				event?.search
			}"</span> (${this.data?.length || 0} results)`;
			this.suggestions = new String(suggestion) as string;
			this.states = { isLoading: false, isError: error };
			button.show = error && !this.data?.length;
		});
	}

	private resetResults() {
		this.data = [];
		this.suggestions = '';
	}
}
