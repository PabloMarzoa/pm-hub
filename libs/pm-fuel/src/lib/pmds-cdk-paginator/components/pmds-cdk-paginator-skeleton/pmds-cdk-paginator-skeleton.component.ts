////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';
////////Component imports
import { NgClass } from '@angular/common';

@Component({
    selector: 'pmds-cdk-paginator-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent, NgClass],
    templateUrl: './pmds-cdk-paginator-skeleton.component.html',
})
export class PmdsCdkPaginatorSkeletonComponent {
    @Input() dataQA!: string;
}
