////////Angular imports
import {CommonModule} from '@angular/common';
import {
	FormBuilder,
	FormGroupDirective,
	FormsModule,
	ReactiveFormsModule,
	Validators
} from '@angular/forms';
////////Third party libraries
import {
	componentWrapperDecorator,
	moduleMetadata,
	StoryObj
} from '@storybook/angular';
////////Component imports
import { PmdsCdkDropdownComponent } from './pmds-cdk-dropdown.component';
import { componentInfo } from "./story-helpers/pmds-cdk-dropdown-component-info-story";
import { template, templateRight, templateTop, options, optionsFlag, optionsComplete, optionsCategory, literals, literalsErrorFn, optionsSublabel } from "./story-helpers/pmds-cdk-dropdown-component-const-story";

export default {
	title: 'Cdk/Forms, data input and selections/Dropdown',
	component: PmdsCdkDropdownComponent,
	tags: ['autodocs'],
	decorators: [
		componentWrapperDecorator(
			(story) => `
            <div class="h-[22rem]">
                ${story}
            </div>`
		),
		moduleMetadata({
			imports: [CommonModule, FormsModule, ReactiveFormsModule],
			providers: [FormGroupDirective]
		})
	],
	args: {
		assetsFolder: 'assets',
		dataQA: 'storybook-qa-',
		formControlName: 'field',
		isTitle: false,
		keepValue: false,
		label: 'Label',
		literals,
		literalsErrorFn,
		multi: false,
		openDefault: false,
		optionMinWidth: '288',
		options,
		placeholder: 'Placeholder',
		showCategory: false,
		skeleton: false,
		warningText: ''
	},
	argTypes: {
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			}
		},
		enableSearch: {
			description: 'Boolean for enable search for dropdown',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		disabledShowToTop: {
			description: 'Boolean for disable show to top the options',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		positionRight: {
			description: 'Boolean for set the dropdown to right',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		positionTop: {
			description: 'Boolean for force the dropdown to top',
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
		placeholder: {
			description: 'Placeholder for dropdown',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		showCategory: {
			description: 'Show title for categories',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		optionMinWidth: {
			description: 'In filter mode, width for list option content',
			table: {
				type: {summary: 'number'},
				defaultValue: {summary: '288'},
			},
			control: {
				type: 'string',
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
		assetsFolder: {
			description:
				'Name for assets folder, add this only if your assets folder is different to "assets"',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'assets' },
			},
			control: {
				type: 'string',
			},
		},
		isDisabled: {
			description: 'Boolean disable the dropdown',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		keepValue: {
			description: 'Not unselect the value if it is previously selected',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		isFilter: {
			description: 'Boolean to show skin for dropdown for filters',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		isTitle: {
			description: 'Boolean to show skin for dropdown for title mode',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		openDefault: {
			description: 'Open option by default',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		label: {
			description: 'Label for dropdown',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		literals: {
			description: 'Literals for template',
			table: {
				type: {
					summary: `IPmdsCdkOptionDropdownLiterals: {
                        accept: string,
                        filterBy: string,
                        cancel:string,
                        clear: string,
                        placeholder: string,
                        searchPlaceholder: string,
                    }`,
				},
			},
			control: {
				type: 'object',
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
		multi: {
			description: 'Enable the multiple selection option of the dropdown list',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
			control: {
				type: 'boolean',
			},
		},
		warningText: {
			description: 'Text for warning state',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
		},
		options: {
			description: 'Options for dropdown',
			table: {
				type: {
					summary: `IPmdsCdkOptionDropdown: {
                        icon?:string
    					flagCode?: string;
                        label:string,
                        sublabel?:string,
                        sublabelIcon?:string,
                        value:string
                        }[]`,
				},
			},
			control: {
				type: 'object',
			},
			type: { required: true }
		},
		tooltip: {
			description: 'Tooltip content',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		tooltipTitle: {
			description: 'Tooltip title',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		tooltipPosition: {
			description: 'Position for Tooltip',
			options: [
				'top-left',
				'top-center',
				'top-right',
				'middle-left',
				'middle-center',
				'middle-right',
				'bottom-left',
				'bottom-center',
				'bottom-right',
			],
			table: {
				defaultValue: { summary: 'bottom-center' },
				type: {
					summary:
						'TPmdsDirectiveTooltipPosition: | top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | middle-left | middle-center | middle-right',
				},
			},
			control: {
				type: 'radio',
			},
		},
		selectChange: {
			description: 'Emit selection change',
			table: {
				category: 'Events',
				type: {
					summary: `
					EventEmitter<string[] | string>
				`
				},
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkDropdownComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const Dropdown: StoryObj<PmdsCdkDropdownComponent> = {
	render: (args: any) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template,
	}),
};

export const DropdownMulti: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		multi: true
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [[null], Validators.required],
			}),
		},
		template,
	}),
};

export const DropdownWithTooltip: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		tooltip: 'Tooltip',
		tooltipTitle: 'Title',
		tooltipPosition: 'bottom-center'
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template,
	}),
};

export const DropdownSublabel: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		isFilter: false,
		options: optionsSublabel
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template,
	}),
};

export const DropdownFlag: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		isFilter: false,
		options: optionsFlag
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template,
	}),
};

export const Categories: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		options: optionsCategory,
		showCategory: true
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template,
	}),
};

export const CategoriesChangeOrder: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		options: optionsCategory,
		categoryOrder: ['Category 2', 'Category 1'],
		showCategory: true
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template,
	}),
};

export const DropdownTitle: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		isTitle: true
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template,
	}),
};

export const DropdownWarning: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		warningText: 'Helper text'
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template,
	}),
};

export const DropdownDisabled: StoryObj<PmdsCdkDropdownComponent> = {
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: {value: '', disabled: true},
			}),
		},
		template,
	}),
};

export const DropdownDisabledFilled: StoryObj<PmdsCdkDropdownComponent> = {
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: {value: '1', disabled: true},
			}),
		},
		template,
	}),
};

export const DropdownFilter: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		isFilter: true,
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null],
			}),
		},
		template,
	}),
};

export const DropdownFilterMulti: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		isFilter: true,
		multi: true,
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null],
			}),
		},
		template,
	}),
};

export const DropdownFilterDisabled: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		isFilter: true,
		options: optionsComplete
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: {value: '', disabled: true},
			}),
		},
		template,
	}),
};

export const DropdownRight: StoryObj<PmdsCdkDropdownComponent> = {
	args:{
		positionRight: true,
		isFilter: true,
		optionsMinWidth: '200'
	},
	render: (args: any) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template: templateRight,
	}),
};

export const DropdownTop: StoryObj<PmdsCdkDropdownComponent> = {
	args:{
		positionTop: true,
		optionsMinWidth: '200'
	},
	render: (args: any) => ({
		props: {
			...args,
			literalsErrorFn,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: [null, Validators.required]
			})
		},
		template: templateTop,
	}),
};

export const Skeleton: StoryObj<PmdsCdkDropdownComponent> = {
	args: {
		isFilter: true,
		options: optionsComplete,
		skeleton: true
	},
	render: (args: any) => ({
		props: {
			...args,
			exampleForm: new FormBuilder().group({
				[args.formControlName]: {value: '', disabled: true},
			}),
		},
		template,
	}),
};
