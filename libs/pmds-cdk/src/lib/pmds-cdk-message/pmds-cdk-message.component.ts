////////Angular imports
import { Component, Input } from '@angular/core';
////////Component imports
import {
	IPmdsCdkMessage,
	IPmdsCdkMessageLiterals,
	TPmdsCdkMessageType,
	TPmdsCdkUserType
} from './models/pmds-cdk-message.models';
import { PmdsCdkChatCommentComponent } from './components/chat-comment/pmds-cdk-chat-comment.component';

@Component({
	selector: 'pmds-cdk-message',
	standalone: true,
	imports: [
		PmdsCdkChatCommentComponent
	],
	templateUrl: './pmds-cdk-message.component.html',
})
export class PmdsCdkMessageComponent {

	@Input() dataQA!: string;
	@Input() messages!: IPmdsCdkMessage[];
	@Input() literals!: IPmdsCdkMessageLiterals;
	@Input() messageType: TPmdsCdkMessageType = 'chat';
	@Input() userType: TPmdsCdkUserType = 'myMessage';

	componentSelector = 'pmds-cdk-message-';
}
