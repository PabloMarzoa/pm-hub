export const componentInfo = `

Import on your component: **@pmhub/pmds-cdk**

~~~~
import { PmdsCdkTableCompleteComponent } from '../pmds-cdk-table-complete.component';
import { IPmdsCdkTableCompleteConfig } from '../models/pmds-cdk-table-complete-config.model';
~~~~

Add to import array the **PmdsCdkTableCompleteComponent** in your component

~~~~
imports: [
	PmdsCdkTableCompleteComponent
]
~~~~

Selector: **pmds-cdk-table-complete**

~~~~
<pmds-cdk-table-complete>
</pmds-cdk-table-complete>
~~~~

Use the input **initialPaginationInfo** to init the table on a custom page. It's used just on init'


Create your rest service, that extends **PmdsCdkTableCompleteDataService** to pass it by the config JSON

~~~~
import { IPmdsCdkTableCompleteResponseModel } from '../models/pmds-cdk-table-complete-response.model';
import { PmdsCdkTableCompleteDataService } from '../services/pmds-cdk-table-complete-data.service';

@Injectable({providedIn: 'root'})
export class TestApiService extends PmdsCdkTableCompleteDataService {

	override setFilter<T>(filter: T) {
		this.filter = filter;
	}

    override getData(sortFields: {field: string, order: 'DES' | 'ASC'}[] = []): void {
        this.loading.next(true);
        const body = {this.offset, this.limit, sortFields, filters}; // HERE YOUR BODY, READING OFFSET, LIMIT AND FILTERS FROM EXTENDED PROPERTIES
        this.httpClient.post(\`\`, body)
            .pipe(
                take(1)
            )
            .subscribe((res: any) => {
				this.dataCollectionHasChanged.next(total: res.total, registers: res.registers); // EMIT THE RESULT TO THE TABLE
				this.loading.next(false) // END LOADING
            });
    }
}
~~~~

This table will call the "getData" method in the following cases:

<ul>
	<li>Paginator events: change page or page size</li>
	<li>Sort events</li>
	<li>Change view: card => table || table => card</li>
	<li>On card view, on scroll end</li>
	<li>On initial component load (ngOnInit)</li>
</ul>

**Important exposed data** to know about the service

<ul>
	<li>getData: the method to override, called by the table to load info</li>
	<li>setOffset: the method to set offset manually, if needed</li>
	<li>setLimit: the method to set limit manually, if needed</li>
	<li>setFilter: the method to set the filter that you must use</li>
	<li>dataCollectionHasChanged: subject listened by the table used to send the data to the component. You have to send data here, on the getData implementation</li>
	<li>errorLoadingData: subject to set the loading state of the table</li>
	<li>filterHasChanged: subject listened by the table component on filter changes</li>
	<li>offset: the actual offset. Use it on the getData method if necessary</li>
	<li>limit: the actual limit. Use it on the getData method if necessary</li>
	<li>filter: the actual filter. Use it on the getData method if necessary</li>
</ul>

~~~~

You can add the variable "disabledAction" to the registers to disable the action on one item

~~~~
`;
