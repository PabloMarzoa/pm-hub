////////Angular imports
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
////////PNXT libraries
import {
	PmdsDirectiveTooltip,
	TPmdsDirectiveTooltipPosition,
} from '@pmhub/pmds-common';
////////Component imports
import { defaultImg } from './utils/pmds-cdk-tag-category.constants';
import { PmdsCdkAmountTagCategorySkeletonComponent } from './components/pmds-cdk-tag-category-skeleton/pmds-cdk-tag-category-skeleton.component';

@Component({
	selector: 'pmds-cdk-tag-category',
	standalone: true,
	imports: [
		NgClass,
		PmdsDirectiveTooltip,
		PmdsCdkAmountTagCategorySkeletonComponent,
	],
	templateUrl: './pmds-cdk-tag-category.component.html',
})
export class PmdsCdkTagCategoryComponent implements OnInit, OnChanges {
	@Input() assetsFolder = 'assets';
	@Input() dataQA!: string;
	@Input() flagCode = 'Default';
	@Input() isDisabled = false;
	@Input() label = '';
	@Input() tooltip!: string;
	@Input() skeleton!: boolean;
	@Input() showIcon = true;
	@Input() tooltipPosition: TPmdsDirectiveTooltipPosition = 'top-center';

	src = '';
	componentSelector = 'pmds-cdk-tag-category-';

	ngOnInit() {
		this.setSrc();
	}

	ngOnChanges(): void {
		this.setSrc();
	}

	setSrc() {
		this.src =
			this.assetsFolder +
			'/img/flags/' +
			this.flagCode.toUpperCase() +
			'.svg';
	}

	updateUrl() {
		this.src = defaultImg;
	}
}
