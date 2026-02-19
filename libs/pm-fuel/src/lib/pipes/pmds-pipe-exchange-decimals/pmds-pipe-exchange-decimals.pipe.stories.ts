////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeExchangeDecimals } from './pmds-pipe-exchange-decimals.pipe';
import { componentInfo } from './story-helpers/pmds-pipe-exchange-decimals-component-info-story';

export default {
	title: 'Common/Pipes/Exchange decimals',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsPipeExchangeDecimals],
		}),
	],
	argTypes: {
		value: {
			description: 'Value to transform',
			control: {
				type: 'text',
			},
			type: { required: true },
		},
		bigFont: {
			description: 'Font class for big number values',
			control: {
				type: 'text',
			},
			type: { required: true },
		},
		format: {
			description: 'Format data',
			options: ['xx.XXxxxx', 'xx.xxXXxx', 'xx.xxxxXX'],
			control: {
				type: 'select',
			},
			table: {
				type: {
					summary: 'xx.XXxxxx | xx.xxXXxx | xx.xxxxXX',
				},
				defaultValue: {
					summary: 'xx.xxXXxx',
				},
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsPipeExchangeDecimals',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const MiniPrice: StoryObj<{ value: string, format: string, bigFont: string }> = {
	args: {
		value: '12.3456',
		format: 'xx.xxXXxx',
		bigFont: 'font-display-desktop-s-bold',
	},
	render: (args) => ({
		props: args,
		template: `
      <div class="text-color-text-primary font-headline-desktop-m-bold mobile:font-headline-mobile-m-bold" [innerHTML]="value | pmdsExchangeDecimals : format : bigFont"></div>
    `,
	}),
};

export const AdvanceMiniPrice: StoryObj<{ value: string, format: string, bigFont: string }> = {
	args: {
		value: '12.3456',
		format: 'xx.XXxxxx',
		bigFont: 'font-display-desktop-m-bold',
	},
	render: (args) => ({
		props: args,
		template: `
		<div class="text-color-text-primary font-body-s-bold" [innerHTML]="value | pmdsExchangeDecimals : format : bigFont"></div>
    `,
	}),
};

export const SixDecimals: StoryObj<{ value: string, format: string, bigFont: string }> = {
	args: {
		value: '12.345678',
		format: 'xx.xxxxXX',
		bigFont: 'font-display-desktop-s-bold',
	},
	render: (args) => ({
		props: args,
		template: `
      <div class="text-color-text-primary font-headline-desktop-m-bold mobile:font-headline-mobile-m-bold" [innerHTML]="value | pmdsExchangeDecimals : format : bigFont"></div>
    `,
	}),
};
