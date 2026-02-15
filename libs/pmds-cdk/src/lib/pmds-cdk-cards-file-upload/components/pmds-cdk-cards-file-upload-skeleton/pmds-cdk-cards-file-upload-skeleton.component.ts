////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-cards-file-upload-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-cards-file-upload-skeleton.component.html',
})
export class PmdsCdkCardFileUploadSkeletonComponent {
    @Input() dataQA!: string;
}
