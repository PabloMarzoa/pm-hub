////////// Angular imports
import { AfterViewInit, Component, ElementRef, inject, Input, Renderer2 } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
	selector: 'pmds-cdk-loader',
	standalone: true,
	imports: [
		NgClass,
		NgTemplateOutlet
	],
	templateUrl: './pmds-cdk-loader.component.html',
})

export class PmdsCdkLoaderComponent implements AfterViewInit {

	@Input() bgClass?: string;
	@Input() dataQA!: string;
	@Input() isPrimary = true;
	@Input() isFullscreen = true;
	@Input() subtitle?: string;
	@Input() title?: string;
	@Input() customStyles = '';
	@Input() embedBody = false;

	componentSelector = 'pmds-cdk-loader-';

	private renderer = inject(Renderer2)
	private el = inject(ElementRef)

	ngAfterViewInit(): void {
		this.isFullscreen && this.embedBody && this.renderer.appendChild(this.renderer.selectRootElement('body', true), this.el.nativeElement);
	}

}
