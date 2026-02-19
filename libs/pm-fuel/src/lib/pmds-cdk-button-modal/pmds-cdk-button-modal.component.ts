////////Angular imports
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkButtonModalButton } from './models/pmds-cdk-button-modal.models';

@Component({
	selector: 'pmds-cdk-button-modal',
	standalone: true,
	imports: [NgFor, NgIf, PmdsCdkButtonComponent],
	templateUrl: './pmds-cdk-button-modal.component.html',
})
export class PmdsCdkButtonModalComponent implements OnInit, OnDestroy, AfterViewInit {

	@Input() buttons!: IPmdsCdkButtonModalButton[];
	@Input() hasBackdropClick = true;
	@Input() dataQA!: string;
	@Input() backLiteral!: string;
	@Input() show!: boolean | undefined;

	@Output() showChange = new EventEmitter<boolean>();

	componentSelector = 'pmds-cdk-button-modal-';
	buttonShowed!: IPmdsCdkButtonModalButton[];
	showBackbutton!: boolean;

	private renderer = inject(Renderer2)
	private el = inject(ElementRef)

	ngOnInit() {
		this.buttonShowed = this.buttons;
	}

	ngOnDestroy(): void {
		this.renderer.removeChild(this.renderer.selectRootElement('body', true), this.el.nativeElement);
	}

	ngAfterViewInit(): void {
		this.renderer.appendChild(this.renderer.selectRootElement('body', true), this.el.nativeElement);
	}

	buttonClick(button: IPmdsCdkButtonModalButton) {
		if (button.dropdownButtons?.length) {
			this.buttonShowed = button.dropdownButtons
			this.showBackbutton = true;
		} else {
			button.action?.();
			this.buttonShowed = this.buttons;
			this.updateShow(false);
		}
	}

	backClick() {
		this.showBackbutton = false;
		this.buttonShowed = this.buttons;
	}

	updateShow(value: boolean) {
		this.show = value;
		this.showBackbutton = false;
		this.showChange.emit(value);
	}
}
