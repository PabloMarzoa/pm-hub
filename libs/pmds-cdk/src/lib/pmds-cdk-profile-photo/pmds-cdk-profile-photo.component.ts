////////Angular imports
import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
////////Component imports
import { TPmdsCdkProfilePhotoLayout } from './models/pmds-cdk-profile-photo-type.model';

@Component({
	selector: 'pmds-cdk-profile-photo',
	standalone: true,
	imports: [NgClass],
	templateUrl: './pmds-cdk-profile-photo.component.html',
})
export class PmdsCdkProfilePhotoComponent implements OnInit {
	@Input() dataQA!: string;
	@Input() label!: string;
	@Input() photo!: string;
	@Input() type: TPmdsCdkProfilePhotoLayout = 'label';

	componentSelector = 'pmds-cdk-profile-photo-';
	parseLabel!: string;

	ngOnInit(): void {
		if (this.type === 'label') {
			const words = this.label.trim().split(' ');
			this.parseLabel =
				words.length < 2
					? this.label.substring(0, 2).toUpperCase()
					: (words[0][0] + words[1][0]).toUpperCase();
		}
	}
}
