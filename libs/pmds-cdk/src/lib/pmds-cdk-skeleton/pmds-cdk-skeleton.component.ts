////////Angular imports
import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	Input,
	ViewChild,
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
	selector: 'pmds-cdk-skeleton',
	standalone: true,
	templateUrl: './pmds-cdk-skeleton.component.html',
	styleUrls: ['pmds-cdk-skeleton.component.scss'],
})
export class PmdsCdkSkeletonComponent implements AfterViewInit {
	@ViewChild('line', { static: false }) line!: ElementRef;
	@ViewChild('content', { static: false }) content!: ElementRef;

	@Input() dataQA!: string;
	@Input() style!: string;

	componentSelector = 'pmds-cdk-skeleton-';
	showLine = false;
	top!: string;
	left!: string;
	height!: string;

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.setSizes()
	}

	ngAfterViewInit(): void {
		timer(0).subscribe(_ => this.setSizes())
	}

	private setSizes() {
		this.left = `${-100 - this.content.nativeElement.offsetLeft}px`;
		this.height = `${this.content.nativeElement.clientHeight * 5}px`;
		this.top = `-${this.content.nativeElement.clientHeight * 2}px`
	}
}
