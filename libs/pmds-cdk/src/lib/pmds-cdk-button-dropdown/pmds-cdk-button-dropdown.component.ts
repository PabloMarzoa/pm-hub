////////Angular imports
import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	inject,
	Input,
	OnDestroy,
	Output,
	Renderer2,
	ViewChild
} from '@angular/core';
import { NgClass } from '@angular/common';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import {
	IPmdsCdkButtonsDropdownOption,
	TPmdsCdkButtonModalSize,
	TPmdsCdkButtonModalType
} from './models/pmds-cdk-button-dropdown.model';

@Component({
	selector: 'pmds-cdk-button-dropdown',
	standalone: true,
	imports: [NgClass, PmdsCdkButtonComponent],
	templateUrl: './pmds-cdk-button-dropdown.component.html',
})
export class PmdsCdkButtonDropdownComponent implements AfterViewInit, OnDestroy {
	@ViewChild('optionsContent', { static: false }) optionsContent!: ElementRef;

	@Input() buttonLabel: string = '';
	@Input() dataQA: string = '';
	@Input() openLeft!: boolean;
	@Input() options!: IPmdsCdkButtonsDropdownOption[];
	@Input() size: TPmdsCdkButtonModalSize = 'large';
	@Input() smallFit!: boolean;
	@Input() type: TPmdsCdkButtonModalType = 'single';

	@Output() doubleAction: EventEmitter<void> = new EventEmitter<void>();

	showOptions = false;
	omitEvent = false;
	componentSelector = 'pmds-cdk-button-dropdown-';

	private renderer = inject(Renderer2);
	private unlistener!: () => void;

	ngAfterViewInit(): void {
		this.unlistener = this.renderer.listen('window', 'click', (e: Event) => {
			if (
				this.showOptions &&
				e.target !== this.optionsContent?.nativeElement &&
				!this.omitEvent
			) {
				this.showOptions = false;
			}
			this.omitEvent = false;
		});
	}

	ngOnDestroy() {
		!!this.unlistener && this.unlistener();
	}

	showContent() {
		this.omitEvent = true;
		this.showOptions = !this.showOptions;
	}
}
