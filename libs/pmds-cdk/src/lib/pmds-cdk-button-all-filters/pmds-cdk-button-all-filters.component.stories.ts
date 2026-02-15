////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkButtonAllFiltersComponent } from './pmds-cdk-button-all-filters.component';
import { componentInfo } from './story-helpers/pmds-cdk-button-all-filters-component-info-story';

export default {
	title: 'Cdk/Buttons/Button all filters',
	component: PmdsCdkButtonAllFiltersComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		label: 'All filters',
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
		disabled: {
			description: 'For disable click',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		label: {
			description: 'For label button',
			table: {
				type: { summary: 'string' },
			},
			type: { required: true },
			control: {
				type: 'text',
			},
		},
		open: {
			description: 'Change style with the all filters all open',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			},
			control: {
				type: 'boolean',
			},
		},
		buttonClick: {
			description: 'Emit button click',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			}
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkButtonAllFiltersComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Enabled: StoryObj<PmdsCdkButtonAllFiltersComponent> = {
	args: {
		disabled: false,
	},
};

export const Disabled: StoryObj<PmdsCdkButtonAllFiltersComponent> = {
	args: {
		disabled: true,
	},
};

export const Open: StoryObj<PmdsCdkButtonAllFiltersComponent> = {
	args: {
		open: true,
	},
};

export const OpenDisabled: StoryObj<PmdsCdkButtonAllFiltersComponent> = {
	args: {
		open: true,
		disabled: true,
	},
};
