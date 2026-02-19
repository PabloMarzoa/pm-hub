////////Angular imports
import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, inject, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupDirective, FormsModule } from '@angular/forms';
////////Third party libraries
import { Subject } from 'rxjs';
////////PNXT libraries
import { IPmdsCdkNotificationsPopoverButton } from '../pmds-cdk-notifications-popover/models/pmds-cdk-notifications-popover.models';
import { IPmdsCdkNotificationsPopoverLiterals, IPmdsCdkNotificationsPopoverNotification } from '../pmds-cdk-notifications-popover/models/pmds-cdk-notifications-popover.models';
import { PmdsCdkNotificationsPopoverComponent } from '../pmds-cdk-notifications-popover/pmds-cdk-notifications-popover.component';
import { PmdsCdkAlertComponent } from '../pmds-cdk-alert/pmds-cdk-alert.component';
import { PmdsCdkProfilePhotoComponent } from '../pmds-cdk-profile-photo/pmds-cdk-profile-photo.component';
import { IPmdsCdkOptionDropdown } from '../pmds-cdk-dropdown/models/pmds-cdk-option-dropdown.model';
import { PmdsCdkDropdownComponent } from '../pmds-cdk-dropdown/pmds-cdk-dropdown.component';
import { PmdsCdkBadgetNumbersComponent } from '../pmds-cdk-badget-numbers/pmds-cdk-badget-numbers.component';
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkModalService } from '../pmds-cdk-modal/utils/pmds-cdk-modal.service';
////////Component imports
import { TPmdsCdkHeaderLayout } from './models/pmds-cdk-header-layout.model';
import { PmdsCdkHeaderLogoEmiComponent } from './components/pmds-cdk-header-logo-emi.component';
import { PmdsCdkHeaderLogoSaasComponent } from './components/pmds-cdk-header-logo-saas.component';
import { PmdsCdkCompanyModalComponent } from './components/company-modal/pmds-cdk-header-company-modal.component';
import { IPmdsCdkHeaderLiterals } from './models/pmds-cdk-header-literals.model';
import { IPmdsCdkMenuOptions } from '../pmds-cdk-menu-and-submenu/models/pmds-cdk-menu-submenu-options.model';
import { PmdsCdkMenuAndSubmenuComponent } from '../pmds-cdk-menu-and-submenu/pmds-cdk-menu-and-submenu.component';
import { IPmdsCdkHeaderMobileFooterActionModel } from './models/pmds-cdk-header-mobile-footer-action.model';

const MOBILE_BREAKPOINT = 768;

@Component({
	selector: 'pmds-cdk-header',
	standalone: true,
	imports: [
		CommonModule,
		PmdsCdkAlertComponent,
		PmdsCdkProfilePhotoComponent,
		PmdsCdkDropdownComponent,
		PmdsCdkBadgetNumbersComponent,
		PmdsCdkButtonComponent,
		FormsModule,
		PmdsCdkHeaderLogoEmiComponent,
		PmdsCdkHeaderLogoSaasComponent,
		PmdsCdkMenuAndSubmenuComponent,
		PmdsCdkNotificationsPopoverComponent,
	],
	providers: [FormGroupDirective],
	templateUrl: './pmds-cdk-header.component.html',
})
export class PmdsCdkHeaderComponent
	implements OnInit, AfterViewInit, OnDestroy
{
	@ViewChild('optionsContent', { static: false }) optionsContent!: ElementRef;

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
	@Input() menuConfig!: { menuOptions: IPmdsCdkMenuOptions[] };
	@Input() menuFooterAction!: IPmdsCdkHeaderMobileFooterActionModel;

	@Output() changeCompany: EventEmitter<IPmdsCdkOptionDropdown> =
		new EventEmitter<IPmdsCdkOptionDropdown>();
	@Output() notificationSelected: EventEmitter<void> =
		new EventEmitter<void>();
	@Output() openMenuClick: EventEmitter<void> = new EventEmitter<void>();

	showNotification = false;
	omitEvent = false;
	selectedCompany!: string;
	selectedCompanyLabel!: string;
	selectorComponent = 'pmds-cdk-header-';
	isMobile: boolean = window.innerWidth < MOBILE_BREAKPOINT;
	showMenu = false;
	documentHeight = document.body.offsetHeight;
	documentWidth = document.body.offsetWidth;

	private modalSrv = inject(PmdsCdkModalService);
	private unlistener!: () => void;
	private renderer = inject(Renderer2);
	private destroy$: Subject<boolean> = new Subject<boolean>();

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.isMobile = window.innerWidth < MOBILE_BREAKPOINT;
		this.documentHeight = document.body.offsetHeight;
		this.documentWidth = document.body.offsetWidth;
	}

	ngOnInit() {
		if (this.companies?.length) {
			this.selectedCompany = this.initialCompany
				? this.initialCompany.value
				: this.companies[0].value;
			this.selectedCompanyLabel = this.initialCompany
				? this.initialCompany.label
				: this.companies[0].label;
		}
	}

	ngOnDestroy() {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();
		!!this.unlistener && this.unlistener();
	}

	ngAfterViewInit() {
		this.unlistener = this.renderer.listen(
			'window',
			'click',
			(e: Event) => {
				if (
					this.showNotification &&
					e.target !== this.optionsContent.nativeElement &&
					!this.omitEvent
				) {
					this.close();
				}
				this.omitEvent = false;
			}
		);
	}

	setCompany(companiesValue: string | string[]) {
		const company = this.companies.find(
			(company) => company.value === companiesValue
		) as IPmdsCdkOptionDropdown;
		this.selectedCompany = company.value;
		this.selectedCompanyLabel = company.label;
		this.changeCompany.emit(company);
	}

	openModal() {
		const modal = this.modalSrv.open(
			PmdsCdkCompanyModalComponent,
			{
				hasBackdropClick: true,
				isFullScreenMobile: false,
				hiddenFooter: true,
			},
			{
				title: this.literals.modalTitle,
				data: {
					companies: this.companies,
					selectedCompany: this.selectedCompany,
					dataQA: this.dataQA,
					close: (company: IPmdsCdkOptionDropdown) => {
						modal.close();
						this.setCompany(company.value);
					},
				},
			}
		);
	}

	toggleMenu() {
		this.showMenu = !this.showMenu;
		this.openMenuClick.next();
	}

	toggleShowOption(forceClose = false, omitEvent = false) {
		this.onTouch();
		this.omitEvent = omitEvent;
		this.showNotification = forceClose ? false : !this.showNotification;
	}

	close() {
		this.toggleShowOption(true);
	}

	onTouch = () => undefined;
}
