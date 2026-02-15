/////////Angular imports
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { IPmdsCdkOptionDropdown } from '../pmds-cdk-dropdown/models/pmds-cdk-option-dropdown.model';
import { PmdsCdkDropdownComponent } from '../pmds-cdk-dropdown/pmds-cdk-dropdown.component';
import { PmdsCdkDividerComponent } from '../pmds-cdk-divider/pmds-cdk-divider.component';
import { PmdsCdkPageHeaderSkeletonComponent } from './components/pmds-cdk-page-header-skeleton/pmds-cdk-page-header-skeleton.component';

@Component({
	selector: 'pmds-cdk-page-header',
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkButtonComponent,
		PmdsCdkDividerComponent,
		PmdsCdkDropdownComponent,
		PmdsCdkPageHeaderSkeletonComponent,
		ReactiveFormsModule,
	],
	templateUrl: './pmds-cdk-page-header.component.html',
})
export class PmdsCdkPageHeaderComponent implements OnInit, OnChanges {
	@Input() back!: string;
	@Input() dataQA!: string;
	@Input() dropdownDefaultOption!: IPmdsCdkOptionDropdown;
	@Input() dropdownOptions!: IPmdsCdkOptionDropdown[];
	@Input() dropdownPlaceholder = '';
	@Input() firstLevel = false;
	@Input() iconSubtitle!: string;
	@Input() showBackButton!: boolean;
	@Input() showCloseButton!: boolean;
	@Input() showDivider = false;
	@Input() skeleton!: boolean;
	@Input() subtitle!: string;
	@Input() title!: string;

	@Output() clickBackButton: EventEmitter<void> = new EventEmitter<void>();
	@Output() clickCloseButton: EventEmitter<void> = new EventEmitter<void>();
	@Output() selectOption: EventEmitter<string> = new EventEmitter<string>();

	componentSelector = 'pmds-cdk-page-header-';
	dropdownForm: FormGroup = new FormBuilder().group({
		dropdown: [''],
	});

	ngOnInit() {
		this.setDropdownIfHasOnlyOneValue();
		this.setDropdownIfHasDefaultValue();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['dropdownOptions']) {
			this.setDropdownIfHasOnlyOneValue();
		}
		if (changes['dropdownDefaultOption']) {
			this.setDropdownIfHasDefaultValue();
		}
	}

	setDropdownIfHasOnlyOneValue() {
		this.dropdownOptions &&
			this.dropdownOptions.length === 1 &&
			this.dropdownForm
				.get('dropdown')
				?.setValue(this.dropdownOptions[0].value);
	}

	setDropdownIfHasDefaultValue() {
		this.dropdownOptions &&
			this.dropdownDefaultOption &&
			this.dropdownOptions.length > 1 &&
			this.dropdownForm
				.get('dropdown')
				?.setValue(this.dropdownDefaultOption.value);
	}

	emitBackButton() {
		this.clickBackButton.emit();
	}

	emitCloseButton() {
		this.clickCloseButton.emit();
	}

	onSelectOption(selection: string[] | string) {
		this.selectOption.emit(selection as string);
	}
}
