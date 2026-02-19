////////Component imports
import { IPmdsCdkCalendarEvent } from './pmds-cdk-calendar-event.model';

export interface IPmdsCdkCalendarEventShow {
	[day: number]: {
		title: string;
		events: IPmdsCdkCalendarEvent[];
	};
}
