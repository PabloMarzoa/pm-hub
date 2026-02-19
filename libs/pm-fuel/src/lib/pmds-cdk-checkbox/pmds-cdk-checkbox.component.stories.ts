////////Angular imports
import {FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import {CommonModule} from '@angular/common';
////////Third party libraries
import {moduleMetadata, StoryObj} from '@storybook/angular';
////////Component imports
import {PmdsCdkCheckboxComponent} from './pmds-cdk-checkbox.component';
import {componentInfo} from './story-helpers/pmds-cdk-checkbox-component-info-story';
import {literalsErrorFn} from './story-helpers/pmds-cdk-checkbox-component-const-story';

export default {
	title: 'Cdk/Forms, data input and selections/Checkbox',
	component: PmdsCdkCheckboxComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		label: 'Label',
		literalsErrorFn,
	},
	decorators: [
		moduleMetadata({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				PmdsCdkCheckboxComponent,
			],
			providers: [FormGroupDirective],
		}),
	],
	argTypes: {
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: {summary: 'string'}
			},
			control: {
				type: 'text',
			},
		},
		label: {
			description: 'Label for checkbox that can contain html',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		formControlName: {
			description: 'String for control name',
			table: {
				type: {summary: 'string'},
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
		isDisabled: {
			description: 'Boolean for isDisabled the control',
			control: {
				type: 'boolean',
			},
			table: {
				type: {summary: 'boolean'}
			},
		},
		valueChanges: {
			description: 'Emit value when it change',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<boolean>'},
			}
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkCheckboxComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const WithLabel: StoryObj<PmdsCdkCheckboxComponent> = {};

export const WithLabelLinked: StoryObj<PmdsCdkCheckboxComponent> = {
	args: {
		label: `<a class='text-color-action-main-default'> Option </a>`
	}
};

export const WithoutLabel: StoryObj<PmdsCdkCheckboxComponent> = {
	args: {
		label: undefined,
	},
};

export const WithFormRequiredTrue: StoryObj<PmdsCdkCheckboxComponent> = {
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				exampleControl: [false, [Validators.requiredTrue]],
			}),
		},
		template: `
        <form [formGroup]="exampleForm">
          <pmds-cdk-checkbox
						[dataQA]="dataQA"
						[literalsErrorFn]="literalsErrorFn"
            			[label]="label"
            			formControlName="exampleControl"
            />
        </form>
    `,
	}),
};

export const allOptions: StoryObj<PmdsCdkCheckboxComponent> = {
	render: (args) => {
		return {
			props: {
				...args,
				literalsErrorFn,
				exampleForm: new FormBuilder().group({
					trueControl: [true, Validators.requiredTrue],
					falseControl: [false, Validators.requiredTrue],
					indeterminateForm: [undefined, Validators.requiredTrue],
				}),
			},
			template: `
        <form [formGroup]="exampleForm" class="flex">
          <pmds-cdk-checkbox
						[dataQA]="dataQA"
            label='True value'
            formControlName="trueControl"
						[literalsErrorFn]="literalsErrorFn"
            [isDisabled]="isDisabled"/>
            <pmds-cdk-checkbox
						[dataQA]="dataQA"
            class="ml-2"
            label='False value'
            formControlName="falseControl"
						[literalsErrorFn]="literalsErrorFn"
            [isDisabled]="isDisabled"/>
            <pmds-cdk-checkbox
						[dataQA]="dataQA"
            class="ml-2"
            label='Indeterminate value'
            formControlName="indeterminateForm"
						[literalsErrorFn]="literalsErrorFn"
            [isDisabled]="isDisabled"/>
        </form>
    `,
		};
	},
};

export const AllOptionsDisabled: StoryObj<PmdsCdkCheckboxComponent> = {
	args: {
		isDisabled: true,
	},
	render: (args) => {
		return {
			props: {
				...args,
				literalsErrorFn,
				exampleForm: new FormBuilder().group({
					trueControl: [true, [Validators.requiredTrue]],
					falseControl: [false, [Validators.requiredTrue]],
					indeterminateForm: [undefined, [Validators.requiredTrue]],
				}),
			},
			template: `
        <form [formGroup]="exampleForm" class="flex">
          <pmds-cdk-checkbox
						[dataQA]="dataQA"
            label='True value'
            formControlName="trueControl"
						[literalsErrorFn]="literalsErrorFn"
            [isDisabled]="isDisabled"/>
            <pmds-cdk-checkbox
						[dataQA]="dataQA"
            class="ml-2"
            label='False value'
            formControlName="falseControl"
						[literalsErrorFn]="literalsErrorFn"
            [isDisabled]="isDisabled"/>
            <pmds-cdk-checkbox
						[dataQA]="dataQA"
            class="ml-2"
            label='Indeterminate value'
            formControlName="indeterminateForm"
						[literalsErrorFn]="literalsErrorFn"
            [isDisabled]="isDisabled"/>
        </form>
    `,
		};
	},
};

export const Skeleton: StoryObj<PmdsCdkCheckboxComponent> = {
	args: {
		skeleton: true,
	},
};