////////PNXT libraries
import { TPmdsCdkTagLabelColor } from '../../pmds-cdk-tag-label/models/pmds-cdk-tag-label-color.model';
import { IPmdsCdkTextField } from '../../pmds-cdk-text-field/models/pmds-cdk-text-field.model';

export interface IPmdsCdkCardsSettingsItem {
	tagLabel?: {
		color: TPmdsCdkTagLabelColor,
		label: string
	};
	field?: IPmdsCdkTextField;
	value?: string;
	checkBoxValue?: boolean;
	switchValue?: boolean;
}
