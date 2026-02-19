////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkCopyClipboardComponent } from './pmds-cdk-copy-clipboard.component';
import { componentInfo } from './story-helpers/pmds-cdk-copy-clipboard-component-info-story';

export default {
	title: 'Cdk/Feedback & System status/Copy clipboard',
	component: PmdsCdkCopyClipboardComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		iconPosition: 'right',
		textToCopy: 'Copy text example',
	},
	argTypes: {
		textToCopy: {
			description: 'Literal for save in clipboard',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		literal: {
			description: 'Literal for button',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		literalCopied: {
			description: 'Literal for button when copy value',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		iconPosition: {
			description: 'Position for icon',
			table: {
				type: { summary: 'TPmdsCdkCopyClipboardIconPosition: | right | left' },
			},
			defaultValue: {
				summary: 'right',
			},
			options: ['left', 'right'],
			control: {
				type: 'radio',
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
		hideLabelMobile: {
			description: 'If label exist hide it in mobile',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		copyClick: {
			description: 'Emit event when copy text',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkCopyClipboardComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const CopyClickBoard: StoryObj<PmdsCdkCopyClipboardComponent> = {
	args: {
		literal: 'Literal',
		literalCopied: 'Copied',
		hideLabelMobile: false,
	},
};

export const CopyClickBoardLeftIcon: StoryObj<PmdsCdkCopyClipboardComponent> =
	{
		args: {
			literal: 'Literal',
			literalCopied: 'Copied',
			iconPosition: 'left',
		},
	};

export const CopyClickBoardHideLabelMobile: StoryObj<PmdsCdkCopyClipboardComponent> =
	{
		args: {
			literal: 'Literal',
			literalCopied: 'Copied',
			hideLabelMobile: true,
		},
	};

export const CopyClickBoardWithoutLabel: StoryObj<PmdsCdkCopyClipboardComponent> =
	{};
