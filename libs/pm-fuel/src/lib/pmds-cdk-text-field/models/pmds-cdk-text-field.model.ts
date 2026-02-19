////////PNXT libraries
import { TPmdsCdkTagLabelColor } from '../../pmds-cdk-tag-label/models/pmds-cdk-tag-label-color.model';

export interface IPmdsCdkTextField {
	label: string;
	value: string | string[];
	tagColor?: TPmdsCdkTagLabelColor;
	assetsFolder?: string;
	flagCode?: string;
	tooltip?: string;
	copyValue?: string;
	actionFn?: () => void;
}
