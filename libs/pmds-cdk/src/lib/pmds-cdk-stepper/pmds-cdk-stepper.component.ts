////////Angular imports
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
////////Component imports
import { PmdsCdkStepperSkeletonComponent } from './components/pmds-cdk-stepper-skeleton/pmds-cdk-stepper-skeleton.component';

@Component({
	selector: 'pmds-cdk-stepper',
	standalone: true,
	imports: [NgClass, PmdsCdkStepperSkeletonComponent],
	templateUrl: './pmds-cdk-stepper.component.html',
})
export class PmdsCdkStepperComponent {
	@Input() dataQA: string = '';
	@Input() steps!: string[];
	@Input() current = 0;
	@Input() skeleton!: boolean;

	componentSelector = 'pmds-cdk-stepper-';
}
