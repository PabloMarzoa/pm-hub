////////Angular imports
import { Injector } from "@angular/core";
////////Component imports
import { IPmdsCdkModalConfig, IPmdsCdkModalData, TPmdsCdkModalAction } from "../models/pmds-cdk-modal.model";
import { PmdsCdkModalService } from "../utils/pmds-cdk-modal.service";
import { ModalCustomContentComponent } from "./pmds-cdk-modal-custom-content-component";
import { ModalCustomContentLoadingComponent } from "./pmds-cdk-modal-custom-content-component-loading";

export const template = (label: string) => `
<pmds-cdk-button
  (buttonClick)="onClick(injector, config, data)"
  label="${label}"
/>
`;

export const onClick = (injector: Injector, config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown>): void => {
const modal = injector.get<PmdsCdkModalService>(PmdsCdkModalService)
  .open(null, config, data);
modal.events?.subscribe((event: { action: TPmdsCdkModalAction }) => {
  if (event?.action === 'confirm') alert('click confirm!');
  modal.close();
});
};

export const onClickWithComponent = (injector: Injector, config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown>): void => {
const modal = injector.get<PmdsCdkModalService>(PmdsCdkModalService)
  .open(ModalCustomContentComponent, config, data);
modal.events?.subscribe((event: { action: TPmdsCdkModalAction }) => {
  if (event?.action === 'confirm') alert('click confirm!');
  modal.close();
});
};

export const onClickWithComponentLoading = (injector: Injector, config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown>): void => {
const modal = injector.get<PmdsCdkModalService>(PmdsCdkModalService)
  .open(ModalCustomContentLoadingComponent, config, data);
modal.events?.subscribe((event: { action: TPmdsCdkModalAction }) => {
  if (event?.action === 'confirm') alert('click confirm!');
  modal.close();
});
};