////////Angular imports
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
////////Third party libraries
import dayjs from 'dayjs';
////////PNXT libraries
import { PmdsCdkTextComponent } from '../pmds-cdk-text/pmds-cdk-text.component';
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkCalendarEvent } from './models/pmds-cdk-calendar-event.model';
import { IPmdsCdkCalendarLiterals } from './models/pmds-cdk-calendar-literals.model';
import { PmdsCdkCalendarDayClassDirective } from './directives/pmds-cdk-calendar-day-class.directive';
import { IPmdsCdkCalendarEventShow } from './models/pmds-cdk-calendar-event-show.model';
import { PmdsCdkEventsComponent } from './components/pmds-cdk-events/pmds-cdk-events.component';
import { PmdsCdkCalendarSkeletonComponent } from './components/pmds-cdk-calendar-skeleton/pmds-cdk-calendar-skeleton.component';

@Component({
	selector: 'pmds-cdk-calendar',
	standalone: true,
	imports: [
		CommonModule,
		PmdsCdkTextComponent,
		PmdsCdkButtonComponent,
		PmdsCdkCalendarDayClassDirective,
		PmdsCdkEventsComponent,
		PmdsCdkCalendarSkeletonComponent
	],
	templateUrl: './pmds-cdk-calendar.component.html',
})
export class PmdsCdkCalendarComponent implements OnInit {
	@Input() dataQA!: string;
	@Input() events!: IPmdsCdkCalendarEvent[];
	@Input() literals!: IPmdsCdkCalendarLiterals;
	@Input() showEvents: boolean = true;
	@Input() isMultiple: boolean = false;
	@Input() skeleton: boolean = false;

	@Output() addEvent: EventEmitter<void> = new EventEmitter<void>();
	@Output() selectEvent: EventEmitter<IPmdsCdkCalendarEvent> =
		new EventEmitter<IPmdsCdkCalendarEvent>();
	@Output() changeMonth: EventEmitter<Date> = new EventEmitter<Date>();

	componentSelector = 'pmds-cdk-calendar-';
	daySelected!: number;
	daysArray: { day: number; events: IPmdsCdkCalendarEvent[] }[] = [];
	eventsShow!: IPmdsCdkCalendarEventShow | null;
	firstDayOfMonthWeekday!: number;
	monthSelected!: number;
	selectedDates: Date[] = [];
	yearSelected!: number;

	ngOnInit() {
		this.monthSelected = new Date().getMonth();
		this.yearSelected = new Date().getFullYear();
		this.fillCalendardisplayMonth();
		this.getEventShow();
		if (!this.daySelected) {
			this.selectToday();
		}
	}

	changeMonthClick(change: number) {
		const calculate = this.monthSelected + change;
		if (calculate === -1) {
			this.monthSelected = 11;
			this.yearSelected = this.yearSelected - 1;
		} else if (calculate === 12) {
			this.monthSelected = 0;
			this.yearSelected = this.yearSelected + 1;
		} else {
			this.monthSelected = calculate;
		}
		this.changeMonth.emit(
			new Date(this.yearSelected, this.monthSelected, 1)
		);
		this.fillCalendardisplayMonth();
		this.getEventShow();
	}

	selectDay(day: number) {
		const dayDate = new Date(this.yearSelected, this.monthSelected, day);
		if (this.selectedDates.length) {
			if (this.isMultiple) {
				const isSeleted = this.selectedDates.some((day) =>
					dayjs(dayDate).isSame(dayjs(day), 'day')
				);
				this.selectedDates = isSeleted
					? this.selectedDates.filter(
							(day) => !dayjs(dayDate).isSame(dayjs(day), 'day')
					  )
					: [...this.selectedDates, dayDate];
			} else {
				this.selectedDates = dayjs(dayDate).isSame(
					dayjs(this.selectedDates[0])
				)
					? []
					: [dayDate];
			}
		} else {
			this.selectedDates = [dayDate];
		}
		this.getEventShow();
	}

	selectToday() {
		if (
			this.yearSelected !== new Date().getFullYear() ||
			this.monthSelected !== new Date().getMonth()
		) {
			this.changeMonth.emit(new Date());
		}
		this.selectedDates = [new Date()];
		this.yearSelected = new Date().getFullYear();
		this.monthSelected = new Date().getMonth();
		this.fillCalendardisplayMonth();
		this.getEventShow();
	}

	private fillCalendardisplayMonth() {
		const firstDayOfMonth = new Date(
			this.yearSelected,
			this.monthSelected,
			1
		);
		this.firstDayOfMonthWeekday = firstDayOfMonth.getDay();
		const lastDayOfMonth = new Date(
			this.yearSelected,
			this.monthSelected + 1,
			0
		);
		this.daysArray = Array.from(
			{ length: lastDayOfMonth.getDate() },
			(_, index) => {
				return {
					day: index + 1,
					events: this.getEvents(index + 1),
				};
			}
		);
	}

	private getEvents(day: number): IPmdsCdkCalendarEvent[] {
		return this.events
			? this.events
					.filter((event) =>
						dayjs(event.eventDate).isSame(
							dayjs(
								new Date(
									this.yearSelected,
									this.monthSelected,
									day
								)
							),
							'day'
						)
					)
					.filter((_, i) => i < 3)
			: [];
	}

	private getEventShow() {
		if (!this.events) {
			this.eventsShow = null;
		} else {
			if (this.selectedDates.length) {
				this.eventsShow = {};
				this.selectedDates.forEach((date) => {
					this.eventsShow = {
						...this.eventsShow,
						[date.getDate()]: {
							title: this.getGroupTitle(date.getDate()),
							events: this.events.filter((event) =>
								dayjs(event.eventDate).isSame(
									dayjs(
										new Date(
											this.yearSelected,
											this.monthSelected,
											date.getDate()
										)
									),
									'day'
								)
							),
						},
					};
				});
			} else {
				this.eventsShow = this.groupEvent(
					this.events
						.filter((event) =>
							dayjs(event.eventDate).isSame(
								dayjs(
									new Date(
										this.yearSelected,
										this.monthSelected,
										1
									)
								),
								'month'
							)
						)
						.sort((a, b) =>
							a.eventDate < b.eventDate
								? -1
								: a.eventDate > b.eventDate
								? 1
								: 0
						)
				);
			}
		}
	}

	private groupEvent(
		events: IPmdsCdkCalendarEvent[]
	): IPmdsCdkCalendarEventShow | null {
		let groupDayEvents: IPmdsCdkCalendarEventShow = {};
		events.forEach(
			(event) =>
				(groupDayEvents[event.eventDate.getDate()] = {
					title: this.getGroupTitle(event.eventDate.getDate()),
					events: [
						...(groupDayEvents[event.eventDate.getDate()]?.events ||
							[]),
						event,
					],
				})
		);
		return events.length ? groupDayEvents : null;
	}

	private getGroupTitle(day: number): string {
		const dayLabel: string[] = [
			this.literals.weekDay[6],
			...this.literals.weekDay,
		];
		const suffixLabel: { [day: number]: string } = {
			1: this.literals.suffixDays.fisrt,
			2: this.literals.suffixDays.second,
			3: this.literals.suffixDays.third,
		};
		return `${
			dayLabel[
				new Date(this.yearSelected, this.monthSelected, day).getDay()
			]
		}, ${day}${suffixLabel[day] || this.literals.suffixDays.others} ${
			this.literals.month[this.monthSelected]
		}`;
	}
}
