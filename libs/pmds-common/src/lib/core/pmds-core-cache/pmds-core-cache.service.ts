////////Angular imports
import { Injectable } from '@angular/core';
////////Third party libraries
import { take } from "rxjs/operators";
import { timer } from "rxjs";
////////Component imports
import { PmdsCoreICachedElement } from "./models/cache.model";

@Injectable({
  providedIn: 'root',
})
export class PmdsCoreCacheService {
  private cachedCollection: PmdsCoreICachedElement[] = [];
  private maxCachedElements = 10;

  addCachedElement(id: string, value: any, expiration: number | null = null) {
    const index = this.cachedCollection.findIndex(el => el.id === id);
    if (index !== -1) {
      this.cachedCollection[index].value = value;
    } else {
      this.addElementToCollection(id, value);
    }
    if (expiration !== null) {
      timer(expiration).pipe(take(1)).subscribe(() => {
        this.removeExpiredItem(id);
      });
    }
  }

  getCachedElement(id: string): any {
    return this.cachedCollection.find(el => el.id === id)?.value;
  }

  private addElementToCollection(id: string, value: any) {
    if (this.cachedCollection.length >= this.maxCachedElements) {
      this.cachedCollection.pop();
    }
    this.cachedCollection.push({id, value});
  }

  private removeExpiredItem(id: string) {
    const index = this.cachedCollection.findIndex(el => el.id === id);
    if (index !== -1) {
      this.cachedCollection.splice(index, 1);
    }
  }
}
