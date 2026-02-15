////////Angular imports
import { InjectionToken } from '@angular/core';

export interface IPmdsCdkModalData<T> {
	body?: string;
	data?: T;
	title?: string;
}

export interface IPmdsCdkModalConfig {
	buttons?: IPmdsCdkModalButtons;
	dataQA?: string;
	disabledConfirmButton?: boolean;
	hasBackdropClick?: boolean;
	hiddenFooter?: boolean;
	hideBackButton?: boolean;
	isFullScreenMobile?: boolean;
	isSidebar?: boolean;
	modalSize?: TPmdsCdkModalSize;
	sidebarButtons?: IPmdsCdkModalSidebarButtons[];
}

export interface IPmdsCdkModalButtons {
	closeLabel?: string;
	confirmLabel?: string;
	backLabel?: string;
}

export interface IPmdsCdkModalSidebarButtons {
	label: string;
	icon: string;
	actionFn: () => void;
}

export type TPmdsCdkModalAction = 'confirm' | 'close' | 'cancel' | 'back';

export type TPmdsCdkModalSize = 'small' | 'medium' | 'large';

export const PMDS_CDK_MODAL_DATA_TOKEN = new InjectionToken<
	IPmdsCdkModalData<unknown>
>('PMDS-CDK-MODAL-DATA-TOKEN');
