////////Angular imports
import { AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, inject, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild, } from '@angular/core';
import { NgClass } from '@angular/common';
import {
	AbstractControl, ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, } from '@angular/forms';
////////Third party libraries
import { Subject, takeUntil, tap, timer } from 'rxjs';
////////PPMDS libraries
import { PmdsCdkTextInputComponent } from '../pmds-cdk-text-input/pmds-cdk-text-input.component';
import { IPmdsCdkOptionDropdown } from '../pmds-cdk-dropdown/models/pmds-cdk-option-dropdown.model';
import { PmdsCdkDropdownComponent } from '../pmds-cdk-dropdown/pmds-cdk-dropdown.component';
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message/pmds-cdk-form-error-message.component';
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsDirectiveNoLeadingSpacesInput } from '@pmhub/pmds-common';
import { PmdsCdkTimeInputSkeletonComponent } from './components/pmds-cdk-time-input-skeleton/pmds-cdk-time-input-skeleton.component';

@Component({
	selector: 'pmds-cdk-time-input',
	styleUrls: ['pmds-cdk-time-input.component.scss'],
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkFormErrorMessageComponent,
		PmdsDirectiveNoLeadingSpacesInput,
		PmdsCdkTimeInputSkeletonComponent,
	],
	providers: [
		PmdsCdkTextInputComponent,
		PmdsCdkDropdownComponent,
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkTimeInputComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-time-input.component.html',
})
export class PmdsCdkTimeInputComponent
	implements OnInit, OnDestroy, AfterViewInit, ControlValueAccessor
{
	@ViewChild('input', { static: false }) input!: ElementRef;
	@ViewChild('optionsContent', { static: false }) optionsContent!: ElementRef;
	@ViewChild('dropdownOptions', { static: false })
	dropdownOptions!: ElementRef;

	@Input() assetsFolder = 'assets';
	@Input() helperText!: string | undefined;
	@Input() isDisabled = false;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() placeholder!: string;
	@Input() dataQA!: string;
	@Input() formControlName!: string;
	@Input() options!: IPmdsCdkOptionDropdown[];
	@Input() showClear = true;
	@Input() skeleton!: boolean;
	@Input() showCategory = false;

	@Output() inputChange: EventEmitter<string | null> = new EventEmitter<
		string | null
	>();

	provisionalSelectedValues: IPmdsCdkOptionDropdown[] = [];
	componentSelector = 'pmds-cdk-time-input-';
	optionMinWidth!: string;
	formControl!: AbstractControl;
	omitClearClick!: boolean;
	inputFocused = false;
	showError = false;
	showValueFormatted!: boolean;
	value!: string | null;
	showOptions = false;
	omitEvent = false;

	private unlistener!: () => void;
	private formGroupDirective = inject(FormGroupDirective);
	private destroy$: Subject<boolean> = new Subject<boolean>();
	private renderer = inject(Renderer2);

	get inputType() {
		return (!!this.value && this.value?.length > 0) || this.inputFocused
			? 'time'
			: 'text';
	}

	get inputNgClass() {
		return {
			'border-color-border-default text-color-text-primary focus:border-color-border-focus':
				!this.showError && !this.isDisabled,
			'border-color-border-error text-color-text-primary focus:border-color-border-error':
				this.showError && !this.isDisabled,
			'border-color-border-disabled text-color-text-disabled bg-color-surface-disabled pointer-event pointer-events-none':
				this.isDisabled,
			'text-transparent': this.showValueFormatted,
			'pt-5 !pb-1 !pr-20': this.value || this.inputFocused,
		};
	}

	get clockIconNgClass() {
		return {
			'text-color-icon-error': this.showError && !this.isDisabled,
			'text-color-icon-default': !this.showError && !this.isDisabled,
			'text-color-icon-disabled': !this.showError && this.isDisabled,
		};
	}

	get clearButtonNgClass() {
		return {
			'transition-all opacity-100':
				this.value && !this.isDisabled && this.inputFocused,
			'opacity-0': !(this.value && !this.isDisabled && this.inputFocused),
			'cursor-text': !(
				this.value &&
				!this.isDisabled &&
				this.inputFocused
			),
			'!cursor-pointer': !this.isDisabled,
			'!cursor-default': this.isDisabled,
		};
	}

	ngOnInit() {
		this.showCategory && this.setCategoryShow();
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
				}),
				takeUntil(this.destroy$)
			)
			.subscribe((changes: any) => {
				this.updateShowErrors();
			});
		this.value = this.formControl?.value || '';
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
		!!this.unlistener && this.unlistener();
	}

	ngAfterViewInit() {
		this.unlistener = this.renderer.listen(
			'window',
			'click',
			(e: Event) => {
				if (
					this.showOptions &&
					e.target !== this.optionsContent?.nativeElement &&
					!this.omitEvent
				) {
					this.cancel();
				}
				this.omitEvent = false;
			}
		);
	}

	cancel() {
		this.toggleShowOption(true);
	}

	onChange(_: unknown) {}

	onTouch() {}

	registerOnChange(fn: (_: unknown) => void) {
		this.onChange = fn;
	}

	onPlaceholderClick() {
		this.input.nativeElement.focus();
	}

	checkOmitClick() {
		if (!this.omitClearClick) {
			timer(550).subscribe(() => (this.omitClearClick = false));
		}
	}

	clearClick() {
		this.input.nativeElement.focus();
		!this.omitClearClick && this.onInput();
	}

	updateClearButtonOnFocus(focusedOnInput: boolean) {
		this.inputFocused = focusedOnInput;
		setTimeout(() => {
			this.omitClearClick = !focusedOnInput;
		}, 500);
	}

	onFocusOut() {
		this.formControl?.markAsTouched();
		this.showError = this.formControl?.invalid;
	}

	onInput(event?: Event) {
		this.value = event ? (event.target as HTMLInputElement)?.value : '';
		this.onTouch();
		this.onChange(this.value);
		this.showValueFormatted = false;
	}

	writeValue(value: string) {
		this.value = value ? value || '' : '';
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = this.isDisabled ?? isDisabled;
	}

	registerOnTouched(fn: () => unknown) {
		this.onTouch = fn;
	}

	preventClose(evt: Event) {
		evt && evt.stopPropagation();
	}

	toggleShowOption(forceClose = false, omitEvent = false, $event?: Event) {
		!!$event && $event?.stopPropagation();
		if (!(this.options.length < 2)) {
			this.onTouch();
			this.omitEvent = omitEvent;
			this.showOptions = forceClose ? false : !this.showOptions;
			if (this.showOptions) {
				setTimeout(() => {
					//Needed to render to calculate width after render
					this.optionMinWidth = this.input.nativeElement.offsetWidth;
					this.dropdownOptions.nativeElement.width =
						this.input.nativeElement.offsetWidth;
				});
			} else {
				this.updateShowErrors();
			}
		}
	}

	selectOption(option: IPmdsCdkOptionDropdown, event?: Event) {
		event && event.stopPropagation();
		if (this.value === option.value) {
			this.formControl && this.formControl.reset();
			this.value = null;
		} else {
			this.value = option.value;
		}
		this.onTouch();
		this.onChange(this.value);
		this.inputChange.emit(this.value);
		this.toggleShowOption(true);
	}

	private updateShowErrors() {
		this.showError =
			this.formControl?.invalid &&
			(this.formControl?.dirty || this.formControl?.touched);
	}

	private setCategoryShow() {
		this.options = this.options
			.sort((a, b) =>
				((a.category as string) || '').localeCompare(
					(b.category as string) || ''
				)
			)
			.map((opt: IPmdsCdkOptionDropdown, index: number) => ({
				...opt,
				showCategory:
					index === 0
						? true
						: this.options[index - 1].category !== opt.category,
			}));
	}
}
