////////Angular imports
import {
	Directive,
	ElementRef,
	HostListener,
	Input,
	OnChanges,
	Renderer2,
	inject,
} from '@angular/core';
////////Third party libraries
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
////////Component imports
import { IPmdsCdkDatepickerDateInfo } from '../models/pmds-cdk-datepicker-date-info.model';
import { TPmdsCdkDatepickerDateFormat } from '../models/pmds-cdk-datepicker-date-format.model';

dayjs.extend(isToday);

const WEEKEND_DAYS = [0, 6];

@Directive({
	selector: '[pmdsCdkDatepickerDayClass]',
	standalone: true,
})
export class PmdsCdkDatepickerDayClassDirective implements OnChanges {
	@Input() pmdsCdkDatepickerDayClassDateInfo!: IPmdsCdkDatepickerDateInfo[];
	@Input() pmdsCdkDatepickerDayClassDay!: number;
	@Input() pmdsCdkDatepickerDayClassFormat!: TPmdsCdkDatepickerDateFormat;
	@Input() pmdsCdkDatepickerDayClassMax!: Date | string;
	@Input() pmdsCdkDatepickerDayClassMin!: Date | string;
	@Input() pmdsCdkDatepickerDayClassSelectableDates!: Date[] | string[];
	@Input() pmdsCdkDatepickerDayClassMonth!: number;
	@Input() pmdsCdkDatepickerDayClassSelectedDate!: Date | undefined;
	@Input() pmdsCdkDatepickerDayClassYear!: number;

	private hostElement = inject(ElementRef);
	private renderer = inject(Renderer2);

	ngOnChanges() {
		const day = dayjs(
			new Date(
				this.pmdsCdkDatepickerDayClassYear,
				this.pmdsCdkDatepickerDayClassMonth,
				this.pmdsCdkDatepickerDayClassDay
			)
		);
		this.isWeekend(day);
		this.isToday(day);
		this.isSelectedDay(day);
		this.isBeforeMinOrAfterMax(day);
		this.checkDateInfo(day);
		if (this.pmdsCdkDatepickerDayClassSelectableDates?.length) {
			this.checkSelectableDates(day);
		}
	}

	@HostListener('mouseover') onHover() {
		this.renderer.addClass(
			this.hostElement.nativeElement,
			'bg-color-surface-hover'
		);
	}
	@HostListener('mouseleave') onLeave() {
		this.renderer.removeClass(
			this.hostElement.nativeElement,
			'bg-color-surface-hover'
		);
	}

	private isWeekend(day: dayjs.Dayjs) {
		if (WEEKEND_DAYS.includes(day.day())) {
			this.renderer.addClass(
				this.hostElement.nativeElement,
				'text-color-disabled'
			);
		} else {
			this.renderer.removeClass(
				this.hostElement.nativeElement,
				'text-color-disabled'
			);
		}
	}

	private isToday(day: dayjs.Dayjs) {
		if (day.isToday()) {
			this.renderer.addClass(this.hostElement.nativeElement, 'border');
		} else {
			this.renderer.removeClass(this.hostElement.nativeElement, 'border');
		}
	}

	private isSelectedDay(day: dayjs.Dayjs) {
		if (
			this.pmdsCdkDatepickerDayClassSelectedDate &&
			day.isSame(
				dayjs(this.pmdsCdkDatepickerDayClassSelectedDate),
				'day'
			)
		) {
			this.renderer.addClass(
				this.hostElement.nativeElement,
				'bg-color-surface-selected'
			);
			this.renderer.addClass(
				this.hostElement.nativeElement,
				'text-color-text-secondary'
			);
		} else {
			this.renderer.removeClass(
				this.hostElement.nativeElement,
				'bg-color-surface-selected'
			);
			this.renderer.removeClass(
				this.hostElement.nativeElement,
				'text-color-text-secondary'
			);
		}
	}

	private isBeforeMinOrAfterMax(day: dayjs.Dayjs) {
		if (
			(this.pmdsCdkDatepickerDayClassMin &&
				day.isBefore(
					dayjs(
						this.checkStringDate(this.pmdsCdkDatepickerDayClassMin)
					),
					'day'
				)) ||
			(this.pmdsCdkDatepickerDayClassMax &&
				day.isAfter(
					dayjs(
						this.checkStringDate(this.pmdsCdkDatepickerDayClassMax)
					),
					'day'
				))
		) {
			this.renderer.addClass(
				this.hostElement.nativeElement,
				'text-color-action-disabled'
			);
			this.renderer.addClass(
				this.hostElement.nativeElement,
				'pointer-events-none'
			);
			this.renderer.addClass(
				this.hostElement.nativeElement,
				'select-none'
			);
		} else {
			this.renderer.removeClass(
				this.hostElement.nativeElement,
				'text-color-action-disabled'
			);
			this.renderer.removeClass(
				this.hostElement.nativeElement,
				'pointer-events-none'
			);
			this.renderer.removeClass(
				this.hostElement.nativeElement,
				'select-none'
			);
		}
	}

	private checkSelectableDates(day: dayjs.Dayjs) {
		const isSelectable = this.pmdsCdkDatepickerDayClassSelectableDates.some(
			(daySelectable) => day.isSame(
						dayjs(this.checkStringDate(daySelectable)), 'day')
			
		);
		if (!isSelectable) {
			this.renderer.addClass(
				this.hostElement.nativeElement,
				'text-color-action-disabled'
			);
			this.renderer.addClass(
				this.hostElement.nativeElement,
				'pointer-events-none'
			);
			this.renderer.addClass(
				this.hostElement.nativeElement,
				'select-none'
			);
		} else {
			this.renderer.removeClass(
				this.hostElement.nativeElement,
				'text-color-action-disabled'
			);
			this.renderer.removeClass(
				this.hostElement.nativeElement,
				'pointer-events-none'
			);
			this.renderer.removeClass(
				this.hostElement.nativeElement,
				'select-none'
			);
		}
	}

	private checkDateInfo(day: dayjs.Dayjs) {
		const classDateInfo = [
			'before:content-[attr(before)]',
			'before:absolute',
			'before:pt-12',
			'before:text-xs',
			'before:text-color-action-alternative-default',
			'before:font-SantanderMicroTextBold',
		];
		classDateInfo.forEach((className) =>
			this.renderer.removeClass(this.hostElement.nativeElement, className)
		);
		this.pmdsCdkDatepickerDayClassDateInfo?.length &&
			this.pmdsCdkDatepickerDayClassDateInfo.forEach((dateInfo) => {
				if (day.isSame(dayjs(dateInfo.date), 'day')) {
					classDateInfo.forEach((className) => {
						this.renderer.setAttribute(
							this.hostElement.nativeElement,
							'before',
							dateInfo.label.substring(0, 5).toUpperCase()
						);
						this.renderer.addClass(
							this.hostElement.nativeElement,
							className
						);
					});
				}
			});
	}

	private checkStringDate(date: string | Date): Date | undefined {
		if (date) {
			return typeof date === 'string'
				? new Date(
						dayjs(
							date,
							this.pmdsCdkDatepickerDayClassFormat
						).format('YYYY-MM-DD')
				  )
				: new Date(dayjs(date).format('YYYY-MM-DD'));
		} else {
			return undefined;
		}
	}
}
