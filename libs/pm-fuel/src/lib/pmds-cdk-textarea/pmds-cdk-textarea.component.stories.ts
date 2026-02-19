////////Angular imports
import {
	FormsModule,
	ReactiveFormsModule,
	FormGroupDirective,
	FormBuilder,
	Validators,
} from '@angular/forms';
////////Third party libraries
import { moduleMetadata, type StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkTextareaComponent } from './pmds-cdk-textarea.component';
import { componentInfo } from './story-helpers/pmds-cdk-textarea-component-info-story';
import { literalsErrorFn } from './story-helpers/pmds-cdk-textarea-component-const-story';

export default {
	title: 'Cdk/Forms, data input and selections/Textarea',
	component: PmdsCdkTextareaComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [FormsModule, ReactiveFormsModule],
			providers: [FormGroupDirective],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		placeholder: 'Placeholder',
	},
	argTypes: {
		charactersLeftText: {
			description: 'String for characters left in max length option',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
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
		formControlName: {
			description: 'String for control name',
			table: {
				type: { summary: 'string' },
			},
		},
		isDisabled: {
			description: 'Boolean for disabled the control',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		literalsErrorFn: {
			description: 'A callback function for error literals',
			table: {
				type: {
					summary: `IPmdsCdkFormErrorMessage<unknown>: (name: string, error: string, value?: any, label?: string) => string;`,
				},
			},
		},
		maxlength: {
			description: 'Max length for textarea',
			table: {
				type: { summary: 'number' },
			},
			control: {
				type: 'number',
			},
		},
		placeholder: {
			description: 'Text for placeholder',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
		},
		tooltip: {
			description: 'Text for tooltip',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTextareaComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Textarea: StoryObj<PmdsCdkTextareaComponent> = {
	args: {
		charactersLeftText: undefined,
		isDisabled: false,
		maxlength: undefined,
		tooltip: 'Tooltip textarea',
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
		},
	}),
};

export const WithCharactersLeft: StoryObj<PmdsCdkTextareaComponent> = {
	args: {
		charactersLeftText: 'characters left',
		maxlength: 25,
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
		},
	}),
};

export const FormRequired: StoryObj<PmdsCdkTextareaComponent> = {
	args: {
		charactersLeftText: undefined,
		formControlName: 'text',
		isDisabled: false,
		maxlength: undefined,
		tooltip: 'Tooltip textarea',
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: ['', [Validators.required]],
			}),
		},
		template: `
			<p class="pb-4">
				Control is required
			</p>
			<form [formGroup]="exampleForm">
				<pmds-cdk-textarea
				[charactersLeftText]="charactersLeftText"
				[dataQA]="dataQA"
				[formControlName]="formControlName"
				[isDisabled]="isDisabled"
				[literalsErrorFn]="literalsErrorFn"
				[maxlength]="maxlength"
				[placeholder]="placeholder"
				[tooltip]="tooltip"
				/>
			</form>
			`,
	}),
};

export const DisabledWithData: StoryObj<PmdsCdkTextareaComponent> = {
	args: {
		charactersLeftText: undefined,
		formControlName: 'text',
		isDisabled: true,
		maxlength: undefined,
		tooltip: 'Tooltip textarea',
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				text: [
					{
						value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy...',
						disabled: true,
					},
				],
			}),
		},
		template: `
			<form [formGroup]="exampleForm">
				<pmds-cdk-textarea
				[charactersLeftText]="charactersLeftText"
				[dataQA]="dataQA"
				[formControlName]="formControlName"
				[isDisabled]="isDisabled"
				[literalsErrorFn]="literalsErrorFn"
				[maxlength]="maxlength"
				[placeholder]="placeholder"
				[tooltip]="tooltip"
				/>
			</form>
			`,
	}),
};

export const Skeleton: StoryObj<PmdsCdkTextareaComponent> = {
	args: {
		skeleton: true
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
		},
	}),
};