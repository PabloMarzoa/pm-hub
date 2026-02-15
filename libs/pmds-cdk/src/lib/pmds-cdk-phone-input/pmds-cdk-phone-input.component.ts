////////Angular imports
import { NgClass } from '@angular/common';
import {
	AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, inject, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, ViewChild, } from '@angular/core';
import {
	AbstractControl, ControlContainer, FormsModule, NG_VALUE_ACCESSOR, } from '@angular/forms';
////////Third party libraries
import { Subject, takeUntil, tap } from 'rxjs';
////////PPMDS libraries
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message/pmds-cdk-form-error-message.component';
import { PmdsCdkCountryLabelComponent } from '../pmds-cdk-country-label/pmds-cdk-country-label.component';
import { PmdsDirectiveTitle } from '@pmhub/pmds-common';
////////Component imports
import { IPmdsCdkPhoneCountryOptionDropdown } from './models/pmds-cdk-phone-country-options.model';
import { IPmdsCdkPhoneInputLiterals } from './models/pmds-cdk-phone-input-literals.model';
import { PmdsCdkOnlyNumberDirective } from './directives/pmds-cdk-only-number.directive';
import { PmdsCdkPhoneInputSkeletonComponent } from './components/pmds-cdk-amount-input-skeleton/pmds-cdk-phone-input-skeleton.component';

