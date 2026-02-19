////////Component imports
import { TPmdsCdkCalendarEventType } from '../models/pmds-cdk-calendar-event-type.model';

export interface IPmdsCdkCalendarEvent {
	eventTitle: string;
	eventSubtitle: string;
	eventDate: Date;
	eventType: TPmdsCdkCalendarEventType;
}
