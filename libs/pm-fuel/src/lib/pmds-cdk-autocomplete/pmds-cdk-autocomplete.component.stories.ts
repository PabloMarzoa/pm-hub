////////Angular imports
import {AsyncPipe, NgClass, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
////////Third party libraries
import {componentWrapperDecorator, moduleMetadata, StoryObj} from '@storybook/angular';
////////Component imports
import {IPmdsCdkAutocompleteStates} from './models/pmds-cdk-autocomplete.model';
import {componentInfo} from "./story-helpers/pmds-cdk-autocomplete-component-info-story";
import {AutocompleteStoryComponent} from "./story-helpers/pmds-cdk-autocomplete-story.component";
import {AutocompleteCustomLabelComponent} from "./story-helpers/pmds-cdk-autocomplete-custom-label.component";
import {AutocompleteCustomRowComponent} from "./story-helpers/pmds-cdk-autocomplete-custom-row.component";
import {AutocompleteCustomCardComponent} from "./story-helpers/pmds-cdk-autocomplete-custom-card.component";
import {literalsErrorFn} from "./story-helpers/pmds-cdk-autocomplete-component-const-story";

export default {
	title: 'Cdk/Forms, data input and selections/Autocomplete',
	component: AutocompleteStoryComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				AsyncPipe,
				FormsModule,
				NgClass,
				NgIf,
				ReactiveFormsModule
			]
		})
	],
	args: {
		dataQA: 'storybook-qa',
		labelErrorNotSelected: 'You must select a student'
	},
	argTypes: {
		config: {
			description: `For configuration input and table
      **IPmdsCdkAutocompleteConfig**
        <li>**customWidth**: input custom width (default is 100%)</li>
        <li>**input**: configuration for input</li>
        <li>**table**: configuration for results</li>
      **IPmdsCdkAutompleteInputConfig**
        <li>**customWidth**: result content height</li>
        <li>**icon**: icon for input</li>
        <li>**labelComponent**: angular component for label value in input</li>
        <li>**placeholder**: placeholder for input</li>
        <li>**type**: type for input</li>
        **IPmdsCdkAutocompleteTableConfig**
        <li>**rowComponent**: component data for desktop and tablet view</li>
        <li>**cardComponent**: component data for mobile view</li>
        <li>**error**: data for error view (title and body)</li>
        <li>**button**: end additional button (label, action and show)</li>
        <li>**customHeight**: custom height for result (default is 'max-h-[294px] mobile:max-h-[384px]')</li>
        <li>**noResultsLiterals**: literals for not result template (title and msg)</li>
        <li>**loadingLiterals**: loading literal</li>
        **IPmdsCdkAutocompleteDynamicRowComponentConfig**
        <li>**component**: angular component for template</li>
        <li>**styles**: global styles for template</li>
        <li>**selectRowAction**: function for click the result</li>
      `,
			table: {
				type: {
					summary: `
          IPmdsCdkAutocompleteConfig: {
            customWidth?: string;
            input: IPmdsCdkAutompleteInputConfig: {
              customWidth?: string;
              icon?: string;
              labelComponent?: IPmdsCdkAutocompleteDynamicLabelComponentConfig: {
                component: Type<unknown>;
              };
              placeholder?: string;
              type?: string;
            };
            table: IPmdsCdkAutocompleteTableConfig: {
              rowComponent?: IPmdsCdkAutocompleteDynamicRowComponentConfig: {
                component: Type<unknown>;
                styles?: string;
                selectRowAction?: (row: unknown) => void;
              };
              cardComponent: IPmdsCdkAutocompleteDynamicRowComponentConfig: {
                component: Type<unknown>;
                styles?: string;
                selectRowAction?: (row: unknown) => void;
              };
              error?: {
                  title: string;
                  body?: string;
              }
              button?: {
                  label: string;
                  show: boolean;
                  action: () => void;
              },
              customHeight?: string;
              loadingLiterals?: string;
              noResultsLiterals?: {
                title: string,
                msg: string
              }
            };
          }
          `
				}
			},
			control: {
				type: 'object',
			},
			type: {
				type: 'object',
				required: true
			}
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
		propValue: {
			description: 'Property for seach in data',
			table: {
				type: {summary: 'string'},
				dafaultValue: {summary: 'id'}
			},
			type: {
				type: 'string',
			}
		},
		labelErrorNotSelected: {
			description: 'Label error for no selected result',
			table: {
				type: {summary: 'string'}
			},
			type: {
				type: 'string',
			}
		},
		labelError: {
			description: 'Label error for form control error',
			table: {
				type: {summary: 'string'}
			},
			type: {
				type: 'string',
			}
		},
		data: {
			description: 'For filling table rows',
			table: {
				type: {summary: `unknown[]`},
			},
			type: {
				type: 'object',
			}
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
			description: 'For filling the content label with de row selected',
			table: {
				type: {summary: 'unknown'}
			},
			type: {
				type: 'object',
			}
		},
		suggestions: {
			description: 'For the dynamic result of the suggested results',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		states: {
			description: 'States is loading and is error',
			table: {
				type: {
					summary: `
          IPmdsCdkAutocompleteStates: {
            isError: boolean;
            isLoading: boolean;
          }
        `
				},
				defaultValue: {
					summary: `{
          isError: false,
          isLoading: false
        }`
				},
			},
			control: {
				type: 'object',
			},
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
		byTyping: {
			description: 'Emit event on type',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<IPmdsCdkAutocompleteSuggestions>'},
			}
		},
		keyEnter: {
			description: 'Emit event on key enter',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<IPmdsCdkAutocompleteSuggestions>'},
			}
		},
		scrollEnd: {
			description: 'Emit event on scroll to end results',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<IPmdsCdkAutocompleteSuggestions>'},
			}
		},
		focusIn: {
			description: 'Emit event on focus in input',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<void>'},
			}
		},
		focusOut: {
			description: 'Emit the value selected to focus out input',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<string>'},
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
			subtitle: 'PmdsCdkAutocompleteComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const SuggestionsAndResults: StoryObj<AutocompleteStoryComponent> = {
	args: {
		config: {
			input: {
				placeholder: 'Search by identifier',
				icon: 'pmicons-account-user'
			},
			table: {
				rowComponent: {
					component: AutocompleteCustomRowComponent,
					cardComponent: AutocompleteCustomCardComponent,
					selectRowAction: () => undefined
				},
				loadingLiterals: 'Just a moment, please',
				error: {
					title: 'Error title',
					body: 'Error body'
				}
			},
		},
		dataQA: '',
		states: {isLoading: false, isError: false} as IPmdsCdkAutocompleteStates,
		literalsErrorFn
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn
		},
	}),
};

