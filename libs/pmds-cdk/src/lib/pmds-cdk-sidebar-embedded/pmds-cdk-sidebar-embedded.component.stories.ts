////////Third party libraries
import { type StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkSidebarEmbeddedComponent } from './pmds-cdk-sidebar-embedded.component';
import { componentInfo } from './story-helpers/pmds-cdk-sidebar-embedded-component-info-story';
import { PmdsCdkSidebarEmbeddedWrapperComponent } from './story-helpers/pmds-cdk-sidebar-embedded-wrapper-component.component';

export default {
	title: 'Cdk/Resources/Sidebar embedded',
	component: PmdsCdkSidebarEmbeddedWrapperComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		config: {
			sidebarTitle: '[Sidebar title]',
			footerButtons: [
				{
					label: 'button',
					icon: 'pmicons-placeholder',
					type: 'primary',
					action: () => alert('button click')
				},
				{
					label: 'button',
					icon: 'pmicons-placeholder',
					type: 'secondary',
					action: () => alert('button click')
				}
			],
			loaderLiterals: {
				title: 'Main text',
				subtitle: 'Secondary text'
			},
			headerButton: {
				actionButton1: () => alert('button click'),
				actionButton2: () => alert('button click'),
				iconButton1: 'pmicons-placeholder',
				iconButton2: 'pmicons-placeholder',
				labelButton1: 'button',
				labelButton2: 'button',
			},
			backButton: {
				label: 'back',
				action: () => alert('button click')
			}
		},
		loading: false
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
		config: {
			description: 'Configuration for sidebar',
			table: {
				type: { summary: `IPmdsCdkSidebarEmbeddedConfig {
					sidebarTitle: string,
					backButton: {
						action: () => void;
						label: string;
					};
					footerButtons: IPmdsCdkStickyButtonBarButton[];
					loaderLiterals: {
						title: string;
						subtitle: string;
					};
					headerButton: {
						actionButton1: () => void;
						actionButton2: () => void;
						iconButton1: string;
						iconButton2: string;
						labelButton1: string;
						labelButton2: string;
					};
				}` },
			},
			control: {
				type: 'object',
			},
			type: { required: true }
		},
		sidebarComponent: {
			description: 'Angular component with content into sidebar',
			table: {
				type: { summary: 'Type<any>' },
			},
			control: {
				type: 'object',
			},
			type: { required: true }
		},
		loading: {
			description: 'Show loading in sidebar',
			table: {
				type: { summary: 'boolean' },
			},
			control: {
				type: 'boolean',
			},
		},
		showSidebar: {
			name: '[(showSidebar)]',
			description:
				'Is a two-way binding [(showSidebar)] for control the state from component',
			table: {
				type: {
					summary: `boolean`,
				},
				defaultValue: {
					summary: 'false',
				},
				category: 'TwoDataBiding'
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkSidebarEmbeddedComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Sidebar: StoryObj<PmdsCdkSidebarEmbeddedComponent> = {};

export const Loading: StoryObj<PmdsCdkSidebarEmbeddedComponent> = {
	args: {
		loading: true
	}
};
