////////Angular imports
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
////////PNXT libraries
////////Component imports
import { IPmdsCdkFooterLiterals } from './models/pmds-cdk-footer-literals.model';
import { IPmdsCdkFooterLink } from './models/pmds-cdk-footer-link.model';
import { IPmdsCdkFooterAction } from './models/pmds-cdk-footer-actions.model';
import { TPmdsCdkFooterLayout } from './models/pmds-cdk-footer-layout.model';
import { PmdsCdkFooterLogoEmiComponent } from './components/pmds-cdk-footer-logo-emi.component';
import { PmdsCdkFooterLogoSaasComponent } from './components/pmds-cdk-footer-logo-saas.component';
import { PmdsCdkTagLabelComponent } from '../pmds-cdk-tag-label/pmds-cdk-tag-label.component';

@Component({
	selector: 'pmds-cdk-footer',
	standalone: true,
	imports: [
		CommonModule,
		PmdsCdkFooterLogoSaasComponent,
		PmdsCdkFooterLogoEmiComponent,
		PmdsCdkTagLabelComponent,
	],
	templateUrl: './pmds-cdk-footer.component.html',
})
export class PmdsCdkFooterComponent {
	@Input() dataQA!: string;
	@Input() type: TPmdsCdkFooterLayout = 'simple';
	@Input() contactItems!: IPmdsCdkFooterAction[];
	@Input() linkItems!: IPmdsCdkFooterLink[];
	@Input() literals!: IPmdsCdkFooterLiterals;

	selectorComponent = 'pmds-cdk-footer-';
}
