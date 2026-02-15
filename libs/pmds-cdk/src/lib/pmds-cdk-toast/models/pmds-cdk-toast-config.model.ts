export interface IPmdsCdkToastConfig {
    animation?: {
        fadeOut: number;
        fadeIn: number;
    };
    dataQA?: string;
    floating?: boolean;
    panelClass?: string | string[];
    position?: {
        top: number;
    };
    timeInterval?: number;
}