////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-expansion-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-expansion-skeleton.component.html',
})
export class PmdsCdkExpansionSkeletonComponent {
    @Input() dataQA!: string;
    @Input() skeletonOpen!: boolean;
}
