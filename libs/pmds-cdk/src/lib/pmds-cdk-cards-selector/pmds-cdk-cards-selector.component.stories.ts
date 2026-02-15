////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkCardsSelectorComponent } from './pmds-cdk-cards-selector.component';
import { componentInfo } from "./story-helpers/pmds-cdk-cards-selector-component-info-story";

export default {
	title: 'Cdk/Resources/Cards selector',
	component: PmdsCdkCardsSelectorComponent,
	tags: ['autodocs'],
	args: {
		dataQA : 'storybook-qa-',
	},
	argTypes: {
		literals: {
			description: 'Literals of the component',
			table: {
				type: {
					summary: `
			  IPmdsCdkCardsSelectorOption: {
				label: string,
				helperText: string,
				value: string,
				helperValue: string,
				icon: string,
				id: string
			 }
				`,
				},
			},
			type: {type: 'object', required: true},
			control: {
				type: 'object',
			},
		},
		labelImages: {
			description: 'The icons to be included in the option',
			table: {
				type: {
					summary: `
			  IPmdsCdkCardsSelectorImages:	{
				images: string[],
				widthStyle?: '',
				heightStyle?: ''
			  }
				`,
				},
			},
			control: {
				type: 'object',
			},
		},
		isSelected: {
			description: 'To preselect the option',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		disabled: {
			description: 'To show the option but not be able to interact',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			control: { type: 'boolean' },
		},
		tooltip: {
			description: 'String to be included in the tooltip if required',
			table: {
				type: { summary: 'IPmdsCdkCardsSelectorTooltip: {title?: string, content: string, position?: TPmdsDirectiveTooltipPosition}' },
			},
			control: { type: 'object' },
		},
		id: {
			description: 'Value to be selected internally',
			table: {
				type: { summary: 'string' },
			},
			control: { type: 'text' },
		},
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: { summary: 'string' },
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
		skeletonAdditionalContent: {
            description: 'Show in the skeleton section the additional content',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: {
                type: 'boolean',
            },
        },
		selected: {
			description: 'Emit card click **(only if preview is not selected)**',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			},
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkCardsSelectorComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const OnlyOption = {
	args: {
		literals: {
			label: 'Label',
			icon: 'pmicons-Euro-stars-ECB',
		},
	},
};

export const OptionAndHelper = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			icon: 'pmicons-Euro-stars-ECB',
		},
	},
};

export const OptionHelperAndValue = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			value: 'Value',
			icon: 'pmicons-Euro-stars-ECB',
		},
	},
};

export const OptionHelperValueAndHelper = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			value: 'Value',
			helperValue: 'Subvalue',
			icon: 'pmicons-Euro-stars-ECB',
		},
	},
};

export const OptionHelperValueHelperWithoutIcon = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			value: 'Value',
			helperValue: 'Subvalue',
		},
	},
};

export const TooltipAdded = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			value: 'Value',
			helperValue: 'Subvalue',
			icon: 'pmicons-Euro-stars-ECB',
		},
		tooltip: {
			content: 'Tooltip info'
		},
	},
};

export const LabelImagesIncluded = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			value: 'Value',
			helperValue: 'Subvalue',
			icon: 'pmicons-Euro-stars-ECB',
		},
		tooltip: {
			content: 'Tooltip info'
		},
		labelImages: {
			images: ['assets/img/flags/ES.svg', 'assets/img/flags/FR.svg']
		},
	},
};

export const Preselected = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			value: 'Value',
			helperValue: 'Subvalue',
			icon: 'pmicons-Euro-stars-ECB',
		},
		tooltip: {
			title: 'Tooltip info',
			content: 'Tooltip content on card select'
		},
		isSelected: true,
	},
};

export const OptionDisabled = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			value: 'Value',
			helperValue: 'Subvalue',
		},
		disabled : true,
	},
};

export const OptionDisabledPreselected = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			value: 'Value',
			helperValue: 'Subvalue',
		},
		isSelected: true,
		disabled : true,
	},
};

export const AdditionalContent: StoryObj<PmdsCdkCardsSelectorComponent> = {
	args: {
		literals: {
			label: 'Label',
			helperText: 'Sublabel',
			value: 'Value',
			helperValue: 'Subvalue',
			icon: 'pmicons-Euro-stars-ECB',
		},
		tooltip: {
			content: 'Tooltip content on card select'
		},
	},
	render: (args) => ({
		props: args,
		template:
			'<div style="height: 600px">' +
				'<pmds-cdk-cards-selector [literals]="literals" [labelImages]="labelImages" [tooltip]="tooltip" [isSelected]="isSelected">' +
					'<div style="border: 1px solid #C40004; color: #C40004; width: 100%; height: 200px; display: flex; justify-content: center; align-items: center">' +
						'Additional content' +
					'</div>' +
				'</pmds-cdk-cards-selector>' +
			'</div>',
	}),
};

export const Skeleton = {
	args: {
		skeleton: true
	},
};

export const SkeletonWithAdditionalContent = {
	args: {
		skeleton: true,
		skeletonAdditionalContent: true
	},
};