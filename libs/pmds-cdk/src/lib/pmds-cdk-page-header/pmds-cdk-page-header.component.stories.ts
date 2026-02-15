////////Angular imports
import {FormGroupDirective} from '@angular/forms';
////////Third party libraries
import {moduleMetadata, StoryObj} from '@storybook/angular';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkDropdownComponent } from '../pmds-cdk-dropdown/pmds-cdk-dropdown.component';
////////Component imports
import {PmdsCdkPageHeaderComponent} from './pmds-cdk-page-header.component';
import {componentInfo} from "./story-helpers/pmds-cdk-page-header-component-info-story";

export default {
	title: 'Cdk/Navigation/Page header',
	component: PmdsCdkPageHeaderComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsCdkButtonComponent, PmdsCdkDropdownComponent],
			providers: [FormGroupDirective],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		back: 'Back',
		iconSubtitle: 'pmicons-bolt',
		subtitle: 'Subtitle',
		title: 'Title',
		dropdownPlaceholder: 'Placeholder'
	},
	argTypes: {
		back: {
			description: 'Literal for back',
			control: {
				type: 'text',
			},
			table: {
				type: {summary: 'string'},
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
		iconSubtitle: {
			description: 'Add icon to subtitle',
			control: {
				type: 'text',
			},
			table: {
				type: {summary: 'string'},
			},
		},
		showBackButton: {
			description: 'Control to whether show "Back" button or not',
			control: {
				type: 'boolean',
			},
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
		},
		showDivider: {
			description: 'Control to whether show the bottom divider',
			control: {
				type: 'boolean',
			},
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
		},
		showCloseButton: {
			description: 'Control to whether show "Close" button or not',
			control: {
				type: 'boolean',
			},
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'false'},
			},
		},
		subtitle: {
			description: 'String for subtitle',
			control: {
				type: 'text',
			},
			table: {
				type: {summary: 'string'},
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
		title: {
			description: 'String for title',
			control: {
				type: 'text',
			},
			table: {
				type: {summary: 'string'},
			},
		},
		firstLevel: {
			description: 'Defines the styles on mobile',
			control: {
				type: 'boolean',
			},
			table: {
				defaultValue: {summary: 'false'},
				type: {summary: 'boolean'},
			},
		},
		dropdownOptions: {
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
			}
		},
		dropdownDefaultOption: {
			description: 'Default option for dropdown',
			table: {
				type: {
					summary: `IPmdsCdkOptionDropdown: {
                        icon?:string
    					flagCode?: string;
                        label:string,
                        sublabel?:string,
                        sublabelIcon?:string,
                        value:string
                        }`,
				},
			},
			control: {
				type: 'array',
			}
		},
		dropdownPlaceholder: {
			description: 'Placeholder for dropdown',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'string',
			}
		},
		clickBackButton: {
			description: 'Emit back button click',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<void>'},
			},
		},
		clickCloseButton: {
			description: 'Emit close button click',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<void>'},
			},
		},
		selectOption: {
			description: 'Emit event with dropdown selection',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<string>'},
			},
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkPageHeaderComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const Header: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		showBackButton: true,
		showCloseButton: true,
		firstLevel: false
	}
};

export const HeaderWithDivider: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		showBackButton: true,
		showCloseButton: true,
		firstLevel: false,
		showDivider: true
	}
};

export const HeaderFirstLevel: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		showBackButton: true,
		firstLevel: true
	}
};

export const HeaderWithOptions: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		showBackButton: false,
		firstLevel: true,
		dropdownOptions: [
			{label: 'Option 1', value: 'option 1'},
			{label: 'Option 2', value: 'option 2'},
			{label: 'Option 3', value: 'option 3'}
		]
	}
};

export const HeaderWithOptionsAndDefaultValue: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		showBackButton: false,
		firstLevel: true,
		dropdownOptions: [
			{label: 'Option 1', value: 'option 1'},
			{label: 'Option 2', value: 'option 2'},
			{label: 'Option 3', value: 'option 3'}
		],
		dropdownDefaultOption: {label: 'Option 3', value: 'option 3'}

	}
};

export const HeaderWithOneOption: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		showBackButton: false,
		firstLevel: true,
		dropdownOptions: [
			{label: 'Option 1', value: 'option 1'}
		]
	}
};

export const WithoutBackButton: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		showBackButton: false,
		firstLevel: false
	}
};

export const WithButtonContent: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		showBackButton: false,
		firstLevel: false
	},
	render: (args) => ({
		props: args,
		template: `
			<pmds-cdk-page-header
  				[back]="back"
  				[dataQA]="dataQA"
  				[firstLevel]="firstLevel"
  				[iconSubtitle]="iconSubtitle"
  				[showBackButton]="showBackButton"
  				[showCloseButton]="showCloseButton"
  				[subtitle]="subtitle"
  				[title]="title"
  				[dropdownPlaceholder]="dropdownPlaceholder"
			>
				<div class="pt-4">
					<pmds-cdk-button
						label="header button"
					/>
				</div>
			</pmds-cdk-page-header>
		`,
	}),
};

export const WithDropdownContent: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		showBackButton: false,
		firstLevel: false
	},
	render: (args) => ({
		props: args,
		template: `
			<pmds-cdk-page-header
  				[back]="back"
  				[dataQA]="dataQA"
  				[firstLevel]="firstLevel"
  				[iconSubtitle]="iconSubtitle"
  				[showBackButton]="showBackButton"
  				[showCloseButton]="showCloseButton"
  				[subtitle]="subtitle"
  				[title]="title"
  				[dropdownPlaceholder]="dropdownPlaceholder"
			>
				<div class="w-60 mobile:pt-4">
					<pmds-cdk-dropdown
						placeholder="Placeholder"
						[options]="[
							{label: 'Label', value: 'value'}
						]"
		  			/>
			  	</div>
			</pmds-cdk-page-header>
		`,
	}),
};

export const Skeleton: StoryObj<PmdsCdkPageHeaderComponent> = {
	args: {
		skeleton: true
	}
};
