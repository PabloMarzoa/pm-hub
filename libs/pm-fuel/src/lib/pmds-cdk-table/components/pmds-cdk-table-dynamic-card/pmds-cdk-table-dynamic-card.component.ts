////////Angular imports
import {
	Component,
	Input,
	OnInit,
	Type,
	ViewChild,
	ViewContainerRef
} from '@angular/core';

@Component({
	standalone: true,
	selector: 'pmds-cdk-dynamic-card',
	templateUrl: './pmds-cdk-table-dynamic-card.component.html',
})
export class PmdsCdkDynamicCardComponent implements OnInit {

	@ViewChild('cardTemplate', { read: ViewContainerRef, static: true })
	cardTemplate!: ViewContainerRef;

	@Input() data!: any[];
	@Input() dynamicCardComponent!: Type<any>;
	@Input() rowIndex!: number;
	@Input() stylesConfig?: string;

	ngOnInit(): void {
		this.loadComponent();
	}

	loadComponent() {
		this.cardTemplate.clear();
		if (this.dynamicCardComponent !== undefined) {
			const cardComponentRef = this.cardTemplate.createComponent(
				this.dynamicCardComponent
			);
			cardComponentRef.instance.rowConfig = {
				data: this.data,
				rowIndex: this.rowIndex,
				stylesConfig: this.stylesConfig,
			};
		}
	}

}