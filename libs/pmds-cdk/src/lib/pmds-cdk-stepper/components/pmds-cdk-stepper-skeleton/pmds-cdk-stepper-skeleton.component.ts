////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-stepper-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-stepper-skeleton.component.html',
})
export class PmdsCdkStepperSkeletonComponent {

    @Input() dataQA!: string;
	@Input() steps!: string[];

}
