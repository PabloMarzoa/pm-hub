////////Angular imports
import { NgClass } from '@angular/common';
import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	Renderer2,
	SimpleChanges,
	ViewChild,
	inject,
} from '@angular/core';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkStickyButtonBarButton } from './models/pmds-cdk-sticky-button-bar.models';

@Component({
	selector: 'pmds-cdk-sticky-button-bar',
	standalone: true,
	imports: [PmdsCdkButtonComponent, NgClass],
	templateUrl: './pmds-cdk-sticky-button-bar.component.html',
})
export class PmdsCdkStickyButtonBarComponent
	implements OnInit, AfterViewInit, OnDestroy, OnChanges
{
	@ViewChild('container', { static: false }) elem!: ElementRef;

	@Input() buttons!: IPmdsCdkStickyButtonBarButton[];
	@Input() dataQA!: string;
	@Input() position!: 'fixed' | 'bottom';
	@Input() floatingButton = false;
	@Input() showDesktop = true;
	@Input() show: boolean = true;

	@Output() showChange = new EventEmitter<boolean>();
	@Output() close: EventEmitter<void> = new EventEmitter();

	private renderer = inject(Renderer2);
	private el = inject(ElementRef);

	buttonShowed!: IPmdsCdkStickyButtonBarButton[];
	componentSelector = 'pmds-cdk-sticky-button-bar-';
	showBackButton!: boolean;

	ngOnInit() {
		this.buttonShowed = this.buttons;
		this.floatingButton &&
			(this.position =
				this.position === 'bottom' ? this.position : 'fixed') &&
			(this.showDesktop = false);
	}

	ngOnChanges(changes: SimpleChanges): void {
		changes['buttons'] && (this.buttonShowed = this.buttons);
	}

	ngOnDestroy(): void {
		if (this.position === 'bottom') {
			this.renderer.removeChild(
				this.renderer.selectRootElement('body', true),
				this.el.nativeElement
			);
		}
	}

	ngAfterViewInit(): void {
		if (this.position === 'bottom') {
			this.renderer.appendChild(
				this.renderer.selectRootElement('body', true),
				this.el.nativeElement
			);
		}
	}

	buttonClick(button: IPmdsCdkStickyButtonBarButton) {
		if (button.dropdownButtons?.length) {
			this.buttonShowed = button.dropdownButtons;
			this.showBackButton = true;
		} else {
			button.action?.();
			this.buttonShowed = this.buttons;
			this.showBackButton = false;
			this.floatingButton && (this.show = false);
		}
	}

	goToFirstLevel() {
		this.showBackButton = false;
		this.buttonShowed = this.buttons;
	}

	closeMenu() {
		this.goToFirstLevel();
		this.close.emit();
		this.show = false;
	}
}
