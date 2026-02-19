////////Angular imports
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'pmds-cdk-button-floating',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './pmds-cdk-button-floating.component.html'
})
export class PmdsCdkButtonFloatingComponent {

	@Input() isDisabled!: boolean;
	@Input() icon = 'pmicons-plus';
	@Input() dataQA = 'pmicons-plus';

	@Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

	componentSelector = 'pmds-cdk-button-floating-';

}
