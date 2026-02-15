////////Angular imports
import { NgClass, NgIf} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Component, HostListener, Input} from '@angular/core';
////////PPMDS libraries
import { IPmdsCdkOptionDropdown } from '../../pmds-cdk-dropdown/models/pmds-cdk-option-dropdown.model';
import { IPmdsCdkHeaderLiterals } from '../models/pmds-cdk-header-literals.model';
import { IPmdsCdkHeaderMobileFooterActionModel } from '../models/pmds-cdk-header-mobile-footer-action.model';
import { PmdsCdkHeaderComponent } from '../pmds-cdk-header.component';
import { TPmdsCdkHeaderLayout } from '../models/pmds-cdk-header-layout.model';
import { PmdsCdkMenuAndSubmenuComponent } from '../../pmds-cdk-menu-and-submenu/pmds-cdk-menu-and-submenu.component';
import { IPmdsCdkNotificationsPopoverButton } from '../../pmds-cdk-notifications-popover/models/pmds-cdk-notifications-popover.models';
import { IPmdsCdkNotificationsPopoverLiterals, IPmdsCdkNotificationsPopoverNotification } from '../../pmds-cdk-notifications-popover/models/pmds-cdk-notifications-popover.models';
////////Component imports

const MOBILE_BREAKPOINT = 768;

@Component({
	selector: 'pmds-cdk-header-wrapper',
	standalone: true,
	imports: [NgIf, NgClass, PmdsCdkHeaderComponent, HttpClientModule],
	providers: [HttpClient],
	template: `
		<pmds-cdk-header
			[dataQA]="dataQA"
			[type]="type"
			[initialCompany]="initialCompany"
			[menuFooterAction]="menuFooterAction"
			[menuConfig]="menuConfig"
			[photoSrc]="photoSrc"
			[literals]="literals"
			[buttonNotification]="buttonNotification"
			[titleNotifications]="titleNotifications"
			[notificationsInfo]="notificationsInfo"
			[companies]="companies"
			[notifications]="notifications"
		/>`,
})
export class PmdsCdkHeaderWrapperComponent {
	@Input() companies!: IPmdsCdkOptionDropdown[];
	@Input() dataQA!: string;
	@Input() initialCompany!: IPmdsCdkOptionDropdown;
	@Input() literals!: IPmdsCdkHeaderLiterals;
	@Input() notifications!: number;
	@Input() notificationsInfo!: IPmdsCdkNotificationsPopoverNotification[];
	@Input() titleNotifications!: IPmdsCdkNotificationsPopoverLiterals;
	@Input() buttonNotification!: IPmdsCdkNotificationsPopoverButton;
	@Input() photoSrc!: string;
	@Input() type: TPmdsCdkHeaderLayout = 'operational';
	@Input() menuConfig!: PmdsCdkMenuAndSubmenuComponent;
	@Input() menuFooterAction!: IPmdsCdkHeaderMobileFooterActionModel;

	isMobile:  boolean = window.innerWidth < MOBILE_BREAKPOINT;

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.isMobile = window.innerWidth < MOBILE_BREAKPOINT;
	}
}
