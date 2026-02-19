////////PNXT libraries
import { PmdsCdkButtonType } from '../../pmds-cdk-button/models/pmds-cdk-button.models';

export interface IPmdsCdkButtonModalButton {
    type: PmdsCdkButtonType,
    label: string,
    action?: () => void,
    icon?: string,
    iconPosition?: 'left' | 'right'
    disabled?: boolean,
    dropdownButtons?: IPmdsCdkButtonModalButton[]
}
