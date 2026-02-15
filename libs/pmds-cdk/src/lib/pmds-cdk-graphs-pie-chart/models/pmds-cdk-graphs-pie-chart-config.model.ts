export interface IPmdsCdkGraphsPieChartConfig {
    height?: number;
    subtitle?: string;
    title?: string;
    onlyChart?: boolean;
    noData?: {
        title: string,
        content: string,
        buttonText?: string,
        icon?: string,
        disabledButton?: boolean,
        buttonClick?: () => void
    }
}