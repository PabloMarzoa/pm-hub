////////Angular imports
import { Component, HostListener, inject, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkLoaderComponent } from '../pmds-cdk-loader/pmds-cdk-loader.component';
import { PmdsCdkButtonDropdownComponent } from '../pmds-cdk-button-dropdown/pmds-cdk-button-dropdown.component';
////////Component imports
import {
	IPmdsCdkModalConfig,
	IPmdsCdkModalData,
	IPmdsCdkModalSidebarButtons,
	PMDS_CDK_MODAL_DATA_TOKEN,
	TPmdsCdkModalAction,
	TPmdsCdkModalSize
} from './models/pmds-cdk-modal.model';
import { PmdsCdkModalRef } from './utils/pmds-cdk-modal.ref';
import { PMDS_CDK_MODAL_CONFIG_TOKEN } from './utils/pmds-cdk-modal.config';

const MOBILE_BREAKPOINT = 768;

@Component({
	selector: 'pmds-cdk-modal',
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkButtonComponent,
		PmdsCdkLoaderComponent,
		PmdsCdkButtonDropdownComponent
	],
	templateUrl: './pmds-cdk-modal.component.html',
})
export class PmdsCdkModalComponent implements OnInit {
	@Input() hideBackButton = false;
	@Input() loading = false;

	componentSelector = 'pmds-cdk-modal-';
	readonly config: IPmdsCdkModalConfig = inject(
		PMDS_CDK_MODAL_CONFIG_TOKEN
	);
	readonly data: IPmdsCdkModalData<unknown> = inject(
		PMDS_CDK_MODAL_DATA_TOKEN
	);

	private actualView: 'mobile' | 'screen' = window.innerWidth < MOBILE_BREAKPOINT ? 'mobile' : 'screen';
	private initialIsSidebar!: boolean;
	private overlayRef = inject(PmdsCdkModalRef);

	@HostListener('window:resize', ['$event'])
	onResize() {
		const actualActualView = this.actualView;
		this.actualView = window.innerWidth < MOBILE_BREAKPOINT ? 'mobile' : 'screen';
		if (actualActualView !== this.actualView && this.config.isFullScreenMobile) {
			this.config.isSidebar = actualActualView === 'mobile' ? true : this.initialIsSidebar
		}
	}

	ngOnInit(): void {
		this.initialIsSidebar = !!this.config.isSidebar;
	}

	action(action: TPmdsCdkModalAction, close: boolean = false) {
		close && this.overlayRef.close();
		this.overlayRef.events.next({
			action, data: this.data
		});
	}

	get title(): string {
		return this.data?.title || '';
	}

	get body(): string {
		return this.data?.body || '';
	}

	get modalSize(): TPmdsCdkModalSize {
		return this.config?.modalSize || 'small';
	}

	get sidebarButtons():
		| IPmdsCdkModalSidebarButtons[]
		| undefined {
		return this.config?.sidebarButtons;
	}

	get buttonConfirmLabel(): string {
		return this.config?.buttons?.confirmLabel || '';
	}

	get buttonCloseLabel(): string {
		return this.config?.buttons?.closeLabel || '';
	}

	get buttonBackLabel(): string {
		return this.config?.buttons?.backLabel || '';
	}

	get dataQA(): string {
		return this.config?.dataQA || '';
	}

	get isSidebar(): boolean {
		return this.config?.isFullScreenMobile ? this.actualView === 'mobile' ? true : this.initialIsSidebar : this.initialIsSidebar;
	}
}
