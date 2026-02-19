////////Angular imports
import { FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
////////Third party libraries
import { StoryObj, moduleMetadata } from '@storybook/angular';
////////Component imports
import { PmdsCdkRadioButtonsComponent } from './pmds-cdk-radio-buttons.component';
import { componentInfo } from "./story-helpers/pmds-cdk-radio-buttons-component-info-story";

export default {
	title: 'Cdk/Forms, data input and selections/Radio buttons',
	component: PmdsCdkRadioButtonsComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [ReactiveFormsModule, FormsModule],
			providers: [FormGroupDirective],
		}),
	],
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
		groupLabel: {
			description: 'Group label for radio buttons',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		options: {
			description: 'Options for template',
			table: {
				type: {
					summary:
						'IPmdsCdkRadioButtons: { label: string, value: string | number, checked?: boolean }[]',
				},
			},
			control: {
				type: 'array',
			},
		},
		isDisabled: {
			description: 'Boolean for disabled the control',
			table: {
				type: { summary: 'true | false' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		forceVertical: {
			description: 'Boolean to force vertical align',
			table: {
				type: { summary: 'true | false' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
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
		hideLabel: {
			description: 'Boolean hide label',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		optional: {
			description: 'Boolean set if can unselect',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		checkOption: {
			description: 'Emit button close click',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			},
		},
		formControlName: {
			description: 'String for control name',
			table: {
				type: { summary: 'string' },
			},
		},
		literalsErrorFn: {
			description: 'A callback function for error literals',
			table: {
				type: {
					summary: `IPmdsCdkFormErrorMessage<unknown>: (name: string, error: string, value?: any, label?: string) => string;`,
				},
			},
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkRadioButtonsComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const Unchecked = {
	args: {
		options: [
			{
				label: 'Radio button 1',
				value: 1,
			},
		],
		isDisabled: false,
		hideLabel: false
	},
};

export const Checked: StoryObj<PmdsCdkRadioButtonsComponent> = {
	args: {
		options: [
			{
				label: 'Radio button 1',
				value: 1,
			},
			{
				label: 'Radio button 2',
				value: 2,
			},
		],
	},
	render: (args) => {
		return {
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					radioButtonControl: [1],
				}),
			},
			template: `
            <form [formGroup]="exampleForm">
                <pmds-cdk-radio-buttons
                [options]="options"
                [optional]="optional"
                [forceVertical]="forceVertical"
                formControlName="radioButtonControl"/>
            </form>
            `,
		};
	},
};

export const UnckeckedAndDisabled = {
	args: {
		options: [
			{
				label: 'Radio button 1',
				value: 1,
			},
			{
				label: 'Radio button 2',
				value: 2,
			},
		],
		isDisabled: true,
	},
};

export const ChekedAndDisabled = {
	args: {
		options: [
			{
				label: 'Radio button 1',
				value: 1,
				checked: true,
			},
			{
				label: 'Radio button 2',
				value: 2,
			},
		],
		isDisabled: true,
	},
};

export const ThreeOptions = {
	args: {
		options: [
			{
				label: 'Radio button 1',
				value: 1,
			},
			{
				label: 'Radio button 2',
				value: 2,
			},
			{
				label: 'Radio button 3',
				value: 3,
			},
		],
		isDisabled: false,
	},
};

export const WidthGroupLabel = {
	args: {
		groupLabel: 'Group label',
		options: [
			{
				label: 'Radio button 1',
				value: 1,
			},
			{
				label: 'Radio button 2',
				value: 2,
			},
			{
				label: 'Radio button 3',
				value: 3,
			},
		],
		isDisabled: false,
	},
};

export const Skeleton = {
	args: {
		options: [
			{
				label: 'Radio button 1',
				value: 1,
			},
			{
				label: 'Radio button 2',
				value: 2,
			},
		],
		skeleton:true
	},
};
