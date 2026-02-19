////////Component imports
import { PmdsCdkCardsAccountActionComponent } from './pmds-cdk-cards-account-action.component';
import { componentInfo } from './story-helpers/pmds-cdk-cards-account-action-component-info-story';

export default {
	title: 'Cdk/Resources/Cards account action',
	component: PmdsCdkCardsAccountActionComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
	},
	argTypes: {
		icon: {
			description: 'Icon string, name must be in the icons library',
			table: {
				type: { summary: 'pmicons-XXXX' },
			},
			control: {
				type: 'text',
			},
		},
		label: {
			description: 'Label for button',
			table: {
				type: { summary: `string` },
			},
			control: {
				type: 'text',
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
		clickCard: {
			description: 'Emit click event',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>()' },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkCardsAccountActionComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Primary = {
	args: {
		icon: 'pmicons-plus',
		label: 'Label',
	},
};

export const WithoutIcon = {
	args: {
		label: 'Label',
	},
};

export const Skeleton = {
	args: {
		skeleton: true,
	},
};
