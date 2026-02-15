export type PmdsCdkButtonType = 'primary' | 'secondary' | 'tertiary';

export type PmdsCdkButtonSize = 'small' | 'medium';

export const PMDS_CDK_BUTTON_PRIMARY = {
    HOVER: 'hover:bg-color-action-main-hover',
    ACTIVE: 'active:bg-color-action-main-selected',
    DISABLED: 'disabled:text-color-action-on-disabled disabled:bg-color-surface-disabled disabled:border disabled:border-color-action-on-disabled'
};

export const PMDS_CDK_BUTTON_SECONDARY = {
    HOVER: 'hover:text-color-action-main-hover',
    ACTIVE: 'active:text-color-action-main-selected',
    DISABLED: 'disabled:text-color-action-on-disabled disabled:bg-white disabled:border-color-action-on-disabled'
};

export const PMDS_CDK_BUTTON_TERTIARY = {
    HOVER: 'hover:text-color-action-main-hover',
    ACTIVE: 'active:text-color-action-main-selected',
    DISABLED: 'disabled:text-color-action-on-disabled disabled:bg-transparent'
};