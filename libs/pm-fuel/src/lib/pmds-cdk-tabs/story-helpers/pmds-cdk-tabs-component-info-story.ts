export const componentInfo = `

In your routes:

~~~~
const routes: Routes = [
  {
   path: 'tab-1',
   component: PmdsCdkTabStoryComponent
  },
  {
   path: 'tab-2',
   component: PmdsCdkTabStoryComponent
  },
];
~~~~

Import the **PmdsCdkTabsComponent** and **PmdsCdkTabComponent** from **../../../index**

~~~~
import { PmdsCdkTabsComponent } from '../pmds-cdk-tabs.component';
import { PmdsCdkTabComponent } from '../components/tab/pmds-cdk-tab.component';
~~~~

Add to import array the **PmdsCdkTabsComponent** and **PmdsCdkTabComponent** in your component

~~~~
imports: [
  PmdsCdkTabsComponent,
  PmdsCdkTabComponent
]
~~~~

Selector: **pmds-cdk-tabs**

~~~~
<pmds-cdk-tabs [config]="config">
   <pmds-cdk-tab componentPath="tab-1" [isDisabled]="false">
     [Tab label]
   </pmds-cdk-tab>
   <pmds-cdk-tab componentPath="tab-2" [isDisabled]="false">
     [Tab label]
   </pmds-cdk-tab>
</pmds-cdk-tabs>
~~~~
`
