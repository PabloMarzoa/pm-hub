////////Angular imports
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Third party libraries
////////Component imports
import {
	IPmdsCdkNotificationsPopoverNotification,
	IPmdsCdkNotificationsPopoverLiterals,
	IPmdsCdkNotificationsPopoverButton,
} from './models/pmds-cdk-notifications-popover.models';

@Component({
	selector: 'pmds-cdk-notifications-popover',
	standalone: true,
	imports: [NgClass, PmdsCdkButtonComponent],
	templateUrl: './pmds-cdk-notifications-popover.component.html',
})
export class PmdsCdkNotificationsPopoverComponent {
	@Input() dataQA!: string;
	@Input() notifications!: IPmdsCdkNotificationsPopoverNotification[];
	@Input() literals!: IPmdsCdkNotificationsPopoverLiterals;
	@Input() button!: IPmdsCdkNotificationsPopoverButton;

	@Output() checkedNotifications: EventEmitter<string> =
		new EventEmitter<string>();
	@Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

	componentSelector = 'pmds-cdk-notifications-popover-';

	notificationClicked(index: number, id: string) {
		this.notifications[index].seen = true;
		this.checkedNotifications.emit(id);
	}

	onButtonClick() {
		this.buttonClick.emit();
	}
}
