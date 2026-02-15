////////Angular imports
import {Injectable} from "@angular/core";
////////Third party libraries
import {timer} from "rxjs";
import {take} from "rxjs/operators";
////////Component imports
import {IPmdsCdkTableCompleteResponseModel} from "../models/pmds-cdk-table-complete-response.model";
import {PmdsCdkTableCompleteDataService} from "../services/pmds-cdk-table-complete-data.service";

@Injectable({providedIn: 'root'})
export class PokemonApiXXLService extends PmdsCdkTableCompleteDataService {

	override getData(sortFields: {field: string, order: 'DES' | 'ASC'}[] = []): void {
		this.loading.next(true);
        this.httpClient.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`)
            .pipe(
                take(1)
            )
            .subscribe((res: PokemonResponse | any) => {
                const result: IPmdsCdkTableCompleteResponseModel<{name: string, url: string}> = {
                    total: res.count,
                    registers: res.results.map((el: PokemonItem) => {
                        return {name: {label: el.name, sublabel: el.name === 'bulbasaur'}, hasUrl: !!el.url, url: el.url, url2: el.url, url3: el.url, disabledAction: el.name === 'bulbasaur'}
                    })
                };
				timer(1000).subscribe(() => {
					this.dataCollectionHasChanged.next(result);
					this.loading.next(false)
				})
            });
    }
}

export interface PokemonResponse {
    count: number,
    previous: string,
    next: string,
    results: PokemonItem[]
}

export interface PokemonItem {
    url: string,
    name: string,
	disabledAction?: boolean
}
