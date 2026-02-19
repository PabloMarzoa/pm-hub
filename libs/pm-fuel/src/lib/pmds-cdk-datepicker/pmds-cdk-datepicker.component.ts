////////Angular imports
import {
	AfterViewInit,
	Component,
	ElementRef,
	forwardRef,
	inject,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Renderer2,
	SimpleChanges,
	ViewChild
} from '@angular/core';
import { NgClass } from '@angular/common';
import {
	ControlContainer,
	FormGroupDirective,
	FormsModule,
	NG_VALUE_ACCESSOR,
	ReactiveFormsModule
} from '@angular/forms';
////////Third party libraries
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { distinctUntilChanged, Subject, takeUntil } from 'rxjs';
////////PPMDS libraries
import { IPmdsCdkFormErrorMessage } from '../pmds-cdk-form-error-message/models/pmds-cdk-form-error-message.model';
import { PmdsCdkTextInputComponent } from '../pmds-cdk-text-input/pmds-cdk-text-input.component';
import { PmdsCdkSkeletonComponent } from '../pmds-cdk-skeleton/pmds-cdk-skeleton.component';
import { PmdsDirectiveViewportOverflow } from '../../index';
////////Component imports
import { IPmdsCdkDatepickerDateInfo } from './models/pmds-cdk-datepicker-date-info.model';
import { IPmdsCdkDatepickerLiterals } from './models/pmds-cdk-datepicker-literals.model';
import { PmdsCdkDatepickerCalendarComponent } from './components/pmds-cdk-datepicker-calendar.component';
import { TPmdsCdkDatepickerDateFormat } from './models/pmds-cdk-datepicker-date-format.model';

dayjs.extend(customParseFormat);
const CALENDAR_DEFAULT_MIN_WIDTH = 384;
const MOBILE_BREAKPOINT = 767;

