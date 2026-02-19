////////Angular imports
import { InjectionToken } from '@angular/core';
////////Component imports
import { IPmdsCdkToastConfig } from '../models/pmds-cdk-toast-config.model';

export const PMDS_CDK_TOAST_DEFAULT_CONFIG: IPmdsCdkToastConfig = {
    animation: {
        fadeOut: 1000,
        fadeIn: 300
    },
    floating: false,
    panelClass: [
        'flex',
        'justify-center',
        'w-full',
        'pointer-events-auto'
    ],
    position: {
        top: 88
    },
    timeInterval: 5000
}

export const PMDS_CDK_TOAST_CONFIG_TOKEN = new InjectionToken<IPmdsCdkToastConfig>('PMDS-CDK-TOAST-CONFIG-TOKEN');