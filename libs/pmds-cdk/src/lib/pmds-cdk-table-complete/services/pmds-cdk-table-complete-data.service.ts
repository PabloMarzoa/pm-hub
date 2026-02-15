////////Angular imports
import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
////////Third party libraries
import {BehaviorSubject, Subject} from "rxjs";
////////Component imports
import {PmdsCdkTableCompleteDataAbstractService} from "./pmds-cdk-table-complete-data-abstract.service";
import {IPmdsCdkTableCompleteResponseModel} from "../models/pmds-cdk-table-complete-response.model";

@Injectable({providedIn: 'root'})
export class PmdsCdkTableCompleteDataService implements PmdsCdkTableCompleteDataAbstractService {

    dataCollectionHasChanged: Subject<IPmdsCdkTableCompleteResponseModel<any>> = new Subject<IPmdsCdkTableCompleteResponseModel<any>>();
    loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    errorLoadingData: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	filterHasChanged: Subject<void> = new Subject<void>();
	httpClient = inject(HttpClient);
	offset = 0;
	limit = 10;
	filter: any;

	setFilter<T>(filter: T) {
		if (this.filter !== filter) {
			this.filter = filter;
			this.setOffset(0);
			this.filterHasChanged.next();
		}
	}

	setLimit(limit: number) {
		this.limit = limit;
	}

	setOffset(offset: number) {
		this.offset = offset;
	}

	getData(sortFields?: {field: string, order: 'DES' | 'ASC'}[]) {}
}

