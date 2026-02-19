////////Angular imports
import { InjectionToken } from '@angular/core';
////////Component imports
import { IPmdsCdkModalConfig } from '../models/pmds-cdk-modal.model';

export const PMDS_CDK_MODAL_DEFAULT_CONFIG: IPmdsCdkModalConfig = {
    hasBackdropClick: false,
    isFullScreenMobile: true,
    isSidebar: false,
    hideBackButton: true,
    modalSize: 'small'
};

export const PMDS_CDK_MODAL_CONFIG_TOKEN = new InjectionToken<IPmdsCdkModalConfig>('PMDS-CDK-MODAL-CONFIG-TOKEN');