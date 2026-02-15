////////Angular imports
import { CommonModule} from '@angular/common';
import {
	AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, inject, Input, OnDestroy, OnInit, Output, Renderer2, Type, ViewChild, } from '@angular/core';
import {AbstractControl, ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, } from '@angular/forms';
////////Third party libraries
import {debounceTime, distinctUntilChanged, Subject, takeUntil, tap, throttleTime, } from 'rxjs';
////////PPMDS libraries
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message/pmds-cdk-form-error-message.component';
////////Component imports
import {
	PmdsCdkAutocompleteDynamicLabelComponent
} from './components/pmds-cdk-autocomplete-dynamic-label/pmds-cdk-autocomplete-dynamic-label.component';
import {
	PmdsCdkAutocompleteTableComponent
} from './components/pmds-cdk-autocomplete-table/pmds-cdk-autocomplete-table.component';
import {
	IPmdsCdkAutocompleteConfig,
	IPmdsCdkAutocompleteStates,
	IPmdsCdkAutocompleteSuggestions,
	PMDS_CDK_AUTOCOMPLETE_DEFAULT_DEBOUNCE_TIME,
	PMDS_CDK_AUTOCOMPLETE_DEFAULT_THROTTLE_TIME,
} from './models/pmds-cdk-autocomplete.model';
import {PmdsDirectiveTitle} from "@pmhub/pmds-common";
import { PmdsCdkAutocompleteSkeletonComponent } from './components/pmds-cdk-autocomplete-skeleton/pmds-cdk-autocomplete-skeleton.component';

