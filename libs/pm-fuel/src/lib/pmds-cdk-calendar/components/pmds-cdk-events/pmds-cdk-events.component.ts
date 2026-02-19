////////Angular imports
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
////////Component imports
import { IPmdsCdkCalendarEvent } from '../../models/pmds-cdk-calendar-event.model';
import { IPmdsCdkCalendarEventShow } from '../../models/pmds-cdk-calendar-event-show.model';

@Component({
	selector: 'pmds-cdk-events',
	standalone: true,
	imports: [
		CommonModule
	],
	templateUrl: './pmds-cdk-events.component.html',
})
export class PmdsCdkEventsComponent implements OnChanges {
	@Input() dataQA!: string;
	@Input() noEventsLiteral!: string;
	@Input() events!: IPmdsCdkCalendarEventShow | null;

	@Output() selectEvent: EventEmitter<IPmdsCdkCalendarEvent> = new EventEmitter<IPmdsCdkCalendarEvent>();

	componentSelector = 'pmds-cdk-events-';

	noEvents = true;

	ngOnChanges(): void {
		if (this.events) {
			this.noEvents = !Object.values(this.events).some(day => day.events.length)
		} else {
			this.noEvents = true;
		}
	}

}
