////////Angular imports
import {OverlayModule} from '@angular/cdk/overlay';
import {NgIf, NgClass, DatePipe} from '@angular/common';
import {
	FormBuilder,
	FormGroupDirective,
	FormsModule,
	ReactiveFormsModule,
} from '@angular/forms';
////////Third party libraries
import {moduleMetadata, StoryObj} from '@storybook/angular';
////////Project imports
import {PmdsCdkDropdownRangeComponent} from './pmds-cdk-dropdown-range.component';
import { componentInfo } from "./story-helpers/pmds-cdk-dropdown-range-component-info-story";
import { literals, template } from "./story-helpers/pmds-cdk-dropdown-range-component-const-story";

export default {
	title: 'Cdk/Forms, data input and selections/Dropdown range',
	component: PmdsCdkDropdownRangeComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				PmdsCdkDropdownRangeComponent,
				NgIf,
				NgClass,
				OverlayModule,
				FormsModule,
				ReactiveFormsModule,
			],
			providers: [FormGroupDirective, DatePipe],
		}),
	],
	args: {
		decimalCharacter: ',',
		dataQA: 'storybook-qa-',
		literals: literals,
		max: undefined,
		maxNumber: undefined,
		min: undefined,
		minNumber: undefined,
		isDisabled: false,
		placeholder: 'Placeholder',
	},
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
		mode: {
			description: 'Mode input range',
			table: {
				type: {summary: 'date | number'},
			},
			options: ['date', 'number'],
			control: {
				type: 'radio',
			},
			type: { required: true },
		},
		placeholder: {
			description: 'Placeholder for input',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
			type: { required: true },
		},
		literals: {
			description: 'Literals for template',
			table: {
				type: {
					summary: `
						IPmdsCdkDropdownRangeLiterals: {
							from: string,
							to: string,
							clearAll: string,
							apply: string,
							datepickerLiterals?: IPmdsCdkDatepickerLiterals: {
								daysName?: [string, string, string, string, string, string, string],
								monthsName?: [string, string, string, string, string, string, string, string, string, string, string, string], today: string, formatHelp?: string
		  					}
        				}
					`,
				},
			},
			type: { required: true },
			control: {
				type: 'object',
			},
		},
		fromFormControlName: {
			description: 'Name for from control on input',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		toFormControlName: {
			description: 'Name for to control on input',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		isDisabled: {
			description: 'Boolean for disabled input',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		decimalCharacter: {
			description: 'String for decimalCharacter',
			control: {
				type: 'text',
			},
			table: {
				type: {summary: ', | .'},
				defaultValue: {summary: ','},
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
		maxNumber: {
			description: 'Max value for number mode',
			table: {
				type: {summary: 'number'},
			},
			control: {
				type: 'number',
			},
		},
		minNumber: {
			description: 'Max value for number mode',
			table: {
				type: {summary: 'number'},
			},
			control: {
				type: 'number',
			},
		},
		maxIntLength: {
			description: 'In type number mode max length integer part',
			table: {
				type: {summary: 'number'},
				defaultValue: {summary: 7},
			},
			control: {
				type: 'number',
			},
		},
		maxDecLength: {
			description: 'In type number mode max length decimal part',
			table: {
				type: {summary: 'number'},
				defaultValue: {summary: 2},
			},
			control: {
				type: 'number',
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
		pattern: {
			description: 'Pattern for date in date mode',
			table: {
				type: {
					summary: `
					TPmdsCdkDatepickerDateFormat =
						| 'DD/MM/YYYY'
						| 'MM/DD/YYYY'
						| 'YYYY/MM/DD'
						| 'DD-MM-YYYY'
						| 'MM-DD-YYYY'
						| 'YYYY-MM-DD'
						| 'DD MM YYYY'
						| 'MM DD YYYY'
						| 'YYYY MM DD'
				`,
				},
				defaultValue: {summary: 'DD/MM/YYYY'},
			},
			control: {
				type: 'text',
			},
		},
		selectChange: {
			description: 'Emit selection change',
			table: {
				category: 'Events',
				type: {
					summary: `
					EventEmitter<IPmdsDropdownRangeSelect>

					IPmdsDropdownRangeSelect: {
						to: string | Date;
    					from: string | Date;
					}
				`,
				},
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkDropdownRangeComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const TypeDate: StoryObj<PmdsCdkDropdownRangeComponent> = {
	args: {
		fromFormControlName: 'fromFormControlName',
		mode: 'date',
		pattern: 'DD/MM/YYYY',
		toFormControlName: 'toFormControlName'
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.fromFormControlName]: [null],
				[args.toFormControlName]: [null],
			}),
		},
		template: `
			<div class="h-80" [formGroup]="exampleForm">
				${template}
			</div>
    	`,
	}),
};

export const TypeDateWithMinMax: StoryObj<PmdsCdkDropdownRangeComponent> = {
	args: {
		mode: 'date',
		fromFormControlName: 'fromFormControlName',
		toFormControlName: 'toFormControlName',
		max: new Date(new Date().setDate(new Date().getDate() + 3)),
		min: new Date(new Date().setDate(new Date().getDate() - 3)),
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.fromFormControlName]: [null],
				[args.toFormControlName]: [null],
			}),
		},
		template: `
		<p class="py-2">
			Min date: {{ min | date:'dd/MM/yyyy' }} / Man date: {{ max | date:'dd/MM/yyyy' }}
		</p>
		<div class="h-72" [formGroup]="exampleForm">
			${template}
		</div>
    `,
	}),
};

export const TypeNumber: StoryObj<PmdsCdkDropdownRangeComponent> = {
	args: {
		decimalCharacter: '.',
		fromFormControlName: 'fromFormControlName',
		mode: 'number',
		toFormControlName: 'toFormControlName',
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.fromFormControlName]: [null],
				[args.toFormControlName]: [null],
			}),
		},
		template: `
		<div class="h-72" [formGroup]="exampleForm">
		${template}
		</div>
    `,
	}),
};

export const TypeNumberWithMinNumberMaxNumber: StoryObj<PmdsCdkDropdownRangeComponent> =
	{
		args: {
			decimalCharacter: '.',
			fromFormControlName: 'fromFormControlName',
			maxNumber: 200,
			minNumber: -100,
			mode: 'number',
			toFormControlName: 'toFormControlName',
		},
		render: (args) => ({
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					[args.fromFormControlName]: [null],
					[args.toFormControlName]: [null],
				}),
			},
			template: `
		<p class="py-2">
			Min number: {{ minNumber }} / Max number: {{ maxNumber }}
		</p>
		<div class="h-72" [formGroup]="exampleForm">
			${template}
		</div>
    `,
		}),
	};

export const Disabled: StoryObj<PmdsCdkDropdownRangeComponent> = {
	args: {
		isDisabled: true,
		mode: 'number',
		toFormControlName: 'toFormControlName',
		fromFormControlName: 'fromFormControlName',
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.fromFormControlName]: [null],
				[args.toFormControlName]: [null],
			}),
		},
		template: `
		<div class="h-10" [formGroup]="exampleForm">
			${template}
		</div>
    `,
	}),
};

export const Skeleton: StoryObj<PmdsCdkDropdownRangeComponent> = {
	args: {
		mode: 'number',
		toFormControlName: 'toFormControlName',
		fromFormControlName: 'fromFormControlName',
		skeleton: true
	},
	render: (args) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.fromFormControlName]: [null],
				[args.toFormControlName]: [null],
			}),
		},
		template: `
		<div class="h-10" [formGroup]="exampleForm">
			${template}
		</div>
    `,
	}),
};
