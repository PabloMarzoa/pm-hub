////////Angular imports
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////PNXT libraries
import { TPmdsCdkCopyClipboardIconPosition } from './models/pmds-cdk-copy-clipboard-icon-position.model';

@Component({
	selector: 'pmds-cdk-copy-clipboard',
	standalone: true,
	imports: [PmdsCdkButtonComponent, NgClass],
	templateUrl: './pmds-cdk-copy-clipboard.component.html',
})
export class PmdsCdkCopyClipboardComponent {
	@Input() textToCopy!: string;
	@Input() dataQA!: string;
	@Input() hideLabelMobile!: boolean;
	@Input() literal!: string;
	@Input() literalCopied!: string;
	@Input() iconPosition: TPmdsCdkCopyClipboardIconPosition = 'right';

	@Output() copyClick: EventEmitter<void> = new EventEmitter<void>();

    componentSelector = 'pmds-cdk-copy-clipboard-';
	showCopied = false;

	private clipboard = inject(Clipboard);

	copyTextToClipboard(event: MouseEvent) {
		event.stopPropagation();
		if (!this.showCopied) {
			this.initCopiedTimer();
			this.clipboard.copy(this.textToCopy);
			this.copyClick.emit()
		}
	}

	private initCopiedTimer() {
		this.showCopied = true;
		setTimeout(() => {
			this.showCopied = false;
		}, 3000);
	}
}
