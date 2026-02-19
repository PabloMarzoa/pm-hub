////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkTimelineTrackingComponent } from './pmds-cdk-timeline-tracking.component';
import { componentInfo } from './story-helpers/pmds-cdk-timeline-tracking-component-info-story';
import { localeOptions } from './story-helpers/pmds-cdk-timeline-tracking-component-const-story';
import { IPmdsCdkStepStatus } from './models/pmds-cdk-timeline-tracking-step.model';

export default {
	title: 'Cdk/Feedback & system status/Timeline tracking',
	component: PmdsCdkTimelineTrackingComponent,
	tags: ['autodocs'],
	args: {
		readMoreContent: 'More details',
		readLessContent: 'Less details',
		collapseIconAnimation: true,
		dateLocale: 'en-GB',
		dataQA: 'storybook-qa-',
	},
	argTypes: {
		steps: {
			description: 'steps interface',
			table: {
				type: {
					summary:
						'IPmdsCdkSteps: { title: string, status: "completed" | "current" | "up-coming" | "last-complete" | "error", observations: { date: "12-12-2023", message: "Message", agent: "agent" }[]',
				},
			},
			control: {
				type: 'object',
			},
		},
		readMoreContent: {
			description: 'String for readMoreContent',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		readLessContent: {
			description: 'String for readLessContent',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		collapseIconAnimation: {
			description: 'Boolean for collapseIconAnimation',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'true | false' },
				defaultValue: { summary: 'true' },
			},
		},
		dateLocale: {
			description: 'String for dateLocale',
			table: {
				type: { summary: 'string' },
			},
			options: localeOptions,
			control: {
				type: 'select',
			},
		},
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
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTimelineTrackingComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Complete: StoryObj<PmdsCdkTimelineTrackingComponent> = {
	args: {
		steps: [
			{
				title: 'Created',
				status: 'completed' as IPmdsCdkStepStatus,
				observations: [
					{
						date: new Date(),
						message: 'Payment created by',
					},
				],
			},
			{
				title: 'Authorization',
				status: 'completed' as IPmdsCdkStepStatus,
				observations: [
					{
						date: new Date(),
						message: 'Payment created by',
					},
				],
			},
			{
				title: 'Completed',
				status: 'last-complete' as IPmdsCdkStepStatus,
				observations: [
					{
						date: new Date(),
						message: 'Payment created by',
					},
				],
			},
		],
	},
};

export const Substeps: StoryObj<PmdsCdkTimelineTrackingComponent> = {
	args: {
		steps: [
			{
				title: 'Created',
				status: 'completed' as IPmdsCdkStepStatus,
				observations: [
					{
						date: new Date(),
						message: 'Payment created by',
					},
				],
				subSteps: [
					{
						title: 'Substep 1',
						status: 'current' as IPmdsCdkStepStatus,
						observations: [
							{
								date: new Date(),
								message: 'Observation by ',
								agent: 'agent',
							},
						],
					},
					{
						title: 'Substep 2',
						status: 'up-coming' as IPmdsCdkStepStatus,
					},
				],
			},
			{
				title: 'Authorization',
				status: 'up-coming' as IPmdsCdkStepStatus,
				observations: [
					{
						date: new Date(),
						message: 'Payment created by',
					},
				],
			},
			{
				title: 'Completed',
				status: 'up-coming' as IPmdsCdkStepStatus,
				observations: [
					{
						date: new Date(),
						message: 'Payment created by',
					},
				],
			},
		],
	},
};

export const AllStates = {
	args: {
		steps: [
			{
				title: 'Step 1 completed',
				status: 'completed',
				alert: {
					alertTitle: 'alert title',
					alertSubtitle: 'alert subtitle',
				},
				subSteps: [
					{
						title: 'Substep 1',
						status: 'current',
						alert: {
							alertTitle: 'alert title',
							alertSubtitle: 'alert subtitle',
						},
						colorCode: 'yellow',
					},
					{
						title: 'Substep 2',
						status: 'current',
						colorCode: 'blue',
						observations: [
							{
								date: new Date(),
								message: 'Observation by ',
								agent: 'agent',
							},
							{
								date: new Date(),
								message: 'Observation to ',
								agent: 'gpi agent',
							},
							{
								date: new Date(),
								message: 'Observation to ',
								agent: 'gpi agent',
							},
							{
								date: new Date(),
								message: 'Observation to ',
								agent: 'gpi agent',
							},
						],
					},
					{
						title: 'Substep 3',
						status: 'completed',
					},
					{
						title: 'Substep 4',
						status: 'last-complete',
						alert: {
							alertTitle: 'alert title',
							alertSubtitle: 'alert subtitle',
						},
					},
				],
				observations: [
					{
						date: new Date(),
					},
					{
						date: new Date(),
						agent: 'gpi agent',
					},
					{
						date: new Date(),
						message: 'Observation to ',
						agent: 'gpi agent',
					},
					{
						date: new Date(),
						message: 'Observation to ',
						agent: 'gpi agent',
					},
				],
			},
			{
				title: 'Step upComing',
				status: 'up-coming',
			},
			{
				title: 'Step completed',
				status: 'completed',
			},
			{
				title: 'Step current',
				status: 'current',
			},
			{
				title: 'Step success',
				status: 'last-complete',
				observations: [
					{
						date: new Date(),
						message: 'First Observation by ',
						agent: 'agent',
					},
				],
			},
			{
				title: 'Step error',
				status: 'error',
				observations: [
					{
						date: new Date(),
						message: 'First Observation by ',
						agent: 'agent',
					},
					{
						date: new Date(),
						message: 'Second Observation to ',
						agent: 'gpi agent',
					},
					{
						date: new Date(),
						message: 'Third Observation to ',
						agent: 'gpi agent',
					},
					{
						date: new Date(),
						message: 'Fourth  Observation to ',
						agent: 'gpi agent',
					},
				],
				alert: {
					alertTitle: 'alert title',
					alertSubtitle: 'alert subtitle',
				},
			},
		]
	},
};

export const Skeleton: StoryObj<PmdsCdkTimelineTrackingComponent> = {
	args: {
		skeleton: true,
		steps: [
			{
				title: 'Created',
				status: 'completed' as IPmdsCdkStepStatus,
				observations: [
					{
						date: new Date(),
						message: 'Payment created by',
					},
				],
			},
			{
				title: 'Authorization',
				status: 'completed' as IPmdsCdkStepStatus,
				observations: [
					{
						date: new Date(),
						message: 'Payment created by',
					},
				],
			},
			{
				title: 'Completed',
				status: 'last-complete' as IPmdsCdkStepStatus,
				observations: [
					{
						date: new Date(),
						message: 'Payment created by',
					},
				],
			},
		],
	},
};