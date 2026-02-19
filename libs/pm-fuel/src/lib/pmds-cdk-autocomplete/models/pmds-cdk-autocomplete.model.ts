////////Angular imports
import { Type } from "@angular/core";
////////Third party libraries
import { Observable } from "rxjs";
////////Component imports
import { IPmdsCdkAutocompleteTableConfig } from "./pmds-cdk-autocomplete-table.model";

export interface IPmdsCdkAutocompleteConfig {
    customWidth?: string;
    input?: IPmdsCdkAutompleteInputConfig;
    table: IPmdsCdkAutocompleteTableConfig;
}

export interface IPmdsCdkAutompleteInputConfig {
    customWidth?: string;
    icon?: string;
    labelComponent?: IPmdsCdkAutocompleteDynamicLabelComponentConfig;
    placeholder?: string;
    type?: string;
};

export interface IPmdsCdkAutocompleteStates {
    isError?: boolean;
    isLoading?: boolean;
}

export interface IPmdsCdkAutocompleteSuggestions {
    search: string;
    total?: number;
}

export interface IPmdsCdkAutocompleteDynamicLabelComponentConfig {
    component: Type<unknown>;
}

export interface IPmdsCdkAutocompleteLabelConfigParam<T> {
  data: Observable<T>;
}

export const PMDS_CDK_AUTOCOMPLETE_DEFAULT_THROTTLE_TIME = 500;
export const PMDS_CDK_AUTOCOMPLETE_DEFAULT_DEBOUNCE_TIME = 250;