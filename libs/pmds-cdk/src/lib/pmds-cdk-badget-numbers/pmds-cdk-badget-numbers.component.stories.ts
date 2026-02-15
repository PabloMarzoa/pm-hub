////////Angular imports
import { PmdsCdkBadgetNumbersComponent } from './pmds-cdk-badget-numbers.component';
////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { componentInfo } from './story-helpers/pmds-cdk-badget-numbers-component-info-story';

export default {
	title: 'Cdk/Feedback & System status/Badget number',
	component: PmdsCdkBadgetNumbersComponent,
	tags: ['autodocs'],
	args: {
		hasBackground: false,
		dataQA: 'storybook-qa-'
	},
	argTypes: {
		isActive: {
			description: 'Boolean for isActive the control',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		hasBackground: {
			description: 'Add default background to badget',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		label: {
			description: 'Text for label',
			control: {
				type: 'number',
			},
			table: {
				type: { summary: 'number' },
			},
			type: { required: true },
		},
		size: {
			description: 'For size contry label',
			table: {
				type: { summary: 'small | medium | large' },
				defaultValue: { summary: 'small' },
			},
			options: ['small', 'medium', 'large'],
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
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkBadgetNumberComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const Small: StoryObj<PmdsCdkBadgetNumbersComponent> = {
	args: {
		label: 1,
		size: 'small',
		isActive: false
	}
};

export const Medium: StoryObj<PmdsCdkBadgetNumbersComponent> = {
	args: {
		label: 2,
		size: 'medium',
		isActive: false
	}
};

export const Large: StoryObj<PmdsCdkBadgetNumbersComponent> = {
	args: {
		label: 3,
		size: 'large',
		isActive: false
	}
};

export const Active: StoryObj<PmdsCdkBadgetNumbersComponent> = {
	args: {
		label: 4,
		size: 'medium',
		isActive: true
	}
};

export const Background: StoryObj<PmdsCdkBadgetNumbersComponent> = {
	args: {
		label: 5,
		size: 'medium',
		isActive: false,
		hasBackground: true
	}
};
