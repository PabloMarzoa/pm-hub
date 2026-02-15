////////Third party libraries
import { componentWrapperDecorator, type StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkFooterComponent } from './pmds-cdk-footer.component';
import { componentInfo } from './story-helpers/pmds-cdk-footer-component-info-story';

export default {
	title: 'Cdk/Navigation/Footer',
	component: PmdsCdkFooterComponent,
	tags: ['autodocs'],
	decorators: [
		componentWrapperDecorator(
			(story) => `
			<div class="bg-color-background-default p-4">
				${story}
			</div>`
		),
	],
	args: {
		linkItems: [
			{
				label: 'Legal notice',
				actionFn: () => alert('Legal notice')
			},
			{
				label: 'Privacy policy',
				actionFn: () => alert('Privacy policy')
			},
			{
				label: 'Cookies policy',
				actionFn: () => alert('Cookies policy')
			},
			{
				label: 'Legal Information & Complaints',
				actionFn: () => alert('Legal Information & Complaints')
			}
		],
		literals: {
			simpleLink: 'Link',
			simpleText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			bannerText: '<span class="font-body-s-bold">Loren ipsum</span> Lorem ipsum <span class="text-color-action-main-default">Link</span>',
		},
		dataQA: 'storybook-qa-',
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
			description: 'Type of footer',
			table: {
				type: {
					summary:
						"TPmdsCdkFooterLayout = 'simple' | 'contact' | 'banner'",
				},
				defaultValue: { summary: 'simple' },
			},
			options: ['simple', 'contact', 'banner'],
			control: {
				type: 'radio',
			},
		},
		contactItems: {
			description: 'Custom actions',
			table: {
				type: {
					summary:
						'IPmdsCdkFooterAction[]: { icon: string, tittle: string, message: string, actionFn: () => void}, tagLabel?: string, tagColor?: TPmdsCdkTagLabelColor',
				},
			},
			control: {
				type: 'array',
			},
		},
		linkItems: {
			description: 'Custom actions',
			table: {
				type: {
					summary:
						'IPmdsCdkFooterLink[]: { label: string, actionFn: () => void}',
				},
			},
			control: {
				type: 'array',
			},
		},
		literals: {
			description: 'Literals for the component. It is possible to add html content to bannerText',
			table: {
				type: {
					summary: `IPmdsCdkFooterLiterals {
						bannerText?: string | innerHTML;
						simpleLink?: string;
						simpleText?: string;
				}`,
				},
			},
			control: {
				type: 'object',
			},
			type: {
				required: true
			}
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkFooterComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const SimpleFooter: StoryObj<PmdsCdkFooterComponent> = {
	args: {
		type: 'simple',
	},
};

export const ContactFooter: StoryObj<PmdsCdkFooterComponent> = {
	args: {
		type: 'contact',
		contactItems: [
			{
				icon: 'pmicons-email',
				tittle: 'Send us an email',
				message: 'onetrade',
				actionFn: () => alert('Send us an email'),
				tagLabel: 'tag example',
				tagColor: 'blue'
			},
			{
				icon: 'pmicons-phone',
				tittle: 'Call us',
				message: 'Monday to Sunday from 8:00 A.M.',
				actionFn: () => alert('Call us'),
			}
		],
	},
};

export const BannerFooter: StoryObj<PmdsCdkFooterComponent> = {
	args: {
		type: 'banner',
	},
};
