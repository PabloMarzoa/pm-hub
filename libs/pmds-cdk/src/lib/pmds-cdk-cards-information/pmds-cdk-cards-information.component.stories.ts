////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkCardsInformationComponent } from './pmds-cdk-cards-information.component';
import { componentInfo } from './story-helpers/pmds-cdk-cards-information-component-info-story';

export default {
	title: 'Cdk/Resources/Cards information',
	component: PmdsCdkCardsInformationComponent,
	tags: ['autodocs'],
	args: {
		literals: {
			icon: 'pmicons-file',
			title: 'EUR / GBP',
			subtitle: 'Rates hit 0,0000000',
		},
		dataQA: 'storybook-qa-',
		toggle: true,
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
		toggle: {
			description: 'To include the toggle in the component',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
			control: {
				type: 'boolean',
			},
		},
		disabled: {
			description: 'To control the state of the component toggle',
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
		literals: {
			description: 'The literals for the component',
			table: {
				type: {
					summary: `
					IPmdsCdkCardInformationLiterals: {
						icon: string,
						title: string,
						subtitle: string,
					}
				`,
				},
			},
			control: {
				type: 'object',
			},
			type: { required: true }
		},
		create: {
			description: 'Needed for the create state',
			table: {
				type: {
					summary: `
					IPmdsCdkCardInformationAction: {
						label: string,
						icon: string,
						actionFn: () => void
					}
				`,
				},
			},
			control: {
				type: 'object',
			},
		},
		actions: {
			description: 'List of actions to include',
			table: {
				type: {
					summary: `
					IPmdsCdkCardInformationAction[]: {
						label: string,
						icon: string,
						actionFn: () => void
					}
				`,
				},
			},
			control: {
				type: 'array',
			},
		},
		enabledChange: {
			description: 'Emit value when it change',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<boolean>' },
			}
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkCardsInformationComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Docs = {
	args: {
		actions: [
			{
				label: 'Edit',
				icon: 'pmicons-edit',
				actionFn: () => alert('Edit button'),
			},
			{
				label: 'Remove',
				icon: 'pmicons-close',
				actionFn: () => alert('Delete button'),
			},
		],
	},
};

export const NewCard: StoryObj<PmdsCdkCardsInformationComponent> = {
	args: {
		create: {
			label: 'Button',
			icon: 'pmicons-discount',
			actionFn: () => alert('Create button'),
		}
	},
};

export const withoutToggleWithoutActions: StoryObj<PmdsCdkCardsInformationComponent> =
	{
		args: {
			toggle: false,
		},
	};

export const withoutToggleWithActions: StoryObj<PmdsCdkCardsInformationComponent> =
	{
		args: {
			dataQA: '',
			toggle: false,
			literals: {
				icon: 'pmicons-file',
				title: 'EUR / GBP',
				subtitle: 'Rates hit 0,0000000',
			},
			actions: [
				{
					label: 'Edit',
					icon: 'pmicons-edit',
					actionFn: () => alert('Edit button'),
				},
				{
					label: 'Remove',
					icon: 'pmicons-close',
					actionFn: () => alert('Delete button'),
				},
			],
		},
	};

export const withToggleWithoutActions: StoryObj<PmdsCdkCardsInformationComponent> =
	{
		args: {
			dataQA: '',
			literals: {
				icon: 'pmicons-file',
				title: 'EUR / GBP',
				subtitle: 'Rates hit 0,0000000',
			},
		},
	};

export const withToggleWithActions: StoryObj<PmdsCdkCardsInformationComponent> =
	{
		args: {
			dataQA: '',
			literals: {
				icon: 'pmicons-file',
				title: 'EUR / GBP',
				subtitle: 'Rates hit 0,0000000',
			},
			actions: [
				{
					label: 'Edit',
					icon: 'pmicons-edit',
					actionFn: () => alert('Edit button'),
				},
				{
					label: 'Remove',
					icon: 'pmicons-close',
					actionFn: () => alert('Delete button'),
				},
			],
		},
	};

export const withToggleWithoutActionsDisabled: StoryObj<PmdsCdkCardsInformationComponent> =
	{
		args: {
			disabled: true,
		},
	};

export const withToggleWithActionsDisabled: StoryObj<PmdsCdkCardsInformationComponent> =
	{
		args: {
			actions: [
				{
					label: 'Edit',
					icon: 'pmicons-edit',
					actionFn: () => alert('Edit button'),
				},
				{
					label: 'Remove',
					icon: 'pmicons-close',
					actionFn: () => alert('Delete button'),
				},
			],
			disabled: true,
		},
	};

export const Skeleton: StoryObj<PmdsCdkCardsInformationComponent> =
	{
		args: {
			actions: [
				{
					label: 'Edit',
					icon: 'pmicons-edit',
					actionFn: () => alert('Edit button'),
				},
				{
					label: 'Remove',
					icon: 'pmicons-close',
					actionFn: () => alert('Delete button'),
				},
			],
			disabled: true,
			skeleton: true
		},
	};
