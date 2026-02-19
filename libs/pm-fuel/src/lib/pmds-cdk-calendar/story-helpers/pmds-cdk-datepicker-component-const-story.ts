////////Component imports
import { IPmdsCdkCalendarEvent } from '../models/pmds-cdk-calendar-event.model';
import { IPmdsCdkCalendarLiterals } from '../models/pmds-cdk-calendar-literals.model';

export const literals: IPmdsCdkCalendarLiterals = {
	addEvent: 'Add event',
	today: 'Today',
	title: 'Agenda',
	withoutEvents: 'No events on this date',
	suffixDays: {
		fisrt: 'st',
		second: 'nd',
		third: 'rd',
		others: 'th',
	},
	month: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	weekDay: [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	],
};

export const events: IPmdsCdkCalendarEvent[] = [
	{
		eventTitle: '[Title]',
		eventSubtitle: '[Body Text]',
		eventDate: new Date(new Date().getTime() + 1886400000),
		eventType: 'CUSTOM',
	},
	{
		eventTitle: '[Title]',
		eventSubtitle: '[Body Text]',
		eventDate: new Date(new Date().getTime() - 1886400000),
		eventType: 'PENDING',
	},
	{
		eventTitle: '[Title]',
		eventSubtitle: '[Body Text]',
		eventDate: new Date(),
		eventType: 'CONFIRMED',
	},
	{
		eventTitle: '[Title]',
		eventSubtitle: '[Body Text]',
		eventDate: new Date(new Date().getTime() + 86400000),
		eventType: 'CUSTOM',
	},
	{
		eventTitle: '[Title]',
		eventSubtitle: '[Body Text]',
		eventDate: new Date(new Date().getTime() - 86400000),
		eventType: 'PENDING',
	},
	{
		eventTitle: '[Title]',
		eventSubtitle: '[Body Text]',
		eventDate: new Date(),
		eventType: 'SETTLED',
	},
	{
		eventTitle: '[Title]',
		eventSubtitle: '[Body Text]',
		eventDate: new Date(),
		eventType: 'PENDING',
	},
	{
		eventTitle: '[Title]',
		eventSubtitle: '[Body Text]',
		eventDate: new Date(),
		eventType: 'CONFIRMED',
	},
];
