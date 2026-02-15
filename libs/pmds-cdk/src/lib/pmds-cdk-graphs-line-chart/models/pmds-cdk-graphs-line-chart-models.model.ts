export interface IPmdsCdkGraphsLineChartYLines {
	y: number;
	value: number;
	label: string;
}

export interface IPmdsCdkGraphsLineChartLines {
	d: string
	color: string
}

export interface IPmdsCdkGraphsLineChartPoints {
	x: number;
	y: number;
	tooltip: string;
	color: string;
}

export interface IPmdsCdkGraphsLineChartGraphicLegend {
	label: string;
	color: string;
}

export interface IPmdsCdkGraphsLineChartXLabels {
	x: number;
	label: string;
	labelSecondLine?: string;
	labelMobile: string;
}

