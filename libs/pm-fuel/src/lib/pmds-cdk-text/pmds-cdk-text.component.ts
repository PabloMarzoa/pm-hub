////////Angular imports
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
////////PNXT libraries
import { PmdsDirectiveTitle } from '../../index';
////////Component imports
import { TPmdsCdkTextType } from './models/pmds-cdk-text-types.model';

@Component({
	selector: 'pmds-cdk-text',
	standalone: true,
	imports: [NgClass, PmdsDirectiveTitle],
	templateUrl: './pmds-cdk-text.component.html',
})
export class PmdsCdkTextComponent {
	@Input() dataQA!: string;
	@Input() type: TPmdsCdkTextType = 'section-title';
	@Input() text!: string;

	componentSelector = 'pmds-cdk-text';

	typeSet = {
		'section-title': 'font-headline-desktop-s-regular mobile:font-headline-mobile-m-regular',
		'module-title': 'font-headline-desktop-s-bold mobile:font-headline-mobile-m-bold',
		category: 'font-body-m-bold',
		description: 'font-body-m-regular'
	}
}
