////////Angular imports
import { FormGroupDirective } from '@angular/forms';
////////Third party libraries
import { StoryObj, moduleMetadata } from '@storybook/angular';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkDropdownComponent } from '../pmds-cdk-dropdown/pmds-cdk-dropdown.component';
////////Component imports
import { PmdsCdkProcessHeaderComponent } from './pmds-cdk-process-header.component';
import { componentInfo } from './story-helpers/pmds-cdk-process-header-component-info-story';
import { titleImg } from './story-helpers/pmds-cdk-process-header-component-const-story';

export default {
	title: 'Cdk/Navigation/Process Header',
	component: PmdsCdkProcessHeaderComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsCdkButtonComponent, PmdsCdkDropdownComponent],
			providers: [FormGroupDirective],
		}),
	],
	args: {
		maxDesktopWidth: 'max-w-[808px]',
		dataQA: 'storybook-qa-',
		literals: {
			title: 'Process title',
			stepTitle: 'Step title',
			stepSubtitle: 'Description subtitle',
			stepIndex: 1,
		},
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
		titleImg: {
			description: 'Title base64 img',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		maxDesktopWidth: {
			description: 'Max width for content in desktop view<li>**Funnels**: max-w-[808px]</li><li>**Funnels two columns**: max-w-[1016px]</li><li>**Payment form**: max-w-[704px]</li>',
			table: {
				type: {
					summary:
						'TPmdsCdkProcessHeaderMaxDesktopWidth:| max-w-[808px] | max-w-[704px] | max-w-[1016px]',
				},
				defaultValue: { summary: 'max-w-[808px]' },
			},
			options: ['max-w-[808px]', 'max-w-[704px]', 'max-w-[1016px]'],
			control: {
				type: 'select',
			},
		},
		subtitleStyles: {
			description: 'Subtitle container styles',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		centerSubtitle: {
			description: 'Center subtitle',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			control: {
				type: 'boolean',
			},
		},
		literals: {
			description: 'For literals template',
			table: {
				type: {
					summary: `
				IPmdsCdkProcessHeaderLiterals: {
						title: string,
						stepTitle: string,
						stepSubtitle: string
						stepIndex?: number
					}
				`,
				},
				defaultValue: {
					summary: `
					title: '',
					stepTitle: '',
					stepSubtitle: ''
					stepIndex: 0
				`,
				},
			},
			control: {
				type: 'string',
			},
		},
		process: {
			description: 'Process header bar',
			control: {
				type: 'number',
			},
			table: {
				type: { summary: 'number' },
			},
		},
		actions: {
			description: 'For process header actions',
			table: {
				type: {
					summary: `
			  	IPmdsCdkProcessHeaderActions[]: {
						actionFn?: () => void;
						actionIcon: string;
						actionLabel: string;
				  }
				`,
				},
			},
			control: {
				type: 'array',
			},
		},
		backButton: {
			description: 'For process header back action',
			table: {
				type: {
					summary: `
			  	IPmdsCdkProcessHeaderActions: {
						actionFn?: () => void;
						actionIcon: string;
						actionLabel: string;
				  }
				`,
				},
			},
			control: {
				type: 'array',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkProcessHeaderComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const ProcessHeader: StoryObj<PmdsCdkProcessHeaderComponent> = {
	args: {
		progress: 50,
	},
};

export const ProcessHeaderWithImage: StoryObj<PmdsCdkProcessHeaderComponent> =
	{
		args: {
			titleImg,
			progress: 50,
			literals: {
				title: 'Process title',
				stepTitle: 'Step title',
				stepSubtitle: 'Description subtitle',
				stepIndex: 2,
			},
		},
	};

export const ProcessHeaderWithActions: StoryObj<PmdsCdkProcessHeaderComponent> =
	{
		args: {
			progress: 50,
			literals: {
				title: 'Process title',
				stepTitle: 'Step title',
				stepSubtitle: 'Description subtitle',
				stepIndex: 2,
			},
			actions: [
				{
					actionIcon: 'pmicons-copy-document',
					actionLabel: 'Copy',
					actionFn: () => alert('Action copy click'),
				},
				{
					actionIcon: 'pmicons-close',
					actionLabel: 'Close',
					actionFn: () => alert('Action close click'),
				},
			],
			backButton: {
				actionIcon: 'pmicons-chevron-left',
				actionLabel: 'Back',
				actionFn: () => alert('Action copy click'),
			},
		},
	};

export const ProcessHeaderWithOutIndex: StoryObj<PmdsCdkProcessHeaderComponent> =
	{
		args: {
			progress: 50,
		},
	};

export const ProcessHeader100: StoryObj<PmdsCdkProcessHeaderComponent> = {
	args: {
		progress: 100,
	},
};

export const ProcessHeaderWithCenteredSubtitle: StoryObj<PmdsCdkProcessHeaderComponent> =
	{
		args: {
			progress: 100,
			centerSubtitle: true,
		},
	};
