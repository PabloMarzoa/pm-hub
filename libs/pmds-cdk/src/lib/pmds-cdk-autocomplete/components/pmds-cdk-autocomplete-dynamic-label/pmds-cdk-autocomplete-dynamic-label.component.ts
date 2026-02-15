////////Angular imports
import {
	Component,
	ComponentRef,
	EventEmitter,
	Input,
	Output,
	Type,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';

@Component({
	standalone: true,
	selector: 'pmds-cdk-autocomplete-dynamic-label',
	templateUrl: './pmds-cdk-autocomplete-dynamic-label.component.html',
})
export class PmdsCdkAutocompleteDynamicLabelComponent {

	@ViewChild('labelTemplate', { read: ViewContainerRef, static: true })
	labelTemplate!: ViewContainerRef;

	private _data!: unknown;
	@Input()
	get data() {
		return this._data;
	}
	set data(value: unknown) {
		this._data = value || null;
		this.setLabelComponent(this._data);
	}
	@Input() autocompleteDynamicLabelComponent!: Type<unknown>;

	@Output() setInput: EventEmitter<string> = new EventEmitter<string>();

	setLabelComponent(data: unknown) {
		this.labelTemplate.clear();
		if (Object.keys(this.autocompleteDynamicLabelComponent).length) {
			const labelComponentRef: ComponentRef<any> =
				this.labelTemplate.createComponent(
					this.autocompleteDynamicLabelComponent
				);
			labelComponentRef.instance.labelConfig = { data };
			labelComponentRef.instance.setInput = this.setInput;
		}
	}
	
}