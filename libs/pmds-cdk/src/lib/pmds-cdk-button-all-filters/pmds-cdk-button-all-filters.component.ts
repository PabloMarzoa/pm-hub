////////Angular imports
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'pmds-cdk-button-all-filters',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './pmds-cdk-button-all-filters.component.html',
})
export class PmdsCdkButtonAllFiltersComponent {

	@Input() dataQA!: string;
	@Input() disabled = false;
	@Input() open = false;
	@Input() label!: string;
	@Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

    componentSelector = 'pmds-cdk-button-all-filters-';

	onButtonClick() {
		this.buttonClick.emit();
	}
}
