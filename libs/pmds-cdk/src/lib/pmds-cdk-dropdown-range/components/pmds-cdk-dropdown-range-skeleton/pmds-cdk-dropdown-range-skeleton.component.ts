////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-dropdown-range-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-dropdown-range-skeleton.component.html',
})
export class PmdsCdkDropdownRangeSkeletonComponent {
    @Input() dataQA!: string;
}
