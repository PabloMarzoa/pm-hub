////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkPaginatorComponent } from '../../../pmds-cdk-paginator/pmds-cdk-paginator.component';
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-table-complete-skeleton',
    standalone: true,
    imports: [
        PmdsCdkSkeletonComponent,
        PmdsCdkPaginatorComponent
    ],
    templateUrl: './pmds-cdk-table-complete-skeleton.component.html',
})
export class PmdsCdkTableCompleteSkeletonComponent {
    @Input() dataQA!: string;
}
