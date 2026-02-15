////////Angular imports
import { Component, ElementRef, HostListener, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
////////PNXT libraries
import { PmdsDirectiveTooltip } from '@pmhub/pmds-common';

import { PmdsCdkLoaderComponent } from '../pmds-cdk-loader/pmds-cdk-loader.component';
////////Component imports
import { IPmdsCdkGraphsPieChartConfig } from './models/pmds-cdk-graphs-pie-chart-config.model';
import { IPmdsCdkGraphsPieChartData } from './models/pmds-cdk-graphs-pie-chart-data.model';
import { IPmdsCdkGraphsPieChartGraphicLegend } from './models/pmds-cdk-graphs-pie-chart-models.model';
import {
	BG_COLORS_HIGH,
	BG_COLORS_LOW,
	BG_COLORS_MID,
	FILL_COLORS_HIGH,
	FILL_COLORS_LOW,
	FILL_COLORS_MID,
	GRAPH_HEIGHT
} from './models/pmds-cdk-graphs-pie-chart-const.model';


@Component({
	selector: 'pmds-cdk-graphs-pie-chart',
	standalone: true,
	imports: [
		CommonModule,
		PmdsDirectiveTooltip,

		PmdsCdkLoaderComponent,
	],
	templateUrl: './pmds-cdk-graphs-pie-chart.component.html',
})
export class PmdsCdkGraphsPieChartComponent implements OnInit, OnChanges {
	@Input() dataQA!: string;
	@Input() config!: IPmdsCdkGraphsPieChartConfig;
	@Input() data!: IPmdsCdkGraphsPieChartData[];
	@Input() isLoading!: boolean;

	componentSelector = 'pmds-cdk-graphs-pie-chart-';
	graphicLegend!: IPmdsCdkGraphsPieChartGraphicLegend[];
	pieActive!: boolean[];
	pieShow!: boolean[];
	pies!: any;
	radio!: number;

	private elementRef = inject(ElementRef);

	@HostListener('document:mousedown', ['$event.target'])
	onGlobalClick(event: Element) {
		const outside =
			!this.elementRef.nativeElement.firstElementChild?.contains(event);
		if (outside && this.data) {
			this.pieActive = this.pieActive.map((_) => true);
			this.pieShow = this.pieShow.map((_) => false);
		}
	}

	ngOnInit(): void {
		this.data && this.initData();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['data']) {
			this.data && this.initData();
		}
	}

	selectPie(isHover: boolean, index?: number) {
		if (!this.pieActive.find((pie) => !pie) || !isHover) {
			this.pieActive = this.pieActive.map((_, i) =>
				isHover ? index === i : true
			);
		}
		if (isHover) {
			this.pieShow = this.pieActive.map((_, i) =>
				isHover ? index === i : false
			);
		} else {
			this.pieShow = this.pieShow.map((_) => false);
		}
	}

	private generatePieChart() {
		const data = this.data.map((data) => data.value);
		const total = data.reduce((acc, valor) => acc + valor, 0);
		this.radio = this.config?.height
			? this.config?.height / 2
			: GRAPH_HEIGHT / 2;
		let angleInitial = 270;
		let angleEnd = 270;

		this.pies = data.map((data, i) => {
			const porcentaje = data / total;
			angleEnd = angleInitial + porcentaje * 360;
			const x1 =
				this.radio +
				this.radio * Math.cos((angleInitial * Math.PI) / 180);
			const y1 =
				this.radio +
				this.radio * Math.sin((angleInitial * Math.PI) / 180);
			const x2 =
				this.radio + this.radio * Math.cos((angleEnd * Math.PI) / 180);
			const y2 =
				this.radio + this.radio * Math.sin((angleEnd * Math.PI) / 180);
			angleInitial = angleEnd;
			return {
				d: `M${this.radio},${this.radio} L${x1},${y1} A${this.radio},${
					this.radio
				} 0 ${porcentaje > 0.5 ? 1 : 0},1 ${x2},${y2} Z`,
				class: `${this.getFillColor(i)} ${
					this.config?.onlyChart
						? 'stroke-color-surface-secondary'
						: 'stroke-color-surface-primary'
				}`,
				tooltip: this.data[i].tooltip
					? this.data[i].tooltip?.(
						porcentaje * 100,
						data,
						this.data[i].label
					)
					: (porcentaje * 100).toFixed(2) + '%',
			};
		});
	}

	private calculateGraphicLegend() {
		this.graphicLegend = this.data.map((line, i) => ({
			label: line.label,
			color: this.getBgColor(i),
		}));
	}

	private getBgColor(index: number): string {
		if (this.data.length < 9) {
			return BG_COLORS_LOW[index];
		} else if (this.data.length < 16) {
			return BG_COLORS_MID[index];
		} else {
			return BG_COLORS_HIGH[index] || BG_COLORS_LOW[0];
		}
	}

	private getFillColor(index: number): string {
		if (this.data.length < 9) {
			return FILL_COLORS_LOW[index];
		} else if (this.data.length < 16) {
			return FILL_COLORS_MID[index];
		} else {
			return FILL_COLORS_HIGH[index] || FILL_COLORS_LOW[0];
		}
	}

	private initData() {
		this.pieActive = this.data?.map((_) => true);
		this.pieShow = this.data?.map((_) => false);
		this.generatePieChart();
		this.calculateGraphicLegend();
	}
}
