////////Angular imports
import { Component, HostListener, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
///////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
///////Third party libraries
import { Subject, takeUntil } from 'rxjs';
////////Component imports
import { IPmdsCdkActionRowBar } from './models/pmds-cdk-action-row-bar.model';
import { PmdsCdkActionRowBarService } from './services/pmds-cdk-action-row-bar.service';

@Component({
	selector: 'pmds-cdk-action-row-bar',
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkButtonComponent
	],
	templateUrl: './pmds-cdk-action-row-bar.component.html'
})
export class PmdsCdkActionRowBarComponent implements OnInit, OnDestroy {

	@Input() actionBarButtons!: IPmdsCdkActionRowBar[];
	@Input() disabled = false;
	@Input() dataQA!: string;

	showActions = false;
	componentSelector = 'pmds-cdk-action-row-bar-';

	private wasInside = false;
	private readonly actionRowBarSrv = inject(PmdsCdkActionRowBarService);
	private readonly destroy$ = new Subject<void>();

	ngOnInit() {
		this.onDataChangeReceived();
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}

	onDataChangeReceived() {
		this.actionRowBarSrv
			.closeAllWatch()
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				this.showActions = false;
			});
	}

	@HostListener('click')
	clickInside() {
		this.wasInside = true;
	}

	@HostListener('document:click')
	clickOut() {
		if (!this.wasInside) {
			this.showActions = false;
		}
		this.wasInside = false;
	}

	openActionRowBar(event: Event) {
		if (this.disabled) {
			return;
		}
		this.actionRowBarSrv.closeAllSet();

		this.showActions = true;
		event.stopPropagation();
	}

	noAction(event: Event) {
		event.stopPropagation();
	}

	buttonAction(event: Event, indexButton: number) {
		event.stopPropagation();
		this.showActions = false;
		this.actionBarButtons[indexButton]?.action();
	}

	closeAction(event: Event) {
		event.stopPropagation();
		this.showActions = false;
	}
}
