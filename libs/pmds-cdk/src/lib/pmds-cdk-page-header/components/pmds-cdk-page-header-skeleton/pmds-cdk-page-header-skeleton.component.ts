////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-page-header-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-page-header-skeleton.component.html',
})
export class PmdsCdkPageHeaderSkeletonComponent {
    @Input() dataQA!: string;
}
