////////Angular imports
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
////////Third party libraries
import {moduleMetadata, StoryObj} from '@storybook/angular';
////////Component imports
import {PmdsPipeAmountFormat} from './pmds-pipe-amount-format.pipe';
import {componentInfo} from "./story-helpers/pmds-pipe-amount-format-component-info-story";

export default {
	title: 'Common/Pipes/Amount format',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsPipeAmountFormat],
		}),
	],
	argTypes: {
		value: {
			description: 'Value to transform',
			table: {
				type: { summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		showDecimals: {
			description: 'Boolean for show decimals',
			table: {
				type: { summary: 'boolean'}
			},
			control: {
				type: 'boolean',
			},
		},
		locale: {
			description: 'Locale to parse number',
			table: {
				type: { summary: 'string'},
				defaultValue: { summary: 'es-ES'}
			},
			options: ['es-ES', 'en-EN'],
			control: {
				type: 'radio',
			},
		},
		numberDecimals: {
			description: 'Number decimal to show',
			table: {
				type: { summary: 'number'},
				defaultValue: { summary: '2'}
			},
			control: {
				type: 'number',
			},
		},
		numberFormat: {
			description: 'String with the number format define for user, this value rewrite the locale option',
			table: {
				type: { summary: 'string'},
			},
			options: ['###,###.##', '###.###,##'],
			control: {
				type: 'radio',
			},
		},
		currency: {
			description: 'String with the currency code to format the amount',
			table: {
				type: { summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsPipeAmountFormat',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const twoDecimals: StoryObj<{ value: string, showDecimals: boolean, locale: string, numberDecimals: number, numberFormat:string, currency:string }> = {
	args: {
		value: '12345.67',
		showDecimals: true,
		locale: 'ES-es',
		numberDecimals: 2,
		numberFormat: '',
		currency: '',
	},
	render: (args) => {
		registerLocaleData(localeEs, 'es-ES');
		registerLocaleData(localeEn, 'en-EN');
		return {
			props: args,
			template: `
      <div>{{ value | pmdsAmountFormat:showDecimals:locale:numberDecimals:numberFormat:currency }}</div>
    `,
		}
	},
};

export const byCurrencyJPY: StoryObj<{ value: string, showDecimals: boolean, locale: string, numberDecimals: number, numberFormat:string, currency:string }> = {
	args: {
		value: '1101.67',
		showDecimals: true,
		locale: 'en_US',
		numberDecimals: 2,
		numberFormat: '###.###,##',
		currency: 'JPY',
	},
	render: (args) => {
		registerLocaleData(localeEs, 'es-ES');
		registerLocaleData(localeEn, 'en-EN');
		return {
			props: args,
			template: `
      <div>{{ value | pmdsAmountFormat:showDecimals:locale:numberDecimals:numberFormat:currency }}</div>
    `,
		}
	},
};

export const byCurrencyHUF: StoryObj<{ value: string, showDecimals: boolean, locale: string, numberDecimals: number, numberFormat:string, currency:string }> = {
	args: {
		value: '12345.67',
		showDecimals: true,
		locale: 'es-ES',
		numberDecimals: 2,
		numberFormat: '',
		currency: 'HUF',
	},
	render: (args) => {
		registerLocaleData(localeEs, 'es-ES');
		registerLocaleData(localeEn, 'en-EN');
		return {
			props: args,
			template: `
      <div>{{ value | pmdsAmountFormat:showDecimals:locale:numberDecimals:numberFormat:currency }}</div>
    `,
		}},
};
