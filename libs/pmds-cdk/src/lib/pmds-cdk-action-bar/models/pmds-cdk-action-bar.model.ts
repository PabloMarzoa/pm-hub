export interface IPmdsCdkActionBarConfig {
    actionBarButtons?: IPmdsCdkActionBarButton[];
    clearBarButton?: {
        label: string;
    };
	secondaryBarButton?: IPmdsCdkActionBarButton;
    dataQA?: string;
}

export interface IPmdsCdkActionBarButton {
    action: (button?: unknown) => void;
    label?: string;
}
