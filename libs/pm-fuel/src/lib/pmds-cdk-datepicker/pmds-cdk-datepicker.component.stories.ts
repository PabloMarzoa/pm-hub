////////Angular imports
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
////////Third party libraries
import {moduleMetadata, StoryObj} from '@storybook/angular';
////////Component imports
import {PmdsCdkDatepickerComponent} from './pmds-cdk-datepicker.component';
import {componentInfo} from "./story-helpers/pmds-cdk-datepicker-component-info-story";
import {literals, literalsErrorFn, template} from "./story-helpers/pmds-cdk-datepicker-component-const-story";

export default {
	title: 'Cdk/Forms, data input and selections/Datepicker',
	component: PmdsCdkDatepickerComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [FormsModule, ReactiveFormsModule],
		}),
	],
	args: {
		skeleton: false,
		dataQA: 'storybook-qa-',
		format: 'DD/MM/YYYY',
		formControlName: 'date',
		placeholder: 'Placeholder',
		literals,
		isDisabled: false,
	},
	argTypes: {
		dateInfo: {
			description: 'Show the letters in date',
			table: {
				type: {
					summary:
						'IPmdsCdkDatepickerDateInfo[]: {date: Date, label: string;}',
				},
			},
			control: {
				type: 'object',
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
		skeleton: {
			description: 'Show skeleton',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		formControlName: {
			description: 'Form control name for dropdown',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		format: {
			description: 'Format to show and get the date',
			table: {
				type: {
					summary:
						"TPmdsCdkDatepickerDateFormat: 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD', 'DD-MM-YYYY', 'MM-DD-YYYY', 'YYYY-MM-DD', 'DD MM YYYY','MM DD YYYY', 'YYYY MM DD' ",
				},
				defaultValue: {
					summary: 'browser',
				},
			},
			options: [
				'DD/MM/YYYY',
				'MM/DD/YYYY',
				'YYYY/MM/DD',
				'DD-MM-YYYY',
				'MM-DD-YYYY',
				'YYYY-MM-DD',
				'DD MM YYYY',
				'MM DD YYYY',
				'YYYY MM DD',
			],
			control: {
				type: 'radio',
			},
		},
		isDisabled: {
			description: 'For disabled input',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		literals: {
			description: 'Literals to show in component',
			table: {
				type: {
					summary:
						'IPmdsCdkDatepickerLiterals: {month: [    string,    string,    string,    string,    string,    string,    string,    string,    string,    string,    string,    string];weekDay: [string, string, string, string, string, string, string];today: string; formatHelp: string}',
				},
			},
			type: {required: true},
			control: {
				type: 'object',
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
		max: {
			description: 'Max date for date mode',
			table: {
				type: {summary: 'date string same pattern input'},
			},
			control: {
				type: 'date',
			},
		},
		min: {
			description: 'Min date for date mode',
			table: {
				type: {summary: 'date string same pattern input'},
			},
			control: {
				type: 'date',
			},
		},
		positionRight: {
			description: 'Boolean for set the datepicker to right',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		selectableDates: {
			description: 'Set only the selectable dates',
			table: {
				type: {summary: 'array date string same pattern input'},
			},
			control: {
				type: 'object',
			},
		},
		placeholder: {
			description: 'Placeholder for the input',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		enabledToday: {
			description: 'If today is disabled you can enabled it for set it as yesterday',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkDatepickerComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const WithFormRequired: StoryObj<PmdsCdkDatepickerComponent> = {
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: ['', Validators.required],
			}),
			literalsErrorFn,
		},
		template,
	}),
};

export const WithDateInfo: StoryObj<PmdsCdkDatepickerComponent> = {
	args: {
		dateInfo: [
			{
				date: new Date(new Date().setDate(new Date().getDate() - 1)),
				label: 'YES',
			},
			{
				date: new Date(),
				label: 'TOD',
			},
			{
				date: new Date(new Date().setDate(new Date().getDate() + 1)),
				label: 'TOM',
			},
		]
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: ['', Validators.required],
			}),
			literalsErrorFn,
		},
		template,
	}),
};

export const Disabled: StoryObj<PmdsCdkDatepickerComponent> = {
	args: {
		isDisabled: true,
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: ['', Validators.required],
			}),
			literalsErrorFn,
		},
		template: `<div [formGroup]="exampleForm" class="max-w-[300px] min-w-[150px]">
        <pmds-cdk-datepicker
        	[dataQA]="dataQA"
			[formControlName]="formControlName"
			[format]="format"
			[placeholder]="placeholder"
			[skeleton]="skeleton"
			[min]="min"
			[max]="max"
			[dateInfo]="dateInfo"
			[literalsErrorFn]="literalsErrorFn"
			[literals]="literals"
			[isDisabled]="isDisabled"
        />
      </div>`,
	}),
};

export const WithMinAndMax: StoryObj<PmdsCdkDatepickerComponent> = {
	args: {
		min: new Date(new Date().setDate(new Date().getDate() - 600)),
		max: new Date(new Date().setDate(new Date().getDate() + 300)),
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: ['', Validators.required],
			}),
			literalsErrorFn,
		},
		template,
	}),
};

export const SelectablesDates: StoryObj<PmdsCdkDatepickerComponent> = {
	args: {
		selectableDates: [
			new Date(new Date().setDate(new Date().getDate() - 2)),
			new Date(new Date().setDate(new Date().getDate())),
			new Date(new Date().setDate(new Date().getDate() + 3)),
		]
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: ['', Validators.required],
			}),
			literalsErrorFn,
		},
		template,
	}),
};

export const PositionRight: StoryObj<PmdsCdkDatepickerComponent> = {
	args: {
		positionRight: true
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: ['', Validators.required],
			}),
			literalsErrorFn,
		},
		template: `<section class="w-full flex justify-end">
		<div [formGroup]="exampleForm" class="w-[300px] h-[450px]">
			<pmds-cdk-datepicker
				[dataQA]="dataQA"
				[formControlName]="formControlName"
				[dateInfo]="dateInfo"
				[format]="format"
				[isDisabled]="isDisabled"
				[literalsErrorFn]="literalsErrorFn"
				[literals]="literals"
				[max]="max"
				[min]="min"
				[placeholder]="placeholder"
				[positionRight]="positionRight"
				[selectableDates]="selectableDates"
				[skeleton]="skeleton"
			/>
  		</div>
  	</section>`,
	}),
};