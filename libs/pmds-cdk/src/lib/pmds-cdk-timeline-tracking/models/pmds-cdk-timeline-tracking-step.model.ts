////////PPMDS libraries
import { TPmdsCdkAlertType } from '../../pmds-cdk-alert/models/pmds-cdk-alert.model';

export interface IPmdsCdkSteps {
	title: string;
	status: IPmdsCdkStepStatus;
	observations?: IPmdsCdkStepObservation[];
	subSteps?: IPmdsCdkSteps[];
	alert?: IPmdsCdkStepAlert;
	colorCode?: colorCode;
}

export enum IPmdsCdkStepStatus {
	Completed = 'completed',
	Current = 'current',
	UpComing = 'up-coming',
	LastComplete = 'last-complete',
	Error = 'error'
}

export type colorCode = 'red' | 'grey' | 'green' | 'blue' | 'yellow';

export interface IPmdsCdkStepObservation {
	date?: Date | string;
	message?: string;
	agent?: string;
}

export interface IPmdsCdkStepAlert {
	alertTitle?: string;
	alertSubtitle?: string;
}

export interface IPmdsCdkStepAttributes {
	alertType?: TPmdsCdkAlertType;
	readMore: boolean;
	readContent: string;
	collapse: boolean;
}
