////////Angular imports
import {
    Component,
    ComponentRef,
    Input,
    OnInit,
    Type,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

@Component({
    standalone: true,
    selector: 'pmds-cdk-autocomplete-dynamic-row',
    templateUrl: './pmds-cdk-autocomplete-dynamic-row.component.html'
})
export class PmdsCdkAutocompleteDynamicRowComponent implements OnInit {

    @ViewChild('rowTemplate', { read: ViewContainerRef, static: true })
    rowTemplate!: ViewContainerRef;
    
    @Input() autocompleteDynamicRowComponent!: Type<unknown>;
    @Input() data!: unknown;
    @Input() rowIndex!: number;
    @Input() stylesConfig?: string;

    ngOnInit() {
        this.rowTemplate.clear();
        if (Object.keys(this.autocompleteDynamicRowComponent).length) {
            const rowComponentRef: ComponentRef<any> = this.rowTemplate.createComponent(this.autocompleteDynamicRowComponent);
            rowComponentRef.instance.rowConfig = { data: this.data, rowIndex: this.rowIndex, stylesConfig: this.stylesConfig }
        }
    }

}