@Component({
	selector: 'pmds-cdk-autocomplete',
	standalone: true,
	imports: [
		PmdsCdkAutocompleteDynamicLabelComponent,
		PmdsCdkAutocompleteTableComponent,
		PmdsCdkFormErrorMessageComponent,
		CommonModule,
		PmdsDirectiveTitle,
		PmdsCdkAutocompleteSkeletonComponent
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkAutocompleteComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-autocomplete.component.html',
})
export class PmdsCdkAutocompleteComponent
	implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor
{
	@ViewChild('inputForm', { static: false }) inputForm!: ElementRef;

	private _config: IPmdsCdkAutocompleteConfig = {
		input: { type: 'text' },
		table: {
			rowComponent: {
				component: {} as Type<unknown>,
			},
		},
	};
	@Input()
	get config(): IPmdsCdkAutocompleteConfig {
		return this._config;
	}
	set config(value: IPmdsCdkAutocompleteConfig) {
		if (value) {
			this._config = {
				input: {
					...this._config.input,
					...value.input,
				},
				table: {
					...this.config.table,
					...value.table,
				},
			};
		}
	}
	@Input() data!: unknown[];
	@Input() dataQA!: string;
	@Input() formControlName!: string;
	@Input() isDisabled!: boolean;
    @Input() label!: unknown;
    @Input() labelError = '';
	@Input() labelErrorNotSelected = '';
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() paginationInfo = {
	    total: 0,
	    actualPage: 1,
	    itemsPage: 10
	};
	@Input() propValue = 'id';
	@Input() states!: IPmdsCdkAutocompleteStates;
	@Input() skeleton = false;
	@Input() suggestions = '';

	@Output() byTyping: EventEmitter<IPmdsCdkAutocompleteSuggestions> =
		new EventEmitter<IPmdsCdkAutocompleteSuggestions>();
	@Output() keyEnter: EventEmitter<IPmdsCdkAutocompleteSuggestions> =
		new EventEmitter<IPmdsCdkAutocompleteSuggestions>();
	@Output() focusIn: EventEmitter<undefined> = new EventEmitter<undefined>();
	@Output() focusOut: EventEmitter<string> = new EventEmitter<string>();
	@Output() scrollEnd: EventEmitter<IPmdsCdkAutocompleteSuggestions> =
		new EventEmitter<IPmdsCdkAutocompleteSuggestions>();

	componentSelector = 'pmds-cdk-autocomplete-';
	control!: AbstractControl;
	focusin = false;
	inputFocused = false;
	omitFocusOut = false
	omitClose = false
	showError = false;
	value!: string;
	lastValue!: string;
	valueSelected: any;

	private controlContainer = inject(ControlContainer);
	private debouncerKeyEnter$: Subject<string> = new Subject<string>();
	private debouncerScrollEnd$: Subject<any> = new Subject<any>();
	private debouncerTyping$: Subject<string> = new Subject<string>();
	private destroy$: Subject<boolean> = new Subject<boolean>();
	private renderer = inject(Renderer2);
	private unlistener!: () => void;

	onChange = (_: unknown) => {
		_;
	};
	onTouched = () => undefined;

	get formError(): boolean {
		return (
			this.control?.invalid &&
			this.control?.touched
		);
	}

	ngOnInit() {
		if (this.controlContainer && this.formControlName) {
			this.control = this.controlContainer.control?.get(
				this.formControlName
			) as AbstractControl;

			this.value = this.control?.value;
			this.valueSelected = this.control?.value;

			this.control?.valueChanges
				.pipe(
					tap(() => {
						if (this.control?.valid) {
							this.showError = false;
							this.valueSelected = this.control?.value;
						} else {
							this.showError = (!this.inputFocused && this.control?.touched);
						}
					}),
					takeUntil(this.destroy$)
				)
				.subscribe();
		}

		this.debouncerKeyEnter$
			.pipe(throttleTime(PMDS_CDK_AUTOCOMPLETE_DEFAULT_THROTTLE_TIME))
			.subscribe((search: string) => this.keyEnter.emit({ search }));

            this.debouncerScrollEnd$
                .pipe(throttleTime(PMDS_CDK_AUTOCOMPLETE_DEFAULT_THROTTLE_TIME))
                .subscribe((search: any) => this.scrollEnd.emit({ search }));

		this.debouncerTyping$
			.pipe(
				debounceTime(PMDS_CDK_AUTOCOMPLETE_DEFAULT_DEBOUNCE_TIME),
				distinctUntilChanged()
			)
			.subscribe((search: string) => this.byTyping.emit({ search }));
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
		this.debouncerKeyEnter$?.unsubscribe();
		this.debouncerTyping$?.unsubscribe();
		!!this.unlistener && this.unlistener();
	}

	ngAfterViewInit() {
		this.unlistener = this.renderer.listen('window', 'click', (e: Event) => {
			if ((this.value?.length > 0) && !this.omitClose && !this.states.isLoading) {
				this.data = [];
				this.suggestions = '';
				!this.valueSelected && this.onClear(true);
			}
			this.omitClose = false;
		});
	}

	onInput(event?: Event) {
		this.value = event ? (event.target as HTMLInputElement)?.value : '';
		this.onTouched();
		this.onChange(this.value);
		this.debouncerTyping$.next(this.value);
	}

	onEnter() {
		if (this.lastValue === this.value && this.data.length > 0) {
			this.onSelectRow(this.data[0]);
		} else {
			this.showError = this.formError;
			this.debouncerKeyEnter$.next(this.value);
			this.lastValue = this.value;
		}
	}

	onSetInput(event: any) {
		if (event) {
			this.value = event;
			this.onTouched();
			this.onChange(event);
		}
	}

	onSelectRow(event: any) {
		this.valueSelected = event;
		if (event && event[this.propValue])
			this.value = event[this.propValue];
		this.onChange(this.value);
        this.label = event;
		this.data = [];
		this.suggestions = '';
		this.omitClose = false;
	}

	updateClearButtonOnFocus(focusedOnInput: boolean) {
		this.inputFocused = focusedOnInput;
	}

    compareStudentId(selectedId: any) {
		if (this.valueSelected) {
			if (selectedId && this.valueSelected[this.propValue] && selectedId === this.valueSelected[this.propValue]) {
				this.onSelectRow(this.valueSelected);
			}
		}
    }

	writeValue(value: string) {
		this.value = value || '';
	}

	registerOnChange(fn: (_: unknown) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => undefined) {
		this.onTouched = fn;
	}

	onFocusOut() {
		if (!this.omitFocusOut) {
			setTimeout(() => {
				this.value = this.value.trim();
				this.onChange(this.value);
				this.control.markAsTouched();
				this.control.markAsDirty();
				this.compareStudentId(this.value);
				this.suggestions = '';
				this.data = [];
				this.focusOut.emit(this.value);
				this.focusin = false;
				this.showError = this.formError;
			}, 200);
		}
		this.omitFocusOut = false;
	}

	onFocusIn() {
		this.focusin = true;
		this.focusIn.emit();
	}

	onScrollEnd() {
	    this.debouncerScrollEnd$.next(this.value);
	}

	onClear(omitFocus?: boolean) {
		this.omitFocusOut = true;
	    this.value = '';
	    this.onInput();
	    this.onSelectRow(null);
		if (!omitFocus) {
			this.focusin = true;
			setTimeout(() => {
				this.inputForm.nativeElement.focus();
			});
		} else {
			this.omitFocusOut = false;
		}
	}
}
