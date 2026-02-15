////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-textarea-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-textarea-skeleton.component.html',
})
export class PmdsCdkTextareaSkeletonComponent {
    @Input() dataQA!: string;
}
