////////Component imports
import { PmdsCdkTagLabelComponent } from './pmds-cdk-tag-label.component';
import { componentInfo } from "./story-helpers/pmds-cdk-tag-label-component-info-story";

export default {
	title: 'Cdk/Resources/Tag label',
	component: PmdsCdkTagLabelComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		label: 'label',
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
		color: {
			description: 'Tag label color',
			table: {
				type: {
					summary: 'TPmdsCdkTagLabelColor = red | green | yellow | grey | blue',
				},
				defaultValue: { summary: `grey` },
			},
			options: ['red', 'green', 'yellow', 'grey', 'blue'],
			control: { type: 'select' },
		},
		label: {
			description: 'String for tag label',
			table: {
				type: { summary: 'string' },
			},
			type: {
				required: true
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
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTagLabelComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const Red = {
	args: {
		color: 'red',
	},
};

export const Green = {
	args: {
		color: 'green',
	},
};

export const Yellow = {
	args: {
		color: 'yellow',
	},
};

export const Grey = {
	args: {
		color: 'grey',
	},
};

export const Blue = {
	args: {
		color: 'blue',
	},
};

export const Skeleton = {
	args: {
		skeleton: true,
	},
};
