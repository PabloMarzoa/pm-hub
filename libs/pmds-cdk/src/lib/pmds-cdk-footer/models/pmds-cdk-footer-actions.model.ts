import { TPmdsCdkTagLabelColor } from '../../pmds-cdk-tag-label/models/pmds-cdk-tag-label-color.model';

export interface IPmdsCdkFooterAction {
    icon: string,
    tittle: string,
    message: string,
	actionFn: () => void,
	tagLabel?: string,
	tagColor?: TPmdsCdkTagLabelColor
}
