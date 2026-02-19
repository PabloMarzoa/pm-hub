////////Angular imports
import { NgIf, registerLocaleData } from '@angular/common';
import { Component, Input } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkPageHeaderComponent } from '../../pmds-cdk-page-header/pmds-cdk-page-header.component';
import { PmdsCdkDividerComponent } from '../../pmds-cdk-divider/pmds-cdk-divider.component';

import { TPmdsCdkTagLabelColor } from '../../pmds-cdk-tag-label/models/pmds-cdk-tag-label-color.model';
////////Component imports
import { PmdsCdkSidebarEmbeddedComponent } from '../pmds-cdk-sidebar-embedded.component';
import { PmdsCdkSidebarEmbeddedExampleComponent } from './pmds-cdk-sidebar-embedded-example-component.component';
import { IPmdsCdkSidebarEmbeddedConfig } from '../models/pmds-cdk-sidebar-embedded-config.model';

registerLocaleData(localeEs, 'es-ES');
registerLocaleData(localeEn, 'en-EN');

@Component({
	selector: 'pmds-cdk-sidebar-embedded-wrapper',
	standalone: true,
	imports: [
		NgIf,
		PmdsCdkSidebarEmbeddedComponent,
		PmdsCdkButtonComponent,
		PmdsCdkPageHeaderComponent,
		PmdsCdkDividerComponent,

	],
	template: ` <pmds-cdk-sidebar-embedded
		[(showSidebar)]="showSidebar"
		[sidebarComponent]="sidebarComponent"
		[dataQA]="dataQA"
		[loading]="loading"
		[config]="config"
	>
		<section class="px-4 relative">
			<pmds-cdk-page-header
				back="Back"
				[dataQA]="dataQA"
				[showBackButton]="true"
				subtitle="[Description (optional)]"
				title="[Page header title]"
			>
				<div class="flex gap-4">
					<pmds-cdk-button
						label="toggle sidebar"
						icon="pmicons-placeholder"
						(buttonClick)="showSidebar = !showSidebar"
					/>
					<pmds-cdk-button
						label="toggle sidebar"
						buttonType="secondary"
						icon="pmicons-placeholder"
						(buttonClick)="showSidebar = !showSidebar"
					/>
				</div>
			</pmds-cdk-page-header>
			<pmds-cdk-divider />
			<div class="p-4 border border-dashed border-gray-400 text-center text-gray-400">
				Page Detail Component (Deleted)
			</div>
		</section>
	</pmds-cdk-sidebar-embedded>`,
})
export class PmdsCdkSidebarEmbeddedWrapperComponent {
	@Input() config!: IPmdsCdkSidebarEmbeddedConfig;
	@Input() loading: boolean = true;
	@Input() dataQA!: string;

	showSidebar = false;
	sidebarComponent = PmdsCdkSidebarEmbeddedExampleComponent;

}
