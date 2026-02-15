////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';

@Component({
    selector: 'pmds-cdk-autocomplete-multidestinatary-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-autocomplete-multidestinatary-skeleton.component.html',
})
export class PmdsCdkAutocompleteMultidestinatarySkeletonComponent {
    @Input() dataQA!: string;
}
