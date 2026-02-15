////////Component imports
import { PmdsCdkNotificationsPopoverComponent } from './pmds-cdk-notifications-popover.component';
import { componentInfo } from "./story-helpers/pmds-cdk-notifications-popover-component-info-story";

export default {
	title: 'Cdk/Feedback & System status/Notifications popover',
	component: PmdsCdkNotificationsPopoverComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		literals: {notifications: 'Notifications'},
		notifications:[
			{
				id:'1',
				date: '11/11/2011 - 13:13',
    			title: 'Title',
    			seen: true,
				action: () => alert('Selected notification 1'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
			{
				id:'2',
				date: '22/22/2022 - 13:13',
    			title: 'Title',
    			seen: false,
				action: () => alert('Selected notification 2'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
			{
				id:'3',
				date: '33/33/2033 - 13:13',
    			title: 'Title',
    			seen: false,
				action: () => alert('Selected notification 3'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
			{
				id:'4',
				date: '33/33/2033 - 13:13',
    			title: 'Title',
    			seen: false,
				action: () => alert('Selected notification 4'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
			{
				id:'5',
				date: '33/33/2033 - 13:13',
    			title: 'Title',
    			seen: true,
				action: () => alert('Selected notification 5'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
			{
				id:'6',
				date: '33/33/2033 - 13:13',
    			title: 'Title',
    			seen: false,
				action: () => alert('Selected notification 6'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
		],
		button: {
			label: 'Button label',
			action: () => alert('Button pressed'),
			icon: 'pmicons-full-screen'
		}
	},
	argTypes: {
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		literals: {
			description: 'Litrerals of the component',
			type: { type: 'IPmdsCdkLiteralsNotificationsPopovera' },
			table: {
				type: {
					summary: `
					IPmdsCdkLiteralsNotificationsPopover {
					notifications: string, 
				}`,
				},
			},
			control: {
				type: 'object',
			},
		},
		notifications: {
			description: 'Array with all the notifications to be shown',
			type: { type: 'IPmdsCdkNotificationsNotificationsPopover' },
			table: {
				type: {
					summary: `
					IPmdsCdkNotificationsNotificationsPopover{
						id:string
						date: string;
						action?: () => void;
						title: string;
						seen: boolean;
						info: string;
				}`,
				},
			},
			control: {
				type: 'object',
			},
		},
		button: {
			description: 'Necessary info to show button and add functionality',
			type: { type: 'IPmdsCdkButtonNotificationsPopover' },
			table: {
				type: {
					summary: `
					IPmdsCdkButtonNotificationsPopover {
						label: string;
						action: () => void;
						icon?: string
				}`,
				},
			},
			control: {
				type: 'object',
			},
		},
	},
	parameters: {
		layout: 'centered',
		docs: {
			subtitle: 'PmdsCdkNotificationsPopoverComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Docs = {
	args: {
	},
};

export const NoPendingNotifications = {
	args: {
		notifications:[
			{
				id:'1',
				date: '11/11/2011 - 13:13',
    			title: 'Title',
    			seen: true,
				action: () => alert('Selected notification 1'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
			{
				id:'2',
				date: '22/22/2022 - 13:13',
    			title: 'Title',
    			seen: true,
				action: () => alert('Selected notification 2'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
			{
				id:'3',
				date: '33/33/2033 - 13:13',
    			title: 'Title',
    			seen: true,
				action: () => alert('Selected notification 3'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
		],
	},
};

export const Pending = {
	args: {
		notifications:[
			{
				id:'1',
				date: '11/11/2011 - 13:13',
    			title: 'Title',
    			seen: false,
				action: () => alert('Selected notification 1'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
			{
				id:'2',
				date: '22/22/2022 - 13:13',
    			title: 'Title',
    			seen: false,
				action: () => alert('Selected notification 2'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
			{
				id:'3',
				date: '33/33/2033 - 13:13',
    			title: 'Title',
    			seen: false,
				action: () => alert('Selected notification 3'),
    			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.'
			},
		],
	},
};

