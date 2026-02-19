////////Angular imports
import { CommonModule } from '@angular/common';
import {
	Component, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, forwardRef, inject
} from '@angular/core';
import {
	AbstractControl, ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, } from '@angular/forms';
////////Third party libraries
import {
	Subject, debounceTime, distinctUntilChanged, takeUntil, tap, } from 'rxjs';
////////PNXT libraries
import { PmdsCdkTextInputComponent } from '../pmds-cdk-text-input/pmds-cdk-text-input.component';
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message/pmds-cdk-form-error-message.component';
import { PmdsCdkLoaderComponent } from '../pmds-cdk-loader/pmds-cdk-loader.component';
////////Component imports
import { IPmdsCdkAutocompleteMultidestinataryItem } from './models/pmds-cdk-autocomplete-multidestinatary-item.model';
import { IPmdsCdkAutocompleteMultidestinataryStates } from './models/pmds-cdk-autocomplete-multidestinatary-states.model';
import { IPmdsCdkAutocompleteMultidestinataryConfig } from './models/pmds-cdk-autocomplete-multidestinatary-config.model';
import { PmdsCdkAutocompleteMultidestinatarySkeletonComponent } from './components/pmds-cdk-autocomplete-multidestinatary-skeleton/pmds-cdk-autocomplete-multidestinatary-skeleton.component';

export const PMDS_CDK_AUTOCOMPLETE_MULTIDESTINATARY_DEFAULT_DEBOUNCE_TIME = 500;

@Component({
	selector: 'pmds-cdk-autocomplete-multidestinatary',
	standalone: true,
	imports: [
		CommonModule,
		PmdsCdkTextInputComponent,
		PmdsCdkLoaderComponent,
		PmdsCdkFormErrorMessageComponent,
		PmdsCdkAutocompleteMultidestinatarySkeletonComponent
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(
				() => PmdsCdkAutocompleteMultidestinataryComponent
			),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-autocomplete-multidestinatary.component.html',
})
export class PmdsCdkAutocompleteMultidestinataryComponent
	implements OnInit, ControlValueAccessor, OnDestroy
{
	@Input() config!: IPmdsCdkAutocompleteMultidestinataryConfig;
	@Input() dataQA!: string;
	@Input() formControlName!: string;
	@Input() isDisabled!: boolean;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() results!: IPmdsCdkAutocompleteMultidestinataryItem[];
	@Input() states!: IPmdsCdkAutocompleteMultidestinataryStates;
	@Input() suggestionsLabel!: string;
	@Input() skeleton = false;

	@Output() byTyping: EventEmitter<string> = new EventEmitter<string>();
	@Output() changeValues: EventEmitter<
		IPmdsCdkAutocompleteMultidestinataryItem[]
	> = new EventEmitter<IPmdsCdkAutocompleteMultidestinataryItem[]>();
	@Output()
	selectValue: EventEmitter<IPmdsCdkAutocompleteMultidestinataryItem> =
		new EventEmitter<IPmdsCdkAutocompleteMultidestinataryItem>();

	componentSelector = 'pmds-cdk-autocomplete-multidestinatary-';
	formControl!: AbstractControl;
	omitClose = false;
	showError = false;
	showResults = false;
	show10Results = false;
	showValues = false;
	value!: IPmdsCdkAutocompleteMultidestinataryItem[];
	data!: IPmdsCdkAutocompleteMultidestinataryItem[];

	private debounceTyping$: Subject<string> = new Subject<string>();
	private destroy$: Subject<boolean> = new Subject<boolean>();
	private formGroupDirective = inject(FormGroupDirective);
	private renderer = inject(Renderer2);
	private unlistener!: () => void;

	ngOnInit(): void {
		this.debounceTyping$
			.pipe(
				debounceTime(
					PMDS_CDK_AUTOCOMPLETE_MULTIDESTINATARY_DEFAULT_DEBOUNCE_TIME
				),
				distinctUntilChanged()
			)
			.subscribe((search: string) => {
				this.byTyping.emit(search);
				this.showResults = true;
			});
		if (this.formControlName) {
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
	}

	ngAfterViewInit() {
		this.unlistener = this.renderer.listen(
			'window',
			'click',
			(e: Event) => {
				if (!this.omitClose) {
					this.showResults = false;
				}
				this.omitClose = false;
			}
		);
	}

	ngOnDestroy() {
		this.debounceTyping$?.unsubscribe();
		!!this.unlistener && this.unlistener();
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
	}

	searchValue(value: string) {
		this.debounceTyping$.next(value);
	}

	selectResult(value: IPmdsCdkAutocompleteMultidestinataryItem) {
		if (!this.value?.includes(value)) {
			this.value = [...(this.value || []), value];
		}
		this.onTouched();
		this.onChange(this.value);
		this.showValues = true;
		this.changeValues.emit(this.value);
	}

	removeValue(valueToRemove: IPmdsCdkAutocompleteMultidestinataryItem) {
		this.omitClose = true;
		this.value = this.value.filter((value) => value !== valueToRemove);
		this.onChange(this.value);
		this.showValues = true;
		this.changeValues.emit(this.value);
	}

	selectedValue(
		event: Event,
		valueSelected: IPmdsCdkAutocompleteMultidestinataryItem
	) {
		event.stopPropagation();
		this.selectValue.emit(valueSelected);
	}

	onChange = (_: unknown) => {
		_;
	};
	onTouched = () => undefined;

	onFocus() {
		this.showValues = false;
	}

	onFocusOut() {
		this.showValues = this.value?.length > 0;
	}

	writeValue(value: IPmdsCdkAutocompleteMultidestinataryItem[]) {
		this.value = value || [];
	}

	registerOnChange(fn: (_: unknown) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => undefined) {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.isDisabled = this.isDisabled ?? isDisabled;
	}
}
