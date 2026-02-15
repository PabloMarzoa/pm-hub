////////Angular imports
import {
	AfterViewInit,
	Directive,
	ElementRef,
	HostListener,
	Input,
	OnChanges,
	Renderer2,
	inject,
} from '@angular/core';
////////Component imports
import { IPmdsDirectiveTitleClasses } from './models/pmds-directive-title-classes.model';

@Directive({
	selector: '[pmdsTitle]',
	standalone: true,
})
export class PmdsDirectiveTitle implements AfterViewInit, OnChanges {
	@Input() forceLabel!: string;
	@Input() forceTitle = false;
	@Input() multipleLine = false;
	@Input() disabledEllipsis = false;

	private domElement!: HTMLElement;
	private readonly elementRef = inject(ElementRef);
	private readonly renderer = inject(Renderer2);

	constructor() {
		this.domElement = this.elementRef.nativeElement;
		const cssClasses: IPmdsDirectiveTitleClasses = {
			'text-overflow': 'ellipsis',
			overflow: 'hidden',
			'white-space': this.multipleLine ? 'normal' : 'nowrap',
		};

		Object.keys(cssClasses).forEach((element) => {
			this.renderer.setStyle(
				this.domElement,
				element,
				cssClasses[element as keyof IPmdsDirectiveTitleClasses]
			);
		});
	}

	ngAfterViewInit(): void {
		this.renderer.setProperty(this.domElement, 'scrollTop', 1);
		this.setTooltip();
		if (this.multipleLine && this.domElement.offsetWidth < this.domElement.scrollWidth) {
			this.renderer.setStyle(
				this.domElement,
				'white-space',
				'normal'
			);
			this.renderer.setAttribute(
				this.domElement,
				'title',
				this.forceLabel || this.domElement.innerText
			);
		}
		if (this.disabledEllipsis) {
			this.renderer.removeStyle(
				this.domElement,
				'text-overflow'
			);
			this.renderer.removeStyle(
				this.domElement,
				'overflow'
			);
			this.renderer.removeStyle(
				this.domElement,
				'white-space'
			);
		}
	}

	ngOnChanges() {
		this.setTooltip();
	}

	@HostListener('window:resize', ['$event.target'])
	setTooltip() {
		this.domElement.offsetWidth <= this.domElement.scrollWidth ||
		this.forceTitle
			? this.renderer.setAttribute(
					this.domElement,
					'title',
					this.forceLabel || this.domElement.innerText
			  )
			: this.renderer.removeAttribute(this.domElement, 'title');
	}

	@HostListener('mouseenter') onHover() {
		this.setTooltip();
	}
}