export const NoSuggestionsWithText: StoryObj<AutocompleteStoryComponent> = {
	args: {
		config: {
			input: {
				placeholder: 'Search by identifier',
				icon: 'pmicons-account-user',
				labelComponent: {
					component: AutocompleteCustomLabelComponent
				}
			},
			table: {
				customHeight: 'max-h-[135px]',
				loadingLiterals: 'Just a moment, please',
				noResultsLiterals: {
					title: 'No results',
					msg: 'Please try again with other parameters'
				}
			}
		},
		dataQA: '',
		empty: true
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn
		},
	}),
};

export const ErrorWithText: StoryObj<AutocompleteStoryComponent> = {
	args: {
		config: {
			input: {
				placeholder: 'Search by identifier',
				icon: 'pmicons-account-user',
				labelComponent: {
					component: AutocompleteCustomLabelComponent
				}
			},
			table: {
				customHeight: 'max-h-[135px]',
				error: {
					title: 'Error title',
					body: 'Error body'
				}
			}
		},
		dataQA: '',
		error: true
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn
		},
	}),
};

export const NoSuggestionsWithButton: StoryObj<AutocompleteStoryComponent> = {
	args: {
		config: {
			input: {
				placeholder: 'Search by identifier',
				icon: 'pmicons-account-user',
				labelComponent: {
					component: AutocompleteCustomLabelComponent
				}
			},
			table: {
				customHeight: 'max-h-[135px]',
				button: {
					show: false,
					label: 'button',
					action: () => {
						alert('button clicked!')
					}
				},
			}
		},
		dataQA: '',
		error: true
	},
	render: (args) => ({
		props: {
			...args,
			literalsErrorFn
		},
	}),
};

export const Skeleton: StoryObj<AutocompleteStoryComponent> = {
	args: {
		skeleton: true
	},

};