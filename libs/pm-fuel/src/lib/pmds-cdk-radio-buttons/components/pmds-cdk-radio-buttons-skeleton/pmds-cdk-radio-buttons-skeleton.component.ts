////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';
////////Component imports
import { IPmdsCdkRadioButtons } from '../../models/pmds-cdk-radio-buttons.model';

@Component({
    selector: 'pmds-cdk-radio-buttons-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-radio-buttons-skeleton.component.html',
})
export class PmdsCdkRadioButtonsSkeletonComponent {
    @Input() dataQA!: string;
    @Input() options!: IPmdsCdkRadioButtons[];
}
