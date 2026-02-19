////////Angular imports
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeTypeOf } from './pmds-pipe-type-of.pipe';
import { componentInfo } from "./story-helpers/pmds-pipe-type-of-component-info-story";

export default {
	title: 'Common/Pipes/Type of',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsPipeTypeOf],
		}),
	],
	argTypes: {
		value: {
			description: 'Value to transform',
			options: ['string', 1, true],
			control: {
				type: 'radio',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsPipeTypeOf',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Docs: StoryObj<{ value: string }> = {
	args: {
		value: '',
	},
	render: (args) => ({
		props: args,
		template: `
      <div>{{ value | pmdsTypeOf }}</div>
    `,
	}),
};
