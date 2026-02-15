////////Angular imports
import {
	Directive,
	ElementRef,
	HostListener,
	Input,
	Renderer2,
	inject,
} from '@angular/core';

@Directive({
	selector: '[pmdsViewportOverflow]',
	standalone: true,
})
export class PmdsDirectiveViewportOverflow {
	@Input('pmdsViewportOverflow') options!: {
		height: number;
		translateY: number;
	};

	private domElement!: HTMLElement;
	private elementRef = inject(ElementRef);
	private renderer = inject(Renderer2);
	private changed = false;

	@HostListener('window:scroll', ['$event'])
	onScroll() {
		this.checkPostion();
	}

	checkPostion() {
		if (this.elementRef.nativeElement.parentElement.getBoundingClientRect().top) {
			let overflow = false;
			if (!this.changed) {
				overflow =
					this.elementRef?.nativeElement.getBoundingClientRect()
						.top +
						this.options.height >
					window.innerHeight;
			} else {
				overflow =
					this.elementRef?.nativeElement.getBoundingClientRect()
						.top +
						this.options.height +
						this.options.translateY >
					window.innerHeight;
			}
			this.domElement = this.elementRef.nativeElement;
			if (overflow && (this.elementRef.nativeElement.parentElement.getBoundingClientRect().top > this.options.height)) {
				this.renderer.setStyle(
					this.domElement,
					'transform',
					`translateY(-${this.options.translateY}px)`
				);
				this.changed = true;
			} else {
				this.renderer.removeStyle(
					this.domElement,
					'transform'
				);
				this.changed = false;
			}
		}
	}
}
