////////Angular imports
import { Type } from '@angular/core';
////////PPMDS libraries
import { IPmdsCdkTableHeaderInfo } from '../../pmds-cdk-table/models/pmds-cdk-table-header-info.model';
import { IPmdsCdkPaginatorLiterals } from '../../pmds-cdk-paginator/models/pmds-cdk-pagination-info-literals.model';
////////Component imports
import { PmdsCdkTableCompleteDataAbstractService } from '../services/pmds-cdk-table-complete-data-abstract.service';

export interface IPmdsCdkTableCompleteConfig {
	showSelectRow?: boolean;
	tableConfig: IPmdsCdkBasicTableConfig;
	resService: PmdsCdkTableCompleteDataAbstractService;
	paginatorLiterals?: IPmdsCdkPaginatorLiterals;
	tableInfoHeader?: IPmdsCdkTableHeaderInfo;
}

export interface IPmdsCdkBasicTableConfig {
	headerColumns: IPmdsCdkHeaderCompleteConfig[];
	rowComponent: IPmdsCdkDynamicRowDefaultComponentConfig;
	fixedColumns?: 'first' | 'first-second';
	emptyStateLiterals?: {
		contentWithFilters: string;
		contentWithoutFilters: string;
		title: string;
		buttonText: string;
	};
}

export interface IPmdsCdkHeaderCompleteConfig {
	label: string;
	sortableField?: string;
	order?: 'ASC' | 'DES' | undefined;
	styles?: string;
	tooltip?: string;
	tooltipTitle?: string;
	tooltipPosition?:
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right';
}

export interface IPmdsCdkDynamicRowDefaultComponentConfig {
	component?: Type<any>;
	cardComponent?: Type<any>;
	selectRowAction?: (row: Type<any>) => void;
	selectCardAction?: (card: Type<any>) => void;
	selectedRows?: (rows: Type<any>) => void;
}
