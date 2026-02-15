////////Angular imports
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
	AfterContentChecked,
	AfterContentInit,
	Component,
	ContentChildren,
	Input,
	QueryList,
	inject,
} from '@angular/core';
import { AsyncPipe, NgClass, NgTemplateOutlet } from '@angular/common';
////////Third party libraries
import { Observable, delay, map, of, startWith } from 'rxjs';
////////PPMDS libraries
import { PmdsCdkDividerComponent } from '../pmds-cdk-divider/pmds-cdk-divider.component';
////////Component imports
import { IPmdsCdkTabsConfig } from './models/pmds-cdk-tabs.model';
import { PmdsCdkTabComponent } from './components/tab/pmds-cdk-tab.component';
import { PmdsCdkTabsSkeletonComponent } from './components/pmds-cdk-tabs-skeleton/pmds-cdk-tabs-skeleton.component';

@Component({
	selector: 'pmds-cdk-tabs',
	standalone: true,
	imports: [
		AsyncPipe,
		NgClass,
		NgTemplateOutlet,
		RouterModule,
		PmdsCdkDividerComponent,
		PmdsCdkTabsSkeletonComponent,
	],
	templateUrl: './pmds-cdk-tabs.component.html',
})
export class PmdsCdkTabsComponent
	implements AfterContentInit, AfterContentChecked
{
	@ContentChildren(PmdsCdkTabComponent)
	tabs!: QueryList<PmdsCdkTabComponent>;

	@Input() componentPathSelected!: string;
	@Input() config!: IPmdsCdkTabsConfig;
	@Input() dataQA!: string;
	@Input() skeleton!: boolean;

	activeTab!: PmdsCdkTabComponent;
	componentSelector = 'pmds-cdk-tabs-';
	tabs$!: Observable<PmdsCdkTabComponent[]>;

	private readonly activatedRoute = inject(ActivatedRoute);
	private readonly router = inject(Router);

	ngAfterContentInit() {
		this.tabs$ = this.tabs.changes.pipe(
			startWith(''),
			delay(0.1),
			map(() => this.tabs?.toArray())
		);
	}

	ngAfterContentChecked() {
		const selectedTab: PmdsCdkTabComponent = this.tabs
			.toArray()
			.find((tab: PmdsCdkTabComponent) =>
				tab?.componentPath === this.componentPathSelected
					? tab
					: undefined
			) as PmdsCdkTabComponent;

		if (!this.activeTab) {
			of((this.activeTab = selectedTab || this.tabs.first));
		}
	}

	selectTab(tab: PmdsCdkTabComponent) {
		if (
			this.activeTab === tab ||
			tab?.isDisabled ||
			this.config?.isDisabled
		) {
			return;
		}
		if (this.activeTab) {
			this.activeTab.isActive = false;
		}
		this.setActiveTab(tab);
		this.navigateTab(tab?.componentPath);
	}

	private navigateTab(componentPath: string) {
		this.router.navigate([componentPath], {
			relativeTo: this.activatedRoute,
			skipLocationChange: this.config?.skipLocationChange,
		});
	}

	private setActiveTab(tab: PmdsCdkTabComponent) {
		this.activeTab = tab;
		tab.isActive = true;
	}
}
