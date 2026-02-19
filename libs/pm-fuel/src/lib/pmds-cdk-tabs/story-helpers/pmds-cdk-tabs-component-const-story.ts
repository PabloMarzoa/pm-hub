////////Angular imports
import { Routes } from "@angular/router";
////////Component imports
import { PmdsCdkTabStoryComponent } from "./pmds-cdk-tab-story.component";

export const routes: Routes = [
	...new Array(10).fill(0).map((_, index) => (
		{
			path: `tab-${index + 1}`,
			component: PmdsCdkTabStoryComponent,
		}
	)),
	{
		path: '**',
		redirectTo: 'tab-1',
	}
];
