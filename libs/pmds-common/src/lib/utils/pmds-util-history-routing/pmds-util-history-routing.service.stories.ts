////////Angular imports
import {
	APP_INITIALIZER,
	AfterViewInit,
	Component,
	inject,
} from '@angular/core';
import {
	RouterLink,
	RouterLinkActive,
	RouterOutlet,
	provideRouter,
} from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
////////Third party libraries
import {
	applicationConfig,
	moduleMetadata,
	StoryObj,
} from '@storybook/angular';
////////PNXT libraries
import { PmdsCdkButtonComponent } from '@pmhub/pmds-cdk';
////////Component imports
import { PmdsUtilHistoryRouting } from './pmds-util-history-routing.service';

@Component({
	selector: 'pmds-util-history-routing-1-story',
	standalone: true,
	template: `<div>Router 1</div>`,
})
class PmdsUtilRoutingStory1Component {}
@Component({
	selector: 'pmds-util-history-routing-2-story',
	standalone: true,
	template: `<div>Router 2</div>`,
})
class PmdsUtilRoutingStory2Component {}
@Component({
	selector: 'pmds-util-history-routing-story',
	standalone: true,
	imports: [AsyncPipe, PmdsCdkButtonComponent],
	template: `
		<section class="flex justify-between">
			<div class="py-2 italic">
				Breadcrumbs:
				<span> 1 > </span>
				@for (item of pmdsUtilHistoryRouting.history; track item) {
				<span>
					@if ($index > 0) {
					{{ item }} > }
				</span>
				}
			</div>
			@if (pmdsUtilHistoryRouting.history.length > 1) {
			<div>
				<pmds-cdk-button
					(buttonClick)="pmdsUtilHistoryRouting.navigatePrevious()"
					label="Go back"
				/>
			</div>
			}
		</section>
	`,
})
class PmdsUtilRoutingStoryComponent implements AfterViewInit {
	public pmdsUtilHistoryRouting = inject(PmdsUtilHistoryRouting);
	ngAfterViewInit(): void {
		this.pmdsUtilHistoryRouting.history = [];
	}
}

export default {
	title: 'Common/Utils/History routing',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				RouterLink,
				RouterOutlet,
				RouterLinkActive,
				PmdsUtilRoutingStoryComponent,
				PmdsUtilRoutingStory1Component,
				PmdsUtilRoutingStory2Component,
				PmdsCdkButtonComponent,
			],
		}),
		applicationConfig({
			providers: [
				{
					provide: APP_INITIALIZER,
					deps: [PmdsUtilHistoryRouting],
					useFactory: (routerHistorySrv: PmdsUtilHistoryRouting) =>
						routerHistorySrv.initHistory,
					multi: true,
				},
				provideRouter([
					{
						path: '1',
						component: PmdsUtilRoutingStory1Component,
					},
					{
						path: '2',
						component: PmdsUtilRoutingStory2Component,
					},
					{
						path: '**',
						redirectTo: '1',
					},
				]),
			],
		}),
	],
	parameters: {
		docs: {
			subtitle: 'PmdsUtilHistoryRouting',
			description: {
				component: `
Use this util to return to previous route or get all route history

**IMPORTANT** in your initial module is necessary import **APP_INITIALIZER** and **initHistory**

Import **PmdsUtilHistoryRouting** from **@pmhub/pmds-common** amd the APP_INITIALIZER from @angular/core

~~~
import {
  PmdsUtilHistoryRouting
} from '@pmhub/pmds-common';
~~~

Add it in providers array

~~~
providers: [
  {
    provide: APP_INITIALIZER,
    deps: [PmdsUtilHistoryRouting],
    useFactory: (routerHistorySrv: PmdsUtilHistoryRouting) =>
    routerHistorySrv.initHistory,
    multi: true
  }
]
~~~

For use it your component import **PmdsUtilHistoryRouting** from **@pmhub/pmds-common**

~~~
import {
  PmdsUtilHistoryRouting
} from '@pmhub/pmds-common';
~~~

Inject the service

~~~

private pmdsUtilHistoryRouting = inject(PmdsUtilHistoryRouting);
~~~

Use it:

~~~
this.pmdsUtilHistoryRouting.history // For get the route history

this.pmdsUtilHistoryRouting.navigatePrevious() // For navigate to previous route
~~~
        `,
			},
		},
	},
};

export const Docs: StoryObj<object> = {
	parameters: {
		controls: { hideNoControlsWarning: true },
	},
	render: () => ({
		template: `
        <pmds-util-history-routing-story></pmds-util-history-routing-story>
        <section class="w-full bg-slate-900 flex">
            <div class="p-4 bg-slate-300 cursor-pointer" [routerLink]="['1']" [routerLinkActive]="['bg-slate-400']">Router 1</div>
            <div class="p-4 bg-slate-300 cursor-pointer" [routerLink]="['2']" [routerLinkActive]="['bg-slate-400']">Router 2</div>
        </section>
        <section class="w-full p-4 flex items-center justify-center text-white bg-emerald-600">
            <router-outlet></router-outlet>
        </section>
    `,
	}),
};
