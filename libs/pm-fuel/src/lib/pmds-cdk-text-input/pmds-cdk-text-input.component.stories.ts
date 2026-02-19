////////Angular imports
import { NgClass, NgIf } from '@angular/common';
import {
	FormBuilder,
	FormGroupDirective,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import {
	componentWrapperDecorator,
	moduleMetadata,
	StoryObj,
} from '@storybook/angular';
////////Component imports
import { PmdsCdkTextInputComponent } from './pmds-cdk-text-input.component';
import { componentInfo } from './story-helpers/pmds-cdk-text-input-component-info-story';
import {
	literalsErrorFn,
	template,
} from './story-helpers/pmds-cdk-text-input-component-const-story';

export default {
	title: 'Cdk/Forms, data input and selections/Text input',
	component: PmdsCdkTextInputComponent,
	tags: ['autodocs'],
	decorators: [
		componentWrapperDecorator(
			(story) => `
        <div class="py-4">
            ${story}
        </div>`
		),
		moduleMetadata({
			imports: [
				NgIf,
				NgClass,
				FormsModule,
				ReactiveFormsModule,
				PmdsCdkTextInputComponent,
			],
			providers: [FormGroupDirective],
		}),
	],
	args: {
		decimalCharacter: ',',
		dataQA: 'storybook-qa-',
		placeholder: 'Placeholder',
		type: 'text',
		inputmode: 'text',
		showClear: true
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
		},
		icon: {
			description: 'Icon string, name must be in the icons library',
			table: {
				type: { summary: 'pmicons-XXXX' },
			},
			control: {
				type: 'text',
			},
		},
		iconPosition: {
			description: 'String for icon position',
			table: {
				type: { summary: 'left | right' },
				defaultValue: { summary: 'right' },
			},
			options: ['left', 'right'],
			control: { type: 'select' },
		},
		showClear: {
			description: 'Boolean for show clear icon',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'true | false' },
				defaultValue: { summary: 'true' },
			},
		},
		isDisabled: {
			description: 'Boolean for disabled',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'true | false' },
				defaultValue: { summary: 'false' },
			},
		},
		skeleton: {
			description: 'Show the skeleton section',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		tagCategoryData: {
			description: 'Data for add a tag category **IPmdsCdkTextInputTagCategoryData**',
			control: {
				type: 'object',
			},
			table: {
				type: { summary: `IPmdsCdkTextInputTagCategoryData {
					assetsFolder?: string;
					flagCode?: string;
					label?: string;
					showIcon?: boolean;
					tooltip?: string;
					tooltipPosition?: TPmdsDirectiveTooltipPosition}` },
			},
		},
		placeholder: {
			description: 'String for placeholder',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		helperText: {
			description: 'String for helper text',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		charactersLeftText: {
			description: 'String for characters left in max length option',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		tooltip: {
			description: 'String for tooltip',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		tooltipTitle: {
			description: 'String for tooltip title',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		suffix: {
			description: 'String for suffix',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		styles: {
			description: 'Styles for tooltip',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		decimalCharacter: {
			description: 'In number type, the decimal character used',
			table: {
				type: { summary: ', | .' },
				defaultValue: { summary: ',' },
			},
			options: [',', '.'],
			control: {
				type: 'radio',
			},
		},
		maxIntLength: {
			description: 'In type number mode max length integer part',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 7 },
			},
			control: {
				type: 'number',
			},
		},
		maxDecLength: {
			description: 'In type number mode max length decimal part',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: 2 },
			},
			control: {
				type: 'number',
			},
		},
		maxlength: {
			description: 'Max length for string',
			table: {
				type: { summary: 'number' },
			},
			control: {
				type: 'number',
			},
		},
		minlength: {
			description: 'Min length for string',
			table: {
				type: { summary: 'number' },
			},
			control: {
				type: 'number',
			},
		},
		max: {
			description: 'Max number to input',
			table: {
				type: { summary: 'number' },
			},
			control: {
				type: 'number',
			},
		},
		min: {
			description: 'Min number to input',
			table: {
				type: { summary: 'number' },
			},
			control: {
				type: 'number',
			},
		},
		type: {
			description: 'String for type **IPmdsCdkTextInputType**',
			table: {
				type: { summary: 'text | password | number' },
				defaultValue: { summary: `text` },
			},
			options: ['text', 'password', 'number',],
			control: { type: 'select' },
		},
		inputmode: {
			description: 'String for type **IPmdsCdkTextInputMode**',
			table: {
				type: { summary: 'text | decimal | numeric | tel | search | email | url' },
				defaultValue: { summary: `text` },
			},
			options: ['text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'],
			control: { type: 'select' },
		},
		literalsErrorFn: {
			description: 'A callback function for error literals **IPmdsCdkFormErrorMessage**',
			table: {
				type: {
					summary: `IPmdsCdkFormErrorMessage<unknown>: (name: string, error: string, value?: any, label?: string) => string;`,
				},
			},
		},
		inputChange: {
			description: 'Emit value when it change',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<string>' },
			}
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTextInputComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Text: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		tooltip: 'Tooltip',
		tooltipTitle: 'Title',
		maxIntLength: 7,
		maxDecLength: 2,
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template,
	}),
};

export const Number: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		placeholder: 'Only numbers',
		type: 'number',
		maxIntLength: 7,
		maxDecLength: 2,
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template,
	}),
};

export const SimpleValidatorEmail: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		isDisabled: false,
		placeholder: 'Email',
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: [
					'',
					[
						Validators.required,
						Validators.pattern(
							'^[a-zA-Z0-9._%+-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+@[a-zA-Z0-9.-]+\\.[a-z]{2,}$'
						),
					],
				],
			}),
		},
		template,
	}),
};

export const Disabled: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		placeholder: 'Disabled',
		isDisabled: true,
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template,
	}),
};

export const DisabledFilled: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		placeholder: 'Disabled',
		isDisabled: true,
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['Filled', [Validators.required]],
			}),
		},
		template,
	}),
};

export const HelperText: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		placeholder: 'Helper text',
		helperText: 'Helper text',
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template,
	}),
};

export const Icon: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		icon: 'pmicons-account-user',
		type: 'text',
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template,
	}),
};

export const Tooltip: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		tooltip: 'Tooltip'
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template,
	}),
};

export const WithoutForm: StoryObj<PmdsCdkTextInputComponent> = {
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
		},
	}),
};

export const WithoutMaxLength10: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		charactersLeftText: 'characters left',
		maxlength: 10,
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
		},
	}),
};

export const TagCategory: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		tagCategoryData: {
			assetsFolder: 'assets',
			flagCode: 'EU',
			label: 'ISO'
		}
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template,
	}),
};

export const Suffix: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		suffix: '0.00'
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template,
	}),
};

export const Skeleton: StoryObj<PmdsCdkTextInputComponent> = {
	args: {
		suffix: '0.00',
		skeleton: true
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template,
	}),
};
