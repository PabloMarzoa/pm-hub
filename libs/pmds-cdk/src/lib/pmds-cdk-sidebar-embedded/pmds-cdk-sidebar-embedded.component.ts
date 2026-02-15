////////Angular imports
import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, Type, ViewChild, ViewContainerRef, } from '@angular/core';
import { NgClass } from '@angular/common';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkStickyButtonBarComponent } from '../pmds-cdk-sticky-button-bar/pmds-cdk-sticky-button-bar.component';
import { PmdsCdkLoaderComponent } from '../pmds-cdk-loader/pmds-cdk-loader.component';
////////Component imports
import { IPmdsCdkSidebarEmbeddedConfig } from './models/pmds-cdk-sidebar-embedded-config.model';
import { PmdsCdkButtonDropdownComponent } from '../pmds-cdk-button-dropdown/pmds-cdk-button-dropdown.component';

@Component({
	selector: 'pmds-cdk-sidebar-embedded',
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkButtonComponent,
		PmdsCdkStickyButtonBarComponent,
		PmdsCdkLoaderComponent,
		PmdsCdkButtonDropdownComponent
	],
	templateUrl: './pmds-cdk-sidebar-embedded.component.html',
})
export class PmdsCdkSidebarEmbeddedComponent implements AfterViewInit {
	@ViewChild('section', { static: false }) section!: ElementRef;
	@ViewChild('sidebarTemplate', { read: ViewContainerRef, static: true })
	sidebarTemplate!: ViewContainerRef;

	@Input() dataQA!: string;
	@Input() config!: IPmdsCdkSidebarEmbeddedConfig;
	@Input() loading!: boolean;
	@Input() showSidebar!: boolean;
	@Input() sidebarComponent!: Type<any>;

	@Output() showSidebarChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	componentSelector = 'pmds-cdk-sidebar-embedded-';
	sidebarHeight!: string;

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.setFullHeight();
	}

	ngOnInit(): void {
		this.loadComponent();
	}

	loadComponent() {
		this.sidebarTemplate?.clear();
		if (this.sidebarComponent !== undefined && this.sidebarTemplate) {
			this.sidebarTemplate.createComponent(this.sidebarComponent);
		}
	}

	ngAfterViewInit(): void {
		this.setFullHeight();
	}

	private setFullHeight() {
		const element = this.section.nativeElement;
		const windowHeight = window.innerHeight;
		const elementOffsetTop = element.offsetTop;
		const elementHeight = windowHeight - elementOffsetTop;
		this.sidebarHeight = elementHeight + 'px';
	}
}
