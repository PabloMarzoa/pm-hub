////////Angular imports
import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
////////Component imports
import { IPmdsCdkAlertData } from './models/pmds-cdk-alert.model';

@Component({
	selector: 'pmds-cdk-alert',
	standalone: true,
	imports: [
		NgClass
	],
	templateUrl: './pmds-cdk-alert.component.html'
})
export class PmdsCdkAlertComponent {

	@Input() data!: IPmdsCdkAlertData;
	@Input() dataQA!: string;

	@Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

	componentSelector = 'pmds-cdk-alert-';

	styleByType = {
		success: `bg-color-background-success border-color-border-success`,
		warning: `bg-color-background-warning border-color-border-warning`,
		info: `bg-color-background-info border-color-border-info`,
		error: `bg-color-background-error border-color-border-error`,
	};

	iconByType = {
		success: `pmicons-success-circle text-color-icon-success`,
		warning: `pmicons-warning-circle text-color-icon-warning`,
		info: `pmicons-info-circle text-color-icon-info`,
		error: `pmicons-error-triangle text-color-icon-error`,
	};

	actionByType = {
		success: `text-color-icon-success`,
		warning: `text-color-icon-warning`,
		info: `text-color-icon-info`,
		error: `text-color-icon-error`,
	};

	action() {
		if (this.data?.actionFn) {
			this.data.actionFn();
		}
	}

	close() {
		this.closeEmit.emit();
	}

}
