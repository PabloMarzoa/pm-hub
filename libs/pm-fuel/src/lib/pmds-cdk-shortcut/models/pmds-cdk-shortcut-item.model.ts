export interface IPmdsCdkShortcutItem {
    label: string;
    icon: string;
    isDisabled?: boolean,
    actionFn: () => void;
}