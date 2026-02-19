////////Angular imports
import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges, inject } from '@angular/core';
////////Component imports
import { TPmdsDirectiveTooltipPosition } from './models/pmds-directive-tooltip-position.model';

const TABLET_BREAKPOINT = 1279;

@Directive({
	selector: '[pmdsTooltip]',
	standalone: true
})
export class PmdsDirectiveTooltip implements OnChanges {

	@Input() pmdsTooltipTitle!: string | null;
	@Input() pmdsTooltipActivate!: boolean;
	@Input('pmdsTooltip') tooltipContent!: string | null;
	@Input() pmdsTooltipPosition: TPmdsDirectiveTooltipPosition = 'bottom-center';
	@Input() delay:
		| '0'
		| '75'
		| '100'
		| '150'
		| '200'
		| '300'
		| '500'
		| '700'
		| '1000' = '300';

	private tooltip!: HTMLElement | null;
	private contentTooltip!: HTMLElement | null;
	private triangleTooltip!: HTMLElement | null;
	private timer!: ReturnType<typeof setTimeout>;
	private defaultTime = 50;
	private elementRef = inject(ElementRef);
	private renderer = inject(Renderer2);

	@HostListener('mouseenter')
	onMouseEnter() {
		if (this.tooltipContent && typeof this.pmdsTooltipActivate !== 'boolean') {
			this.timer = setTimeout(() => {
				if (!this.isMobile() && !this.loadedTooltip()) {
					this.show();
				}
			}, this.defaultTime);
		}
	}

	@HostListener('click', ['$event'])
	onMouseClick(event: Event) {
		event.stopPropagation();
		if (this.tooltipContent && typeof this.pmdsTooltipActivate !== 'boolean') {
			this.timer = setTimeout(() => {
				if (this.isMobile() && !this.loadedTooltip()) {
					this.show();
				} else if (this.isMobile() && this.loadedTooltip()) {
					if (this.timer) clearTimeout(this.timer);
				}
			}, this.defaultTime);
		}
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		if (this.tooltipContent && typeof this.pmdsTooltipActivate !== 'boolean') {
			if (!this.isMobile() && this.loadedTooltip()) {
				this.hide();
			}
			if (this.timer) clearTimeout(this.timer);
		}
	}

