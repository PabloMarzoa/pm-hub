////////Angular imports
import { Component, EventEmitter, Input, OnInit, Output, forwardRef, inject, } from '@angular/core';
import { NgClass } from '@angular/common';
import {
	AbstractControl, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, } from '@angular/forms';
////////Third party libraries
import { Subject, takeUntil, tap } from 'rxjs';
////////PPMDS libraries
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message/pmds-cdk-form-error-message.component';
////////Component imports
import { IPmdsCdkRadioButtons } from './models/pmds-cdk-radio-buttons.model';
import { PmdsCdkRadioButtonsSkeletonComponent } from './components/pmds-cdk-radio-buttons-skeleton/pmds-cdk-radio-buttons-skeleton.component';

@Component({
	selector: 'pmds-cdk-radio-buttons',
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkFormErrorMessageComponent,
		PmdsCdkRadioButtonsSkeletonComponent,
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkRadioButtonsComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-radio-buttons.component.html',
})
export class PmdsCdkRadioButtonsComponent implements OnInit {
	@Input() dataQA!: string;
	@Input() forceVertical: boolean = false;
	@Input() formControlName!: string;
	@Input() groupLabel = '';
	@Input() hideLabel!: boolean;
	@Input() isDisabled!: boolean;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() optional: boolean = false;
	@Input() options!: IPmdsCdkRadioButtons[];
	@Input() skeleton: boolean = false;

	@Output() checkOption: EventEmitter<string | number> = new EventEmitter<
		string | number
	>();

	formControl!: AbstractControl;
	showError = false;
	componentSelector = 'pmds-cdk-radio-buttons-';

	private formGroupDirective = inject(FormGroupDirective);
	private destroy$: Subject<boolean> = new Subject<boolean>();

	onChange = (_: unknown) => {};
	onTouch = () => {};

	ngOnInit() {
		this.formControl = this.formGroupDirective?.form?.get(
			this.formControlName
		) as FormControl;
		this.formControl?.valueChanges
			.pipe(
				tap(() => {
					if (this.formControl?.valid) {
						this.showError = false;
					} else {
						this.showError = true;
					}
				}),
				takeUntil(this.destroy$)
			)
			.subscribe();
	}

	onChecked(value: string | number, index: number) {
		if (!this.isDisabled) {
			const selectedOption = this.options[index];
			if (selectedOption.checked && this.optional) {
				selectedOption.checked = false;
				this.onChange(undefined);
				this.checkOption.emit(undefined);
			} else {
				this.options
					.filter((option) => option.checked)
					.map((option) => {
						option.checked = false;
					});
				this.onChange(value);
				this.checkOption.emit(value);
				selectedOption.checked = true;
			}
			this.options[index] = selectedOption;
			this.onTouch();
		}
	}

	writeValue(value: string | number) {
		this.options = this.options.map((option: IPmdsCdkRadioButtons) => {
			option.checked = option.value === value;
			return option;
		});
	}

	registerOnChange(fn: (_: unknown) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => unknown) {
		this.onTouch = fn;
	}

	setDisabledState(isDisabled: boolean) {
		this.isDisabled = this.isDisabled ?? isDisabled;
	}
}
