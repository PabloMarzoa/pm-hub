////////Component imports
import { IPmdsCdkToastConfig } from "../models/pmds-cdk-toast-config.model";

export const template = `
  <pmds-cdk-button 
    (buttonClick)="onClick(injector, data, config)"
    label="Open toast"
  />
`;

export const config: IPmdsCdkToastConfig = {
  panelClass: [],
  floating: true,
  timeInterval: 3000,
  position: {
    top: 88
  },
  animation: {
    fadeOut: 500,
    fadeIn: 300
  }
};
