export interface IPmdsCdkMessage {
	id: string;
	literals: IPmdsCdkMessageLiterals;
	typeUser: TPmdsCdkUserType;
}

export interface IPmdsCdkMessageLiterals {
	published?: string;
    profileLabel?: string
	title: string;
	content: string;
	date: string;
}

export type TPmdsCdkUserType = 'otherMessage' | 'myMessage';

export type TPmdsCdkMessageType = 'comment' | 'chat';
