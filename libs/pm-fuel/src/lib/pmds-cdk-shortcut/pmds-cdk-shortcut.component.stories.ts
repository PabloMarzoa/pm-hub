////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkShortcutComponent } from './pmds-cdk-shortcut.component';
import { componentInfo } from './story-helpers/pmds-cdk-shortcut-component-info-story';

export default {
	title: 'Cdk/Navigation/Shortcut',
	component: PmdsCdkShortcutComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-'
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
		shortcutItems: {
			description: 'Item for each shortcut',
			table: {
				type: { summary: 'PmdsCdkShortcutComponent[]: { label: string; icon: string; isDisabled: boolean; actionFn: () => void; }[]' },
			},
			control: {
				type: 'array',
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
		flexWidth: {
			description: 'Boolean to variable width (this option show the page controller in tablet)',
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
			subtitle: 'PmdsCdkShortcutComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const FourItems:StoryObj<PmdsCdkShortcutComponent> = {
	args: {
		shortcutItems: [
			{
				label: 'New payment',
				icon: 'pmicons-plus-bolder',
				actionFn: () => alert('New payment click')
			},
			{
				label: 'Create an account',
				icon: 'pmicons-new-account',
				actionFn: () => alert('Create an account click')
			},
			{
				label: 'Go to settings',
				icon: 'pmicons-settings',
				actionFn: () => alert('Go to settings click')
			},
			{
				label: 'Other',
				icon: 'pmicons-international',
				actionFn: () => alert('Other click')
			}
		]
	},
};

export const FiveItems:StoryObj<PmdsCdkShortcutComponent> = {
	args: {
		shortcutItems: [
			{
				label: 'New payment',
				icon: 'pmicons-plus-bolder',
				actionFn: () => alert('New payment click')
			},
			{
				label: 'Create an account',
				icon: 'pmicons-new-account',
				actionFn: () => alert('Create an account click')
			},
			{
				label: 'Go to settings',
				icon: 'pmicons-settings',
				actionFn: () => alert('Go to settings click')
			},
			{
				label: 'Go to support',
				icon: 'pmicons-phone-support',
				actionFn: () => alert('Go to support click')
			},
			{
				label: 'Other',
				icon: 'pmicons-international',
				actionFn: () => alert('Other click')
			}
		]
	},
};

export const DisabledItems:StoryObj<PmdsCdkShortcutComponent> = {
	args: {
		shortcutItems: [
			{
				label: 'New payment',
				icon: 'pmicons-plus-bolder',
				actionFn: () => alert('New payment click')
			},
			{
				label: 'Create an account',
				icon: 'pmicons-new-account',
				isDisabled: true,
				actionFn: () => alert('Create an account click')
			},
			{
				label: 'Go to settings',
				icon: 'pmicons-settings',
				isDisabled: true,
				actionFn: () => alert('Go to settings click')
			},
			{
				label: 'Other',
				icon: 'pmicons-international',
				actionFn: () => alert('Other click')
			},
		]
	},
};

export const ThreeItems:StoryObj<PmdsCdkShortcutComponent> = {
	args: {
		shortcutItems: [
			{
				label: 'New payment',
				icon: 'pmicons-plus-bolder',
				actionFn: () => alert('New payment click')
			},
			{
				label: 'Create an account',
				icon: 'pmicons-new-account',
				actionFn: () => alert('Create an account click')
			},
			{
				label: 'Go to settings',
				icon: 'pmicons-settings',
				actionFn: () => alert('Go to settings click')
			}
		]
	},
};

export const Skeleton:StoryObj<PmdsCdkShortcutComponent> = {
	args: {
		shortcutItems: [
			{
				label: 'New payment',
				icon: 'pmicons-plus-bolder',
				actionFn: () => alert('New payment click')
			},
			{
				label: 'Create an account',
				icon: 'pmicons-new-account',
				actionFn: () => alert('Create an account click')
			}
		],
		skeleton: true
	},
};


