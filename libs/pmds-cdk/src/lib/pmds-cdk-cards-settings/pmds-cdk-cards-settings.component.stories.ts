////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkCardsSettingsComponent } from './pmds-cdk-cards-settings.component';
import { componentInfo } from './story-helpers/pmds-cdk-cards-settings-component-info-story';
import { template } from './story-helpers/pmds-cdk-cards-settings-const-story';

export default {
	title: 'Cdk/Resources/Cards settings',
	component: PmdsCdkCardsSettingsComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		showEditAction: false,
		showDeleteAction: false,
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
		showCheckbox: {
			description: 'Show checkbox control',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			control: {
				type: 'boolean',
			},
		},
		showEditAction: {
			description: 'Show edit icon',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			control: {
				type: 'boolean',
			},
		},
		showDeleteAction: {
			description: 'Show delete icon',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			control: {
				type: 'boolean',
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
		settingsItems: {
			description: 'Items for show in the list',
			table: {
				type: {
					summary: `IPmdsCdkCardsSettingsItem[]: 
				{
					tagLabel?: {
						color: TPmdsCdkTagLabelColor,
						label: string
					};
					field?: IPmdsCdkTextField;
					value?: string;
					checkBoxValue?: boolean;
					switchValue?: boolean;
				}
				`,
				},
			},
			control: {
				type: 'array',
			},
			type: { required: true },
		},
		type: {
			description:
				'Change type settings between move and delete version or toggle version',
			table: {
				type: {
					summary: 'TPmdsCdkCardsSettingsType: moveDelete | toggle',
				},
				defaultValue: { summary: 'moveDelete' },
			},
			options: ['moveDelete', 'toggle'],
			control: {
				type: 'radio',
			},
		},
		editedItem: {
			description: 'Emit edit button click on item',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<IPmdsCdkCardsSettingsItem>' },
			},
		},
		checkedItem: {
			description: 'Emit edit button click on item',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<IPmdsCdkCardsSettingsItem>' },
			},
		},
		deletedItem: {
			description: 'Emit edit button click on item',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<IPmdsCdkCardsSettingsItem>' },
			},
		},
		toggledItem: {
			description: 'Emit edit button click on item',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<IPmdsCdkCardsSettingsItem>' },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkCardsSettingsComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const MoveAndDelete: StoryObj<PmdsCdkCardsSettingsComponent> = {
	args: {
		type: 'moveDelete',
		showCheckbox: false,
		showDeleteAction: true,
		settingsItems: [
			{
				field: {
					value: 'Value 1',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
			{
				field: {
					value: 'Value 2',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
			{
				field: {
					value: 'Value 3',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
		],
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: (msg: string) => {
				alert(msg);
			},
		},
		template,
	}),
};

export const WithToggle: StoryObj<PmdsCdkCardsSettingsComponent> = {
	args: {
		type: 'toggle',
		showCheckbox: false,
		showDeleteAction: false,
		settingsItems: [
			{
				field: {
					value: 'Value 1',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
			{
				field: {
					value: 'Value 2',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
			{
				field: {
					value: 'Value 3',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
		],
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: (msg: string) => {
				alert(msg);
			},
		},
		template,
	}),
};

export const WithCheckbox: StoryObj<PmdsCdkCardsSettingsComponent> = {
	args: {
		type: 'moveDelete',
		showCheckbox: true,
		showDeleteAction: true,
		settingsItems: [
			{
				field: {
					value: 'Value',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
		],
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: (msg: string) => {
				alert(msg);
			},
		},
		template,
	}),
};

export const WithLabel: StoryObj<PmdsCdkCardsSettingsComponent> = {
	args: {
		type: 'moveDelete',
		showCheckbox: false,
		showDeleteAction: true,
		settingsItems: [
			{
				tagLabel: {
					color: 'red',
					label: 'Label',
				},
				field: {
					value: 'Value',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
		],
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: (msg: string) => {
				alert(msg);
			},
		},
		template,
	}),
};

export const OneLine: StoryObj<PmdsCdkCardsSettingsComponent> = {
	args: {
		type: 'moveDelete',
		showCheckbox: false,
		showDeleteAction: true,
		settingsItems: [
			{
				value: 'Value',
				checkBoxValue: true,
				switchValue: true,
			},
		],
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: (msg: string) => {
				alert(msg);
			},
		},
		template,
	}),
};

export const TwoLine: StoryObj<PmdsCdkCardsSettingsComponent> = {
	args: {
		type: 'toggle',
		showCheckbox: true,
		showDeleteAction: true,
		showEditAction: true,
		settingsItems: [
			{
				tagLabel: {
					color: 'red',
					label: 'Label',
				},
				field: {
					value: 'Value',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
		],
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: (msg: string) => {
				alert(msg);
			},
		},
		template,
	}),
};

export const WithLabelresponsive: StoryObj<PmdsCdkCardsSettingsComponent> = {
	args: {
		type: 'moveDelete',
		showCheckbox: false,
		showDeleteAction: true,
		settingsItems: [
			{
				tagLabel: {
					color: 'red',
					label: 'Label',
				},
				field: {
					value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
					label: 'Field',
				},
				checkBoxValue: true,
				switchValue: true,
			},
		],
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: (msg: string) => {
				alert(msg);
			},
		},
		template,
	}),
};

export const OneLineResponsive: StoryObj<PmdsCdkCardsSettingsComponent> = {
	args: {
		type: 'moveDelete',
		showCheckbox: false,
		showDeleteAction: true,
		settingsItems: [
			{
				value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s',
				checkBoxValue: true,
				switchValue: true,
				tagLabel: {
					color: 'red',
					label: 'Label',
				},
			},
		],
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: (msg: string) => {
				alert(msg);
			},
		},
		template,
	}),
};

export const Skeleton: StoryObj<PmdsCdkCardsSettingsComponent> = {
	args: {
		type: 'moveDelete',
		showCheckbox: false,
		showDeleteAction: true,
		skeleton: true,
		settingsItems: [
			{
				value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s',
				checkBoxValue: true,
				switchValue: true,
				tagLabel: {
					color: 'red',
					label: 'Label',
				},
			},
		],
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: (msg: string) => {
				alert(msg);
			},
		},
		template,
	}),
};