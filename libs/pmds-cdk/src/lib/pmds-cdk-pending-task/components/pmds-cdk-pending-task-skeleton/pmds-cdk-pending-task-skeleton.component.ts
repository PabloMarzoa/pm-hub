////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';
////////Component imports
import { NgClass } from '@angular/common';

@Component({
    selector: 'pmds-cdk-pending-task-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent, NgClass],
    templateUrl: './pmds-cdk-pending-task-skeleton.component.html',
})
export class PmdsCdkPendingTaskSkeletonComponent {
    @Input() dataQA!: string;
}
