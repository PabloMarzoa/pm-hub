////////Angular imports
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
////////PMDS libraries
import { PmdsDirectiveTooltip } from '../../index';
import { PmdsDirectiveTitle } from '../../index';
////////Component imports
import {
	IPmdsCdkCardsSelectorImages,
	IPmdsCdkCardsSelectorOptionLiterals,
	IPmdsCdkCardsSelectorTooltip
} from './models/pmds-cdk-cards-selector.models';
import {
	PmdsCdkCardsSelectorSkeletonComponent
} from './components/pmds-cdk-cards-selector-skeleton/pmds-cdk-cards-selector-skeleton.component';

@Component({
	selector: 'pmds-cdk-cards-selector',
	standalone: true,
	imports: [
		NgClass,
		PmdsDirectiveTooltip,
		PmdsDirectiveTitle,
		PmdsCdkCardsSelectorSkeletonComponent
	],
	templateUrl: './pmds-cdk-cards-selector.component.html',
})
export class PmdsCdkCardsSelectorComponent {

	@Input() dataQA!: string;
	@Input() disabled = false;
	@Input() id!: string;
	@Input() isSelected = false;
	@Input() labelImages!: IPmdsCdkCardsSelectorImages;
	@Input() literals!: IPmdsCdkCardsSelectorOptionLiterals;
	@Input() skeleton!: boolean;
	@Input() skeletonAdditionalContent!: boolean;
	@Input() tooltip: IPmdsCdkCardsSelectorTooltip | undefined;

	@Output() selected: EventEmitter<string> = new EventEmitter();

	componentSelector = 'pmds-cdk-cards-selector-';

	clicked() {
		if (!this.isSelected) {
			this.isSelected = true
			this.selected.emit(this.id);
		}
	}

}
