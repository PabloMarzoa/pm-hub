////////Angular imports
import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import {
	IPmdsCdkErrorPageButtons,
	IPmdsCdkErrorPageLiterals,
} from './models/pmds-cdk-error-page-literals.model';
import { TPmdsCdkErrorPageType } from './models/pmds-cdk-error-page-type.model';
import { PmdsCdkErrorPage500Component } from './components/pmds-cdk-error-page-500.component';
import { PmdsCdkErrorPage503Component } from './components/pmds-cdk-error-page-503.component';
import { PmdsCdkErrorPage401EmiComponent } from './components/pmds-cdk-error-page-401-emi.component';
import { PmdsCdkErrorPage401SaasComponent } from './components/pmds-cdk-error-page-401-saas.component';
import { PmdsCdkErrorPage403EmiComponent } from './components/pmds-cdk-error-page-403-emi.component';
import { PmdsCdkErrorPage403SaasComponent } from './components/pmds-cdk-error-page-403-saas.component';
import { PmdsCdkErrorPage404EmiComponent } from './components/pmds-cdk-error-page-404-emi.component';
import { PmdsCdkErrorPage404SaasComponent } from './components/pmds-cdk-error-page-404-saas.component';

@Component({
	selector: 'pmds-cdk-error-page',
	standalone: true,
	imports: [
		PmdsCdkButtonComponent,
		NgClass,
		PmdsCdkErrorPage401EmiComponent,
		PmdsCdkErrorPage403EmiComponent,
		PmdsCdkErrorPage404EmiComponent,
		PmdsCdkErrorPage401SaasComponent,
		PmdsCdkErrorPage403SaasComponent,
		PmdsCdkErrorPage404SaasComponent,
		PmdsCdkErrorPage500Component,
		PmdsCdkErrorPage503Component,
	],
	templateUrl: './pmds-cdk-error-page.component.html',
})
export class PmdsCdkErrorPageComponent implements OnInit {
	@Input() dataQA!: string;
	@Input() errorCode: TPmdsCdkErrorPageType = '500';
	@Input() literals!: IPmdsCdkErrorPageLiterals;
	@Input() isModule!: boolean;

	buttons: IPmdsCdkErrorPageButtons[] | undefined;
	componentSelector = 'pmds-cdk-error-page-';

	ngOnInit(): void {
		this.buttons = this.literals[this.errorCode]?.buttons || this.literals['500']?.buttons;
	}
}
