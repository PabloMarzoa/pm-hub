/* eslint-disable @typescript-eslint/no-empty-function */
////////Angular imports
import { Component, Input, OnInit, forwardRef, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { AbstractControl, FormGroupDirective, FormControl, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
////////Third party libraries
import {tap} from 'rxjs';
////////PNXT libraries
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message/pmds-cdk-form-error-message.component';
import { PmdsDirectiveTooltip } from '@pmhub/pmds-common';
import { PmdsDirectiveTitle } from '@pmhub/pmds-common';
import { PmdsCdkTextareaSkeletonComponent } from './components/components/pmds-cdk-textarea-skeleton/pmds-cdk-textarea-skeleton.component';

@Component({
	selector: 'pmds-cdk-textarea',
	standalone: true,
	imports: [
			NgClass,
			PmdsDirectiveTooltip,
			FormsModule,
			PmdsCdkFormErrorMessageComponent,
			PmdsDirectiveTitle,
			PmdsCdkTextareaSkeletonComponent
		],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkTextareaComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-textarea.component.html',
})
export class PmdsCdkTextareaComponent implements OnInit {

	@Input() dataQA!: string;
	@Input() charactersLeftText!: string;
	@Input() formControlName!: string;
	@Input() isDisabled!: boolean;
	@Input() maxlength!: number;
	@Input() placeholder!: string;
	@Input() skeleton!: boolean;
	@Input() helperText!: string;
	@Input() tooltip!: string;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;

	formControl!: AbstractControl;
	isFocus = false;
	showError = false;
	value!: string;

	componentSelector = 'pmds-cdk-textarea-';

	private formGroupDirective = inject(FormGroupDirective);

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
						!this.isFocus && (this.showError = true);
					}
				})
			)
			.subscribe();
		this.value = this.formControl?.value || '';
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onChange(_: unknown) {}

	onTouch() {}

	onFocusOut() {
		this.formControl?.markAsTouched();
		this.showError = this.formControl?.invalid;
	}

	onInput(event?: Event) {
		this.writeValue(event ? (event.target as HTMLInputElement)?.value : '');
		this.onTouch();
		this.onChange(this.value);
	}

	checkOmitClick(event: Event) {
		event.preventDefault();
	}

	clickOnClear(event?: Event) {
		this.writeValue(event ? (event.target as HTMLInputElement)?.value : '');
		this.onTouch();
		this.onChange(this.value);
	}

	writeValue(value: string) {
		this.value = value ? value || '' : '';
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = this.isDisabled ? true : isDisabled;
	}

	registerOnChange(fn: (_: unknown) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => unknown) {
		this.onTouch = fn;
	}
}
