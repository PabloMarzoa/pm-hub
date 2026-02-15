////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-option-buttons-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-option-buttons-skeleton.component.html',
})
export class PmdsCdkOptionButtonsSkeletonComponent {
    @Input() dataQA!: string;
    @Input() likeDislike!: boolean;
}
