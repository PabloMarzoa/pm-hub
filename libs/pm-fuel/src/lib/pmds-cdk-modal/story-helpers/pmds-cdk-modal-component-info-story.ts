export const componentInfo = `

In your component add imports:

~~~~
import { PmdsCdkModalService } from '../utils/pmds-cdk-modal.service';
import { IPmdsCdkModalConfig, IPmdsCdkModalData, TPmdsCdkModalAction } from '../models/pmds-cdk-modal.model';
~~~~

Inject the service:

~~~~

private modalSrv = inject(PmdsCdkModalService);

~~~~

Add method for open the modal:

~~~~
openModal() {
  const modalData: IPmdsCdkModalData<unknown> = {
    title: 'Title',
    body: 'Adittional content'
 };

 const modalConfig: IPmdsCdkModalConfig = {
    buttons: {
      confirmLabel: 'confirm',
      closeLabel: 'cancel'
   }
 }

 const modal = this.modalSrv.open(null, modalConfig, modalData);

 modal.events
    .subscribe((event: { action: TPmdsCdkModalAction }) => {
       // your code when press confirm or close buttons
    });
}
~~~~
`;

export const storyInfo = `
Create a **modal-custom-content.component.ts** and import **PmdsCdkModalComponent** from: **../../../index**

~~~~
import { PmdsCdkModalComponent } from '../pmds-cdk-modal.component';

...

@Component({
  selector: 'nxt-ui-modal-custom',
  standalone: true,
  imports: [PmdsCdkModalComponent],
  template: '
    <pmds-cdk-modal>
      <section body>
        {{ data.body }}
      </section>
      <section footer>
        {{ data.footer }}
      </section>
    </pmds-cdk-modal>
  '
})
export class ModalCustomContentComponent {
  data = inject(PMDS_CDK_MODAL_DATA_TOKEN).data;
}
~~~~

In this case add ModalCustomContentComponent to this.modalSrv.open method

~~~~
openModal() {
  const modalData: IPmdsCdkModalData<unknown> = {
    title: 'Title',
 };

 const modalConfig: IPmdsCdkModalConfig = {}

 const modal = this.modalSrv.open(PmdsCdkModalComponent, modalConfig, modalData);

 modal.events
    .subscribe((event: { action: TPmdsCdkModalAction }) => {
       // your code when press confirm or close buttons
    });
}
~~~~
        `;

export const storyInfoLoading = `
The pmds-cdk-modal have **loading** attribute, if you pass a true value, show the loading template:

~~~~
import { PmdsCdkModalComponent } from '../pmds-cdk-modal.component';

...

@Component({
  selector: 'nxt-ui-modal-custom',
  standalone: true,
  imports: [PmdsCdkModalComponent],
  template: '
    <pmds-cdk-modal [loading]="true">
      <section body>
        {{ data.body }}
      </section>
      <section footer>
        {{ data.footer }}
      </section>
    </pmds-cdk-modal>
  '
})
~~~~`;
