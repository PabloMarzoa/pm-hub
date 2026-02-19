////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-accordion-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-accordion-skeleton.component.html',
})
export class PmdsCdkAccordionSkeletonComponent {
    @Input() dataQA!: string;
    @Input() open!: boolean;
}
