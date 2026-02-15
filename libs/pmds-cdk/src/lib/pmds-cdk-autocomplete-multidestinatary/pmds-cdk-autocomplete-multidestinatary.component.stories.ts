////////Third party libraries
import { StoryObj, moduleMetadata } from '@storybook/angular';
import {
	FormBuilder,
	FormGroupDirective,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
////////Component imports
import { AutocompleteMultidestinataryWrapperComponent } from './story-helpers/pmds-cdk-autocomplete-multidestinatary-wrapper-component';
import { componentInfo } from './story-helpers/pmds-cdk-autocomplete-multidestinatary-component-info-story';
import { literalsErrorFn } from './story-helpers/pmds-cdk-autocomplete-multidestinatary-component-const-story';

export default {
	title: 'Cdk/Forms, data input and selections/Autocomplete multidestinatary',
	component: AutocompleteMultidestinataryWrapperComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [FormsModule, ReactiveFormsModule],
			providers: [FormGroupDirective],
		}),
	],
	args: {
		config: {
			placeholder: 'Placeholder',
			icon: 'pmicons-placeholder',
			iconResults: 'pmicons-placeholder',
			loadingLiteral: 'Just a moment please...',
			more10Literal: '10 more',
			noResultsLiterals: {
				noResult: 'No results',
				instructions: 'Please try again with other parameters',
			},
			helperText: 'Helper text',
		},
		dataQA: 'storybook-qa',
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
		config: {
			description: 'Config to component',
			table: {
				type: {
					summary: `IPmdsCdkAutocompleteMultidestinataryConfig {
					customHeight?: string;
					placeholder: string;
					icon: string;
					iconResults: string;
					loadingLiteral: string;
					more10Literal: string;
					noResultsLiterals: {
					 noResult: string;
					 instructions: string;
					},
					helperText: string;
				 }`,
				},
			},
			control: {
				type: 'object',
			},
			type: { required: true }
		},
		formControlName: {
			description: 'Name for from control on input',
			table: {
				type: {summary: 'string'}
			},
			type: {
				type: 'string',
			}
		},
		isDisabled: {
			description: 'Disabled input',
			table: {
				type: {summary: 'boolean'},
				options: [true, false],
				defaultValue: {summary: 'false'},
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
		results: {
			description: 'Array from result to show',
			table: {
				type: {summary: 'IPmdsCdkAutocompleteMultidestinataryItem[]:{id:string,label:string}[]'},
			},
			control: {
				type: 'object',
			},
			type: { required: true }
		},
		states: {
			description: 'State for component',
			table: {
				type: {summary: 'IPmdsCdkAutocompleteMultidestinataryStates:{isNoResults?:boolean,isLoading?:boolean}'},
			},
			control: {
				type: 'object',
			},
		},
		suggestionsLabel: {
			description: 'Html string for suggestions label in search',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'string',
			},
			type: { required: true }
		},
		byTyping: {
			description: 'Emit event on type',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<string>'},
			}
		},
		changeValues: {
			description: 'Emit event on change value',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<IPmdsCdkAutocompleteMultidestinataryItem[]>'},
			}
		},
		selectValue: {
			description: 'Emit event on click in a result button',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<IPmdsCdkAutocompleteMultidestinataryItem>'},
			}
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
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkAutocompleteMultidestinataryComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const WithoutForm: StoryObj<AutocompleteMultidestinataryWrapperComponent> =
	{};

export const WithForm: StoryObj<AutocompleteMultidestinataryWrapperComponent> =
	{
		args: {
			nameControl: 'autocomplete',
		},
		render: (args) => ({
			props: {
				...args,
				literalsErrorFn,
				exampleForm: new FormBuilder().group({
					autocomplete: ['', [Validators.required]],
				}),
			},
		}),
	};

	export const Skeleton: StoryObj<AutocompleteMultidestinataryWrapperComponent> =
	{
		args: {
			skeleton: true
		}
	};