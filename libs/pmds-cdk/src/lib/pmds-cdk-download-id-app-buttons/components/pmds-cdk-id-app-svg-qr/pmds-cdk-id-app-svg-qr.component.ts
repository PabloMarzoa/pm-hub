////////Angular imports
import { Component, Input } from '@angular/core';

@Component({
	selector: 'pmds-cdk-id-app-svg-qr',
	standalone: true,
	imports: [],
	templateUrl: './pmds-cdk-id-app-svg-qr.component.html',
})
export class PmdsCdkIdAppSvgQRComponent {
	@Input() svgHeight!: number;
	@Input() svgId!: string;
	@Input() svgWidth!: number;
}
