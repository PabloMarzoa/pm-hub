////////Angular imports
import { CommonModule} from '@angular/common';
import {
	Component, ElementRef, EventEmitter, forwardRef, inject, Input, OnDestroy, OnInit, Output, ViewChild, } from '@angular/core';
import {
	AbstractControl, ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, } from '@angular/forms';
////////Third party libraries
import {Subject, takeUntil, tap, timer} from 'rxjs';
////////PPMDS libraries
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message/pmds-cdk-form-error-message.component';
import {PmdsDirectiveTooltip} from '@pmhub/pmds-common';
import {PmdsDirectiveNoLeadingSpacesInput} from '@pmhub/pmds-common';
import { PmdsCdkTagCategoryComponent } from '../pmds-cdk-tag-category/pmds-cdk-tag-category.component';
////////Component imports
import {IPmdsCdkTextInputTagCategoryData} from './models/pmds-cdk-text-input-tag-category-data.model';
import {IPmdsCdkTextInputType} from './models/pmds-cdk-text-input-type.model';
import {PmdsDirectiveTitle} from '@pmhub/pmds-common';
import {
	PmdsCdkTextInputSkeletonComponent
} from './components/pmds-cdk-text-input-skeleton/pmds-cdk-text-input-skeleton.component';
import { IPmdsCdkTextInputMode } from './models/pmds-cdk-text-input-mode.model';


