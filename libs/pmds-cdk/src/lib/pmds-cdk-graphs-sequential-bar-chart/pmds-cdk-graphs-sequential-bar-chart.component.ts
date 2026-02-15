////////Angular imports
import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	inject,
	Input,
	OnChanges,
	SimpleChanges,
	ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
////////PNXT libraries
import { PmdsDirectiveTooltip } from '@pmhub/pmds-common';

import { PmdsCdkLoaderComponent } from '../pmds-cdk-loader/pmds-cdk-loader.component';
////////Component imports
import { GRAPH_HEIGHT, LINES, RADIUS_BAR } from './models/pmds-cdk-graphs-sequential-bar-chart-const.model';
import { IPmdsCdkGraphsSequentialBarChartConfig } from './models/pmds-cdk-graphs-sequential-bar-chart-config.model';
import { IPmdsCdkGraphsSequentialBarChartData } from './models/pmds-cdk-graphs-sequential-bar-chart-data.model';
import {
	IPmdsCdkGraphsSequentialBarChartBars,
	IPmdsCdkGraphsSequentialBarChartXLabels,
	IPmdsCdkGraphsSequentialBarChartYLines
} from './models/pmds-cdk-graphs-sequential-bar-chart-models.model';
import { timer } from 'rxjs';

@Component({
	selector: 'pmds-cdk-graphs-sequential-bar-chart',
	standalone: true,
	imports: [
		CommonModule,
		PmdsDirectiveTooltip,
		PmdsCdkLoaderComponent,

	],
	templateUrl: './pmds-cdk-graphs-sequential-bar-chart.component.html',
})
export class PmdsCdkGraphsSequentialBarChartComponent
	implements AfterViewInit, OnChanges
{
	@ViewChild('graphSVG', {static: false}) graphSVG!: ElementRef;

	@Input() dataQA!: string;
	@Input() data!: IPmdsCdkGraphsSequentialBarChartData[];
	@Input() config!: IPmdsCdkGraphsSequentialBarChartConfig;
	@Input() isLoading!: boolean;

	bars!: IPmdsCdkGraphsSequentialBarChartBars[];
	barsActive!: boolean[];
	barsShow!: boolean[];
	barsWidth = 32;
	coefY!: number;
	graphHeight!: number;
	offsetWidth!: number;
	paddingBottom = 3.5;
	viewBox!: string;
	xLabels!: IPmdsCdkGraphsSequentialBarChartXLabels[];
	y0Axis: number = 0;
	yLabelsWidth = 40;
	yLastAxis: number = 0;
	yLines!: IPmdsCdkGraphsSequentialBarChartYLines[];

	private elementRef = inject(ElementRef);

	@HostListener('window:resize', ['$event']) onResize() {
		if (this.offsetWidth !== this.widthCheck()) {
			this.offsetWidth = this.widthCheck();
			this.viewBox = `0 0 ${this.offsetWidth} ${
				(this.config?.height || GRAPH_HEIGHT) + 15
			}`;
			if (this.data) {
				this.calculateBarsWidth();
				this.calculateBars();
				this.calculateXLabels();
			}
		}
	}

	@HostListener('document:mousedown', ['$event.target'])
	onGlobalClick(event: Element) {
		const outside =
			!this.elementRef.nativeElement.firstElementChild?.contains(event);
		if (outside && this.data) {
			this.barsActive = this.data.map((_) => true);
			this.barsShow = this.data.map((_) => false);
		}
	}

	private elem = inject(ElementRef);

	componentSelector = 'pmds-cdk-graphs-sequential-bar-chart-';

	ngAfterViewInit(): void {
		timer(0).subscribe(_=> {
			this.graphHeight = this.config?.height || GRAPH_HEIGHT;
			this.offsetWidth = this.widthCheck();
			this.viewBox = `0 0 ${this.offsetWidth} ${
				(this.config?.height || GRAPH_HEIGHT) + 15
			}`;
			this.data && this.initData();
		})
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['data']) {
			this.data && this.initData();
		}
	}

	selectBar(isHover: boolean, index?: number) {
		if (!this.barsActive.find((bar) => !bar) || !isHover) {
			this.barsActive = this.barsActive.map((_, i) =>
				isHover ? index === i : true
			);
		}
		if (isHover) {
			this.barsShow = this.barsShow.map((_, i) =>
				isHover ? index === i : false
			);
		} else {
			this.barsShow = this.barsShow.map((_) => false);
		}
	}

	private calculateBarsWidth() {
		const diference = this.offsetWidth - this.data.length * 32;
		this.barsWidth = 32;
		if (diference < 200) {
			this.barsWidth = 16;
		}
		if (diference < 100) {
			this.barsWidth = 12;
		}
	}

	private calculateYAxis() {
		const lines = this.config?.lines || LINES;
		const dataArray = this.data.map((line) => line.value);
		let maxValue = Math.max(...dataArray) < 0 ? 0 : Math.max(...dataArray);
		const minValue =
			Math.min(...dataArray) > 0 ? 0 : Math.min(...dataArray);
		const isLess1 = (maxValue - minValue) <= 1;
		if (maxValue === 0 && minValue === 0) {
			maxValue = 1000;
		}
		const distanceLines = this.roundNumber(
			isLess1 ? (maxValue + Math.abs(minValue)) / (lines - 1) :
				Math.round((maxValue + Math.abs(minValue)) / (lines - 1)), isLess1
		);
		const initialIndex =
			minValue >= 0
				? lines - 1
				: Math.round(lines + minValue / distanceLines) - 1;
		const yLines = new Array(lines)
			.fill(0)
			.map((_, i) => (initialIndex - i) * distanceLines);
		if (maxValue > yLines[0]) {
			yLines.unshift(yLines[0] + distanceLines);
		}
		if (minValue < yLines[yLines.length - 1]) {
			yLines.push(yLines[yLines.length - 1] - distanceLines);
		}
		this.yLines = yLines.map((line, i) => ({
			value: line,
			label: this.config?.yLabel?.(line) || line.toString(),
			tooltip: this.data[i]?.tooltip?.(line) || line.toString(),
			y: ((this.config?.height || GRAPH_HEIGHT) / yLines.length) * i,
		}));
		this.parseRefencesValues(distanceLines);
		this.calculateYLabelsWidth();
	}

	private roundNumber(value: number, isLess1: boolean): number {
		const calculatePrecision =
			Math.abs(Math.trunc(value)).toString().length - 3;
		return Number(
			isLess1 ? value.toPrecision(2) : value.toPrecision(calculatePrecision > 4 ? calculatePrecision : 1)
		);
	}

	private parseRefencesValues(distanceLines: number) {
		this.y0Axis = this.yLines.find((line) => line.value === 0)?.y as number;
		this.yLastAxis = this.yLines.slice(-1)[0].y;
		this.coefY =
			Math.abs(this.yLines[1].y - this.yLines[0].y) / distanceLines;
	}

	private calculateYLabelsWidth() {
		const lengthLabels = Math.max(
			...this.yLines.map((line) => line.label.length)
		);
		this.yLabelsWidth =
			lengthLabels * 7 > this.yLabelsWidth
				? lengthLabels * 8
				: this.yLabelsWidth;
	}

	private calculateBars() {
		this.bars = this.data.map((data, i) => {
			const height = Math.abs(data.value) * this.coefY - RADIUS_BAR;
			const y =
				this.y0Axis -
				this.paddingBottom +
				(data.value < 0 ? height + RADIUS_BAR : 0);
			const x =
				((this.widthCheck() - this.yLabelsWidth) /
					this.data.length) *
				(i + 0.5) -
				this.barsWidth / 2;
			return {
				tooltip:
					this.data[i]?.tooltip?.(data.value) ||
					data.value.toString(),
				x,
				y,
				d: this.calculateDValue(height),
			};
		});
		this.barsActive = this.bars.map((_) => true);
		this.barsShow = this.data.map((_) => false);
	}

	private calculateDValue(height: number): string {
		return height > RADIUS_BAR
			? `M0,0
			h${this.barsWidth - RADIUS_BAR}
			a${RADIUS_BAR},${RADIUS_BAR} 1 0 0 ${RADIUS_BAR},-${RADIUS_BAR}
			v-${height}
			h-${this.barsWidth - RADIUS_BAR}
			a${RADIUS_BAR},${RADIUS_BAR} 1 0 0 -${RADIUS_BAR},${RADIUS_BAR}
			v${height}`
			: `M0,0
			h${this.barsWidth}
			v-${height + RADIUS_BAR}
			h-${this.barsWidth}
			v${height + RADIUS_BAR}
			z`;
	}

	private calculateXLabels() {
		this.xLabels = this.data.map((data, i) => ({
			x:
				((this.widthCheck() - this.yLabelsWidth) /
					this.data.length) *
				(i + 0.5),
			label: data.label,
			labelSecondLine: data.labelSecondLine,
			labelMobile: data.labelMobile || data.label,
		}));
	}

	private widthCheck(): number {
		return (
			this.elem.nativeElement.offsetWidth ||
			this.graphSVG?.nativeElement.width.animVal.value ||
			0
		);
	}

	private initData() {
		this.calculateBarsWidth();
		this.calculateYAxis();
		this.calculateBars();
		this.calculateXLabels();
	}
}
