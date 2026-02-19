////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsDirectiveTitle } from './pmds-directive-title.directive';
import { componentInfo } from "./story-helpers/pmds-directive-title-component-info-story";

export default {
	title: 'Common/Directives/Title',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsDirectiveTitle],
		}),
	],
	argTypes: {
		value: {
			description: 'Value to transform',
			control: {
				type: 'text',
			},
		},
		disabledEllipsis: {
			description: 'For disabled ellipsis with a conditional',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			},
			control: {
				type: 'boolean',
			},
		},
		forceTitle: {
			description: 'For set title always',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			},
			control: {
				type: 'boolean',
			},
		},
		forceLabel: {
			description: 'For set a custom string for title',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'string',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsDirectiveTitle',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const SingleLine: StoryObj<{ value: string }> = {
	args: {
		value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolor
		fuga quis, vel quibusdam possimus sapiente consequatur, architecto ex
		eligendi hic libero modi? Odio nulla voluptatem consequatur, quisquam
		suscipit dolorem!`,
	},
	render: (args) => ({
		props: args,
		template: `
		<section>
			<div pmdsTitle [disabledEllipsis]="disabledEllipsis">
				{{ value }}
			</div>
		</section>
    	`,
	}),
};

export const MultipleLines: StoryObj<{ value: string }> = {
	parameters: { 
		docs: {
		  description: {
			story: `For multiple lines is necessary add **[multipleLine]="true"** and the class for number lines: 'line-clamp-2', 'line-clamp-3', ...`,
		  },
		}
	  },
	args: {
		value: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolor
		fuga quis, vel quibusdam possimus sapiente consequatur, architecto ex
		eligendi hic libero modi? Odio nulla voluptatem consequatur, quisquam
		suscipit dolorem!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolor
		fuga quis, vel quibusdam possimus sapiente consequatur, architecto ex
		eligendi hic libero modi? Odio nulla voluptatem consequatur, quisquam
		suscipit dolorem!`,
	},
	render: (args) => ({
		props: args,
		template: `
		<section>
			<div pmdsTitle [multipleLine]="true" class="line-clamp-2">
				{{ value }}
			</div>
		</section>
    	`,
	}),
};
