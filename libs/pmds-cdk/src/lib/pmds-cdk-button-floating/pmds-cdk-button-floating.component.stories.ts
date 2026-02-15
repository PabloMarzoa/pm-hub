////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkButtonFloatingComponent } from './pmds-cdk-button-floating.component';
import { componentInfo } from './story-helpers/pmds-cdk-button-floating-component-info-story';

export default {
	title: 'Cdk/Buttons/Button floating',
	component: PmdsCdkButtonFloatingComponent,
	tags: ['autodocs'],
	argTypes: {
		isDisabled: {
			description: 'Boolean for isDisabledd the control',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		icon: {
			description: 'Icon string, name must be in the icons library',
			table: {
				type: { summary: 'pmicons-XXXX' },
				defaultValue: { summary: 'pmicons-plus' },
			},
			control: {
				type: 'text',
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
		buttonClick: {
			description: 'Emit button click',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkButtonFloatingComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const Primary: StoryObj<PmdsCdkButtonFloatingComponent> = {
	args: {
		isDisabled: false,
		icon: 'pmicons-plus',
		dataQA: 'storybook-qa-'
	},
	render: (args) => ({
		props: {
			...args,
			buttonClick: () => alert('button clicked')
		},
		template: `
			<p>Go to mobile size for see the button</p>
			<section class="z-50">
				<pmds-cdk-button-floating
		   			[isDisabled]="isDisabled"
		   			[icon]="icon"
		   			(buttonClick)="buttonClick()"
				/>
			</section>
		    `,
	}),
};
