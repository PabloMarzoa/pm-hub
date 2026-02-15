export const componentInfo = `

Import: **@pmhub/pmds-cdk**

~~~~
import { PmdsCdkToastService } from '../utils/pmds-cdk-toast-service';
~~~~

Inject **PmdsCdkToastService** in your component:

~~~~

private toastSrv = inject(PmdsCdkToastService);

~~~~

For show basic toast:

~~~~
this.toastSrv.show({
  title: '[Main information]',
  type: 'info',
  content: '[Additional information]',
});
~~~~

If you want close all toast:

~~~~

this.toastSrv.closeAll();
~~~~
`;


export const changeDefaultConfigInfo = `
Create toastData:

~~~~
toastData: IPmdsCdkToastData = {
  content: '[Additional information]',
  title: '[Main information]',
  type: 'info',
~~~~

Create toastConfig

~~~~

toastConfig: IPmdsCdkToastConfig = {
  panelClass: [],
  floating: true,
  timeInterval: 1000,
  position: {
    top: 200
  },
  animation: {
    fadeOut: 500,
    fadeIn: 300
  }
}

~~~~

Create toast

~~~~

toast: PmdsCdkToastRef;
~~~~

Create method for open toast

~~~~
openToast() {
 this.toast: PmdsCdkToastRef = this.toastSrv.show(this.toastData, this.toastConfig);
}
~~~~

If you want close toast

~~~~

toast.close();
~~~~
        `
