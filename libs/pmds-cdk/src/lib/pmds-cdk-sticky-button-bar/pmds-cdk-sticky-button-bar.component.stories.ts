////////Third party libraries
import { moduleMetadata, type StoryObj } from '@storybook/angular';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { PmdsCdkStickyButtonBarComponent } from './pmds-cdk-sticky-button-bar.component';
import { componentInfo } from "./story-helpers/pmds-cdk-sticky-button-bar-component-info-story";
import { buttons } from "./story-helpers/pmds-cdk-sticky-button-bar-component-const-story";

export default {
	title: 'Cdk/Resources/Sticky button bar',
	component: PmdsCdkStickyButtonBarComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsCdkButtonComponent],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		position: null
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
		position: {
			description: 'Set position from bar<li>**Fixed** position in bottom and apply w-screen</li><li>**Bottom** position in bottom of document and apply w-full</li>',
			table: {
				type: { summary: 'fixed | bottom' },
				defaultValue: { summary: 'null' },
			},
			options: ['fixed', 'bottom', null],
			control: {
				type: 'radio',
			},
		},
		showDesktop: {
			description: 'Show only in mobile view',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		floatingButton: {
			description: 'Only view on mobile and show close and back button',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		showChange: {
			description: 'Emit show changes',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<boolean>' },
			},
		},
		close: {
			description: 'Emit close click',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
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
		buttons: {
			description: 'Array with all the buttons to be shown',
			type: { type: 'IPmdsCdkStickyButtonBarButton' },
			defaultValue: { summary: '-' },
			table: {
				type: {
					summary: `
					IPmdsCdkStickyButtonBarButton {
					type: PmdsCdkButtonType,
					label: string,
					action: () => void,
					icon?: string,
					iconPosition: 'left' | 'right',
					disabled: boolean
					dropdownButtons?: IPmdsCdkStickyButtonBarButton[]
				}`,
				},
			},
			control: {
				type: 'object',
			},
		},

	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkStickyButtonBarComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const ShowDesktop: StoryObj<PmdsCdkStickyButtonBarComponent> = {
	args: {
		showDesktop: true,
		buttons,
	},
};

export const ShowOnlyMobile: StoryObj<PmdsCdkStickyButtonBarComponent> = {
	args: {
		showDesktop: false,
		buttons,
	},
};

export const FloatingButton: StoryObj<PmdsCdkStickyButtonBarComponent> = {
	args: {
		floatingButton: true,
		position: 'bottom',
		show: false,
		buttons: [
			{
				type: 'primary',
				label: 'Primary button',
				icon: 'pmicons-chevron-right-1px',
				iconPosition: 'right',
				dropdownButtons: [
					{
						type: 'primary',
						label: 'Primary button',
						action: () => alert('button click'),
						iconPosition: 'right',
					},
					{
						type: 'secondary',
						label: 'Secondary button',
						action: () => alert('button click'),
						iconPosition: 'right',
					},
				]
			},
			{
				type: 'secondary',
				action: () => alert('button click'),
				label: 'Secondary button',
				iconPosition: 'right',
			},
		],
	},
	render: (args) => ({
		props: args,
		template: `
		<p class="mobile:hidden">
			Go to mobile screen
		</p>
		<pmds-cdk-button
			class="md:hidden"
			buttonType="primary"
			(buttonClick)="show=!show"
			(click)="show=true"
			label="Open button menu"
		/>
		<pmds-cdk-sticky-button-bar
			[buttons]="buttons"
			[(show)]="show"
			[dataQA]="dataQA"
			[position]="position"
			[floatingButton]="floatingButton"
	  	/>
		`
	}),
};

