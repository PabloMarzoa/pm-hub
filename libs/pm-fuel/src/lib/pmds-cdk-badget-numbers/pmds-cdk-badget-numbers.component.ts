////////Angular imports
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
////////Component imports
import { TPmdsCdkBadgetNumbersSize } from './models/pmds-cdk-buget-numbers-states.model';

@Component({
	selector: 'pmds-cdk-badget-numbers',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './pmds-cdk-badget-numbers.component.html'
})
export class PmdsCdkBadgetNumbersComponent {

	@Input() label!: number;
	@Input() size: TPmdsCdkBadgetNumbersSize = 'small';
	@Input() isActive = false;
	@Input() dataQA!: string;
	@Input() hasBackground!: boolean;

	componentSelector = 'pmds-cdk-badget-numbers-';
}
