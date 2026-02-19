////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-timeline-tracking-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-timeline-tracking-skeleton.component.html',
})
export class PmdsCdkTimelineTrackingSkeletonComponent {
    @Input() dataQA!: string;
}
