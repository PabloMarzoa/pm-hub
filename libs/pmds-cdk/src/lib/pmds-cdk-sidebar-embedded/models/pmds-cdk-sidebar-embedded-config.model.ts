////////PNXT libraries
import { IPmdsCdkStickyButtonBarButton } from '../../pmds-cdk-sticky-button-bar/models/pmds-cdk-sticky-button-bar.models';

export interface IPmdsCdkSidebarEmbeddedConfig {
	sidebarTitle: string,
	backButton: {
		action: () => void;
		label: string;
	};
	footerButtons: IPmdsCdkStickyButtonBarButton[];
	loaderLiterals: {
		title: string,
		subtitle: string
	}
	headerButton: {
		actionButton1: () => void;
		actionButton2: () => void;
		iconButton1: string;
		iconButton2: string;
		labelButton1: string;
		labelButton2: string;
	};
}
