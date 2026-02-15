////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';
////////Component imports
import { TPmdsCdkCountryLabelSize } from '../../models/pmds-cdk-copy-country-label-size.model';

@Component({
    selector: 'pmds-cdk-country-label-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-country-label-skeleton.component.html',
})
export class PmdsCdkCountryLabelSkeletonComponent {
    @Input() dataQA!: string;
	@Input() size: TPmdsCdkCountryLabelSize = 'small';
}
