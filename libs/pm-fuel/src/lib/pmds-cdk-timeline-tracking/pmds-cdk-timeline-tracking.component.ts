////////Angular imports
import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
////////PPMDS libraries
import { PmdsPipeTypeOf } from '../../index';
import { PmdsCdkAlertComponent } from '../pmds-cdk-alert/pmds-cdk-alert.component';
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import {
	IPmdsCdkSteps,
	IPmdsCdkStepAttributes,
	IPmdsCdkStepStatus,
} from './models/pmds-cdk-timeline-tracking-step.model';
import { PmdsCdkTimelineTrackingSkeletonComponent } from './components/pmds-cdk-timeline-tracking-skeleton/pmds-cdk-timeline-tracking-skeleton.component';

@Component({
	selector: 'pmds-cdk-timeline-tracking',
	standalone: true,
	templateUrl: './pmds-cdk-timeline-tracking.component.html',
	imports: [
		NgClass,
		PmdsCdkAlertComponent,
		PmdsPipeTypeOf,
		PmdsCdkTimelineTrackingSkeletonComponent,
		PmdsCdkButtonComponent,
	],
})
export class PmdsCdkTimelineTrackingComponent implements OnInit {
	@Input() collapseIconAnimation?: boolean = true;
	@Input() dataQA!: string;
	@Input() dateLocale: string = 'en-GB';
	@Input() readLessContent = 'Less details';
	@Input() readMoreContent = 'More details';
	@Input() steps: IPmdsCdkSteps[] = [];
	@Input() skeleton!: boolean;

	attributesList: IPmdsCdkStepAttributes[] = [];
	colorSet = {
		red: 'bg-primary-dark-blue',
		green: 'bg-color-support-09',
		grey: 'bg-color-support-01',
		blue: 'bg-color-support-06',
		yellow: 'bg-color-support-08',
	};
	componentSelector = 'pmds-cdk-timeline-tracking-';
	isReady = false;
	subAttributesList: IPmdsCdkStepAttributes[] = [];

	readonly stepStatus = IPmdsCdkStepStatus;

	ngOnInit(): void {
		this.steps.forEach((step: IPmdsCdkSteps) => {
			this.generateAttributes(step, this.attributesList);
			if (step.subSteps) {
				step.subSteps.forEach((substep: IPmdsCdkSteps) => {
					this.generateAttributes(substep, this.subAttributesList);
				});
			}
		});
		this.isReady = true;
	}

	generateAttributes(
		step: IPmdsCdkSteps,
		attributesList: IPmdsCdkStepAttributes[]
	) {
		const attributes: IPmdsCdkStepAttributes = {
			readMore: false,
			collapse: true,
			readContent: this.readMoreContent,
		};
		attributesList.push(attributes);

		if (step.alert) {
			this.generateAlertTypes(step, attributes);
		}
	}

	generateAlertTypes(
		step: IPmdsCdkSteps,
		attributes: IPmdsCdkStepAttributes
	) {
		switch (step.status) {
			case 'last-complete': {
				attributes.alertType = 'success';
				break;
			}
			case 'error': {
				attributes.alertType = 'error';
				break;
			}
			default: {
				attributes.alertType = 'info';
			}
		}
	}

	readChange(isStep: boolean, stepIndex: number) {
		let stepAttributes;
		if (isStep) {
			stepAttributes = this.attributesList[stepIndex];
		} else {
			stepAttributes = this.subAttributesList[stepIndex];
		}
		stepAttributes.readMore = !stepAttributes.readMore;
		if (stepAttributes.readMore) {
			stepAttributes.readContent = this.readLessContent;
		} else {
			stepAttributes.readContent = this.readMoreContent;
		}
		this.collapseAction(stepAttributes);
	}

	collapseAction(stepAttributes: IPmdsCdkStepAttributes) {
		if (this.collapseIconAnimation) {
			stepAttributes.collapse = !stepAttributes.collapse;
		}
	}
}
