////////Angular imports
import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
////////Third party libraries
import dayjs from 'dayjs';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkDatepickerDateInfo } from '../models/pmds-cdk-datepicker-date-info.model';
import { IPmdsCdkDatepickerLiterals } from '../models/pmds-cdk-datepicker-literals.model';
import { PmdsCdkDatepickerDayClassDirective } from '../directives/pmds-cdk-datepicker-day-class.directive';
import { TPmdsCdkDatepickerDateFormat } from '../models/pmds-cdk-datepicker-date-format.model';

@Component({
	selector: 'pmds-cdk-datepicker-calendar',
	standalone: true,
	imports: [
		FormsModule,
		NgClass,
		PmdsCdkButtonComponent,
		PmdsCdkDatepickerDayClassDirective,
	],
	templateUrl: './pmds-cdk-datepicker-calendar.component.html',
})
export class PmdsCdkDatepickerCalendarComponent implements OnInit, OnChanges {
	@Input() customStyles: string | null = null;
	@Input() dataQA!: string;
	@Input() dateInfo!: IPmdsCdkDatepickerDateInfo[];
	@Input() enabledToday!: boolean;
	@Input() format!: TPmdsCdkDatepickerDateFormat;
	@Input() literals!: IPmdsCdkDatepickerLiterals;
	@Input() max!: Date | string;
	@Input() min!: Date | string;
	@Input() positionRight!: boolean;
	@Input() selectableDates!: Date[] | string[];
	@Input() setDate!: Date | undefined;

	@Output() closeCalendar: EventEmitter<void> = new EventEmitter<void>();
	@Output() selectDayChange: EventEmitter<Date> = new EventEmitter<Date>();

	daysArray: number[] = [];
	disabledNext!: boolean;
	disabledPrev!: boolean;
	disabledNextYear!: boolean;
	disabledPrevYear!: boolean;
	disabledToday!: boolean;
	displayDate!: Date;
	displayMonth!: number;
	displayYear!: number;
	componentSelector = 'pmds-cdk-datepicker-calendar-';
	firstDayOfMonthWeekday!: number;
	selectedDate!: Date | undefined;

	ngOnInit() {
		this.setDate && (this.selectedDate = this.setDate);
		this.setDisplayCalendar();
	}

	ngOnChanges(changes: SimpleChanges) {
		this.checkDisplayDate();
		this.setDisplayCalendar();
		changes['setDate'] && this.changeSetDate();
		this.checkDisabled();
	}

	fillCalendardisplayMonth(year: number, month: number) {
		const firstDayOfMonth = new Date(year, month, 1);
		this.firstDayOfMonthWeekday = firstDayOfMonth.getDay();
		const lastDayOfMonth = new Date(year, month + 1, 0);
		this.daysArray = Array.from(
			{ length: lastDayOfMonth.getDate() },
			(_, index) => index + 1
		);
	}

	changeMonth(increment: number) {
		const month = this.displayMonth + increment;
		if (month > 11) {
			this.displayMonth = 0;
			this.displayYear = +this.displayYear + 1;
			this.setDisplayDate(
				this.displayYear,
				this.displayMonth,
				this.displayDate?.getDay()
			);
		} else if (month < 0) {
			this.displayMonth = 11;
			this.displayYear = +this.displayYear - 1;
			this.setDisplayDate(
				this.displayYear,
				this.displayMonth,
				this.displayDate?.getDay()
			);
		} else {
			this.displayMonth = month;
			this.setDisplayDate(
				this.displayYear,
				this.displayMonth,
				this.displayDate?.getDay()
			);
		}
		this.fillCalendardisplayMonth(this.displayYear, month);
		this.checkDisabled();
	}

	changeYear(year: number) {
		this.displayYear = year;
		this.setDisplayDate(
			this.displayYear,
			this.displayMonth,
			this.displayDate?.getDay()
		);
		this.fillCalendardisplayMonth(this.displayYear, this.displayMonth);
		this.checkDisabled();
	}

	setToday() {
		this.displayDate = new Date();
		this.selectedDate = new Date();
		this.setDisplayCalendar();
		this.selectDayChange.emit(this.selectedDate);
		this.closeCalendar.emit();
	}

	selectDay(day: number, emit = true) {
		this.selectedDate = new Date(this.displayYear, this.displayMonth, day);
		emit && this.selectDayChange.emit(this.selectedDate);
	}

	clickDay(day: number) {
		this.selectDay(day);
		this.closeCalendar.emit();
	}

