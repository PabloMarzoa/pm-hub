////////Angular imports
import { NgClass } from '@angular/common';
import {
	AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, inject, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges, ViewChild, } from '@angular/core';
import {
	AbstractControl, ControlValueAccessor, FormControl, FormGroupDirective, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, } from '@angular/forms';
////////Third party libraries
import { Subject, takeUntil, tap } from 'rxjs';
////////PMDS imports
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message/pmds-cdk-form-error-message.component';
import {
	PmdsDirectiveTooltip,
	TPmdsDirectiveTooltipPosition,
} from '../../index';
import { PmdsDirectiveTitle } from '../../index';
////////Project imports
import { IPmdsCdkOptionDropdownLiterals } from './models/pmds-cdk-option-dropdown-literals.model';
import { IPmdsCdkOptionDropdown } from './models/pmds-cdk-option-dropdown.model';
import { PmdsCdkDropdownSkeletonComponent } from './components/pmds-cdk-dropdown-skeleton/pmds-cdk-dropdown-skeleton.component';

@Component({
	selector: 'pmds-cdk-dropdown',
	standalone: true,
	imports: [
		FormsModule,
		NgClass,
		PmdsCdkButtonComponent,
		PmdsCdkFormErrorMessageComponent,
		PmdsDirectiveTooltip,
		ReactiveFormsModule,
		PmdsDirectiveTitle,
		PmdsCdkDropdownSkeletonComponent,
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkDropdownComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-dropdown.component.html',
})
export class PmdsCdkDropdownComponent
	implements
		OnInit,
		OnDestroy,
		AfterViewInit,
		ControlValueAccessor,
		OnChanges
{
	@ViewChild('selectFilterView', { static: false })
	selectFilterView!: ElementRef;
	@ViewChild('dropdownOptions', { static: false })
	dropdownOptions!: ElementRef;
	@ViewChild('inputSearchElement', { static: false })
	inputSearchElement!: ElementRef;
	@ViewChild('optionsElement', { static: false }) optionsElement!: ElementRef;
	@ViewChild('inputSearch', { static: false }) inputSearch!: ElementRef;
	@ViewChild('container', { static: false }) container!: ElementRef;

	@Input() assetsFolder = 'assets';
	@Input() categoryOrder!: string[];
	@Input() dataQA!: string;
	@Input() disabledShowToTop = true;
	@Input() enableSearch = false;
	@Input() formControlName!: string;
	@Input() isDisabled!: boolean;
	@Input() isFilter = false;
	@Input() isTitle = false;
	@Input() keepValue = false;
	@Input() label!: string;
	@Input() literals!: IPmdsCdkOptionDropdownLiterals;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() multi = false;
	@Input() openDefault = false;
	@Input() options!: IPmdsCdkOptionDropdown[];
	@Input() optionsMinWidth = '288';
	@Input() placeholder!: string;
	@Input() positionRight = false;
	@Input() positionTop = false;
	@Input() showCategory = false;
	@Input() skeleton = false;
	@Input() tooltip!: string;
	@Input() tooltipPosition: TPmdsDirectiveTooltipPosition = 'bottom-center';
	@Input() tooltipTitle!: string | null;
	@Input() warningText!: string;

	@Output() selectChange: EventEmitter<string[] | string | null> =
		new EventEmitter<string[] | string | null>();

	componentSelector = 'pmds-cdk-dropdown-';
	currentFilter = '';
	filteredOptions!: IPmdsCdkOptionDropdown[];
	footerHeight = 61;
	formControl!: AbstractControl;
	height = 0;
	isPositionTop = false;
	itemHeight = 44;
	labelMulti!: string;
	maxElementsOnHeight = 6;
	omitEvent = false;
	optionMinWidth!: string;
	provisionalSelectedValues: IPmdsCdkOptionDropdown[] = [];
	searchHeight = 80;
	selectedValues: IPmdsCdkOptionDropdown[] = [];
	showErrors = false;
	showOptions = false;
	top = 0;
	value!: string[] | string | null;

	private formGroupDirective = inject(FormGroupDirective);
	private renderer = inject(Renderer2);
	private destroy$: Subject<boolean> = new Subject<boolean>();
	private unlistener!: () => void;

	ngOnInit() {
		this.showCategory && this.setCategoryShow();
		this.filteredOptions = this.options;
		this.formControl = this.formGroupDirective.form?.get(
			this.formControlName
		) as FormControl;
		this.showOptions = this.openDefault;
		this.formControl?.valueChanges
			.pipe(
				tap(() => {
					this.showErrors = false;
				}),
				takeUntil(this.destroy$)
			)
			.subscribe((val) => {
				if (this.selectedValues.toString() !== val?.toString()) {
					this.value = val;
					this.selectedValues = Array.isArray(val)
						? this.options.filter(
								(opt) =>
									val.findIndex(
										(item) => item === opt.value
									) !== -1
						  )
						: this.options.filter((opt) => val === opt.value);
					this.multi &&
						(this.provisionalSelectedValues = this.selectedValues);
				}
				this.updateShowErrors();
				setTimeout(() => {
					this.updateMultiPlaceholder();
				});
			});
		this.value = this.formControl?.value || '';
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
		!!this.unlistener && this.unlistener();
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.showCategory && this.setCategoryShow();
		changes['options'] && (this.filteredOptions = this.options);
	}

	updateShowErrors() {
		this.showErrors =
			this.formControl?.invalid &&
			(this.formControl?.dirty || this.formControl?.touched);
	}

	ngAfterViewInit() {
		this.updateMultiPlaceholder();
		this.unlistener = this.renderer.listen(
			'window',
			'click',
			(e: Event) => {
				if (this.showOptions && !this.omitEvent) {
					this.cancel();
				}
				this.omitEvent = false;
			}
		);
	}

	onChange(value: string[] | string | null) {
		this.value = value;
	}

	onTouch = () => undefined;

	preventClose(evt: Event) {
		evt && evt.stopPropagation();
	}

	toggleShowOption(forceClose = false, omitEvent = false) {
		if (!(this.isTitle && this.options.length < 2)) {
			this.onTouch();
			this.omitEvent = omitEvent;
			this.showOptions = forceClose ? false : !this.showOptions;
			if (!this.showOptions && this.enableSearch) {
				this.currentFilter = '';
				this.getFilteredOptions();
			}
			if (!this.showOptions) {
				this.isPositionTop = false;
				this.top = 0;
				this.formControl?.markAsDirty();
				this.updateShowErrors();
			}
			if (this.showOptions && this.enableSearch) {
				setTimeout(() => {
					this.inputSearch.nativeElement.focus();
				}, 100);
			}

			if (this.showOptions) {
				this.calculateDimensions();
			}
		}
	}

	cancel() {
		this.provisionalSelectedValues = !this.selectedValues
			? []
			: [...this.selectedValues];
		this.toggleShowOption(true);
	}

	clear() {
		this.provisionalSelectedValues = [];
		this.selectedValues = [];
		this.formControl.reset();
		this.toggleShowOption(true);
		this.selectChange.emit();
	}

	getFilteredOptions() {
		if (
			!this.currentFilter ||
			this.getTrimmedAndLowerCaseString(this.currentFilter).length < 1
		) {
			this.filteredOptions = this.options;
		}
		this.filteredOptions = [...this.options].filter((option) =>
			this.getTrimmedAndLowerCaseString(option.label)
				.toLowerCase()
				.normalize('NFD')
				.replace(/\p{Diacritic}/gu, '')
				.includes(
					this.getTrimmedAndLowerCaseString(this.currentFilter)
						.toLowerCase()
						.normalize('NFD')
						.replace(/\p{Diacritic}/gu, '')
				)
		);
		if (this.showCategory) {
			this.filteredOptions = this.filteredOptions
				.sort((a, b) => {
					if (this.categoryOrder) {
						const indexA = this.categoryOrder.indexOf(
							a.category || ''
						);
						const indexB = this.categoryOrder.indexOf(
							b.category || ''
						);
						if (indexA === -1) return 1;
						if (indexB === -1) return -1;
						return indexA - indexB;
					} else {
						return ((a.category as string) || '').localeCompare(
							(b.category as string) || ''
						);
					}
				})
				.map((opt: IPmdsCdkOptionDropdown, index: number) => ({
					...opt,
					showCategory:
						index === 0
							? true
							: this.filteredOptions[index - 1].category !==
							  opt.category,
				}));
		}
		this.calculateDimensions();
	}

	selectOption(option: IPmdsCdkOptionDropdown, event?: Event) {
		event && event.stopPropagation();
		if (this.multi) {
			this.recalculateMultipleSelection(option);
		} else {
			if (this.value === option.value && !this.keepValue) {
				this.selectedValues = [];
				this.formControl && this.formControl.reset();
				this.value = null;
			} else {
				this.selectedValues = [option];
				this.value = option.value;
			}
			this.onTouch();
			this.onChange(this.value);
			this.selectChange.emit(this.value);
			this.toggleShowOption(true);
		}
	}

	onSelect() {
		this.selectedValues = [...this.provisionalSelectedValues];
		this.labelMulti = `${this.selectedValues
			.map((val) => val.label)
			.join(', ')}`;
		const value = this.selectedValues.map(
			(option: IPmdsCdkOptionDropdown) => {
				return option.value;
			}
		);
		this.onTouch();
		this.onChange(value);
		this.value = value;
		this.selectChange.emit(this.value);
		this.toggleShowOption(true);
	}

	writeValue(value: string[] | string | null) {
		if (this.multi) {
			this.value = value ? value : [];
			this.selectedValues = value
				? this.options?.filter((option) => value.includes(option.value))
				: [];
			this.provisionalSelectedValues = this.selectedValues;
		} else {
			this.value = value ? value : '';
			this.selectedValues = value
				? this.options?.filter((option) => value.includes(option.value))
				: [];
		}
	}

	registerOnChange(fn: (_: unknown) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => undefined) {
		this.onTouch = fn;
	}

	setDisabledState(isDisabled: boolean) {
		this.isDisabled = this.isDisabled ?? isDisabled;
	}

	checkOptionSelected(
		options: IPmdsCdkOptionDropdown[],
		option: IPmdsCdkOptionDropdown
	) {
		return options.some(
			(optionSelected) => optionSelected.value === option.value
		);
	}

	private calculateDimensions() {
		setTimeout(() => {
			// CALCULATE DROPDOWN SCROLL
			this.scrollOption();

			// CALCULATE DROPDOWN WIDTH
			this.optionMinWidth = this.isFilter
				? this.optionsMinWidth
				: this.selectFilterView.nativeElement.offsetWidth;

			// CALCULATE DROPDOWN Y POSITION
			const maxItemsShowed = Math.min(
				this.maxElementsOnHeight, // Max of 6 elements
				(this.enableSearch ? this.filteredOptions : this.options)
					.length +
					(this.showCategory
						? [
								...new Set(
									(this.enableSearch
										? this.filteredOptions
										: this.options
									).map((item) => item.category)
								),
						  ].length
						: 0)
			); // Check if has less than 6 elements
			const itemHeight =
				(this.enableSearch ? this.filteredOptions : this.options)
					.length > 6
					? 48
					: this.itemHeight;
			const requiredHeight = 
				((this.enableSearch ? this.filteredOptions : this.options)
					.length > 6 ? 2 : 6) + // add border px
				(this.multi ? this.footerHeight : 0) +
				(this.enableSearch ? this.searchHeight : 0) +
				maxItemsShowed * itemHeight;

			const distanceToBottom =
				window.innerHeight -
				this.container?.nativeElement.getBoundingClientRect().bottom;
			const distanceToTop =
				this.container?.nativeElement.offsetTop -
				this.container?.nativeElement.scrollTop +
				this.container?.nativeElement.clientTop;

			this.isPositionTop = this.positionTop
				? true
				: this.disabledShowToTop
				? false
				: distanceToBottom < requiredHeight &&
				  distanceToTop > distanceToBottom;
			this.top = this.isPositionTop ? requiredHeight : 0;

			// CALCULATE DROPDOWN HEIGHT
			const maxHeight = Math.min(
				this.isPositionTop ? distanceToTop : distanceToBottom,
				requiredHeight
			);

			if (this.top > 0 && this.isPositionTop) {
				this.top = this.top - (requiredHeight - maxHeight) + 10; // PLUS MARGIN
			}

			this.dropdownOptions.nativeElement.setAttribute(
				'style',
				`width: ${this.optionMinWidth}px; height: ${maxHeight}px; ${this.isPositionTop ? ('top: -'  + this.top + 'px'): ''}`
			);

			// CALCULATE DROPDOWN X POSITION
			const distanceToRight =
				window.innerWidth -
				this.selectFilterView?.nativeElement.getBoundingClientRect()
					.left;
			if (!this.positionRight) {
				this.positionRight =
					distanceToRight <
						this.dropdownOptions.nativeElement.width &&
					this.dropdownOptions.nativeElement.width <
						this.selectFilterView?.nativeElement.getBoundingClientRect()
							.left;
			}
		});
	}

	private recalculateMultipleSelection(option: IPmdsCdkOptionDropdown) {
		this.provisionalSelectedValues.some(
			(item) => item.value === option.value
		)
			? (this.provisionalSelectedValues =
					this.provisionalSelectedValues.filter(
						(item) => item.value !== option.value
					))
			: (this.provisionalSelectedValues = [
					...this.provisionalSelectedValues,
					option,
			  ]);
	}

	private getTrimmedAndLowerCaseString(str: string): string {
		return str ? str.replace(/\s/g, '').toLowerCase() : '';
	}

	private setCategoryShow() {
		this.options = this.options
			.sort((a, b) => {
				if (this.categoryOrder) {
					const indexA = this.categoryOrder.indexOf(a.category || '');
					const indexB = this.categoryOrder.indexOf(b.category || '');
					if (indexA === -1) return 1;
					if (indexB === -1) return -1;
					return indexA - indexB;
				} else {
					return ((a.category as string) || '').localeCompare(
						(b.category as string) || ''
					);
				}
			})
			.map((opt: IPmdsCdkOptionDropdown, index: number) => ({
				...opt,
				showCategory:
					index === 0
						? true
						: this.options[index - 1].category !== opt.category,
			}));
	}

	private scrollOption() {
		const top = this.optionsElement.nativeElement.querySelector(
			'.bg-color-surface-selected'
		)?.offsetTop;
		this.optionsElement.nativeElement.scrollTo(
			0,
			top ? top - (this.enableSearch ? 84 : 4) : 0
		);
	}

	private updateMultiPlaceholder() {
		this.multi &&
			(this.labelMulti = `${this.selectedValues
				.map((val) => val.label)
				.join(', ')}`);
	}
}
