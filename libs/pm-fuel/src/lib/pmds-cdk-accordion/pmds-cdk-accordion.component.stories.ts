////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkAccordionComponent } from './pmds-cdk-accordion.component';
import {
	componentInfo,
	storyWithNgContentInfo,
	storyMoreOneExpansionPanel
} from './story-helpers/pmds-cdk-accordion-component-info-story';

export default {
	title: 'Cdk/Navigation/Accordion',
	component: PmdsCdkAccordionComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-'
	},
	argTypes: {
		literals: {
			description: 'Literals for template',
			table: {
				type: {
					summary: `
					IPmdsCdkAccordionLiterals: {
						title: string,
						elements: string
					}
				`,
				},
			},
			control: {
				type: 'object'
			},
			type: {
				required: true
			}
		},
		open: {
			description: 'If you need open content to appear by default',
			table: {
				type: { summary: 'boolean' },
				required: true,
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		hideBottomBorder: {
			description: 'When use more one accordion components together, set true for hide bottom border',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		content: {
			description: 'It is the content for the panel, it is possible to add html content',
			table: {
				type: { summary: 'string[]' },
			},
			control: {
				type: 'array',
			},
		},
		tags: {
			description: 'Tags to gives information about the content inside',
			table: {
				type: { summary: 'IPmdsCdkAccordionTags[]' },
			},
			control: {
				type: 'array',
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
		skeletonOpen: {
			description: 'Show the skeleton section in open version',
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
			subtitle: 'PmdsCdkAccordionComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Accordion: StoryObj<PmdsCdkAccordionComponent> = {
	args: {
		literals: {
			title: 'Level 1',
			elements: '1 of 1 element',
		},
		content: ['Level 2'],
		open: false
	},
};

export const AccordionWithTags: StoryObj<PmdsCdkAccordionComponent> = {
	args: {
		literals: {
			title: 'Level 1',
			elements: '1 of 1 element',
		},
		tags: [
			{
				label: 'ISO',
				flagCode: 'EU',
				assetsFolder: 'assets',
			},
			{
				label: 'ISO',
				flagCode: 'EU',
				assetsFolder: 'assets',
			},
		],
		content: ['Level 2'],
		open: false
	},
};

export const Open: StoryObj<PmdsCdkAccordionComponent> = {
	args: {
		literals: {
			title: 'Level 1',
			elements: '1 of 1 element',
		},
		content: [
			'Level 2'
			],
		open: true,
	},
};

export const OpenMoreLevels: StoryObj<PmdsCdkAccordionComponent> = {
	args: {
		literals: {
			title: 'Level 1',
			elements: '1 of 1 elements',
		},
		content: ['Level 2.1', 'Level 2.2', '<div>Level 2.3: <strong>html content</strong></div>'],
		open: true,
	},
};

export const WithNgContent: StoryObj<PmdsCdkAccordionComponent> = {
	parameters: {
		docs: {
		  description: {
			story: `For ng content option don't set the value of content and add the additional template into tags`,
		  },
		}
	  },
	args: {
		literals: {
			title: 'Level 1',
			elements: '1 of 1 element',
		},
	},
	render: (args) => ({
		props: {
			...args,
		},
		template: `
        <pmds-cdk-accordion
          [literals]="literals"
          [dataQA]="dataQA"
          [skeleton]="skeleton"
          [skeleton]="skeletonOpen"
		  >
		  <div class="flex items-center justify-center p-3 border border-color-border-error text-color-text-error">
		 	Additional content
		  </div>
		</pmds-cdk-accordion>
    `,
	}),
};

export const MoreOneAccordion: StoryObj<PmdsCdkAccordionComponent> = {
	parameters: {
		docs: {
		  description: {
			story: storyWithNgContentInfo,
		  },
		}
	  },
	args: {
		literals: {
			title: 'Level 1',
			elements: '1 of 2 elements',
		},
		content: [],
		open: true,
	},
	render: (args) => ({
		props: {
			...args,
			literals2: {
				title: 'Level 2',
				elements: '2 of 2 elements',
			}
		},
		template: storyMoreOneExpansionPanel,
	}),
};

export const Skeleton: StoryObj<PmdsCdkAccordionComponent> = {
	args: {
		skeleton: true,
	},
};

export const SkeletonOpen: StoryObj<PmdsCdkAccordionComponent> = {
	args: {
		skeleton: true,
		skeletonOpen: true,
	},
};