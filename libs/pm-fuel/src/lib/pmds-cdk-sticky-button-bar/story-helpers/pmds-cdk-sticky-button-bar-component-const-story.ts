////////Component imports
import { IPmdsCdkStickyButtonBarButton } from "../models/pmds-cdk-sticky-button-bar.models";

export const buttons: IPmdsCdkStickyButtonBarButton[] = [
	{
		type: 'primary',
		label: 'Primary button',
		action: () => alert('Primary button'),
		icon: 'pmicons-clip',
		iconPosition: 'right',
	},
	{
		type: 'secondary',
		label: 'Secondary button',
		action: () => alert('Secondary button'),
		icon: 'pmicons-clients',
		iconPosition: 'right',
	},
	{
		type: 'tertiary',
		label: 'Tertiary button',
		action: () => alert('Tertiary button'),
		icon: 'pmicons-civil-liability',
		iconPosition: 'right',
	},
];