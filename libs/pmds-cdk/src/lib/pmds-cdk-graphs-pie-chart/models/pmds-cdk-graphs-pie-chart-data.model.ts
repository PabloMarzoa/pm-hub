export interface IPmdsCdkGraphsPieChartData {
	label: string;
	tooltip?: (percent: number, value: number, label: string) => string;
	value: number,
};