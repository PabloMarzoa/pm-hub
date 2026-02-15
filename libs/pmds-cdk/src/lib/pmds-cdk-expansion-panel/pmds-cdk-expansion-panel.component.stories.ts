////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkExpansionPanelComponent } from './pmds-cdk-expansion-panel.component';
import { componentInfo } from './story-helpers/pmds-cdk-expasion-panel-component-info-story';
import { template } from './story-helpers/pmds-cdk-expansion-panel-component-const-story';

export default {
	title: 'Cdk/Navigation/Expansion panel',
	component: PmdsCdkExpansionPanelComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storyQA-',
		title: 'Section Title',
	},
	argTypes: {
		title: {
			description: 'Title',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'string',
			},
		},
		openByDefault: {
			description: 'Set initial state',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			control: {
				type: 'boolean',
			},
		},
		tooltip: {
			description: 'Add tooltip in title',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'string',
			},
		},
		actions: {
			description: 'Custom actions',
			table: {
				type: {
					summary:
						'IPmdsCdkExpansionPanelActions[]: { icon: string, label: string, actionFn: (data?: any) => void}',
				},
			},
			control: {
				type: 'array',
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
		skeletonOpen: {
			description: 'Show the skeleton section in open version',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
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
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkExpansionPanelComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const ExpansionPanel: StoryObj<PmdsCdkExpansionPanelComponent> = {
	args: {
		openByDefault: false,
		actions: [
			{
				icon: 'pmicons-arrow-down',
				label: 'action 1',
				actionFn: () => alert('Action down click'),
			},
			{
				icon: 'pmicons-arrow-up',
				label: 'action 2',
				actionFn: () => alert('Action up click'),
			},
		],
	},
	render: (args) => ({
		props: args,
		template,
	}),
};

export const ExpansionPanelOpenByDefault: StoryObj<PmdsCdkExpansionPanelComponent> =
{
	args: {
		openByDefault: true,
	},
	render: (args: any) => ({
		props: {
			...args,
		},
		template,
	}),
};

export const ExpansionPanelWithActions: StoryObj<PmdsCdkExpansionPanelComponent> =
{
	args: {
		actions: [
			{
				icon: 'pmicons-arrow-down',
				label: 'action 1',
				actionFn: () => alert('Action down click'),
			},
			{
				icon: 'pmicons-arrow-up',
				label: 'action 2',
				actionFn: () => alert('Action up click'),
			},
		],
	},
	render: (args: any) => ({
		props: {
			...args,
		},
		template,
	}),
};

export const ExpansionPanelWithOneAction: StoryObj<PmdsCdkExpansionPanelComponent> =
{
	args: {
		actions: [
			{
				icon: 'pmicons-arrow-up',
				label: 'action 1',
				actionFn: () => alert('Action up click'),
			},
		],
	},
	render: (args: any) => ({
		props: {
			...args,
		},
		template,
	}),
};

export const Tooltip: StoryObj<PmdsCdkExpansionPanelComponent> =
{
	args: {
		actions: [
			{
				icon: 'pmicons-arrow-up',
				label: 'action 1',
				actionFn: () => alert('Action up click'),
			},
		],
		tooltip: 'tooltip'
	},
	render: (args: any) => ({
		props: {
			...args,
		},
		template,
	}),
};

export const Skeleton: StoryObj<PmdsCdkExpansionPanelComponent> =
{
	args: {
		skeleton: true,
		actions: [
			{
				icon: 'pmicons-arrow-up',
				label: 'action 1',
				actionFn: () => alert('Action up click'),
			},
		],
	},
	render: (args: any) => ({
		props: {
			...args,
		},
		template,
	}),
};

export const SkeletonOpen: StoryObj<PmdsCdkExpansionPanelComponent> =
{
	args: {
		skeleton: true,
		skeletonOpen: true,
		actions: [
			{
				icon: 'pmicons-arrow-up',
				label: 'action 1',
				actionFn: () => alert('Action up click'),
			},
		],
	},
	render: (args: any) => ({
		props: {
			...args,
		},
		template,
	}),
};