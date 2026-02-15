////////Angular imports
import { Component, Input, OnInit } from '@angular/core';
////////PPMDS libraries
import { IPmdsCdkRowConfigParam } from '../../../pmds-cdk-table/models/pmds-cdk-table-row-config-params.model';
////////Project imports

@Component({
  selector: 'pmds-cdk-table-card-default.contents',
  standalone: true,
  imports: [],
  templateUrl: './pmds-cdk-table-card-default.component.html'
})
export class PmdsCdkTableCardDefaultComponent implements OnInit {
    @Input() rowConfig!: IPmdsCdkRowConfigParam<any>;
    keys: string[] = [];
    rowData: any | null = null;

    ngOnInit(): void {
        this.rowData = this.rowConfig.data;
        this.keys = Object.keys(this.rowData as Object).filter(key => key !== 'disabledAction' && key !== 'selected');
    }
}