@Component({
	selector: 'pmds-cdk-phone-input',
	standalone: true,
	imports: [
		NgClass,
		FormsModule,
		PmdsCdkFormErrorMessageComponent,
		PmdsCdkCountryLabelComponent,
		PmdsDirectiveTitle,
		PmdsCdkOnlyNumberDirective,
		PmdsCdkPhoneInputSkeletonComponent,
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkPhoneInputComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-phone-input.component.html',
})
export class PmdsCdkPhoneInputComponent
	implements OnInit, OnDestroy, AfterViewInit, OnChanges
{
	@ViewChild('optionsContent', { static: false }) optionsContent!: ElementRef;
	@ViewChild('optionsDropdown', { static: false })
	optionsDropdown!: ElementRef;
	@ViewChild('optionsDropdownContainer', { static: false })
	optionsDropdownContainer!: ElementRef;

	@Input() assetsFolder = 'assets';
	@Input() dataQA!: string;
	@Input() formControlName!: string;
	@Input() isDisabled = false;
	@Input() skeleton = false;
	@Input() literals!: IPmdsCdkPhoneInputLiterals;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() options!: IPmdsCdkPhoneCountryOptionDropdown[];
	@Input() initialValue: IPmdsCdkPhoneCountryOptionDropdown | undefined;

	@Output()
	currencySelected: EventEmitter<IPmdsCdkPhoneCountryOptionDropdown> =
		new EventEmitter<IPmdsCdkPhoneCountryOptionDropdown>();

	componentSelector = 'pmds-cdk-phone-input-';
	control!: AbstractControl;
	currentFilter = '';
	enableSearch = true;
	error = false;
	filteredOptions!: IPmdsCdkPhoneCountryOptionDropdown[];
	inputFocused = false;
	omitEvent = false;
	selectedValue: IPmdsCdkPhoneCountryOptionDropdown | null = null;
	showOptions = false;
	searchInputHasFocus = false;
	value = '';
	showDropdownOnTop = false;

	private controlContainer = inject(ControlContainer);
	private destroy$: Subject<boolean> = new Subject<boolean>();
	private renderer = inject(Renderer2);
	private unlistener!: () => void;

	get dropdownNgClass() {
		return {
			'bg-color-surface-disabled border-color-border-disabled text-color-text-disabled pointer-events-none':
				this.isDisabled,
			'bg-color-surface-primary text-color-text-primary border-color-border-default':
				!this.isDisabled,
			'!border-color-border-focus': this.showOptions,
			'border-r-transparent': !this.showOptions,
		};
	}

	get inputNgClass() {
		return {
			'border-color-border-default text-color-text-primary': !this.error,
			'border-color-border-error': this.error,
			'border-color-border-disabled bg-color-surface-disabled text-color-text-disabled':
				this.isDisabled,
			'pointer-events-none': this.isDisabled,
		};
	}

	ngOnInit() {
		this.filteredOptions = this.options;

		if (this.initialValue) {
			this.selectedValue = this.initialValue;
		} else {
			if (this.options.length) this.selectedValue = this.options[0];
		}
		this.currencySelected.emit(
			this.selectedValue as IPmdsCdkPhoneCountryOptionDropdown
		);

		this.enableSearch = this.filteredOptions.length > 10;

		if (this.controlContainer && this.formControlName) {
			this.control = this.controlContainer.control?.get(
				this.formControlName
			) as AbstractControl;
			if (this.control.value) {
				this.value = this.control.value;
			}
			this.control.valueChanges
				.pipe(
					tap(() => {
						if (this.control?.valid) {
							this.error = false;
						} else {
							!this.inputFocused && (this.error = true);
						}
					}),
					takeUntil(this.destroy$)
				)
				.subscribe();
		}
	}

	ngOnChanges() {
		if (this.options.length) {
			this.options = this.sortOptions(this.options);
			this.filteredOptions = this.options;
		}
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
					e.target !== this.optionsContent.nativeElement &&
					!this.omitEvent
				) {
					this.cancel();
				}
				this.omitEvent = false;
			}
		);
	}

	searchInputFocusChange(focus: boolean) {
		this.searchInputHasFocus = focus;
	}

	getFilteredOptions() {
		if (
			!this.currentFilter ||
			this.getTrimmedAndLowerCaseString(this.currentFilter).length < 1
		) {
			this.filteredOptions = this.options;
		}
		this.filteredOptions = [...this.options].filter(
			(option) =>
				this.getTrimmedAndLowerCaseString(option.label).includes(
					this.getTrimmedAndLowerCaseString(this.currentFilter)
				) ||
				this.getTrimmedAndLowerCaseString(option.country).includes(
					this.getTrimmedAndLowerCaseString(this.currentFilter)
				)
		);
	}

	selectOption(option: IPmdsCdkPhoneCountryOptionDropdown, event?: Event) {
		event && event.stopPropagation();

		this.selectedValue = option;
		this.toggleShowOption(true);
		this.currencySelected.emit(this.selectedValue);
	}

	updateClearButtonOnFocus(focusedOnInput: boolean) {
		this.inputFocused = focusedOnInput;
	}

	sortOptions(options: IPmdsCdkPhoneCountryOptionDropdown[]) {
		const arraySorted: IPmdsCdkPhoneCountryOptionDropdown[] = [];
		options?.forEach((item: IPmdsCdkPhoneCountryOptionDropdown) => {
			arraySorted.push(item);
		});
		arraySorted.sort(
			(
				a: IPmdsCdkPhoneCountryOptionDropdown,
				b: IPmdsCdkPhoneCountryOptionDropdown
			) => {
				const nameA = a.country.toUpperCase();
				const nameB = b.country.toUpperCase();
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			}
		);
		return arraySorted;
	}

	toggleShowOption(forceClose = false, omitEvent = false) {
		this.onTouch();
		this.omitEvent = omitEvent;
		this.showOptions = forceClose ? false : !this.showOptions;
		if (!this.showOptions) {
			this.currentFilter = '';
			this.getFilteredOptions();
		} else {
			setTimeout(() => {
				const top = this.optionsDropdown.nativeElement.querySelector(
					'.bg-color-surface-selected'
				)?.offsetTop;
				this.optionsDropdown.nativeElement.scrollTo(
					0,
					top ? top - (this.enableSearch ? 84 : 4) : 0
				);
				const distanceToBottom =
					window.innerHeight -
					this.optionsDropdown?.nativeElement.getBoundingClientRect()
						.bottom;
				this.showDropdownOnTop = distanceToBottom < 310;
				this.scrollOption();
			});
		}
	}

	preventClose(evt: Event) {
		evt && evt.stopPropagation();
	}

	onInput(event?: Event) {
		this.value = event ? (event.target as HTMLInputElement).value : '';
		this.onTouch();
		this.onChange(this.value);
	}

	onPaste(event: Event) {
		event.preventDefault();
	}

	checkErrors() {
		this.error = this.control?.invalid;
		this.error && this.control?.markAsTouched();
	}

	cancel() {
		this.toggleShowOption(true);
	}

	writeValue(value: string) {
		this.value = value ? value || '' : '';
	}

	registerOnChange(fn: (_: unknown) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => undefined) {
		this.onTouch = fn;
	}

	onChange = (_: unknown) => {
		_;
	};

	onTouch = () => undefined;

	private getTrimmedAndLowerCaseString(str: string): string {
		return str ? str.replace(/\s/g, '').toLowerCase() : '';
	}

	private scrollOption() {
		const top = this.optionsDropdownContainer.nativeElement.querySelector(
			'.bg-color-surface-selected'
		)?.offsetTop;
		this.optionsDropdownContainer.nativeElement.scrollTo(
			0,
			top ? top - (this.enableSearch ? 84 : 4) : 0
		);
	}
}
