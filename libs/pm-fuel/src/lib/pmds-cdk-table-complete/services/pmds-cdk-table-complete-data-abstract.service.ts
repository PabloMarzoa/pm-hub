////////Angular imports
import {HttpClient} from "@angular/common/http";
////////Third party libraries
import {Subject} from "rxjs";
////////Component imports
import {IPmdsCdkTableCompleteResponseModel} from "../models/pmds-cdk-table-complete-response.model";

export abstract class PmdsCdkTableCompleteDataAbstractService {

    abstract dataCollectionHasChanged: Subject<IPmdsCdkTableCompleteResponseModel<any>>;
    abstract loading: Subject<boolean>;
    abstract errorLoadingData: Subject<boolean>;
    abstract filterHasChanged: Subject<void>;
    abstract httpClient: HttpClient;
	abstract limit: number;
	abstract offset: number;
	abstract filter: any;

    abstract setLimit(limit: number): void;
	abstract setOffset(offset: number): void;
	abstract setFilter<T>(filter: T): void;
	abstract getData(sortFields?: {field: string, order: 'DES' | 'ASC'}[]): void;
}
