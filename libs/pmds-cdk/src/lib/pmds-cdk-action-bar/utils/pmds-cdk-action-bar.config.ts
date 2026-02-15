////////Angular imports
import { InjectionToken } from '@angular/core';
////////Component imports
import { IPmdsCdkActionBarConfig } from '../models/pmds-cdk-action-bar.model';

export const PMDS_CDK_ACTION_BAR_CONFIG_TOKEN =
	new InjectionToken<IPmdsCdkActionBarConfig>(
		'PMDS-CDK-ACTION-BAR-CONFIG-TOKEN'
	);
