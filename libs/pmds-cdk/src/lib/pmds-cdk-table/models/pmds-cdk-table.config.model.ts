////////Component imports
import { IPmdsCdkDynamicRowComponentConfig } from './pmds-cdk-table-dynamic-row-component-config.model';
import { IPmdsCdkHeaderConfig } from './pmds-cdk-table-header-config.model';

export interface IPmdsCdkTableConfig {
	headerColumns: IPmdsCdkHeaderConfig[];
	rowComponent: IPmdsCdkDynamicRowComponentConfig;
	fixedColumns?: 'first' | 'first-second';
	emptyStateLiterals?: {
		contentWithFilters: string,
		contentWithoutFilters: string,
		title: string,
		buttonText: string,
		icon?: string;
	}
}
export interface IPmdsCdkTablePaginationInfo {
	actualPage: number;
	itemsPage: number;
	total: number;
}

export interface IPmdsCdkTableEmptyStateData {
	content: string;
	title: string;
	buttonText: string;
	icon: string;
}
