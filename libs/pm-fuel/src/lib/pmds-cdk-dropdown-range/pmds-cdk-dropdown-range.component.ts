////////Angular imports
import { DatePipe, NgClass } from '@angular/common';
import {
	AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, inject, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild
} from '@angular/core';
import {
	ControlContainer, FormControl, FormGroupDirective, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule
} from '@angular/forms';
////////Third party libraries
import { Subject, takeUntil } from 'rxjs';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { IPmdsCdkDatepickerLiterals } from '../pmds-cdk-datepicker/models/pmds-cdk-datepicker-literals.model';
import { PmdsCdkDatepickerComponent } from '../pmds-cdk-datepicker/pmds-cdk-datepicker.component';
import { TPmdsCdkDatepickerDateFormat } from '../pmds-cdk-datepicker/models/pmds-cdk-datepicker-date-format.model';
import { PmdsCdkTextInputComponent } from '../pmds-cdk-text-input/pmds-cdk-text-input.component';
////////Project imports
import { IPmdsDropdownRangeSelect } from './models/dropdown-range.model';
import { IPmdsCdkDropdownRangeLiterals } from './models/dropdown-range-literals.model';
import {
	PmdsCdkDropdownRangeSkeletonComponent
} from './components/pmds-cdk-dropdown-range-skeleton/pmds-cdk-dropdown-range-skeleton.component';

@Component({
	selector: 'pmds-cdk-dropdown-range',
	standalone: true,
	imports: [
		FormsModule,
		NgClass,
		PmdsCdkButtonComponent,
		PmdsCdkDatepickerComponent,
		PmdsCdkTextInputComponent,
		ReactiveFormsModule,
		PmdsCdkDropdownRangeSkeletonComponent
	],
	providers: [DatePipe,
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkDatepickerComponent),
			multi: true,
		},
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkTextInputComponent),
			multi: true,
		},
	],
	viewProviders: [
		{
			provide: ControlContainer,
			useExisting: FormGroupDirective,
		},
	],
	templateUrl: './pmds-cdk-dropdown-range.component.html',
})
export class PmdsCdkDropdownRangeComponent implements OnInit, OnDestroy, AfterViewInit {

	@ViewChild('selectFilterView', {static: false}) selectFilterView!: ElementRef;

	@Input() dataQA!: string;
	@Input() decimalCharacter: '.' | ',' = ',';
	@Input() fromFormControlName!: string;
	@Input() isDisabled!: boolean;
	@Input() literals!: IPmdsCdkDropdownRangeLiterals;
	@Input() max!: Date;
	@Input() maxDecLength = 2;
	@Input() maxIntLength = 7;
	@Input() maxNumber!: number;
	@Input() min!: Date;
	@Input() minNumber!: number;
	@Input() mode!: 'date' | 'number';
	@Input() pattern: TPmdsCdkDatepickerDateFormat = 'DD/MM/YYYY';
	@Input() placeholder!: string;
	@Input() skeleton!: boolean;
	@Input() toFormControlName!: string;

	@Output() selectChange: EventEmitter<IPmdsDropdownRangeSelect> =
		new EventEmitter<IPmdsDropdownRangeSelect>();

	disabledApply!: boolean;
	componentSelector = 'pmds-cdk-dropdown-range-'
	fromControl: FormControl | null = null;
	omitEvent = false;
	provisionalValue!: IPmdsDropdownRangeSelect;
	showOptions = false;
	toControl: FormControl | null = null;

	private formGroupDirective = inject(FormGroupDirective);
	private renderer = inject(Renderer2);
	private destroy$: Subject<boolean> = new Subject<boolean>();
	private unlistener!: () => void;

	ngOnInit() {
		setTimeout(() => {
			this.fromControl = this.formGroupDirective.form?.get(this.fromFormControlName) as FormControl;
			this.toControl = this.formGroupDirective.form?.get(this.toFormControlName) as FormControl;
			this.provisionalValue = {
				from: this.fromControl?.value,
				to: this.toControl?.value
			}
		});
		this.checkDisableButton();
		!!this.literals.datepickerLiterals && (this.mode === 'date') && (this.literals.datepickerLiterals['formatHelp'] = this.literals.datepickerLiterals?.formatHelp ?? this.pattern.toLowerCase());
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
		!!this.unlistener && this.unlistener();
	}

	ngAfterViewInit() {
		this.unlistener = this.renderer.listen('window', 'click', () => {
			if (this.showOptions && !this.omitEvent) {
				setTimeout(() => {
					this.fromControl?.setValue(this.provisionalValue.from);
					this.toControl?.setValue(this.provisionalValue.to);
					this.showOptions = false;
				});
			}
			this.omitEvent = false;
		});
	}

	get datepickerLiterals(): IPmdsCdkDatepickerLiterals {
		return this.literals?.datepickerLiterals ? this.literals.datepickerLiterals : {month: ['','','','','','','','','','','',''], formatHelp: '', today: '', weekDay: ['','','','','','','']};
	}

	toggleShowOption() {
		this.showOptions = !this.showOptions;
		if (this.showOptions) {
			this.provisionalValue = {
				from: this.fromControl?.value,
				to: this.toControl?.value
			};
		}
	}

	setSelection() {
		this.provisionalValue = {
			from: this.fromControl?.value,
			to: this.toControl?.value
		}
		this.selectChange.emit(this.provisionalValue);
		this.showOptions = false;
	}

	clear() {
		this.fromControl?.reset()
		this.toControl?.reset()
		this.setSelection()
	}

	private checkDisableButton() {
		const isDisableButton = () => {
			const start = this.fromControl?.value?.replace(',', '.') || null;
			const end = this.toControl?.value?.replace(',', '.') || null;
			if (this.maxNumber && ((start && start > this.maxNumber) || (end && end > this.maxNumber))) {
				return true;
			}
			if (this.minNumber && ((start && start < this.minNumber) || (end && end < this.minNumber))) {
				return true;
			}
			return (start !== null && end !== null && +start > +end) ? true : false;
		};

		this.formGroupDirective.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {

			setTimeout(() => {
				this.disabledApply = isDisableButton()
					|| this.fromControl?.value === '-'
					|| this.fromControl?.value?.slice(-1) === this.decimalCharacter
					|| this.toControl?.value === '-'
					|| this.toControl?.value?.slice(-1) === this.decimalCharacter;
			});
		})
	}

}
