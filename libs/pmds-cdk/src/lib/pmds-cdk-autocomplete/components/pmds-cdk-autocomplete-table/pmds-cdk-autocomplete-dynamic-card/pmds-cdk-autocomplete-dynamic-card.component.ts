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
    selector: 'pmds-cdk-autocomplete-dynamic-card',
    templateUrl: './pmds-cdk-autocomplete-dynamic-card.component.html'
})
export class PmdsCdkAutocompleteDynamicCardComponent implements OnInit {

    @ViewChild('cardTemplate', { read: ViewContainerRef, static: true })
    rowTemplate!: ViewContainerRef;
    
    @Input() autocompleteDynamicRowComponent!: Type<unknown>;
    @Input() data!: unknown;
    @Input() cardIndex!: number;
    @Input() stylesConfig?: string;
    
    ngOnInit() {
        this.rowTemplate.clear();
        if (Object.keys(this.autocompleteDynamicRowComponent).length) {
            const rowComponentRef: ComponentRef<any> = this.rowTemplate.createComponent(this.autocompleteDynamicRowComponent);
            rowComponentRef.instance.rowConfig = { data: this.data, rowIndex: this.cardIndex, stylesConfig: this.stylesConfig }
        }
    }

}
