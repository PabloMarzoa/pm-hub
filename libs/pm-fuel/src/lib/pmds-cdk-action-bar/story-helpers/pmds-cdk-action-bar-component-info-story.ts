export const componentInfo = `

Import: **../../../index**

~~~~
import { PmdsCdkActionBarService } from '../utils/pmds-cdk-action-bar.service';
import { IPmdsCdkActionBarConfig } from '../models/pmds-cdk-action-bar.model';
~~~~

Inject **PmdsCdkActionBarService** in your component

~~~~

private actionBarSrv = inject(PmdsCdkActionBarService);

~~~~

Create a method for open the action bar:

~~~~
openActionBar() {
  const actionBarConfig: IPmdsCdkActionBarConfig = {
    actionBarButtons:
    [
      {
         label: 'Action 1',
         action: () => alert('ok')
         }
    ],
    clearBarButton: {
     label: 'Clear'
   }
    secondaryBarButton: {
      label: "button",
      action:  () => alert('ok')
   }
 }

 const actionBar = this.actionBarSrv.open(this.actionBarConfig);
 actionBar.events
    .subscribe((event?: string) => {
        if (event) {
          // clear click
        } else {
          // close action bar
        }
    });
}
~~~~
`;
