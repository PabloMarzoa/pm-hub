////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkErrorPageComponent } from './pmds-cdk-error-page.component';
import { componentInfo } from "./story-helpers/pmds-cdk-error-page-component-info-story";
import { literals } from "./story-helpers/pmds-cdk-error-page-component-const-story";

export default {
	title: 'Cdk/Modules/Error page',
	component: PmdsCdkErrorPageComponent,
	tags: ['autodocs'],
	args: {
		isModule: false,
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
		isModule: {
			description: 'Force view element in block',
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
			control: {
				type: 'boolean',
			},
		},
		errorCode: {
			description: 'Error code no custom',
			table: {
				type: {
					summary:
						"TPmdsCdkErrorPageType: '401' | '403' | '404' | '500', '503'",
				},
				dafaultValue: {
					summary:
						"'503'",
				}
			},
			options: ['401', '403', '404', '500', '503'],
			control: {
				type: 'select',
			},
		},
		literals: {
			description: `Literals for errors code not custom
			<li>**error**: error title</li>
			<li>**title**: head title</li>
			<li>**paragraph**: information for the error and instructions</li>
			<li>**buttons**: each buttons with actions</li>
			`,
			table: {
				type: {
					summary: `IPmdsCdkErrorPageLiterals: {
						401?: IPmdsCdkErrorPageLiteralsError: {
							error: string;
							title: string;
							paragraph: string;
							buttons: [
								[IPmdsCdkErrorPageButtons: {label: string, type: 'primary' | 'secondary', disabled: boolean, action: () => void}, IPmdsCdkErrorPageButtons? {label: string, type: 'primary' | 'secondary', action: () => void}]
							]
						},
						403?: IPmdsCdkErrorPageLiteralsError: {
							error: string;
							title: string;
							paragraph: string;
							buttons: [
								[IPmdsCdkErrorPageButtons: {label: string, type: 'primary' | 'secondary', disabled: boolean, action: () => void}, IPmdsCdkErrorPageButtons? {label: string, type: 'primary' | 'secondary', action: () => void}]
							]
						},
						404?: IPmdsCdkErrorPageLiteralsError: {
							error: string;
							title: string;
							paragraph: string;
							buttons: [
								[IPmdsCdkErrorPageButtons: {label: string, type: 'primary' | 'secondary', disabled: boolean, action: () => void}, IPmdsCdkErrorPageButtons? {label: string, type: 'primary' | 'secondary', action: () => void}]
							]
						},
						500?: IPmdsCdkErrorPageLiteralsError: {
							error: string;
							title: string;
							paragraph: string;
							buttons: [
								[IPmdsCdkErrorPageButtons: {label: string, type: 'primary' | 'secondary', disabled: boolean, action: () => void}, IPmdsCdkErrorPageButtons? {label: string, type: 'primary' | 'secondary', action: () => void}]
							]
						},
						503?: IPmdsCdkErrorPageLiteralsError: {
							error: string;
							title: string;
							paragraph: string;
							buttons: [
								[IPmdsCdkErrorPageButtons: {label: string, type: 'primary' | 'secondary', disabled: boolean, action: () => void}, IPmdsCdkErrorPageButtons? {label: string, type: 'primary' | 'secondary', action: () => void}]
							]
						};
					}`,
				},
			},
			control: {
				type: 'object',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkErrorPageComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const Error401: StoryObj<PmdsCdkErrorPageComponent> = {
	args: {
		errorCode: '401',
		literals,
	},
};

export const Error403: StoryObj<PmdsCdkErrorPageComponent> = {
	args: {
		errorCode: '403',
		literals,
	},
};

export const Error404: StoryObj<PmdsCdkErrorPageComponent> = {
	args: {
		errorCode: '404',
		literals,
	},
};

export const Error500: StoryObj<PmdsCdkErrorPageComponent> = {
	args: {
		errorCode: '500',
		literals,
	},
};

export const Error503: StoryObj<PmdsCdkErrorPageComponent> = {
	args: {
		errorCode: '503',
		literals,
	},
};

export const Error401Module: StoryObj<PmdsCdkErrorPageComponent> = {
	args: {
		errorCode: '401',
		isModule: true,
		literals,
	},
};

export const Error403Module: StoryObj<PmdsCdkErrorPageComponent> = {
	args: {
		errorCode: '403',
		isModule: true,
		literals,
	},
};

export const Error404Module: StoryObj<PmdsCdkErrorPageComponent> = {
	args: {
		errorCode: '404',
		isModule: true,
		literals,
	},
};

export const Error500Module: StoryObj<PmdsCdkErrorPageComponent> = {
	args: {
		errorCode: '500',
		isModule: true,
		literals,
	},
};

export const Error503Module = {
	args: {
		errorCode: '503',
		isModule: true,
		literals,
	},
};
