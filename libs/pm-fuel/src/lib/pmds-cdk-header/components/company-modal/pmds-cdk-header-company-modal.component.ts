////////Angular imports
import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../../../pmds-cdk-button/pmds-cdk-button.component';
import { IPmdsCdkOptionDropdown } from '../../../pmds-cdk-dropdown/models/pmds-cdk-option-dropdown.model';
import { IPmdsCdkModalData } from '../../../pmds-cdk-modal/models/pmds-cdk-modal.model';
import { PMDS_CDK_MODAL_DATA_TOKEN } from '../../../pmds-cdk-modal/models/pmds-cdk-modal.model';
import { PmdsCdkModalComponent } from '../../../pmds-cdk-modal/pmds-cdk-modal.component';
////////Component imports
import { IPmdsCdkHeaderCompanyModalData } from '../../models/pmds-cdk-header-company-modal-data.model';

@Component({
	selector: 'pmds-cdk-header-company-modal',
	standalone: true,
	imports:[
		NgClass,
		PmdsCdkButtonComponent,
		PmdsCdkModalComponent
	],
	templateUrl: './pmds-cdk-header-company-modal.component.html'
})
export class PmdsCdkCompanyModalComponent implements OnInit{

	options!: IPmdsCdkOptionDropdown[];
	componentSelector = 'pmds-cdk-header-company-modal-';
	dataModal!: IPmdsCdkHeaderCompanyModalData
	dataQA!: string
	value!: string[] | string;

	readonly data: IPmdsCdkModalData<unknown> = inject(
		PMDS_CDK_MODAL_DATA_TOKEN
	);

	ngOnInit(): void {
		this.dataModal = this.data.data as IPmdsCdkHeaderCompanyModalData
		this.options = this.dataModal.companies
		this.value = this.dataModal.selectedCompany
		this.dataQA = this.dataModal.dataQA
	}

	selectOption(option: IPmdsCdkOptionDropdown){
		this.dataModal.close(option)
	}
}
