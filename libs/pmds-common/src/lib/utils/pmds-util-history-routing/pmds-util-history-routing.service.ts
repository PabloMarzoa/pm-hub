////////Angular imports
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
////////Third party libraries
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PmdsUtilHistoryRouting {
  history: string[] = [];
  private isNavigatePrevious = false;
  constructor(private router: Router) {
    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((res) => {
        if (!this.isNavigatePrevious) {
          this.history = [...this.history, res.url.replace('/', '')];
        } else {
          this.isNavigatePrevious = false;
        }
      });
  }

  initHistory() {
    return new Promise((resolve) => resolve(true));
  }

  navigatePrevious() {
    if (this.history.length) {
      const url = `${this.history[this.history.length - 2]}`;
      this.isNavigatePrevious = true;
      this.history.pop();
      this.router.navigate([url]);
    }
  }
}
