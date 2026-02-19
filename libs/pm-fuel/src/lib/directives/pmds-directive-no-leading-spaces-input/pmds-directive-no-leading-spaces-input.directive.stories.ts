////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsDirectiveNoLeadingSpacesInput } from './pmds-directive-no-leading-spaces-input.directive';
import { componentInfo } from './story-helpers/pmds-directive-no-leading-component-info-story';

export default {
	title: 'Common/Directives/No leading spaces input',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsDirectiveNoLeadingSpacesInput],
		}),
	],
	parameters: {
		docs: {
			subtitle: 'PmdsDirectiveNoLeadingSpacesInput',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Docs: StoryObj<{ value: string }> = {
	render: (args) => ({
		props: args,
		template: `
		<input 
		class="border p-2 w-full rounded-pmds"
		  placeholder="Try write spaces values"
		  pmdsNoLeadingSpacesInput
		  />
    `,
	}),
};
