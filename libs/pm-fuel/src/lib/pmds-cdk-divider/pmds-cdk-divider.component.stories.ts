////////Third party libraries
import { StoryObj, moduleMetadata } from '@storybook/angular';
////////Component imports
////////Component imports
import { PmdsCdkDividerComponent } from './pmds-cdk-divider.component';
import { componentInfo } from './story-helpers/pmds-cdk-divider-component-info-story';

export default {
	title: 'Cdk/Resources/Divider',
	component: PmdsCdkDividerComponent,
	tags: ['autodocs'],
	decorators: [],
	args: {
		dataQA: 'storybook-qa-',
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
		styles: {
			description: 'Style configuration',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'mb-6' },
			},
			control: {
				type: 'text',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkDividerComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const WithDefaultColor: StoryObj<PmdsCdkDividerComponent> = {};

export const WithCustomStyles: StoryObj<PmdsCdkDividerComponent> = {
	args: {
		styles: 'mb-0',
	},
};