@Component({
	selector: 'pmds-cdk-datepicker',
	standalone: true,
	imports: [
		FormsModule,
		NgClass,
		PmdsCdkDatepickerCalendarComponent,
		PmdsCdkTextInputComponent,
		ReactiveFormsModule,
		PmdsCdkSkeletonComponent,
		PmdsDirectiveViewportOverflow,
	],
	viewProviders: [
		{
			provide: ControlContainer,
			useExisting: FormGroupDirective,
		},
	],
	providers: [
		PmdsCdkTextInputComponent,
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkTextInputComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-datepicker.component.html',
})
export class PmdsCdkDatepickerComponent
	implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
	@ViewChild('datepickerInput', { static: false }) datepickerInput:
		| ElementRef
		| undefined;
	@ViewChild('datepickerCalendar', { static: false }) datepickerCalendar:
		PmdsCdkDatepickerCalendarComponent
		| undefined;

	@Input() dataQA!: string;
	@Input() dateInfo!: IPmdsCdkDatepickerDateInfo[];
	@Input() enabledToday!: boolean;
	@Input() formControlName!: string;
	@Input() format!: TPmdsCdkDatepickerDateFormat;
	@Input() isDisabled!: boolean;
	@Input() literals!: IPmdsCdkDatepickerLiterals;
	@Input() literalsErrorFn!: IPmdsCdkFormErrorMessage<unknown>;
	@Input() max!: Date | string;
	@Input() min!: Date | string;
	@Input() placeholder!: string;
	@Input() positionRight!: boolean;
	@Input() selectableDates!: Date[] | string[];
	@Input() skeleton = false;

	currentValue!: string;
	componentSelector = 'pmds-cdk-datepicker-';
	omitEvent!: boolean;
	setDate!: Date | undefined;
	show = false;
	showCalendar!: boolean;
	calendarWidthStyle: string | null = null;

	private formGroupDirective = inject(FormGroupDirective);
	private renderer = inject(Renderer2);
	private destroy$: Subject<boolean> = new Subject<boolean>();
	private unlistener!: () => void;

	ngOnInit() {
		!this.format && this.getFormatBrowser();
		this.formGroupDirective?.form
			?.get(this.formControlName)
			?.valueChanges.pipe(
			takeUntil(this.destroy$),
			distinctUntilChanged()
		)
			.subscribe((value: string) => {
				if (this.currentValue !== value) {
					this.currentValue = this.updateSeparator();
					this.checkValidDate(this.currentValue);
				}
			});
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
		!!this.unlistener && this.unlistener();
	}

	ngOnChanges(changes: SimpleChanges): void {
		(changes['max'] || changes['min']) && this.checkLimitDates();
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.checkValidDate(
				this.formGroupDirective?.form?.get(this.formControlName)?.value
			);
			this.unlistener = this.renderer.listen('window', 'click', () => {
				if (this.showCalendar && !this.omitEvent) {
					this.showCalendar = false;
					this.datepickerCalendar?.changeSetDate();
				}
				this.omitEvent = false;
			});
		});
	}

	checkValidDate(value?: string, isFocusOut = false, closeOption = false) {
		value =
			value ??
			this.formGroupDirective?.form?.get(this.formControlName)?.value;
		if (isFocusOut) {
			!dayjs(value, this.format, true).isValid() && this.resetValue();
		} else {
			!value && this.resetValue(false);
		}

		dayjs(value, this.format, true).isValid() &&
		this.writeValue(value as string);

		closeOption && (this.showCalendar = false) && this.datepickerCalendar?.changeSetDate();
	}

	updateSeparator() {
		let value = this.formGroupDirective?.form?.get(
			this.formControlName
		)?.value;
		const firstSeparator = this.format[0].toLowerCase() === 'y' ? 4 : 2;
		const secondSeparator = firstSeparator + 3;
		const inputSeparator = this.format[firstSeparator];
		if (value?.length === firstSeparator) {
			value = value + inputSeparator;
			this.formGroupDirective?.form
				?.get(this.formControlName)
				?.patchValue(value, { emmitEvent: false });
		} else if (value?.length === secondSeparator) {
			value = value + inputSeparator;
			this.formGroupDirective?.form
				?.get(this.formControlName)
				?.patchValue(value, { emmitEvent: false });
		}
		return value;
	}

	selectDayChange(date: Date) {
		this.writeValue(dayjs(date).format(this.format));
	}

	writeValue(value: string) {
		if (dayjs(value, this.format, true).isValid()) {
			const month = dayjs(value, this.format).get('M') + 1;
			const date = dayjs(value, this.format).get('date');
			this.setDate = new Date(
				`${dayjs(value, this.format).get('year')}-${month.toString().length < 2 ? '0' : ''}${month}-${date.toString().length < 2 ? '0' : ''}${date}`
			);
			this.formGroupDirective?.form
				?.get(this.formControlName)
				?.patchValue(dayjs(value, this.format).format(this.format));
			(() => this.checkLimitDates())();
		} else {
			this.resetValue();
		}
	}

	onOpenCalendar() {
		const distanceToRight =
			window.innerWidth - this.datepickerInput?.nativeElement.getBoundingClientRect().left;
		this.calendarWidthStyle =
			distanceToRight <= CALENDAR_DEFAULT_MIN_WIDTH &&
			window.innerWidth > MOBILE_BREAKPOINT
				? 'width: ' +
				(distanceToRight - 16) +
				'px'
				: '';
		this.showCalendar = true;
	}

	private resetValue(emitEvent = true) {
		this.formGroupDirective?.form
			?.get(this.formControlName)
			?.patchValue('', { emitEvent });
		this.setDate = undefined;
	}

	private checkLimitDates() {
		const min = this.selectableDates?.length ? this.getMinDate(this.selectableDates) : this.min;
		const max = this.selectableDates?.length ? this.getMaxDate(this.selectableDates) :this.max;
		if (
			min &&
			this.setDate &&
			dayjs(this.setDate).isBefore(
				dayjs(this.checkStringDate(min)),
				'day'
			)
		) {
			this.changeDate(this.checkStringDate(min) as Date);
		} else if (
			max &&
			this.setDate &&
			dayjs(this.setDate).isAfter(
				dayjs(this.checkStringDate(max)),
				'day'
			)
		) {
			this.changeDate(this.checkStringDate(max) as Date);
		}
	}

	private changeDate(date: Date) {
		this.writeValue(dayjs(date).format(this.format));
	}

	private checkStringDate(date: string | Date): Date | undefined {
		if (date) {
			return typeof date === 'string'
				? new Date(
					`${dayjs(date, this.format).get('year')}-0${
						dayjs(date, this.format).get('M') + 1
					}-0${dayjs(date, this.format).get('date')}`
				)
				: new Date(dayjs(date).format('YYYY-MM-DD'));
		} else {
			return undefined;
		}
	}

	private getFormatBrowser() {
		this.format = new Date(3333, 11, 22)
			.toLocaleDateString()
			.replace('22', 'DD')
			.replace('12', 'MM')
			.replace('3333', 'YYYY') as TPmdsCdkDatepickerDateFormat;
	}

	private getMinDate(selectableDates: Date[] | string[]) {
		const timestampArray = selectableDates.map(daySelectable => dayjs(this.checkStringDate(daySelectable)).unix());
		return selectableDates[timestampArray.indexOf(Math.min(...timestampArray))]
	}

	private getMaxDate(selectableDates: Date[] | string[]) {
		const timestampArray = selectableDates.map(daySelectable => dayjs(this.checkStringDate(daySelectable)).unix());
		return selectableDates[timestampArray.indexOf(Math.max(...timestampArray))]
	}
}
