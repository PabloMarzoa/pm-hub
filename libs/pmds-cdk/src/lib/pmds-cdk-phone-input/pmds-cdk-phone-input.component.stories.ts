////////Angular imports
import { CommonModule } from '@angular/common';
import {
	FormBuilder,
	FormGroupDirective,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
////////Third party libraries
import {moduleMetadata, StoryObj} from '@storybook/angular';
////////Component imports
import { PmdsCdkPhoneInputComponent } from './pmds-cdk-phone-input.component';
import { componentInfo } from './story-helpers/pmds-cdk-phone-input-component-info-story';
import {
	literals,
	literalsErrorFn,
	options, optionsWithSearch,
	template,
} from './story-helpers/pmds-cdk-phone-input-component-const-story';

export default {
	title: 'Cdk/Forms, data input and selections/Phone input',
	component: PmdsCdkPhoneInputComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				CommonModule,
				FormsModule,
				PmdsCdkPhoneInputComponent,
				ReactiveFormsModule,
			],
			providers: [FormGroupDirective],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		skeleton: false,
		assetsFolder: 'assets',
		isDisabled: false,
		literals
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
		formControlName: {
			description: 'String for control name',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		assetsFolder: {
			description: 'Flags svg routes',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'assets' },
			},
			control: {
				type: 'text',
			},
		},
		isDisabled: {
			description: 'Set if is disabled',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		skeleton: {
			description: 'Set if show skeleton',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		literals: {
			description: 'Literals of the component',
			table: {
				type: {
					summary: `IPmdsCdkPhoneInputLiterals: {
							placeholder: string,
							searchPlaceholder: string,
							helperText?: string
					}`,
				},
				control: {
					type: 'object',
				},
			},
			type: { required: true }
		},
		literalsErrorFn: {
			description: 'A callback function for error literals',
			table: {
				type: {
					summary: `IPmdsCdkFormErrorMessage<unknown>: (name: string, error: string, value?: any, label?: string) => string;`,
				},
			},
		},
		options: {
			description: 'A callback function for error literals',
			table: {
				type: {
					summary: `IPmdsCdkPhoneCountryOptionDropdown: {
							codeCountry: string,
							country: string,
							label: string,
							value: string
					}`,
				},
			},
			type: { required: true },
			control: {
				type: 'array',
			}
		},
		initialValue: {
			description: 'A callback function for error literals',
			table: {
				type: {
					summary: `undefined | IPmdsCdkPhoneCountryOptionDropdown: {
							codeCountry: string,
							country: string,
							label: string,
							value: string
					}[]`,
				},
			},
			control: {
				type: 'object',
			},
		},
		currencySelected: {
			description: 'Emit the selected currency',
			table: {
				category: 'Events',
				type: {
					summary: 'EventEmitter<IPmdsCdkPhoneCountryOptionDropdown>',
				},
			},
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkPhoneInputComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const With10MaxCountries: StoryObj<PmdsCdkPhoneInputComponent> = {
	args: {
		options,
		formControlName: 'phone',
		initialValue: options[0]
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, [Validators.required]],
			}),
			literalsErrorFn
		},
		template,
	}),
};

export const WidthMoreThan10Countries: StoryObj<PmdsCdkPhoneInputComponent> = {
	args: {
		options: optionsWithSearch,
		formControlName: 'phone',
		initialValue: optionsWithSearch[0]
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, [Validators.required]],
			}),
			literalsErrorFn
		},
		template,
	}),
};

export const Disabled: StoryObj<PmdsCdkPhoneInputComponent> = {
	args: {
		options: options,
		isDisabled: true,
		formControlName: 'phone',
		initialValue: options[0]
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, [Validators.required]],
			}),
			literalsErrorFn
		},
		template,
	}),
};

export const Skeleton: StoryObj<PmdsCdkPhoneInputComponent> = {
	args: {
		options: options,
		isDisabled: true,
		formControlName: 'phone',
		initialValue: options[0],
		skeleton: true
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, [Validators.required]],
			}),
			literalsErrorFn
		},
		template,
	}),
};
