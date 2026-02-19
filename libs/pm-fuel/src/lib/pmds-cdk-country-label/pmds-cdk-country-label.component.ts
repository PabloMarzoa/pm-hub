////////Angular imports
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
////////Component imports
import { defaultImg } from './utils/pmds-cdk-country-label.constants';
import { TPmdsCdkCountryLabelSize } from './models/pmds-cdk-copy-country-label-size.model';
import { PmdsCdkCountryLabelSkeletonComponent } from './components/pmds-cdk-country-label-skeleton/pmds-cdk-country-label-skeleton.component';

@Component({
	selector: 'pmds-cdk-country-label',
	standalone: true,
	imports: [CommonModule, PmdsCdkCountryLabelSkeletonComponent],
	templateUrl: './pmds-cdk-country-label.component.html',
})
export class PmdsCdkCountryLabelComponent implements OnInit, OnChanges {
	
	@Input() assetsFolder = 'assets';
	@Input() codeCountry = 'Default';
	@Input() dataQA!: string;
	@Input() label!: string;
	@Input() showLabel = false;
	@Input() size: TPmdsCdkCountryLabelSize = 'small';
	@Input() skeleton = false;

	componentSelector = 'pmds-cdk-country-label-';
	src = '';

	ngOnInit() {
		this.src =
			this.assetsFolder +
			'/img/flags/' +
			this.codeCountry.toUpperCase() +
			'.svg';
	}

	ngOnChanges(): void {
		this.src =
			this.assetsFolder +
			'/img/flags/' +
			this.codeCountry.toUpperCase() +
			'.svg';
	}

	updateUrl() {
		this.src = defaultImg;
	}
}
