////////Angular imports
import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	inject,
	Input,
	OnInit,
	SimpleChanges,
	ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
////////PNXT libraries
import { PmdsDirectiveTooltip } from '@pmhub/pmds-common';
import { PmdsCdkLoaderComponent } from '../pmds-cdk-loader/pmds-cdk-loader.component';

////////Component imports
import {
	BG_COLORS_HIGH,
	BG_COLORS_LOW,
	BG_COLORS_MID,
	GRAPH_HEIGHT,
	LINES,
	STROKE_COLORS_HIGH,
	STROKE_COLORS_LOW,
	STROKE_COLORS_MID
} from './models/pmds-cdk-graphs-line-chart-const.model';
import { IPmdsCdkGraphsLineChartConfig } from './models/pmds-cdk-graphs-line-chart-config.model';
import { IPmdsCdkGraphsLineChartData } from './models/pmds-cdk-graphs-line-chart-data.model';
import {
	IPmdsCdkGraphsLineChartGraphicLegend,
	IPmdsCdkGraphsLineChartLines,
	IPmdsCdkGraphsLineChartPoints,
	IPmdsCdkGraphsLineChartXLabels,
	IPmdsCdkGraphsLineChartYLines
} from './models/pmds-cdk-graphs-line-chart-models.model';
import { timer } from 'rxjs';

