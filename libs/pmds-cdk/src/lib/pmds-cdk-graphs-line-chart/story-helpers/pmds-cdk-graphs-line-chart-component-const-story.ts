import { IPmdsCdkGraphsLineChartData } from "../models/pmds-cdk-graphs-line-chart-data.model";

export const data = (lines: number, values: number,customTooltip: boolean = false, max: number = 100, min: number = 0) => ({
	value: new Array(values).fill(0).map((_, i) => `Val: ${(i + 1).toString()}`),
	valueMobile: new Array(values).fill(0).map((_, i) => (i + 1).toString()),
	lines: new Array(lines).fill(0).map((_, i) => ({
		label: 'Line' + (i + 1).toString(),
		tooltip: customTooltip ? ((value: number, label: string, xLabel: string) => `${label} <br> ${xLabel} <br> · ${value}`) : undefined,
		value: new Array(values)
			.fill(0)
			.map((_) => Math.floor(Math.random() * (max + min + 1) - min)),
	}))
}) as IPmdsCdkGraphsLineChartData;

