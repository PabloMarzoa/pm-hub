////////Angular imports
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
////////PNXT libraries
import { PmdsCdkProfilePhotoComponent } from '../../../pmds-cdk-profile-photo/pmds-cdk-profile-photo.component';
////////Component imports
import {
	IPmdsCdkMessageLiterals,
	TPmdsCdkMessageType,
	TPmdsCdkUserType
} from '../../models/pmds-cdk-message.models';

@Component({
	selector: 'pmds-cdk-chat-comment',
	standalone: true,
	imports:[
		NgClass,
		PmdsCdkProfilePhotoComponent
	],
	templateUrl: './pmds-cdk-chat-comment.component.html'
})
export class PmdsCdkChatCommentComponent {
	@Input() messageType: TPmdsCdkMessageType = 'chat';
	@Input() dataQA!: string
	@Input() literals!: IPmdsCdkMessageLiterals;
	@Input() userType: TPmdsCdkUserType = 'myMessage';
	@Input() conversation: boolean = true;

	componentSelector = 'pmds-cdk-chat-comment-';
}
