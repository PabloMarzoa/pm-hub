////////Angular imports
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
	selector: 'pmds-cdk-tab',
	standalone: true,
	templateUrl: './pmds-cdk-tab.component.html'
})
export class PmdsCdkTabComponent {

	@ViewChild(TemplateRef) tabContent!: TemplateRef<unknown>;

	@Input() componentPath!: string;
	@Input() isActive!: boolean;
	@Input() isDisabled = false;

}