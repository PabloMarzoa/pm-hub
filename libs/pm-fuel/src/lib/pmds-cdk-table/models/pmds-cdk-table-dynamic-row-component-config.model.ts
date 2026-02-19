////////Angular imports
import { Type } from "@angular/core";

export interface IPmdsCdkDynamicRowComponentConfig {
  component: Type<any>;
  cardComponent: Type<any>;
  styles?: string;
  selectRowAction?: (row: Type<any>) => void;
  selectCardAction?: (card: Type<any>) => void;
  stylesCard?: string;
  selectedRows?: (rows: Type<any>) => void;
}

