////////Angular imports
import {FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
////////Third party libraries
import {componentWrapperDecorator, moduleMetadata, StoryObj,} from '@storybook/angular';
////////Component imports
import {PmdsCdkTimeInputComponent} from './pmds-cdk-time-input.component';
import {componentInfo} from "./story-helpers/pmds-cdk-time-input-component-info-story";
import {literalsErrorFn, options, template} from "./story-helpers/pmds-cdk-time-input-component-const-story";

export default {
	title: 'Cdk/Forms, data input and selections/Time input',
	component: PmdsCdkTimeInputComponent,
	tags: ['autodocs'],
	decorators: [
		componentWrapperDecorator(
			(story) => `
                <div class="flex flex-col items-center w-full h-[320px]">
                    ${story}
                </div>`
		),
		moduleMetadata({
			imports: [FormsModule, ReactiveFormsModule],
			providers: [FormGroupDirective],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		showClear: true,
		helperText: 'hh:mm from 00:00 to 00:00',
		options,
		formControlName: 'time',
		placeholder: 'Placeholder',
		isDisabled: false
	},
	argTypes: {
		assetsFolder: {
			description:
				"Your assets folder, when you have /img/flags/ svg's folder ",
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'assets' },
			},
			control: {
				type: 'string',
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
		isDisabled: {
			description: 'For disable field',
			table: {
				type: {summary: 'boolean'},
				efaultValue: {summary: 'false'},
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
		placeholder: {
			description: 'For placeholder text',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
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
			description: 'Form control name',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		options: {
			description: 'For dropdown options',
			table: {
				type: {
					summary: `
						IPmdsCdkOptionDropdown[]: {
							label: string,
							value: string
                        }[]
					`,
				},
			},
			control: {
				type: 'object',
			},
		},
		showClear: {
			description: 'Show clear button',
			table: {
				type: {summary: 'boolean'},
				efaultValue: {summary: 'true'},
			},
			control: {
				type: 'boolean',
			},
		},
		showCategory: {
			description: 'Show dropdown category',
			table: {
				type: {summary: 'boolean'},
				efaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTimeInputComponent',
			description: {
				component: componentInfo,
			},
		},
	}
};

export const Simple: StoryObj<PmdsCdkTimeInputComponent> = {
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			form: new FormBuilder().group({
				time: [null, [Validators.required]],
			}),
		},
		template
	}),
};

export const ShowCategory: StoryObj<PmdsCdkTimeInputComponent> = {
	args: {
		showCategory: true
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			form: new FormBuilder().group({
				time: [null, [Validators.required]],
			}),
		},
		template
	}),
};

export const Disabled: StoryObj<PmdsCdkTimeInputComponent> = {
	args: {
		isDisabled: true
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			form: new FormBuilder().group({
				time: [null, [Validators.required]],
			}),
		},
		template
	}),
};

export const Skeleton: StoryObj<PmdsCdkTimeInputComponent> = {
	args: {
		skeleton: true
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn,
			form: new FormBuilder().group({
				time: [null, [Validators.required]],
			}),
		},
		template
	}),
};