////////Component imports
import { PmdsCdkStepperComponent } from './pmds-cdk-stepper.component';
import { componentInfo } from "./story-helpers/pmds-cdk-stepper-component-info-story";

export default {
	title: 'Cdk/Navigation/Stepper',
	component: PmdsCdkStepperComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		steps: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']
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
		steps: {
			description: 'Steps names',
			table: {
				type: { summary: 'string[]' },
				defaultValue: { summary: [] }
			},
			control: {
				type: 'array',
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
		current: {
			description: 'Current state of the process',
			table: {
				type: {summary: 'Integer'},
				defaultValue: {summary: '0'}
			},
			control: {
				type: 'number',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkStepperComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Docs = {
	args: {
		current: 4,
	},
};

export const NotStartedStep0 = {
	args: {
		current: 0,
	},
};

export const LastStep = {
	args: {
		current: 5,
	},
};

export const Finished = {
	args: {
		current: 6,
	},
};

export const Skeleton = {
	args: {
		current: 6,
		skeleton: true
	},
};
