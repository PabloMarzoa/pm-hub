import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// @pmhub/pmds-common

bootstrapApplication(AppComponent, appConfig).catch((err) =>
	console.error(err)
);
