/////////Angular imports
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
////////Component imports
import { TPmdsCdkTagLabelColor } from './models/pmds-cdk-tag-label-color.model';
import { PmdsCdkAmountTagLabelSkeletonComponent } from './components/pmds-cdk-tag-label-skeleton/pmds-cdk-tag-label-skeleton.component';

@Component({
	selector: 'pmds-cdk-tag-label',
	standalone: true,
	imports: [NgClass, PmdsCdkAmountTagLabelSkeletonComponent],
	templateUrl: './pmds-cdk-tag-label.component.html'
})
export class PmdsCdkTagLabelComponent {
	@Input() color: TPmdsCdkTagLabelColor = 'grey';
	@Input() label = '';
	@Input() dataQA!: string;
	@Input() skeleton!: boolean;

	componentSelector = 'pmds-cdk-tag-label-';

	colorSet = {
		red: 'bg-color-support-03 border-color-support-04',
		green: 'bg-color-support-09 border-color-support-10',
		blue: 'bg-color-support-05 border-color-support-06',
		grey: 'bg-color-support-01 border-color-support-02',
		yellow: 'bg-color-support-07 border-color-support-08'
	}
}