	changeSetDate() {
		if (this.setDate) {
			this.displayDate = new Date(this.setDate);
			this.setDisplayCalendar();
			this.selectDay(this.displayDate?.getDate(), false);
		} else {
			this.selectedDate = undefined;
			this.displayDate =
				this.checkStringDate(this.max) &&
				dayjs(this.checkStringDate(this.max)).isBefore(
					dayjs(new Date()),
					'day'
				)
					? (this.checkStringDate(this.max) as Date)
					: new Date();
			this.setDisplayCalendar();
		}
	}

	private setDisplayCalendar() {
		this.displayYear = this.displayDate?.getFullYear();
		this.displayMonth = this.displayDate?.getMonth();
		this.fillCalendardisplayMonth(this.displayYear, this.displayMonth);
	}

	private setDisplayDate(year: number, month: number, day: number) {
		this.displayDate = new Date(year, month, day);
	}

	private checkDisplayDate() {
		this.displayDate = this.displayDate || new Date();
		if (!this.selectedDate) {
			if (
				this.max &&
				dayjs(this.checkStringDate(this.max)).isBefore(
					dayjs(new Date()),
					'day'
				)
			) {
				this.displayDate = this.checkStringDate(this.max) as Date;
			}
		}
	}

	private checkStringDate(date: string | Date): Date | undefined {
		if (date) {
			return typeof date === 'string'
				? new Date(dayjs(date, this.format).format('YYYY-MM-DD'))
				: new Date(dayjs(date).format('YYYY-MM-DD'));
		} else {
			return undefined;
		}
	}

	private checkDisabled() {
		if (this.selectableDates?.length) {
			const min = this.getMinDate(this.selectableDates);
			const max = this.getMaxDate(this.selectableDates);
			this.disabledPrev = dayjs(
				this.checkStringDate(min)
			).isAfter(
				dayjs(
					new Date(this.displayYear, this.displayMonth, 2)
				).subtract(1, 'month'),
				'month'
			);
			this.disabledPrevYear = dayjs(
				this.checkStringDate(min)
			).isAfter(
				dayjs(new Date(this.displayYear, this.displayMonth, 1))
					.subtract(1, 'year')
					.add(1, 'month'),
				'day'
			);
			this.disabledNext = dayjs(this.checkStringDate(max)).isBefore(
				dayjs(new Date(this.displayYear, this.displayMonth, 1)).add(
					1,
					'month'
				),
				'month'
			);
			this.disabledNextYear = dayjs(this.checkStringDate(max)).isBefore(
				dayjs(new Date(this.displayYear, this.displayMonth, 1)).add(
					1,
					'year'
				),
				'day'
			);
			this.disabledToday = !this.selectableDates.some(daySelectable =>
				dayjs(this.checkStringDate(daySelectable)).isSame(
					dayjs(new Date()),
					'day'
				)
			)
		} else {
			this.disabledNext = false;
			this.disabledNextYear = false;
			this.disabledToday = false;
			if (this.min) {
				this.disabledPrev = dayjs(
					this.checkStringDate(this.min)
				).isAfter(
					dayjs(
						new Date(this.displayYear, this.displayMonth, 2)
					).subtract(1, 'month'),
					'month'
				);
				this.disabledPrevYear = dayjs(
					this.checkStringDate(this.min)
				).isAfter(
					dayjs(new Date(this.displayYear, this.displayMonth, 1))
						.subtract(1, 'year')
						.add(1, 'month'),
					'day'
				);
				this.disabledToday = dayjs(
					this.checkStringDate(this.min)
				).isAfter(dayjs(new Date()), 'day');
			} else {
				this.disabledPrev = false;
				this.disabledPrevYear = false;
				this.disabledToday = false;
			}
			if (this.max) {
				this.disabledNext = dayjs(
					this.checkStringDate(this.max)
				).isBefore(
					dayjs(new Date(this.displayYear, this.displayMonth, 1)).add(
						1,
						'month'
					),
					'month'
				);
				this.disabledNextYear = dayjs(
					this.checkStringDate(this.max)
				).isBefore(
					dayjs(new Date(this.displayYear, this.displayMonth, 1)).add(
						1,
						'year'
					),
					'day'
				);
				this.disabledToday = dayjs(
					this.checkStringDate(this.max)
				).isBefore(dayjs(new Date()), 'day');
			} else {
				this.disabledNext = false;
				this.disabledNextYear = false;
				this.disabledToday = false;
			}
		}
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
