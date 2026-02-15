////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { PmdsCdkButtonModalComponent } from './pmds-cdk-button-modal.component';
import { componentInfo } from './story-helpers/pmds-cdk-button-modal-component-info-story';
import { buttons, buttonsDisabled, template, buttonsDropdown } from './story-helpers/pmds-cdk-button-modal-component-const-story';

export default {
	title: 'Cdk/Buttons/Button modal',
	component: PmdsCdkButtonModalComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsCdkButtonComponent],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		backLiteral: 'back'
	},
	argTypes: {
		buttons: {
			description: 'Array with all the buttons to be shown',
			type: { required: true },
			table: {
				type: {
					summary: `
					IPmdsCdkButtonModalButton {
					type: PmdsCdkButtonType,
					label: string,
					action?: () => void,
					icon?: string,
					iconPosition: 'left' | 'right',
					disabled: boolean
					dropdownButtons?: IPmdsCdkButtonModalButton[]
				}[]`,
				},
			},
			control: {
				type: 'object',
			},
		},
		hasBackdropClick: {
			description:
				'Set if user can close the button modal by clicking on background',
			type: { type: 'boolean' },
			defaultValue: { summary: 'true' },
			table: {
				type: { summary: 'Boolean' },
				defaultValue: { summary: 'true' },
			},
			control: {
				type: 'boolean',
			},
		},
		show: {
			name: '[(show)]',
			description: 'Wether to show the component or not',
			type: { type: 'boolean' },
			defaultValue: { summary: 'true' },
			table: {
				type: { summary: 'Boolean' },
				category: 'TwoDataBiding',
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
		backLiteral: {
			description: 'Literal for back button in dropdown button case',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		showChange: {
			description: 'Emit show changes',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<boolean>' },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkButtonModalComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const WithBackdropClick: StoryObj<PmdsCdkButtonModalComponent> = {
	args: {
		buttons,
		hasBackdropClick: true,
		show: false,
	},
	render: (args) => ({
		props: args,
		template,
	}),
};

export const WithoutBackdropClick: StoryObj<PmdsCdkButtonModalComponent> = {
	args: {
		buttons,
		hasBackdropClick: false,
		show: false,
	},
	render: (args) => ({
		props: args,
		template,
	}),
};

export const WithDisabledButton: StoryObj<PmdsCdkButtonModalComponent> = {
	args: {
		buttons: buttonsDisabled,
		hasBackdropClick: false,
		show: false,
	},
	render: (args) => ({
		props: args,
		template,
	}),
};

export const WithoutButtonDropdown: StoryObj<PmdsCdkButtonModalComponent> = {
	args: {
		buttons: buttonsDropdown,
		hasBackdropClick: false,
		show: false,
	},
	render: (args) => ({
		props: args,
		template,
	}),
};