	@HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		if (this.tooltipContent) {
			this.hide();
			if (this.timer) clearTimeout(this.timer);
		}
	}

	@HostListener('document:keydown', ['$event'])
	onKeyDown() {
		if (this.tooltipContent && typeof this.pmdsTooltipActivate !== 'boolean') {
			if (this.tooltipContent) {
				if (!this.isMobile() && this.loadedTooltip()) {
					this.hide();
				}
				if (this.timer) clearTimeout(this.timer);
			}
		}
	}

	@HostListener('document:mousedown', ['$event.target'])
	onGlobalClick(event: Element) {
		if (this.tooltipContent || this.pmdsTooltipActivate) {
			const outside = !this.elementRef.nativeElement.firstElementChild?.contains(event);
			if (outside) {
				this.tooltip && this.hide();
			} else {
				this.tooltip ? this.hide() : typeof this.pmdsTooltipActivate !== 'boolean' && this.show();
			}
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['pmdsTooltipActivate'] && typeof this.pmdsTooltipActivate === 'boolean') {
            if (this.pmdsTooltipActivate) {
                this.show()
            } else {
				this.hide();
			}
        }
	}

	private show() {
		this.create();
		this.setPosition();
		this.elementRef.nativeElement.classList.remove('after:opacity-0'); // icon
	}

	private hide() {
		setTimeout(() => {
			this.elementRef.nativeElement.classList.add('after:opacity-0'); // icon
			this.tooltip && this.renderer?.removeChild(document.body, this.tooltip);
			this.tooltip && this.renderer?.removeChild(document.body, this.triangleTooltip);
			this.tooltip = null;
			this.contentTooltip = null;
		}, +this.delay);
	}

	private create() {
		this.tooltip = this.renderer.createElement('div'); // tooltip container
		this.contentTooltip = this.renderer.createElement('div'); // tooltip content
		this.triangleTooltip = this.renderer.createElement('div'); // tooltip content
		this.renderer.appendChild(this.tooltip, this.renderer.createText(''));
		this.renderer.appendChild(this.tooltip, this.contentTooltip);
		this.renderer.appendChild(this.contentTooltip, this.triangleTooltip);
		this.renderer.appendChild(document.body, this.triangleTooltip);
		this.renderer.appendChild(document.body, this.tooltip);

		this.generateContent();

		this.tooltip?.classList.add(
			'transition-all',
			'absolute',
			'z-[1010]'
		);

		this.triangleTooltip?.classList.add(
			'transition-all',
			'absolute',
			'z-[1010]'
		);

		this.contentTooltip?.classList.add(
			'max-w-[392px]',
			'mobile:max-w-[288px]',
			'relative',
			'bg-color-tooltip',
			'text-color-text-secondary',
			'text-base',
			'rounded-pmds',
			'z-[1010]',
			'px-4',
			'pt-2',
			'pb-3',
			'font-SantanderMicroText'
		);

		this.elementRef.nativeElement.classList.add(
			'relative',
			'transition-all',
		);

		this.triangleTooltip?.classList.add(
			'w-4',
			'h-4',
			'rotate-45',
			'rounded',
			'bg-color-tooltip',
		);
	}

	private setPosition() {
		const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
		const tooltipPos = this.tooltip?.getBoundingClientRect();
		const scrollPos =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;
		let top, left, topTriangle, leftTriangle;

		if (tooltipPos) {
			left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
			leftTriangle = (hostPos.left - 8) + (hostPos.width) / 2;

			if (this.pmdsTooltipPosition.includes('left')) {
				left = left + ((tooltipPos.width / 2) - 33);
			} else if (this.pmdsTooltipPosition.includes('right')) {
				left = left - ((tooltipPos.width / 2) - 33);
			}

			left < 0 && (left = 0); // PREVENT LEFT OVERFLOW

			((left + tooltipPos.width) > window.innerWidth) && (left =  window.innerWidth - tooltipPos.width); // PREVENT RIGHT OVERFLOW

			if (this.pmdsTooltipPosition.includes('top')) {
				top = (hostPos.top - tooltipPos.height - 10) + scrollPos;
				topTriangle = (hostPos.top - 22) + scrollPos;
			}
			if (this.pmdsTooltipPosition.includes('bottom')) {
				top = (hostPos.bottom + 12) + scrollPos;
				topTriangle = (hostPos.bottom + 6) + scrollPos;
			}
			if (this.pmdsTooltipPosition.includes('middle')) {
				top = ((hostPos.top + hostPos.height/2) - tooltipPos.height - 10) + scrollPos;
				topTriangle = (hostPos.top + hostPos.height/2 - 20) + scrollPos;
			}
		}

		this.renderer.setStyle(this.tooltip, 'top', `${top}px`);
		this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
		this.renderer.setStyle(this.triangleTooltip, 'top', `${topTriangle}px`);
		this.renderer.setStyle(this.triangleTooltip, 'left', `${leftTriangle}px`);
	}

	private loadedTooltip() {
		return this.tooltip && this.tooltipContent;
	}

	private isMobile(): boolean {
		return window.innerWidth < TABLET_BREAKPOINT;
	}

	private generateContent() {
		if (this.contentTooltip) {
			this.contentTooltip.innerHTML = this.pmdsTooltipTitle ? `<span class="desktop:hidden cursor-pointer pmicons-close text-2xl absolute top-2 right-2"></span><span class="font-headline-desktop-s-bold">${this.pmdsTooltipTitle}</span><br><div class="pt-2">${this.tooltipContent}</div></div>` : this.tooltipContent as string
		}
	}

}

