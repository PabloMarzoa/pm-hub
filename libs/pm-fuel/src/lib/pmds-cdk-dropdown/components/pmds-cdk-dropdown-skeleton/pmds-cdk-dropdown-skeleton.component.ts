////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-dropdown-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-dropdown-skeleton.component.html',
})
export class PmdsCdkDropdownSkeletonComponent {
    @Input() dataQA!: string;
    @Input() isFilter!: boolean;
}
