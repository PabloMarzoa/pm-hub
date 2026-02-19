export interface IPmdsCdkGraphsLineChartData {
	value: string[],
	valueSecondLine?: string[],
	valueMobile?: string[],
	lines: {
		value: number[];
		label: string;
		tooltip?: (value: number, label: string, xValue: string) => string;
	}[]
};