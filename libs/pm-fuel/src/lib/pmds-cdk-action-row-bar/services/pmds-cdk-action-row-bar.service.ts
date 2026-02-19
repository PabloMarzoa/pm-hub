////////Angular imports
import { Injectable } from '@angular/core';
////////Third party libraries
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PmdsCdkActionRowBarService {
  closeAll = new Subject<void>();

  closeAllWatch(): Observable<void> {
    return this.closeAll.asObservable();
  }

  closeAllSet() {
    this.closeAll.next();
  }
}