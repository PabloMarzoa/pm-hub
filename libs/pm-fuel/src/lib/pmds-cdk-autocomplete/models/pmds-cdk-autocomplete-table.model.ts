////////Angular imports
import { Type } from "@angular/core";

export interface IPmdsCdkAutocompleteTableConfig {
    rowComponent?: IPmdsCdkAutocompleteDynamicRowComponentConfig;
    error?: {
        title: string;
        body?: string;
    }
    button?: {
        label: string;
        show: boolean;
        action: () => void;
    },
    customHeight?: string;
	loadingLiterals?: string,
    noResultsLiterals?: {
        title: string,
        msg: string
    };

}

export interface IPmdsCdkAutocompleteDynamicRowComponentConfig {
    component: Type<unknown>;
    cardComponent?: Type<unknown>;
    styles?: string;
    selectRowAction?: (row: unknown) => void;
}

export interface IPmdsCdkAutocompleteRowConfigParam<T> {
    data: T;
    rowIndex: number;
    stylesConfig?: string;
}
