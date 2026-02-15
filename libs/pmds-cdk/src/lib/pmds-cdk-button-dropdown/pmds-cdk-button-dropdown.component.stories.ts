////////Third party libraries
import { componentWrapperDecorator, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkButtonDropdownComponent } from './pmds-cdk-button-dropdown.component';
import { componentInfo } from './story-helpers/pmds-cdk-button-dropdown-component-info-story'

export default {
	title: 'Cdk/Buttons/Button dropdown',
	component: PmdsCdkButtonDropdownComponent,
	tags: ['autodocs'],
	decorators: [
		componentWrapperDecorator(
		  (story) => `
			<section class="h-[300px] flex justify-end">
			  ${story}
			</section>`
		)
	  ],
	args:{
		options: [
		{
			label: 'Option 1',
			actionFn: () => alert('ok'),
		},
		{
			label: 'Option 2',
			actionFn: () => alert('ok'),
		},
		{
			label: 'Option 3',
			actionFn: () => alert('ok'),
		},
		{
			label: 'Option 4',
			actionFn: () => alert('ok'),
		},
		{
			label: 'Option 5',
			actionFn: () => alert('ok'),
		},
		{
			label: 'Option 6',
			actionFn: () => alert('ok'),
		},
		{
			label: 'Option 7',
			actionFn: () => alert('ok'),
		}],
		dataQA: 'storybook-qa-',
		buttonLabel: 'Label',
		openLeft: false,
		size: 'large'
	} ,
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
		buttonLabel: {
			description: 'Text for label',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
			type: { required: true }
		},
		type: {
			description:
				'type of button to be displayed',
			table: {
				type: {
					summary: `TPmdsCdkButtonDropdownType: 'single' | 'double' | 'tertiary'double-secondary' | 'single-secondary''`,
				},
				
			},
			options: ['single', 'double', 'tertiary', 'double-secondary', 'single-secondary'],
			control: {
				type: 'radio',
			},
		},
		size: {
			description:
				'size of the button in height',
			table: {
				type: {
					summary: `TPmdsCdkButtonDropdownSize: 'large' | 'small'`,
				},
				
			},
			options: ['large' , 'small'],
			control: {
				type: 'radio',
			},
		},
		openLeft: {
			description:
				'When the button is in left use this input for open dropdown in left 0 position',
			table: {
				type: {
					summary: `boolean`,
				},
				defaultValue: {
					summary: `false`,
				},
			},
			control: {
				type: 'boolean',
			},
		},
		smallFit: {
			description: 'If is not set the button have the default width (136px)',
			table: {
			  type: { summary: 'true | false' },
			  defaultValue: { summary: `false` }
			},
			control: {
			  type: 'boolean',
			},
		},
		options: {
			description: 'Options to be displayed in the dropdown',
			table: {
				type: {
					summary: `IPmdsCdkButtonDropdownOption: {
							label: string,
							actionFn: method
					}`,
				},
				control: {
					type: 'object',
				}
			},
			type: { required: true }
		},
		doubleAction: {
			description: 'Emit the action of the double button type',
			  table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			  }
		  }
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkButtonDropdownComponent',
			description: {
				component: componentInfo,
			},
		}
	},
};

export const Docs = {
	args: {
		type: 'single',
	},
};

export const TypeDouble: StoryObj<PmdsCdkButtonDropdownComponent> = {
   args: {
		type: 'double',
   }
 };

export const SingleSecondary = {
	args: {
		type: 'single-secondary',
	},
};

export const DoubleSecondary: StoryObj<PmdsCdkButtonDropdownComponent> = {
   args: {
		type: 'double-secondary',
   }
 };

 export const TypeTertiary: StoryObj<PmdsCdkButtonDropdownComponent> = {
	args: {
		 type: 'tertiary',
	}
  };

  export const smallSize: StoryObj<PmdsCdkButtonDropdownComponent> = {
	args: {
		 type: 'single',
		 size: 'small',
	}
  };

  export const openLeft: StoryObj<PmdsCdkButtonDropdownComponent> = {
	decorators: [
		componentWrapperDecorator(
		  (story) => `
			<section class="w-full flex justify-start">
			  ${story}
			</section>`
		)
	  ],
	args: {
		 type: 'single',
		 openLeft: true
	}
  };
