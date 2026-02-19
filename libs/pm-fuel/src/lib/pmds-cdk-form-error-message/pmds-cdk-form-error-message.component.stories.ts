////////Angular imports
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
////////Third party libraries
import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
////////Component imports
import {PmdsCdkFormErrorMessageComponent} from './pmds-cdk-form-error-message.component';
import {componentInfo} from "./story-helpers/pmds-cdk-form-error-message-component-info-story";
import {literalsErrorFn} from "./story-helpers/pmds-cdk-form-error-message-component-const-story";

export default {
	title: 'Cdk/Forms, data input and selections/Form error message',
	component: PmdsCdkFormErrorMessageComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				PmdsCdkFormErrorMessageComponent
			]
		}),
	],
	args: {
		hideError: false,
		dataQA: 'storybook-qa-'
	},
	argTypes: {
		control: {
			description: 'Form control class for reactive forms',
			table: {
				type: {summary: 'FormControl<any> | AbstractControl<any, any>'}
			},
		},
		controlName: {
			description: 'Form control name',
			table: {
				type: {summary: 'string'}
			},
		},
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		label: {
			description: 'Label for component',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		hideError: {
			description: 'Show / hide error message',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'}
			},
			control: {
				type: 'boolean',
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
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkFormErrorMessageComponent',
			description: {
				component: componentInfo
			},
		},
	},
} as Meta<PmdsCdkFormErrorMessageComponent>;

export const InputWithRequiredError: StoryObj<PmdsCdkFormErrorMessageComponent> = {
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				stringControl: ['', Validators.required],
			}),
			literalsErrorFn
		},
		template: `
      <div class="text-sm text-color-text-primary pb-4">
        <p>* Required</p>
      </div>
      <form [formGroup]="exampleForm">
        <input class="text-base text-color-text-primary w-full h-12 px-4 rounded-[4px] outline-none border border-color-border-default focus:border-color-border-focus"
          type="text"
          placeholder="Text"
          formControlName="stringControl"
        />
        <pmds-cdk-form-error-message
          	[control]="exampleForm.get('stringControl')"
          	[controlName]="'string field'"
			[label]="label"
			[dataQA]="dataQA"
          	[hideError]="hideError"
          	[literalsErrorFn]="literalsErrorFn"
        />
      </form>
    `,
	})
};

export const InputWithTextErrors: StoryObj<PmdsCdkFormErrorMessageComponent> = {
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				stringControl: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5)]],
			}),
			literalsErrorFn
		},
		template: `
      <div class="text-sm text-color-text-primary">
        <p>* Required</p>
        <p>* Min. length 2</p>
        <p>* Max. length 5</p>
      </div>
      <form [formGroup]="exampleForm">
        <input class="text-base text-color-text-primary w-full h-12 px-4 rounded-[4px] outline-none border border-color-border-default focus:border-color-border-focus"
          type="text"
          placeholder="Text"
          formControlName="stringControl"
        />
        <pmds-cdk-form-error-message
          	[control]="exampleForm.get('stringControl')"
          	[controlName]="'string field'"
			[label]="label"
			[dataQA]="dataQA"
          	[hideError]="hideError"
          	[literalsErrorFn]="literalsErrorFn"
        />
      </form>
    `,
	})
};

export const InputWithNumberErrors: StoryObj<PmdsCdkFormErrorMessageComponent> = {
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				numberControl: [null, [Validators.required, Validators.min(5), Validators.max(10)]],
			}),
			literalsErrorFn
		},
		template: `
      <div class="text-sm text-color-text-primary">
        <p>* Required</p>
        <p>* Only numbers</p>
        <p>* Min. 5</p>
        <p>* Max. 10</p>
      </div>
      <form [formGroup]="exampleForm">
        <input class="text-base text-color-text-primary w-full h-12 px-4 rounded-[4px] outline-none border border-color-border-default focus:border-color-border-focus"
          type="number"
          placeholder="Number"
          formControlName="numberControl"
        />
        <pmds-cdk-form-error-message
          	[control]="exampleForm.get('numberControl')"
          	[controlName]="'number field'"
			[label]="label"
			[dataQA]="dataQA"
          	[hideError]="hideError"
         	[literalsErrorFn]="literalsErrorFn"
        />
      </form>
    `,
	})
};

export const InputWithPatternErrors: StoryObj<PmdsCdkFormErrorMessageComponent> = {
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				patternControl: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9-]*$")]],
			}),
			literalsErrorFn
		},
		template: `
      <div class="text-sm text-color-text-primary">
        <p>* Required</p>
        <p>* Only valid letters and numbers</p>
      </div>
      <form [formGroup]="exampleForm">
        <input class="text-base text-color-text-primary w-full h-12 px-4 rounded-[4px] outline-none border border-color-border-default focus:border-color-border-focus"
          type="text"
          placeholder="Text"
          formControlName="patternControl"
        />
        <pmds-cdk-form-error-message
          	[control]="exampleForm.get('patternControl')"
          	[controlName]="'pattern field'"
			[label]="label"
			[dataQA]="dataQA"
          	[hideError]="hideError"
          	[literalsErrorFn]="literalsErrorFn"
        />
      </form>
    `,
	})
};
