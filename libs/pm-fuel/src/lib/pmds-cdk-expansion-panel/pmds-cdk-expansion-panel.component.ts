////////Angular imports
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { NgClass } from '@angular/common';
////////Component imports
import { IPmdsCdkExpansionPanelActions } from "./models/pmds-cdk-expansion-panel-action.model";
import { PmdsCdkExpansionSkeletonComponent } from './components/pmds-cdk-expansion-skeleton/pmds-cdk-expansion-skeleton.component';
import { PmdsDirectiveTooltip } from '../../index';

@Component({
	selector: 'pmds-cdk-expansion-panel',
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkExpansionSkeletonComponent,
		PmdsDirectiveTooltip
	],
	templateUrl: './pmds-cdk-expansion-panel.component.html',
})
export class PmdsCdkExpansionPanelComponent implements OnInit {
	@ViewChild('optionsContent', { static: false }) optionsContent!: ElementRef;

	@Input() actions!: IPmdsCdkExpansionPanelActions[];
	@Input() dataQA: string = '';
	@Input() openByDefault = false;
	@Input() title: string = '';
	@Input() tooltip: string = '';
    @Input() skeleton!: boolean;
    @Input() skeletonOpen!: boolean;

	open = false;
	showOptions = false;
	omitEvent = false;
	componentSelector = 'pmds-cdk-expansion-panel-';

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

	ngOnInit() {
		this.open = this.openByDefault;
	}

	toggleExpansionPanelState() {
		this.open = !this.open;
	}

	showContent() {
		this.omitEvent = true;
		this.showOptions = !this.showOptions;
	}
}
