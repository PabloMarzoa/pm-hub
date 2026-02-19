////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkCalendarComponent } from './pmds-cdk-calendar.component';
import { componentInfo } from './story-helpers/pmds-cdk-calendar-component-info-story';
import {
	literals,
	events,
} from './story-helpers/pmds-cdk-datepicker-component-const-story';

export default {
	title: 'Cdk/Resources/Calendar',
	component: PmdsCdkCalendarComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		showEvents: true,
		isMultiple: true,
	},
	argTypes: {
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		showEvents: {
			description: 'Show events section',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
			control: {
				type: 'boolean',
			},
		},
		isMultiple: {
			description: 'Allows you to select more than one day at a time',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		skeleton: {
            description: 'Show the skeleton section',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: {
                type: 'boolean',
            },
        },
		events: {
			description: 'List of event for month showed',
			table: {
				type: {
					summary: `IPmdsCdkCalendarEvent[] {
					eventTitle: string;
					eventSubtitle: string;
					eventDate: Date;
					eventType: TPmdsCdkCalendarEventType: 'CONFIRMED'
					| 'PENDING'
					| 'SETTLED'
					| 'CUSTOM'
				}`,
				},
			},
			control: {
				type: 'object',
			},
		},
		literals: {
			description: 'Literals for component',
			table: {
				type: {
					summary: `IPmdsCdkCalendarLiterals {
					addEvent: string;
					today: string;
					title: string;
					withoutEvents: string;
					suffixDays: {
						fisrt: string,
						second: string,
						third: string,
						others: string,
					},
					month: [
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string
					];
					weekDay: [string, string, string, string, string, string, string];
				}`,
				},
			},
			type: { type: 'object', required: true },
			control: {
				type: 'object',
			},
		},
		addEvent: {
			description: 'Emit click on add event button',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			},
		},
		selectEvent: {
			description: 'Emit click on event',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<IPmdsCdkCalendarEvent>' },
			},
		},
		changeMonth: {
			description:
				'Emit change month event for get event list for the new month',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<Date>' },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkCalendarComponent',
			description: {
				component: componentInfo,
			},
		},
		layout: 'centered'
	},
};

export const WithEvents: StoryObj<PmdsCdkCalendarComponent> = {
	args: {
		events,
		literals,
	},
	render: (args) => ({
		props: {
			...args,
			addEvent: () => alert('Add event'),
			selectEvent: () => alert('Select event'),
			changeMonth: () => alert('Change month'),
		},
		template: `
      <pmds-cdk-calendar
		[events]="events"
		[isMultiple]="isMultiple"
		[literals]="literals"
		[showEvents]="showEvents"
		[skeleton]="skeleton"
		(addEvent)="addEvent()"
		(selectEvent)="selectEvent()"
	  />
    `,
	}),
};

export const Multiple: StoryObj<PmdsCdkCalendarComponent> = {
	args: {
		events,
		literals,
		isMultiple: true
	},
	render: (args) => ({
		props: {
			...args,
			addEvent: () => alert('Add event'),
			selectEvent: () => alert('Select event'),
			changeMonth: () => alert('Change month'),
		},
		template: `
      <pmds-cdk-calendar
		[events]="events"
		[isMultiple]="isMultiple"
		[literals]="literals"
		[showEvents]="showEvents"
		[skeleton]="skeleton"
		(addEvent)="addEvent()"
		(selectEvent)="selectEvent()"
	  />
    `,
	}),
};

export const EmitChanges: StoryObj<PmdsCdkCalendarComponent> = {
	args: {
		events,
		literals,
	},
	render: (args) => ({
		props: {
			...args,
			addEvent: () => alert('Add event'),
			selectEvent: () => alert('Select event'),
			changeMonth: () => alert('Change month'),
		},
		template: `
      <pmds-cdk-calendar
		[events]="events"
		[isMultiple]="isMultiple"
		[literals]="literals"
		[showEvents]="showEvents"
		[skeleton]="skeleton"
		(addEvent)="addEvent()"
		(selectEvent)="selectEvent()"
		(changeMonth)="changeMonth()"
	  />
    `,
	}),
};

export const WithoutEvents: StoryObj<PmdsCdkCalendarComponent> = {
	args: {
		events,
		literals,
	},
	render: (args) => ({
		props: {
			...args,
			addEvent: () => alert('Add event'),
			selectEvent: () => alert('Select event'),
			changeMonth: () => alert('Change month'),
		},
		template: `
      <pmds-cdk-calendar
		[literals]="literals"
		[isMultiple]="isMultiple"
		[showEvents]="showEvents"
		[skeleton]="skeleton"
		(addEvent)="addEvent()"
		(selectEvent)="selectEvent()"
	  />
    `,
	}),
};

export const Skeleton: StoryObj<PmdsCdkCalendarComponent> = {
	args: {
		events,
		literals,
		skeleton: true
	},
	render: (args) => ({
		props: {
			...args,
			addEvent: () => alert('Add event'),
			selectEvent: () => alert('Select event'),
			changeMonth: () => alert('Change month'),
		},
		template: `
      <pmds-cdk-calendar
		[literals]="literals"
		[isMultiple]="isMultiple"
		[showEvents]="showEvents"
		[skeleton]="skeleton"
		(addEvent)="addEvent()"
		(selectEvent)="selectEvent()"
	  />
    `,
	}),
};
