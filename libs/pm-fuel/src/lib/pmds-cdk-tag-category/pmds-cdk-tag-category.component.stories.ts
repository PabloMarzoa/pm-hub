////////Component imports
import { PmdsCdkTagCategoryComponent } from './pmds-cdk-tag-category.component';
import { componentInfo } from "./story-helpers/pmds-cdk-tag-category-component-info-story";

export default {
	title: 'Cdk/Resources/Tag category',
	component: PmdsCdkTagCategoryComponent,
	tags: ['autodocs'],
	args: {
		assetsFolder: 'assets',
		dataQA: 'storybook-qa-',
		flagCode: 'EU',
		label: 'ISO'
	},
	argTypes: {
		assetsFolder: {
			description: 'Name for assets folder, add this only if your assets folder is different to "assets"',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'assets' },
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
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		flagCode: {
			description: 'Text for flag code',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Default' },
			},
		},
		isDisabled: {
			description: 'For disabled input',
			table: {
				type: { summary: 'boolean' },
				options: [true, false],
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		label: {
			description: 'Text for label',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
		},
		tooltip: {
			description: 'Text for label',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
		},
		showIcon: {
			description: 'For show icon',
			table: {
				type: { summary: 'boolean' },
				options: [true, false],
				defaultValue: { summary: 'true' },
			},
			control: {
				type: 'boolean',
			},
		},
		tooltipPosition: {
			description: 'Position for Tooltip',
			options: [
				'top-left',
				'top-center',
				'top-right',
				'bottom-left',
				'bottom-center',
				'bottom-right',
			],
			table: {
				defaultValue: {summary: 'top-center'},
				type: {
					summary:
						'TPmdsDirectiveTooltipPosition: | top-left | top-center | top-right | bottom-left | bottom-center | bottom-right',
				},
			},
			control: {
				type: 'radio',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTagCategoryComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const TagCategory = {
	args: {
		isDisabled: false,
		showIcon: true,
	},
};

export const TagCategoryDisabled = {
	args: {
		isDisabled: true,
		showIcon: true,
	},
};

export const TagCategoryWithOutIcon = {
	args: {
		isDisabled: false,
		showIcon: false,
	},
};

export const TagCategoryWithOutIconDisabled = {
	args: {
		isDisabled: true,
		showIcon: false,
	},
};

export const TagCategoryWithTooltip = {
	args: {
		showIcon: false,
		tooltip: 'Tooltip'
	},
};

export const Skeleton = {
	args: {
		showIcon: false,
		skeleton: true
	},
};
