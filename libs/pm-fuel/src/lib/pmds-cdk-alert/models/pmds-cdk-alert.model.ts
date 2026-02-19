////////Angular imports
import { InjectionToken } from "@angular/core";
////////Component imports
import { IPmdsCdkAlertLiterals } from './pmds-cdk-alert-literals.model';

export interface IPmdsCdkAlertData {
    actionFn?: () => void;
    actionIcon?: string;
    cancelAutoClose?: boolean;
    closeFn?: () => void;
    content?: string;
    hideClose?: boolean;
    literals?: IPmdsCdkAlertLiterals;
    title?: string;
    type?: TPmdsCdkAlertType;
}

export type TPmdsCdkAlertType = 'warning' | 'info' | 'success' | 'error';

export const PMDS_CDK_ALERT_DATA_TOKEN = new InjectionToken<IPmdsCdkAlertData>('PMDS-CDK-ALERT-DATA-TOKEN');