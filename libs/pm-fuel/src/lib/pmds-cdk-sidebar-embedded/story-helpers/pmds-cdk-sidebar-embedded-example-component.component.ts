////////Angular imports
import {Component} from '@angular/core';
import { PmdsCdkButtonComponent } from '../../pmds-cdk-button/pmds-cdk-button.component';

@Component({
	selector: 'pmds-cdk-sidebar-embedded-example',
	standalone: true,
	imports: [PmdsCdkButtonComponent],
	template: `
		<section class="h-full w-full border border-color-border-info flex items-center justify-center text-color-text-info py-12">
			Content
		</section>`,
})
export class PmdsCdkSidebarEmbeddedExampleComponent {}
