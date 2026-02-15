////////Angular imports
import { Component, inject, OnInit } from '@angular/core';
import { NgClass, SlicePipe } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
////////PPMDS libraries
////////Component imports
import { IPmdsCdkActionBarButton } from './models/pmds-cdk-action-bar.model';
import { PmdsCdkActionBarRef } from './utils/pmds-cdk-action-bar.ref';
import { PMDS_CDK_ACTION_BAR_CONFIG_TOKEN } from './utils/pmds-cdk-action-bar.config';

@Component({
	selector: 'pmds-cdk-action-bar',
	standalone: true,
	imports: [
		NgClass,
		SlicePipe,
		OverlayModule
	],
	templateUrl: './pmds-cdk-action-bar.component.html'
})
export class PmdsCdkActionBarComponent implements OnInit {

	actionBarButtons: IPmdsCdkActionBarButton[] = [];
	moreActionBarButtons: IPmdsCdkActionBarButton[] = [];
	clearBarButton!: Partial<IPmdsCdkActionBarButton>;
	secondaryBarButton!: IPmdsCdkActionBarButton;
	componentSelector = 'pmds-cdk-action-bar-';
	dataQA!: string;
	maxActionBarButtons = 6;
	showMoreActions = false;
	moreOptionsOffset = '-50px';

	private readonly actionBarConfig = inject(PMDS_CDK_ACTION_BAR_CONFIG_TOKEN);
	private readonly overlayRef = inject(PmdsCdkActionBarRef);

	get showMenuActionBarButtons(): boolean {
		if (Array.isArray(this.actionBarButtons)) {
			return this.actionBarButtons.length > this.maxActionBarButtons;
		}
		return false;
	}

	ngOnInit() {
		const { actionBarButtons, clearBarButton, secondaryBarButton, dataQA } = this.actionBarConfig;
		this.actionBarButtons = actionBarButtons as IPmdsCdkActionBarButton[];
		this.clearBarButton = clearBarButton as Partial<IPmdsCdkActionBarButton>;
		this.secondaryBarButton = secondaryBarButton as IPmdsCdkActionBarButton;
		this.dataQA = dataQA || '';
		this.actionBarButtons.length > 6 && (this.moreActionBarButtons = [...this.actionBarButtons].slice(6));
		this.moreOptionsOffset = this.getMoreOptionsOffset();
	}

	clear() {
		this.close();
		this.overlayRef.events.next({
			action: 'clear'
		});
	}

	close() {
		this.overlayRef.close();
	}

	toggleShowMore() {
		this.showMoreActions = !this.showMoreActions;
	}

	getMoreOptionsOffset(): string {
		const maxItems = this.moreActionBarButtons.length -1 <= 3 ? this.moreActionBarButtons.length : 4;
		return `-${50 + (32 * maxItems)}px`;
	}
}
