////////Angular imports
import {AbstractControl, FormControl, FormsModule, ValidationErrors} from "@angular/forms";
import {AsyncPipe, NgIf} from '@angular/common';
import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
////////Third party imports
import {BehaviorSubject, Subject, takeUntil, tap} from 'rxjs';
////////PMDS imports
import {PmdsDirectiveTitle} from "@pmhub/pmds-common";
////////Component imports
import {IPmdsCdkFormErrorMessage} from './models/pmds-cdk-form-error-message.model';

@Component({
	selector: 'pmds-cdk-form-error-message',
	standalone: true,
	imports: [
		AsyncPipe,
		FormsModule,
		PmdsDirectiveTitle
	],
	templateUrl: './pmds-cdk-form-error-message.component.html'
})
export class PmdsCdkFormErrorMessageComponent implements OnInit, OnDestroy, OnChanges {

	@Input() control!: FormControl | AbstractControl;
	@Input() controlName!: string;
	@Input() label!: string;
	@Input() dataQA!: string;
	@Input() hideError = false;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;

	errorLiterals$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
	componentSelector = 'pmds-cdk-form-error-message-';

	private destroy$: Subject<boolean> = new Subject<boolean>();

	get formError(): boolean {
		return this.control?.invalid
			&& this.control?.touched
	}

	ngOnInit() {
		this.control?.valueChanges
			.pipe(
				tap(() => this.errorLiterals$.next([])),
				takeUntil(this.destroy$)
			)
			.subscribe(() => {
				this.evaluateErrors();
			});
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}

	ngOnChanges(): void {
		this.evaluateErrors();
	}

	private evaluateErrors() {
		const controlErrors: ValidationErrors = this.control?.errors as ValidationErrors;
		if (controlErrors != null) {
			this.errorLiterals$.next([
				...Object.keys(controlErrors).map((keyError: string, index: number) =>
					this.literalsErrorFn && this.literalsErrorFn(this.controlName, keyError, controlErrors[keyError], index === 0 ? this.label : this.lowerCaseFirstLetter(this.label))
				)
			]);
		}
	}

	private lowerCaseFirstLetter(label: string) {
		return label ? label.charAt(0).toLowerCase() + label.slice(1) : '';
	}

}
