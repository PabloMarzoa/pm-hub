////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkTextComponent } from './pmds-cdk-text.component';
import { componentInfo } from './story-helpers/pmds-cdk-text-component-info-story';

export default {
	title: 'Cdk/Resources/Text',
	component: PmdsCdkTextComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-'
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
		text: {
			description: 'Text to show',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		type: {
			description: 'Type of text',
			table: {
				type: {
					summary:
						'TPmdsCdkTextType: | "module-title" | "section-title" | "description" | "category"',
				},
				default: { summary: 'section-title' },
			},
			options: [
				'module-title',
				'section-title',
				'description',
				'category',
			],
			control: {
				type: 'select',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTextComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const SectionTitle: StoryObj<PmdsCdkTextComponent> = {
	args: {
		text: 'Section title',
		type: 'section-title',
	},
};

export const ModuleTitle: StoryObj<PmdsCdkTextComponent> = {
	args: {
		text: 'Module title',
		type: 'module-title',
	},
};

export const Category: StoryObj<PmdsCdkTextComponent> = {
	args: {
		text: 'Category',
		type: 'category',
	},
};

export const Description: StoryObj<PmdsCdkTextComponent> = {
	args: {
		text: 'Description',
		type: 'description',
	},
};
