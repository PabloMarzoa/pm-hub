////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkHeaderComponent } from './pmds-cdk-header.component';
import { componentInfo } from './story-helpers/pmds-cdk-header-component-info-story';
import { PmdsCdkHeaderWrapperComponent } from './story-helpers/pmds-cdk-header-wrapper.component';

export default {
	title: 'Cdk/Navigation/Header',
	component: PmdsCdkHeaderComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsCdkHeaderWrapperComponent],
		}),
	],
	args: {
		notifications: 2,
		companies: [
			{
				value: '1',
				label: 'Company 1',
			},
			{
				value: '2',
				label: 'Company 2',
			},
			{
				value: '3',
				label: 'Company 3',
			},
		],
		notificationsInfo: [
			{
				id: 1,
				date: '11/11/2011 - 13:13',
				seen: true,
				title: 'Title',
				info: 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.',
			},
			{
				id: 2,
				date: '22/22/2022 - 13:14',
				seen: true,
				title: 'Title',
				info: 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Vivamus at tellus et est blandit fringilla non ac turpis.',
			},
		],
		titleNotifications: {
			notifications: 'Notifications',
		},
		buttonNotification: {
			label: '',
			icon: 'pmicons-close',
		},
		literals: {
			backofficeLabel: 'Backoffice EMI UK',
			modalTitle: 'Select a company',
		},
		dataQA: 'storybook-qa-',
		photoSrc: 'assets/img/characters/man-sofa.svg',
		menuFooterAction: {
			label: 'Logout',
			action: () => alert('Selected footer action'),
			icon: 'pmicons-sign-off',
		},
		menuConfig: {
			menuOptions: [
				{
					label: 'Menu 1',
					action: () => alert('Selected action 1'),
					icon: 'pmicons-settings',
				},
				{
					label: 'Menu 2',
					children: [
						{
							label: 'Submenu 1',
							action: () => alert('Selected action 1'),
						},
						{
							label: 'Submenu 2',
							action: () => alert('Selected action 2'),
						},
						{
							label: 'Submenu 3',
							action: () => alert('Selected action 3'),
						},
					],
					icon: 'pmicons-account-user',
				},
				{
					label: 'Menu 3',
					children: [
						{
							label: 'Submenu 1',
							action: () => alert('Selected action 1'),
						},
						{
							label: 'Submenu 2',
							action: () => alert('Selected action 2'),
						},
						{
							label: 'Submenu 3',
							action: () => alert('Selected action 3'),
						},
					],
					icon: 'pmicons-account-people',
				},
			],
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
		type: {
			description: 'Type of header',
			table: {
				type: {
					summary:
						"TPmdsCdkHeaderLayout: 'operational' | 'backoffice'",
				},
				defaultValue: { summary: 'operational' },
			},
			options: ['operational', 'backoffice'],
			control: {
				type: 'radio',
			},
		},
		notifications: {
			description: 'Number of notifications',
			table: {
				type: { summary: 'number' },
			},
			control: {
				type: 'number',
			},
		},
		photoSrc: {
			description: 'Source for profile photo',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'string',
			},
			type: { required: true },
		},
		companies: {
			description: 'Array of companies',
			table: {
				type: { summary: 'IPmdsCdkOptionDropdown[]' },
			},
			control: {
				type: 'array',
			},
		},
		notificationsInfo: {
			description: 'Array of notifications',
			table: {
				type: {
					summary: 'IPmdsCdkNotificationsPopoverNotification[]',
				},
			},
			control: {
				type: 'array',
			},
		},
		initialCompany: {
			description: 'Set a initial company',
			table: {
				type: { summary: 'IPmdsCdkOptionDropdown' },
			},
			control: {
				type: 'array',
			},
		},
		literals: {
			description: 'Literals for the component',
			table: {
				type: {
					summary: `IPmdsCdkHeaderLiterals {
						backofficeLabel?: string;
						modalTitle?: string;
				}`,
				},
			},
			control: {
				type: 'array',
			},
		},
		changeCompany: {
			description: 'Emit the selected company from dropdown',
			table: {
				category: 'Events',
				type: { summary: ' new EventEmitter<IPmdsCdkOptionDropdown>' },
			},
		},
		openMenuClick: {
			description: 'Emit event when click on hamburger menu',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkHeaderComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const MainHeader: StoryObj<PmdsCdkHeaderComponent> = {
	args: {
		type: 'operational',
	},
	render: (args) => ({
		props: {
			...args,
		},
		template:
			'<div class="h-64 cdk-overlay-container fixed top-0 left-0 w-full z-[1000]"><pmds-cdk-header-wrapper [dataQA]="dataQA" [type]="type" [initialCompany]="initialCompany" [menuFooterAction]="menuFooterAction" [menuConfig]="menuConfig" [photoSrc]="photoSrc" [literals]="literals" [buttonNotification]="buttonNotification" [titleNotifications]="titleNotifications" [notificationsInfo]="notificationsInfo" [companies]="companies" [notifications]="notifications"/></div>',
	}),
};

export const BackofficeHeader: StoryObj<PmdsCdkHeaderComponent> = {
	args: {
		type: 'backoffice',
	},
	render: (args) => ({
		props: {
			...args,
		},
		template:
			'<div class="h-64 cdk-overlay-container fixed top-0 left-0 w-full z-[1000]"><pmds-cdk-header-wrapper [dataQA]="dataQA" [type]="type" [initialCompany]="initialCompany" [menuFooterAction]="menuFooterAction" [menuConfig]="menuConfig" [photoSrc]="photoSrc" [literals]="literals" [buttonNotification]="buttonNotification" [titleNotifications]="titleNotifications" [notificationsInfo]="notificationsInfo" [companies]="companies" [notifications]="notifications"/></div>',
	}),
};

export const InitalCompanySetted: StoryObj<PmdsCdkHeaderComponent> = {
	args: {
		initialCompany: {
			value: '3',
			label: 'Company 3',
		},
	},
	render: (args) => ({
		props: {
			...args,
		},
		template:
			'<div class="h-64 cdk-overlay-container fixed top-0 left-0 w-full z-[1000]"><pmds-cdk-header-wrapper [dataQA]="dataQA" [type]="type" [initialCompany]="initialCompany" [menuFooterAction]="menuFooterAction" [menuConfig]="menuConfig" [photoSrc]="photoSrc" [literals]="literals" [buttonNotification]="buttonNotification" [titleNotifications]="titleNotifications" [notificationsInfo]="notificationsInfo" [companies]="companies" [notifications]="notifications"/></div>',
	}),
};
