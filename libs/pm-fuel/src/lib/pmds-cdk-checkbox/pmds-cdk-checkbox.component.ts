////////Angular imports
import { NgClass } from '@angular/common';
import { Component, EventEmitter, forwardRef, inject, Input, OnInit, Output } from '@angular/core';
import {
	AbstractControl, ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR
} from '@angular/forms';
////////PMDS libraries
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message/pmds-cdk-form-error-message.component';
////////PNXT libraries
import { tap } from 'rxjs';
import {
	PmdsCdkCheckboxSkeletonComponent
} from './components/pmds-cdk-checkbox-skeleton/pmds-cdk-checkbox-skeleton.component';

@Component({
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkFormErrorMessageComponent,
		PmdsCdkCheckboxSkeletonComponent
	],
	selector: 'pmds-cdk-checkbox',
	templateUrl: './pmds-cdk-checkbox.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkCheckboxComponent),
			multi: true
		},
	]
})
export class PmdsCdkCheckboxComponent implements OnInit, ControlValueAccessor {

	@Input() formControlName!: string;
	@Input() isDisabled!: boolean;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() skeleton!: boolean;
	@Input() dataQA!: string;
	@Input() label!: string;

	@Output() valueChanges: EventEmitter<boolean> = new EventEmitter<boolean>();

	formControl!: AbstractControl;
	showError = false;
	value!: undefined | null | boolean;
	componentSelector = 'pmds-cdk-checkbox-'

	private formGroupDirective = inject(FormGroupDirective);

	ngOnInit() {
		this.formControl = (this.formGroupDirective as any)?.form?.get(
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
			)
			.subscribe();
	}

	onChange = (_: unknown) => {_};

	onTouch = () => undefined;

	toggleValue() {
		this.onTouch();
		if (!this.isDisabled) {
			!this.value ? (this.value = true) : (this.value = false);
			this.onChange(this.value);
			this.valueChanges.emit(this.value);
		}
	}

	writeValue(value: boolean) {
		this.value = value;
	}

	registerOnChange(fn: (_: unknown) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => undefined) {
		this.onTouch = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = this.isDisabled || isDisabled;
	}
}

