////////Angular imports
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgIf, NgClass, NgFor } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
////////PNXT libraries
import { PmdsCdkToggleSwitchComponent } from '../pmds-cdk-toggle-switch/pmds-cdk-toggle-switch.component';
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkCardsInformationAction, IPmdsCdkCardsInformationLiterals } from './models/pmds-cdk-cards-information.models';
import { PmdsCdkCardsInformationSkeletonComponent } from './components/pmds-cdk-cards-information-skeleton/pmds-cdk-cards-information-skeleton.component';

@Component({
	selector: 'pmds-cdk-cards-information',
	standalone: true,
	imports: [
		NgIf,
		NgFor,
		NgClass,
		PmdsCdkButtonComponent,
		PmdsCdkToggleSwitchComponent,
		ReactiveFormsModule,
		FormsModule,
		PmdsCdkCardsInformationSkeletonComponent
	],
	templateUrl: './pmds-cdk-cards-information.component.html',
})
export class PmdsCdkCardsInformationComponent implements OnInit {

	@Input() dataQA: string = '';
	@Input() disabled: boolean = false;
	@Input() toggle: boolean = true;
	@Input() literals!: IPmdsCdkCardsInformationLiterals;
	@Input() actions: IPmdsCdkCardsInformationAction[] = [];
	@Input() create!: IPmdsCdkCardsInformationAction;
	@Input() skeleton!: boolean;

	@Output() enabledChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	selected = false;
	toggleForm!: FormGroup;
	componentSelector = 'pmds-cdk-cards-information-';

	ngOnInit(): void {
		this.toggleForm = new FormGroup({
			toggle: new FormControl()
		});
		if(!this.disabled) {this.selected = true}
	}

	toggleClicked(selected: boolean){
		this.selected = selected;
		this.disabled = !this.disabled;
		this.enabledChange.emit(this.selected);
	}
}
