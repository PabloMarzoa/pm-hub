////////Angular imports
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
////////PNXT libraries
import { PmdsCdkTagCategoryComponent } from '../pmds-cdk-tag-category/pmds-cdk-tag-category.component';
////////Component imports
import { IPmdsCdkAccordionLiterals } from "./models/pmds-cdk-accordion-literals.model";
import { IPmdsCdkAccordionTags } from './models/pmds-cdk-accordion-tags.model';
import { PmdsCdkAccordionSkeletonComponent } from './components/pmds-cdk-accordion-skeleton/pmds-cdk-accordion-skeleton.component';

@Component({
	selector: 'pmds-cdk-accordion',
	standalone: true,
	imports: [
		CommonModule,
		PmdsCdkTagCategoryComponent,
		PmdsCdkAccordionSkeletonComponent
	],
	templateUrl: './pmds-cdk-accordion.component.html',
})
export class PmdsCdkAccordionComponent {

	@Input() content: string[] = [];
	@Input() dataQA: string = '';
	@Input() hideBottomBorder!: boolean;
	@Input() literals: IPmdsCdkAccordionLiterals = {title: '', elements: ''};
	@Input() open = false;
	@Input() skeleton = false;
	@Input() skeletonOpen = false;
	@Input() tags: IPmdsCdkAccordionTags[] = [];

	componentSelector = 'pmds-cdk-accordion-';

	toggleAccordion() {
		this.open = !this.open;
	}
}
