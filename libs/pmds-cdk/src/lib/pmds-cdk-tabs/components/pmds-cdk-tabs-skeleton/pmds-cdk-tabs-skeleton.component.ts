////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-tabs-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-tabs-skeleton.component.html',
})
export class PmdsCdkTabsSkeletonComponent {
    @Input() dataQA!: string;
}
