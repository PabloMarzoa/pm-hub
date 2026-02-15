////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkMessageComponent } from './pmds-cdk-message.component';
import { componentInfo } from "./story-helpers/pmds-cdk-message-component-info-story";
import { literals } from "./story-helpers/pmds-cdk-message-component-const-story";

export default {
	title: 'Cdk/Resources/Message',
	component: PmdsCdkMessageComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
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
		literals: {
			description: 'Literals of the component when isn,t conversation mode',
			type: { type: 'IPmdsCdkMessageLiterals' },
			table: {
				type: {
					summary: `
					IPmdsCdkMessageLiterals {
						published?: string,
    					profileLabel?: string
						title: string;
						content: string | innerHTML;
						date: string;
				}`,
				},
			},
			control: {
				type: 'object',
			},
		},
		messageType: {
			description: 'Type message when isn,t conversation mode **TPmdsCdkMessageType**',
			table: {
				type: {
					summary: 'comment | chat',
				},
				defaultValue: { summary: `chat` },
			},
			options: ['comment', 'chat'],
			control: { type: 'select' },
		},
		messages: {
			description: 'List messages in conversation mode',
			type: { type: 'IPmdsCdkMessage[]' },
			table: {
				type: {
					summary: `
					IPmdsCdkMessage[] {
						id: string;
						literals: IPmdsCdkMessageLiterals;
						typeUser: TPmdsCdkUserType;
					}[]`,
				},
			},
			control: {
				type: 'object',
			},
		},
		userType: {
			description: 'Type user write when isn,t conversation mode **TPmdsCdkUserType**',
			table: {
				type: {
					summary: 'otherMessage | myMessage',
				},
				defaultValue: { summary: `myMessage` },
			},
			options: ['otherMessage', 'myMessage'],
			control: { type: 'select' },
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkMessageComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Chat: StoryObj<PmdsCdkMessageComponent> = {
	args: {
		literals,
		messageType: 'chat',
	},
};

export const Comment: StoryObj<PmdsCdkMessageComponent> =  {
	args: {
		literals,
		messageType: 'comment',
	},
};

export const Conversation: StoryObj<PmdsCdkMessageComponent> =  {
	args: {
		messages:[
			{
				id: '1',
				typeUser: 'myMessage',
				literals,
			},
			{
				id: '2',
				typeUser: 'otherMessage',
				literals,
			},
			{
				id: '3',
				typeUser: 'myMessage',
				literals,
			},
			{
				id: '4',
				typeUser: 'otherMessage',
				literals,
			}
		]
	},
};
