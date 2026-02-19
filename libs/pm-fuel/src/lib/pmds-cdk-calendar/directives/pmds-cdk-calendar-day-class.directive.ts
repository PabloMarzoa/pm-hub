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
dayjs.extend(isToday);

@Directive({
	selector: '[pmdsCdkCalendarDayClass]',
	standalone: true,
})
export class PmdsCdkCalendarDayClassDirective implements OnChanges {
	@Input() pmdsCdkCalendarDayClassDay!: number;
	@Input() pmdsCdkCalendarDayClassMonth!: number;
	@Input() pmdsCdkCalendarDayClassYear!: number;
	@Input() pmdsCdkCalendarDayClassSelectedDates!: Date[] | undefined;

	private hostElement = inject(ElementRef);
	private renderer = inject(Renderer2);

	ngOnChanges() {
		const day = dayjs(
			new Date(
				this.pmdsCdkCalendarDayClassYear,
				this.pmdsCdkCalendarDayClassMonth,
				this.pmdsCdkCalendarDayClassDay
			)
		);
		this.isToday(day);
		this.isSelectedDay(day);
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

	private isToday(day: dayjs.Dayjs) {
		if (day.isToday()) {
			this.renderer.addClass(this.hostElement.nativeElement, 'border');
		} else {
			this.renderer.removeClass(this.hostElement.nativeElement, 'border');
		}
	}

	private isSelectedDay(day: dayjs.Dayjs) {
		if (
			this.pmdsCdkCalendarDayClassSelectedDates &&
			this.dayIsSelectedDates(day, this.pmdsCdkCalendarDayClassSelectedDates)
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

	private dayIsSelectedDates(day: dayjs.Dayjs, selectedDates: Date[]): boolean {
		return selectedDates.some(date => (
			day.isSame(dayjs(date), 'day')
		))
	}
}
