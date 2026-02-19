export interface IPmdsCdkGraphsLineChartConfig {
    height?: number;
    lines?: number;
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