@Component({
	selector: 'pmds-cdk-graphs-line-chart',
	standalone: true,
	imports: [
		CommonModule,
		PmdsDirectiveTooltip,
		PmdsCdkLoaderComponent,

	],
	templateUrl: './pmds-cdk-graphs-line-chart.component.html',
})
export class PmdsCdkGraphsLineChartComponent
	implements AfterViewInit, OnInit, AfterViewInit
{
	@ViewChild('graphSVG', { static: false }) graphSVG!: ElementRef;

	@Input() dataQA!: string;
	@Input() data!: IPmdsCdkGraphsLineChartData;
	@Input() config!: IPmdsCdkGraphsLineChartConfig;
	@Input() isLoading!: boolean;

	lines!: IPmdsCdkGraphsLineChartLines[];
	points!: IPmdsCdkGraphsLineChartPoints[][];
	graphicLegend!: IPmdsCdkGraphsLineChartGraphicLegend[];
	testLine!: string;
	lineActive!: boolean[];
	lineShow!: boolean[][];
	coefY!: number;
	graphHeight!: number;
	offsetWidth!: number;
	paddingBottom = 3.5;
	viewBox!: string;
	xLabels!: IPmdsCdkGraphsLineChartXLabels[];
	y0Axis: number = 0;
	yLabelsWidth = 40;
	yLastAxis: number = 0;
	yLines!: IPmdsCdkGraphsLineChartYLines[];

	private elementRef = inject(ElementRef);

	@HostListener('window:resize', ['$event']) onResize() {
		if (this.offsetWidth !== this.widthCheck()) {
			this.offsetWidth =
				this.elem.nativeElement.offsetWidth ??
				this.graphSVG.nativeElement.width.animVal.value;
			this.viewBox = `0 0 ${this.offsetWidth} ${
				(this.config?.height || GRAPH_HEIGHT) + 15
			}`;
			if (this.data) {
				this.calculateXLabels();
				this.calculateLines();
			}
		}
	}

	@HostListener('document:mousedown', ['$event.target'])
	onGlobalClick(event: Element) {
		const outside =
			!this.elementRef.nativeElement.firstElementChild?.contains(event);
		if (outside && this.data) {
			this.lineActive = this.lineActive.map((_) => true);
			this.lineShow = this.data.lines.map((line) =>
				line.value.map((_) => false)
			);
		}
	}

	private elem = inject(ElementRef);

	componentSelector = 'pmds-cdk-graphs-sequential-bar-chart-';

	ngOnInit(): void {
		if (this.data) {
			this.lineActive = this.data.value.map((_) => true);
			this.lineShow = this.data.lines.map((line) =>
				line.value.map((_) => false)
			);
		}
	}

	ngAfterViewInit(): void {
		timer(0).subscribe((_) => {
			this.graphHeight = this.config?.height || GRAPH_HEIGHT;
			this.offsetWidth = this.widthCheck();
			this.viewBox = `0 0 ${this.offsetWidth} ${
				(this.config?.height || GRAPH_HEIGHT) + 15
			}`;
			this.data && this.initData();
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['data']) {
			this.data && this.initData();
		}
	}

	selectLine(isHover: boolean, lineIndex?: number, pointIndex?: number) {
		if (!this.lineActive.find((line) => !line) || !isHover) {
			this.lineActive = this.lineActive.map((_, i) =>
				isHover ? lineIndex === i : true
			);
		}
		if (isHover && typeof pointIndex === 'number') {
			this.lineShow = this.data.lines.map((line, indexLine: number) =>
				line.value.map(
					(_, i) => indexLine === lineIndex && i === pointIndex
				)
			);
		} else {
			this.lineShow = this.data.lines.map((line) =>
				line.value.map((_) => false)
			);
		}
	}

	private calculateYAxis() {
		const lines = this.config?.lines || LINES;
		const dataArrayMax = this.data.lines.map((line) =>
			Math.max(...line.value)
		);
		const dataArrayMin = this.data.lines.map((line) =>
			Math.min(...line.value)
		);
		let maxValue =
			Math.max(...dataArrayMax) < 0 ? 0 : Math.max(...dataArrayMax);
		const minValue =
			Math.min(...dataArrayMin) > 0 ? 0 : Math.min(...dataArrayMin);
		if (maxValue === 0 && minValue === 0) {
			maxValue = 1000;
		}
		const isLess1 = maxValue - minValue <= 1;
		const distanceLines = this.roundNumber(
			isLess1
				? (maxValue + Math.abs(minValue)) / (lines - 1)
				: Math.round((maxValue + Math.abs(minValue)) / (lines - 1)),
			isLess1
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
			y: ((this.config?.height || GRAPH_HEIGHT) / yLines.length) * i,
		}));
		this.parseRefencesValues(distanceLines);
		this.calculateYLabelsWidth();
	}

	private roundNumber(value: number, isLess1: boolean): number {
		const calculatePrecision =
			Math.abs(Math.trunc(value)).toString().length - 3;
		return Number(
			isLess1
				? value.toPrecision(2)
				: value.toPrecision(
					calculatePrecision > 4 ? calculatePrecision : 1
				)
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

	private calculateLines() {
		this.points = this.data.lines.map((data, index) => {
			return data.value.map((point, i) => {
				const height = point * this.coefY;
				const y = this.y0Axis - this.paddingBottom - height;
				const x =
					((this.widthCheck() - this.yLabelsWidth) /
						data.value.length) *
					(i + 0.5);
				return {
					tooltip:
						this.data.lines[index].tooltip?.(
							point,
							data.label,
							this.xLabels[i].label
						) || point.toString(),
					x,
					y,
					color: this.getStrokeColor(index),
				};
			});
		});
		this.lines = this.points.map((point, i) => {
			return {
				d: point
					.map((p, i) =>
						i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`
					)
					.join(''),
				color: this.getStrokeColor(i),
			};
		});
	}

	private calculateXLabels() {
		this.xLabels = this.data.value.map((label, i) => ({
			x:
				((this.widthCheck() - this.yLabelsWidth) /
					this.data.value.length) *
				(i + 0.5),
			label: label,
			labelSecondLine: this.data.valueSecondLine?.[i],
			labelMobile: this.data.valueMobile?.[i] || label,
		}));
	}

	private calculateGraphicLegend() {
		this.graphicLegend = this.data.lines.map((line, i) => ({
			label: line.label,
			color: this.getBgColor(i),
		}));
	}

	private getBgColor(index: number): string {
		if (this.data.lines.length < 9) {
			return BG_COLORS_LOW[index];
		} else if (this.data.lines.length < 16) {
			return BG_COLORS_MID[index];
		} else {
			return BG_COLORS_HIGH[index] || BG_COLORS_LOW[0];
		}
	}

	private getStrokeColor(index: number): string {
		if (this.data.lines.length < 9) {
			return STROKE_COLORS_LOW[index];
		} else if (this.data.lines.length < 16) {
			return STROKE_COLORS_MID[index];
		} else {
			return STROKE_COLORS_HIGH[index] || STROKE_COLORS_LOW[0];
		}
	}

	private widthCheck(): number {
		return (
			this.elem.nativeElement.offsetWidth ||
			this.graphSVG?.nativeElement.width.animVal.value ||
			0
		);
	}

	private initData() {
		this.lineActive = this.data.value.map((_) => true);
		this.lineShow = this.data.lines.map((line) =>
			line.value.map((_) => false)
		);
		this.calculateGraphicLegend();
		this.calculateYAxis();
		this.calculateXLabels();
		this.calculateLines();
	}
}
