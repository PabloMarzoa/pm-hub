export interface IPmdsCdkGraphsSequentialBarChartData {
	value: number;
	label: string;
	labelSecondLine?: string;
	labelMobile?: string;
    tooltip?: (value: number) => string;
};
