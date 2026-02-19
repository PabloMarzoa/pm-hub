export interface IPmdsCdkGraphsSequentialBarChartConfig {
    height?: number;
    lines?: number;
    source?: string;
    subtitle?: string;
    title?: string;
    onlyChart?: boolean;
    yLabel?: (value: number) => string;
    noData?: {
        title: string,
        content: string,
        buttonText?: string,
        icon?: string,
        disabledButton?: boolean,
        buttonClick?: () => void
    }
}