@Component({
	selector: 'pmds-cdk-text-input',
	standalone: true,
	imports: [
		CommonModule,
		PmdsCdkFormErrorMessageComponent,
		PmdsDirectiveTooltip,
		PmdsDirectiveNoLeadingSpacesInput,
		PmdsCdkTagCategoryComponent,
		PmdsDirectiveTitle,
		PmdsCdkTextInputSkeletonComponent
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkTextInputComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-text-input.component.html',
})
export class PmdsCdkTextInputComponent
	implements OnInit, OnDestroy, ControlValueAccessor {
	@ViewChild('input', {static: false}) input!: ElementRef;

	@Input() charactersLeftText!: string;
	@Input() dataQA!: string;
	@Input() decimalCharacter: '.' | ',' = ',';
	@Input() formControlName!: string;
	@Input() helperText!: string | undefined;
	@Input() icon!: string;
	@Input() iconPosition: 'left' | 'right' = 'right';
	@Input() isDisabled!: boolean;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() max!: number;
	@Input() maxDecLength = 2;
	@Input() maxIntLength = 7;
	@Input() maxlength!: number;
	@Input() min!: number;
	@Input() minlength!: number;
	@Input() placeholder!: string;
	@Input() showClear: boolean = true;
	@Input() styles!: string;
	@Input() skeleton!: boolean;
	@Input() suffix!: string;
	@Input() tagCategoryData!: IPmdsCdkTextInputTagCategoryData;
	@Input() tooltip!: string;
	@Input() tooltipTitle!: string;
	@Input() type: IPmdsCdkTextInputType = 'text';
	@Input() inputmode: IPmdsCdkTextInputMode = 'text';

	@Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
	@Output() inputFocus: EventEmitter<void> = new EventEmitter<void>();
	@Output() inputFocusOut: EventEmitter<void> = new EventEmitter<void>();

	componentSelector = 'pmds-cdk-text-input-'
	formControl!: AbstractControl;
	inputFocused = false;
	omitClearClick!: boolean;
	showError = false;
	showValueFormatted!: boolean;
	value!: string;
	valueFormatted!: string;

	get inputNgClass() {
		return {
			'border-color-border-default text-color-text-primary focus:border-color-border-focus': !this.showError && !this.isDisabled,
			'border-color-border-error text-color-text-primary focus:border-color-border-error': this.showError && !this.isDisabled,
			'!border-color-border-disabled !text-color-text-disabled !bg-color-surface-disabled pointer-event pointer-events-none': this.isDisabled,
			'text-transparent': this.showValueFormatted,
			'pr-10': this.inputFocused,
			'pr-4': !this.inputFocused,
			'!pl-12': this.icon && this.iconPosition === 'left',
			'!pr-[6.25rem]': (((!this.icon || (this.icon && this.iconPosition === 'left')) && this.tooltip) || this.tagCategoryData) && this.inputFocused,
			'!pr-[4.75rem]': (!this.icon || (this.icon && this.iconPosition === 'left')) && this.tooltip && !this.inputFocused,
			'!pr-[5rem]': this.tagCategoryData && !this.inputFocused,
			'!pr-[5.25rem]': this.suffix && this.inputFocused,
			'!pr-14': this.suffix && !this.inputFocused,
			'!pr-20': this.icon && this.iconPosition !== 'left' && !this.tooltip && this.inputFocused,
			'!pr-[3.25rem]': this.icon && this.iconPosition !== 'left' && !this.tooltip && !this.inputFocused,
			'!pr-28': this.icon && this.iconPosition !== 'left' && this.tooltip,
			'pt-7': this.value || this.inputFocused,
		}
	}

	get placeholderNgClass() {
		return {
			'text-color-text-tertiary': !this.isDisabled,
			'text-color-text-disabled pointer-event pointer-events-none': this.isDisabled,
			'left-3': this.iconPosition === 'right' || !this.iconPosition || !this.icon || (this.iconPosition === 'left' && !this.icon),
			'left-0': this.iconPosition === 'left' && this.icon,
			'pr-10': this.inputFocused,
			'pr-6': !this.inputFocused,
			'!pl-12': this.icon && this.iconPosition === 'left',
			'!pr-[6.25rem]': (((!this.icon || (this.icon && this.iconPosition === 'left')) && this.tooltip) || this.tagCategoryData) && this.inputFocused,
			'!pr-[5rem]': (!this.icon || (this.icon && this.iconPosition === 'left')) && this.tooltip && !this.inputFocused,
			'!pr-[5.50rem]': this.tagCategoryData && !this.inputFocused,
			'!pr-[5.5rem]': this.suffix && this.inputFocused,
			'!pr-[4.5rem]': this.suffix && !this.inputFocused,
			'!pr-20': this.icon && this.iconPosition !== 'left' && !this.tooltip && this.inputFocused,
			'!pr-[3.50rem]': this.icon && this.iconPosition !== 'left' && !this.tooltip && !this.inputFocused,
			'!pr-28': this.icon && this.iconPosition !== 'left' && this.tooltip,

		}
	}

	get clearButtonNgClass() {
		return {
			'right-[4rem]': ((!this.icon || this.icon && this.iconPosition === 'left' && this.tooltip) && this.tooltip),
			'!right-20': this.tagCategoryData,
			'!right-16': this.suffix,
			'right-5': !this.suffix && (!this.icon || this.iconPosition === 'left') && !this.tooltip,
			'right-[3.5rem]': this.icon && this.iconPosition !== 'left' && !this.tooltip,
			'right-28': this.icon && this.iconPosition !== 'left' && this.tooltip,
			'right-1': this.icon && this.iconPosition === 'left',
			'transition-all opacity-100': this.value && !this.isDisabled && this.inputFocused,
			'opacity-0': !(this.value && !this.isDisabled && this.inputFocused),
			'cursor-text': !(this.value && !this.isDisabled && this.inputFocused),
		}
	}

	get iconNgClass() {
		return {
			'pointer-events-none': this.isDisabled,
			'right-[4.75rem]': this.iconPosition !== 'left' && !!this.tooltip,
			'right-5': this.iconPosition !== 'left' && !this.tooltip,
			'left-3': this.iconPosition === 'left'
		};
	}

	private formGroupDirective = inject(FormGroupDirective);
	private destroy$: Subject<boolean> = new Subject<boolean>();

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
						!this.inputFocused && (this.showError = true);
					}
					this.type === 'number' && this.showFormatValue();
				}),
				takeUntil(this.destroy$)
			)
			.subscribe();
		this.value = this.formControl?.value || '';
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}

	onChange(_: unknown) {
	}

	onTouch() {
	}

	onFocusOut() {
		this.formControl?.markAsTouched();
		this.showError = this.formControl?.invalid;
		if (this.type === 'number') {
			timer(100).subscribe(() => this.showFormatValue());
		}
		this.inputFocusOut.emit();
	}

	onFocus() {
		this.showValueFormatted = false;
		this.updateClearButtonOnFocus(true)
		this.inputFocus.emit();
	}

	updateClearButtonOnFocus(focusedOnInput: boolean) {
		this.inputFocused = focusedOnInput;
		timer(500).subscribe(() => this.omitClearClick = !focusedOnInput);
	}

	checkOmitClick(event: Event) {
		event.preventDefault();
		if (!this.omitClearClick) {
			timer(550).subscribe(() => this.omitClearClick = false);
		}
	}

	clearClick() {
		if (this.inputFocused) {
			!this.omitClearClick && this.onInput();
		}
		this.input.nativeElement.focus();
	}

	onInput(event?: Event) {
		this.value = event ? (event.target as HTMLInputElement)?.value : '';
		this.onTouch();
		this.onChange(this.value);
		this.inputChange.emit(this.value);
		this.showValueFormatted = false;
	}

	writeValue(value: string) {
		this.value = value ? value || '' : '';
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = this.isDisabled ?? isDisabled;
	}

	registerOnChange(fn: (_: unknown) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => unknown) {
		this.onTouch = fn;
	}

	maskInput(event: KeyboardEvent) {
		if (this.type === 'number') {
			const value = (event.target as HTMLInputElement).value;
			const position =
				(event.target as HTMLInputElement).selectionStart || 0;
			const regex = new RegExp(
				`^-?\\d${
					this.maxIntLength ? '{0,' + this.maxIntLength + '}' : '*'
				}$|^-?\\d${
					this.maxIntLength ? '{1,' + this.maxIntLength + '}' : '*'
				}\\${this.decimalCharacter}\\d{0,${this.maxDecLength}}$`,
				'g'
			);
			const current = value;
			const next: string = [
				current.slice(0, position),
				event.key === this.decimalCharacter
					? this.decimalCharacter
					: event.key,
				current.slice(position),
			].join('');

			if (next && !String(next).match(regex)) {
				event.preventDefault();
			}
		}
	}

	private showFormatValue() {
		this.setValueFormatted();
		this.value && (this.showValueFormatted = true);
	}

	private setValueFormatted() {
		let integer = '0';
		let decimals = '0';
		if (this.value.includes(this.decimalCharacter)) {
			integer = this.value
				? this.value
					.substring(0, this.value.indexOf(this.decimalCharacter))
					.replace(
						/\B(?=(\d{3})+(?!\d))/g,
						this.decimalCharacter === '.' ? ',' : '.'
					)
				: '0';
			decimals = this.value.substring(
				this.value.indexOf(this.decimalCharacter) + 1
			);
		} else {
			integer = this.value
				? this.value.replace(
					/\B(?=(\d{3})+(?!\d))/g,
					this.decimalCharacter === '.' ? ',' : '.'
				)
				: '0';
		}
		this.valueFormatted =
			integer +
			this.decimalCharacter +
			decimals +
			'0'.repeat(this.maxDecLength - (decimals?.length || 0));
	}
}
