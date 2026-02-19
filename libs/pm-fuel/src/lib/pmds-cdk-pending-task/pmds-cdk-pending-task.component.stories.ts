////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkPendingTaskComponent } from './pmds-cdk-pending-task.component';
import { componentInfo } from './story-helpers/pmds-cdk-pending-task-component-info-story';

export default {
	title: 'Cdk/Resources/Pending task',
	component: PmdsCdkPendingTaskComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		skeleton: false,
		literals: {
			title: 'Pending tasks',
			view: 'View',
			viewAll: 'View all',
			noTasksTitle: 'There are no pending tasks',
			noTasksMsg: 'As soon as there are, we will show them to you here.',
		},
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
		literals: {
			description: 'Literals for component',
			table: {
				type: {
					summary: `IPmdsCdkPendingTaskLiterals: {
					title: string,
					view: string,
					viewAll: string,
					noTasksTitle: string,
					noTasksMsg: string,
				}`,
				},
			},
			control: {
				type: 'object',
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
		},
		groupTasks: {
			description: 'Group tasks item',
			table: {
				type: {
					summary: `IPmdsCdkPendingTaskGroup {
					label: string,
					tasks: number
				}`,
				},
			},
			control: {
				type: 'array',
			},
		},
		viewAll: {
			description: 'Emit viewAll tasks button click',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			},
		},
		viewGroup: {
			description: 'Emit view group tasks button click',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<IPmdsCdkPendingTaskGroup>' },
			},
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkPendingTaskComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const TwoCategories: StoryObj<PmdsCdkPendingTaskComponent> = {
	args: {
		groupTasks: [
			{
				tasks: 2,
				label: 'Pending authorization',
			},
			{
				tasks: 6,
				label: 'Pending second signature',
			},
		],
	},
};

export const MoreSixCategories: StoryObj<PmdsCdkPendingTaskComponent> = {
	args: {
		groupTasks: [
			{
				tasks: 2,
				label: 'Pending authorization',
			},
			{
				tasks: 6,
				label: 'Pending second signature',
			},
			{
				tasks: 5,
				label: 'Pending third signature',
			},
			{
				tasks: 4,
				label: 'Cancelled signature',
			},
			{
				tasks: 3,
				label: 'Retry signature',
			},
			{
				tasks: 4,
				label: 'Lapsed signature',
			},
			{
				tasks: 3,
				label: 'Confirm signature',
			},
		],
	},
};

export const WithoutTasks: StoryObj<PmdsCdkPendingTaskComponent> = {};

export const Skeleton: StoryObj<PmdsCdkPendingTaskComponent> = {
	args: {
		skeleton: true
	}
};
