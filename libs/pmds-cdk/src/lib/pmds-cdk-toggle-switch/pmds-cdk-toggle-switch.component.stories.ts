/////////////// Angular imports
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
/////////////// Third party imports
import { moduleMetadata, type StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkToggleSwitchComponent } from './pmds-cdk-toggle-switch.component';
import { template } from "./story-helpers/pmds-cdk-toggle-switch-component-const-story";
import { componentInfo } from "./story-helpers/pmds-cdk-toggle-switch-component-info-story";

export default {
	title: 'Cdk/Forms, data input and selections/Toggle switch',
	component: PmdsCdkToggleSwitchComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [FormsModule, ReactiveFormsModule],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		compact: true
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
		label: {
			description: 'Component label',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		compact: {
			description: 'Set if the label can expand or not',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
			control: {
				type: 'boolean',
			},
		},
		isDisabled: {
			description: 'Status of the toggle',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		size: {
			description: 'Size of the toggle',
			table: {
				type: { summary: 'TPmdsCdkToggleSwitchSize: small | medium | large' },
				defaultValue: { summary: 'medium' },
			},
			options: ['small', 'medium', 'large'],
			control: {
				type: 'select',
			},
		},
		switchChange: {
			description: 'Emit the change and the new value in boolean',
			table: {
				category: 'Events',
				type: { summary: `
					EventEmitter<Boolean>
          ` },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkToggleSwitchComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const Default: StoryObj<PmdsCdkToggleSwitchComponent> = {
	args: {
		isDisabled: false,
		size: 'medium'
	},
	render: (args) => {
		return {
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					switch: [{ value: true }],
				}),
			},
			template,
		};
	},
};

export const WithLabelCompact: StoryObj<PmdsCdkToggleSwitchComponent> = {
	args: {
		isDisabled: false,
		size: 'medium',
		label: 'toggle'
	},
	render: (args) => {
		return {
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					switch: [{ value: true }],
				}),
			},
			template,
		};
	},
};

export const WithLabelExpanded: StoryObj<PmdsCdkToggleSwitchComponent> = {
	args: {
		isDisabled: false,
		size: 'medium',
		label: 'toggle',
		compact: false
	},
	render: (args) => {
		return {
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					switch: [{ value: true }],
				}),
			},
			template,
		};
	},
};

export const Small: StoryObj<PmdsCdkToggleSwitchComponent> = {
	args: {
		isDisabled: false,
		size: 'small',
	},
	render: (args) => {
		return {
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					switch: [{ value: true }],
				}),
			},
			template,
		};
	},
};

export const Large: StoryObj<PmdsCdkToggleSwitchComponent> = {
	args: {
		isDisabled: false,
		size: 'large',
	},
	render: (args) => {
		return {
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					switch: [{ value: true }],
				}),
			},
			template,
		};
	},
};

export const Disabled: StoryObj<PmdsCdkToggleSwitchComponent> = {
	args: {
		isDisabled: true,
		size: 'medium',
	},
	render: (args) => {
		return {
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					switch: [],
				}),
			},
			template,
		};
	},
};

export const DisabledChecked: StoryObj<PmdsCdkToggleSwitchComponent> = {
	args: {
		isDisabled: true,
		size: 'medium',
	},
	render: (args) => {
		return {
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					switch: [{ value: true }],
				}),
			},
			template,
		};
	},
};
