////////Angular imports
import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
////////Component imports
import { PmdsCdkPageControllerSkeletonComponent } from './components/pmds-cdk-page-controller-skeleton/pmds-cdk-page-controller-skeleton.component';

@Component({
	selector: 'pmds-cdk-page-controller',
	standalone: true,
	imports: [NgClass, PmdsCdkPageControllerSkeletonComponent],
	templateUrl: './pmds-cdk-page-controller.component.html',
})
export class PmdsCdkPageControllerComponent {
	@Input() actualItem = 1;
	@Input() dataQA!: string;
	@Input() onlyDots = false;
	@Input() skeleton!: boolean;
	@Input() totalItems!: number;

	@Output() changePage: EventEmitter<number> = new EventEmitter<number>();

	componentSelector = 'pmds-cdk-page-controller';

	changePageEmit(page: number) {
		if (!(page <= 0 || page > this.totalItems)) {
			this.actualItem = page;
			this.changePage.emit(page);
		}
	}
}
