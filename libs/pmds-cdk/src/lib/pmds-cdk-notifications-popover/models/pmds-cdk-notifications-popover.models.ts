export interface IPmdsCdkNotificationsPopoverNotification {
    id: string;
    date: string;
    action?: () => void;
    title: string;
    seen: boolean;
    info: string;
}

export interface IPmdsCdkNotificationsPopoverLiterals {
    notifications: string
}

export interface IPmdsCdkNotificationsPopoverButton {
    label: string;
    action: () => void;
    icon?: string
}
