1////////Third party libraries
import type {StoryObj} from '@storybook/angular';
////////Component imports
import {PmdsCdkMenuAndSubmenuComponent} from './pmds-cdk-menu-and-submenu.component';
import {componentInfo} from './story-helpers/pmds-cdk-menu-and-submenu-component-info-story';
import {template} from "./story-helpers/pmds-cdk-menu-and-submenu-component-const-story";

export default {
	title: 'Cdk/Navigation/Menu and submenu',
	component: PmdsCdkMenuAndSubmenuComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		menuOptions: [
			{
				label: 'Option 1',
				action: () => alert('Selected action 1'),
				icon: 'pmicons-settings'
			},
			{
				label: 'Option 2',
				children: [
					{
						label: 'Option 1',
						action: () => alert('Selected action 1')
					},
					{
						label: 'Option 2',
						action: () => alert('Selected action 2')
					},
					{
						label: 'Option 3',
						action: () => alert('Selected action 3')
					}
				],
				icon: 'pmicons-account-user'
			},
			{
				label: 'Option 3',
				children: [
					{
						label: 'Option 1',
						action: () => alert('Selected action 1')
					},
					{
						label: 'Option 2',
						action: () => alert('Selected action 2')
					},
					{
						label: 'Option 3',
						action: () => alert('Selected action 3')
					}
				],
				icon: 'pmicons-account-people'
			},
		]
	},
	argTypes: {
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		selectMenu: {
			description: 'For select previous menu option',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		selectSubmenu: {
			description: 'For select previous submenu option',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		},
		type: {
			description: 'Type for component',
			table: {
				type: {summary: 'TPmdsCdkMenuSubmenuType: OPERATIONAL | ADMIN'},
			},
			options: ['OPERATIONAL', 'ADMIN'],
			control: { type: 'select' },
			defaultValue: { summary: 'OPERATIONAL' },
		},
		menuOptions: {
			description: 'Reference for QA',
			table: {
				type: {summary: 'IPmdsCdkMenuOptions[]: {label: string, action?: () => void, icon?: string, children?: { label: string, action: () => void}}[]'},
			},
			type: { required: true },
			control: {
				type: 'array',
			},
		},
		selectedMenuItemChange: {
			description:
				'Emit on menu item selected',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<{menuItem: string, submenuItem: string}>' },
			},
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkMenuAndSubmenuComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const MenuAndSubmenuOperational: StoryObj<PmdsCdkMenuAndSubmenuComponent> = {
	args: {
		type: 'OPERATIONAL'
	},
	render: (args) => ({
		props: {
			...args
		},
		template,
	})
};

export const MenuAndSubmenuAdmin: StoryObj<PmdsCdkMenuAndSubmenuComponent> = {
	args: {
		type: 'ADMIN'
	},
	render: (args) => ({
		props: {
			...args
		},
		template,
	})
};

export const PreSelectMenuAndSubmenuAdmin: StoryObj<PmdsCdkMenuAndSubmenuComponent> = {
	args: {
		type: 'ADMIN',
		selectMenu: 'Menu 2',
		selectSubmenu: 'Submenu 2'
	},
	render: (args) => ({
		props: {
			...args
		},
		template,
	})
};
