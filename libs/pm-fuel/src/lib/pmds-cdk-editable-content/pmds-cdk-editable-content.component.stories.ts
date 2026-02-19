////////Angular imports
import { FormControl, FormGroupDirective, Validators } from '@angular/forms';
////////Third party libraries
import {
	componentWrapperDecorator,
	moduleMetadata,
	type StoryObj,
} from '@storybook/angular';
////////Component imports
import { PmdsCdkEditableContentComponent } from './pmds-cdk-editable-content.component';
import { componentInfo } from './story-helpers/pmds-cdk-editable-content-component-info-story';

export default {
	title: 'Cdk/Resources/Editable content',
	component: PmdsCdkEditableContentComponent,
	tags: ['autodocs'],
	decorators: [
		componentWrapperDecorator(
			(story) => `
			<section class="h-16" (click)="alert(123)">
            ${story}
        </section>`
		),
		moduleMetadata({
			providers: [FormGroupDirective],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		contentPosition: 'left',
		tooltipPosition: 'left',
		placeholder: 'placeholder',
		typeInput: 'text'
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
		contentPosition: {
			description:
				'Label position in section **TPmdsCdkEditableContentPosition**',
			table: {
				type: { summary: 'left | center | right' },
				defaultValue: { summary: 'left' },
			},
			options: ['left', 'center', 'right'],
			control: {
				type: 'select',
			},
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
		formControl: {
			description: 'Abstract control',
			table: {
				type: { summary: 'AbstractControl' },
			},
			type: {
				type: 'object',
			}
		},
		hideOnTablet: {
			description: 'Hide edit button in tablet view',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			type: {
				type: 'boolean',
			}
		},
		isDisabled: {
			description: 'Disable edit button',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			type: {
				type: 'boolean',
			}
		},
		noEditClass: {
			description: 'Tailwind class for label in no edit view',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'font-body-s-bold' },
			},
			type: {
				type: 'string',
			}
		},
		noEditIcon: {
			description: 'Icon for no edit view',
			table: {
				type: { summary: 'pmicons-xxx' },
			},
			type: {
				type: 'string',
			}
		},
		noEditValue: {
			description: 'Initial value',
			table: {
				type: { summary: 'string' },
			},
			type: {
				type: 'string',
			}
		},
		placeholder: {
			description: 'Placeholder for input',
			table: {
				type: { summary: 'string' },
			},
			type: {
				type: 'string',
			}
		},
		tooltipPosition: {
			description:
				'Tooltip position in section **TPmdsCdkEditableContentPosition**',
			table: {
				type: { summary: 'left | center | right' },
				defaultValue: { summary: 'left' },
			},
			options: ['left', 'center', 'right'],
			control: {
				type: 'select',
			},
		},
		tooltipValue: {
			description: 'Value for tooltip',
			table: {
				type: { summary: 'string' },
			},
			type: {
				type: 'string',
			}
		},
		typeInput: {
			description:
				'Type for input',
			table: {
				type: { summary: 'text | number' },
				defaultValue: { summary: 'text' },
			},
			options: ['text', 'number'],
			control: {
				type: 'select',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkEditableContentComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const WithoutForm: StoryObj<PmdsCdkEditableContentComponent> = {
	render: (args) => ({
		props: args,
	}),
};

export const WithForm: StoryObj<PmdsCdkEditableContentComponent> = {
	args: {
		formControl: new FormControl('Default value', [Validators.required]),
	},
	render: (args) => ({
		props: args,
	}),
};

export const TypeNumber: StoryObj<PmdsCdkEditableContentComponent> = {
	args: {
		typeInput: 'number',
	},
	render: (args) => ({
		props: args,
	}),
};

export const WhitIcon: StoryObj<PmdsCdkEditableContentComponent> = {
	args: {
		noEditIcon: 'pmicons-placeholder',
		noEditValue: 'Initial value'
	},
	render: (args) => ({
		props: args,
	}),
};

export const Disabled: StoryObj<PmdsCdkEditableContentComponent> = {
	args: {
		isDisabled: true,
		noEditValue: 'Initial value',
	},
	render: (args) => ({
		props: args,
	}),
};

export const PositionRight: StoryObj<PmdsCdkEditableContentComponent> = {
	args: {
		noEditClass: 'font-body-s-bold',
		contentPosition: 'right',
		noEditValue: 'Initial value',
	},
	render: (args) => ({
		props: args,
	}),
};

export const PositionCenter: StoryObj<PmdsCdkEditableContentComponent> = {
	args: {
		noEditClass: 'font-body-s-bold',
		contentPosition: 'center',
		noEditValue: 'Initial value',
	},
	render: (args) => ({
		props: args,
	}),
};

export const Tooltip: StoryObj<PmdsCdkEditableContentComponent> = {
	args: {
		noEditClass: 'font-body-s-bold',
		noEditValue: 'Initial value',
		tooltipValue: 'Tooltip content',
	},
	render: (args) => ({
		props: args,
	}),
};

export const TooltipRight: StoryObj<PmdsCdkEditableContentComponent> = {
	args: {
		noEditClass: 'font-body-s-bold',
		contentPosition: 'right',
		noEditValue: 'Initial value',
		tooltipValue: 'Tooltip content',
		tooltipPosition: 'right',
	},
	render: (args) => ({
		props: args,
	}),
};

export const TooltipCenter: StoryObj<PmdsCdkEditableContentComponent> = {
	args: {
		noEditClass: 'font-body-s-bold',
		contentPosition: 'center',
		noEditValue: 'Initial value',
		tooltipValue: 'Tooltip content',
		tooltipPosition: 'center',
	},
	render: (args) => ({
		props: args,
	}),
};
