////////Angular imports
import { NgFor } from '@angular/common';
import { provideRouter } from '@angular/router';
////////Third party libraries
import {
	StoryObj,
	applicationConfig,
	moduleMetadata,
} from '@storybook/angular';
////////Component imports
import { PmdsCdkTabComponent } from './components/tab/pmds-cdk-tab.component';
import { PmdsCdkTabsComponent } from './pmds-cdk-tabs.component';
import { componentInfo } from './story-helpers/pmds-cdk-tabs-component-info-story';
import { PmdsCdkTabStoryComponent } from './story-helpers/pmds-cdk-tab-story.component';
import { routes } from './story-helpers/pmds-cdk-tabs-component-const-story';

export default {
	title: 'Cdk/Navigation/Tabs',
	component: PmdsCdkTabsComponent,
	tags: ['autodocs'],
	args: {
		config: {
			skipLocationChange: false,
			isDisabled: false,
		},
		componentPathSelected: 'tab-1',
		dataQA: 'storybook-qa-',
	},
	decorators: [
		moduleMetadata({
			imports: [PmdsCdkTabStoryComponent, PmdsCdkTabComponent, NgFor],
		}),
		applicationConfig({
			providers: [provideRouter(routes)],
		}),
	],
	argTypes: {
		config: {
			description: 'Configuration to main tab and tab children <li>**isDisabled:** disabled all tabs</li><li>**skipLocationChange:** add params to router</li>',
			table: {
				type: {
					summary: `
            IPmdsCdkTabsConfig: {
              isDisabled: boolean;
              skipLocationChange: boolean;
            }
            `,
				},
			},
			control: {
				type: 'object',
			},
		},
		componentPathSelected: {
			description:
				'For select a default tab. It is necessary to configure the default path that corresponds to the default tab selected.',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		skeleton: {
            description: 'Show the skeleton section',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: {
                type: 'boolean',
            },
        },
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTabsComponent/PmdsCdkTabComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const NavigationWithTwoTabs: StoryObj<PmdsCdkTabsComponent> = {
	render: (args) => ({
		props: args,
		template: `
        <pmds-cdk-tabs
          [config]="config"
          [componentPathSelected]="componentPathSelected"
          [dataQA]="dataQA"
        >
          <pmds-cdk-tab componentPath="tab-1"
          >
            <span pmdsTitle>
            Tab label 1
            </span>
          </pmds-cdk-tab>
          <pmds-cdk-tab componentPath="tab-2"
          >
            Tab label 2
          </pmds-cdk-tab>
        </pmds-cdk-tabs>
    `,
	}),
};

export const PreSelectedTab: StoryObj<PmdsCdkTabsComponent> = {
	render: (args) => ({
		props: args,
		template: `
      <pmds-cdk-tabs
        [config]="config"
        componentPathSelected="tab-2"
      >
        <pmds-cdk-tab componentPath="tab-1">
          Tab label 1
        </pmds-cdk-tab>
        <pmds-cdk-tab componentPath="tab-2">
          Tab label 2
        </pmds-cdk-tab>
      </pmds-cdk-tabs>
    `,
	}),
};

export const NavigationDisabled: StoryObj<PmdsCdkTabsComponent> = {
	render: (args) => ({
		props: args,
		template: `
      <pmds-cdk-tabs
        [config]="config"
      >
        <pmds-cdk-tab componentPath="tab-1"
        >
          Tab label 1
        </pmds-cdk-tab>
        <pmds-cdk-tab [isDisabled]="true" componentPath="tab-2"
        >
		Tab label 2
        </pmds-cdk-tab>
        <pmds-cdk-tab componentPath="tab-3"
        >
          Tab label 3
        </pmds-cdk-tab>
      </pmds-cdk-tabs>
    `,
	}),
};

export const OverflowScroll: StoryObj<PmdsCdkTabsComponent> = {
	render: (args) => ({
		props: args,
		template: `
      <pmds-cdk-tabs
        [config]="config"
      >
		@for (tab of [1,2,3,4,5,6,7]; track tab) {  
        	<pmds-cdk-tab [componentPath]="'tab-' + tab">
				Tab label {{tab}}
		  	</pmds-cdk-tab>
		}
      </pmds-cdk-tabs>
    `,
	}),
};

export const Skeleton: StoryObj<PmdsCdkTabsComponent> = {
	args: {
		skeleton: true
	},
	render: (args) => ({
		props: args,
		template: `
      <pmds-cdk-tabs
		[skeleton]="skeleton"
        [config]="config"
      >
		@for (tab of [1,2,3,4,5,6,7]; track tab) {
        	<pmds-cdk-tab [componentPath]="'tab-' + tab">
				Tab label {{tab}}
			</pmds-cdk-tab>
		}
      </pmds-cdk-tabs>
    `,
	}),
};
