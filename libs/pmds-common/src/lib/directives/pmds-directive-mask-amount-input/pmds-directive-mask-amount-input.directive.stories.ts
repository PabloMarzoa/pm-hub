////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsDirectiveMaskAmountInput } from './pmds-directive-mask-amount-input.directive';
import { componentInfo } from './story-helpers/pmds-directive-mask-amount-input-component-info-story';

export default {
	title: 'Common/Directives/Mask amount input',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsDirectiveMaskAmountInput],
		}),
	],
	argTypes: {
		pmdsMAIDecimalCharacter: {
			description: 'Decimal character for add to mask',
			options: [',', '.'],
			table: {
				defaultValue: { summary: ',' },
			},
			control: {
				type: 'radio',
			},
		},
		pmdsMAIMaxIntLength: {
			description: 'Totnal interger number to mask',
			table: {
				defaultValue: { summary: '5' },
			},
			control: {
				type: 'number',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsDirectiveMaskAmountInput',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Docs: StoryObj<{
	pmdsMAIDecimalCharacter: string;
	pmdsMAIMaxIntLength: number;
}> = {
	args: {
		pmdsMAIDecimalCharacter: ',',
		pmdsMAIMaxIntLength: 5,
	},
	render: (args) => ({
		props: args,
		template: `
		<input 
		class="border p-2 w-full rounded-pmds"
		  placeholder="Write number"
		  [pmdsMAIDecimalCharacter]="pmdsMAIDecimalCharacter"
		  [pmdsMAIMaxIntLength]="pmdsMAIMaxIntLength"
		  pmdsMaskAmountInput
		  />
    `,
	}),
};
