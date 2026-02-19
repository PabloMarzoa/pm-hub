////////Angular imports
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
////////PNXT libraries
import { PmdsDirectiveTitle } from '../../index';
import { PmdsCdkPageControllerComponent } from '../pmds-cdk-page-controller/pmds-cdk-page-controller.component';
////////Component imports
import { IPmdsCdkShortcutItem } from './models/pmds-cdk-shortcut-item.model';
import { PmdsCdkShortcutSkeletonComponent } from './components/pmds-cdk-shortcut-skeleton/pmds-cdk-shortcut-skeleton.component';

@Component({
	selector: 'pmds-cdk-shortcut',
	standalone: true,
	imports: [
		NgClass,
		PmdsDirectiveTitle,
		PmdsCdkPageControllerComponent,
		PmdsCdkShortcutSkeletonComponent
	],
	templateUrl: './pmds-cdk-shortcut.component.html',
})
export class PmdsCdkShortcutComponent {
	@ViewChild('scrollSection') scrollSection!: ElementRef;

	@Input() dataQA!: string;
	@Input() flexWidth = false;
	@Input() shortcutItems!: IPmdsCdkShortcutItem[];
	@Input() skeleton!: boolean;

    componentSelector = 'pmds-cdk-shortcut-';

	scrollSectionAction(toEnd: boolean) {
		if (toEnd) {
			this.scrollSection.nativeElement.scrollTo({left: this.scrollSection.nativeElement.offsetWidth});
		} else {
			this.scrollSection.nativeElement.scrollTo({left: 0});
		}
	}
}
