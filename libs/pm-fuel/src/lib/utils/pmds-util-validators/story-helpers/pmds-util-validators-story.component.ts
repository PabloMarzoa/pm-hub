////////Angular imports
import { Component, inject, Input, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
} from '@angular/forms';
import { NgClass, NgFor } from '@angular/common';
////////Component imports
import { PmdsUtilValidators } from '../pmds-util-validators.util';
import { PmdsCdkTimeInputComponent } from '../../../../index';
import { PmdsCdkDropdownComponent } from '../../../../index';

@Component({
	selector: 'pmds-util-validators-story',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		FormsModule,
		NgClass,
		NgFor,
		PmdsCdkTimeInputComponent,
		PmdsCdkDropdownComponent,
	],
	template: `
		<form [formGroup]="form" class="flex flex-col">
			<span>PmdsUtilValidators.minTime</span>
			<span class="text-slate-400"
				>(Validates that the time exceed the one indicated:
				{{ this.minTime }})</span
			>
			<pmds-cdk-time-input
				formControlName="timeMin"
				[placeholder]="'placeholder'"
				[options]="timeOptions"
			></pmds-cdk-time-input>
			<br />
			<span>PmdsUtilValidators.maxTime</span>
			<span class="text-slate-400"
				>(Validates that the time does not exceed the one indicated:
				{{ this.maxTime }})</span
			>
			<pmds-cdk-time-input
				formControlName="timeMax"
				[placeholder]="'placeholder'"
				[options]="timeOptions"
			></pmds-cdk-time-input>
			<br />
			<span>PmdsUtilValidators.minLengthArray</span>
			<span class="text-slate-400"
				>(Validates that is selected, at least, the indicated number of
				items: {{ this.minLengthArray }})</span
			>
			<pmds-cdk-dropdown
				formControlName="minLengthArray"
				[placeholder]="'placeholder'"
				[options]="options"
				[multi]="true"
				[literals]="dropdownLiterals"
			></pmds-cdk-dropdown>
			<br />
			@for (control of controls; track control) {			  
				<span>{{ control.name }}</span>
				<span class="text-slate-400">({{ control.info }})</span>
				<input
					class="border rounded p-2 outline-none"
					[type]="control.type"
					[formControlName]="control.formControlName"
					[ngClass]="{
						'border-red-500': form.get(control.formControlName)
							?.invalid
					}"
				/>
				<br />
			}
			
		</form>
	`,
})
export class PmdsUtilValidatorsStoryComponent implements OnInit {
	private formBuilder = inject(FormBuilder);

	@Input() min!: number;
	@Input() max!: number;
	@Input() locale!: string;
	@Input() minTime = '01:30';
	@Input() maxTime = '12:30';
	@Input() minLengthArray = 2;

	form!: FormGroup;
	controls: {
		type: string;
		formControlName: string;
		name: string;
		info: string;
	}[] = [];
	timeOptions = [
		{
			label: '07:00',
			value: '07:00',
		},
		{
			label: '08:00',
			value: '08:00',
		},
		{
			label: '15:00',
			value: '15:00',
		},
		{
			label: '16:00',
			value: '16:00',
		},
		{
			label: '23:59',
			value: '23:59',
		},
	];
	options = [
		{
			label: '1',
			value: '1',
		},
		{
			label: '2',
			value: '2',
		},
		{
			label: '3',
			value: '3',
		},
		{
			label: '4',
			value: '4',
		},
	];
	dropdownLiterals = {
		accept: 'accept',
	};
	amountInputDoubleLiterals = {
		titleFrom: 'Title',
		titleTo: 'Title',
		indicativeRate: 'Indicative rate 00:00',
		aliasFrom: 'From [Source Account Alias]',
		aliasTo: 'To [Source Account Alias]',
		updatedAtFrom: 'Updated at 00/00/00 00:00',
		updatedAtTo: 'Updated at 00/00/00 00:00',
	};

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			min: ['', PmdsUtilValidators.min(this.min, this.locale)],
			max: ['', PmdsUtilValidators.max(this.max, this.locale)],
			noWhitespace: ['', PmdsUtilValidators.noWhitespace],
			nameRegex: ['', PmdsUtilValidators.nameRegex],
			noSpaces: ['', PmdsUtilValidators.noSpaces],
			emailRegex: ['', PmdsUtilValidators.emailRegex],
			studentId: ['', PmdsUtilValidators.studentId],
			minLengthArray: [
				'',
				PmdsUtilValidators.minLengthArray(this.minLengthArray),
			],
			timeMin: ['', PmdsUtilValidators.minTime(this.minTime)],
			timeMax: ['', PmdsUtilValidators.maxTime(this.maxTime)],
			maxAmountFrom: ['', PmdsUtilValidators.maxAmount(1400000, ',')],
			maxAmountTo: ['', PmdsUtilValidators.maxAmount(1400000, ',')],
		});
		this.controls = [
			{
				type: 'number',
				formControlName: 'min',
				name: 'PmdsUtilValidators.min',
				info: `Validates that the number exceed the one indicated(${this.min}), if locale is diferent that 'es-ES' need add as second param(${this.locale})`,
			},
			{
				type: 'number',
				formControlName: 'max',
				name: 'PmdsUtilValidators.max',
				info: `validates that the number does not exceed the one indicated(${this.max}), if locale is diferent that 'es-ES' need add as second param(${this.locale})`,
			},
			{
				type: 'text',
				formControlName: 'noWhitespace',
				name: 'PmdsUtilValidators.noWhitespace',
				info: 'validates that the value is not just spaces',
			},
			{
				type: 'text',
				formControlName: 'nameRegex',
				name: 'PmdsUtilValidators.nameRegex',
				info: 'validates that there are no strange characters and only capital words',
			},
			{
				type: 'text',
				formControlName: 'noSpaces',
				name: 'PmdsUtilValidators.noSpaces',
				info: 'validates that that there are no spaces',
			},
			{
				type: 'text',
				formControlName: 'emailRegex',
				name: 'PmdsUtilValidators.emailRegex',
				info: 'validates email format',
			},
			{
				type: 'text',
				formControlName: 'studentId',
				name: 'PmdsUtilValidators.studentId',
				info: 'validates student ID',
			},
		];
	}
}
