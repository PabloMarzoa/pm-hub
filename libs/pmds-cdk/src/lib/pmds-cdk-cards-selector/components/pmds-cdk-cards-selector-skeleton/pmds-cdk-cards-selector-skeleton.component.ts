////////Angular imports
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-cards-selector-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent, NgClass],
    templateUrl: './pmds-cdk-cards-selector-skeleton.component.html',
})
export class PmdsCdkCardsSelectorSkeletonComponent {
    @Input() dataQA!: string;
    @Input() additionalContent!: boolean;
}
