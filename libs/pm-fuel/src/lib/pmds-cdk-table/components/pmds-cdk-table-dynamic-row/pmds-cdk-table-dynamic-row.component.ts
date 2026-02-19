////////Angular imports
import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	Type,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import {
	FormBuilder,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
////////Component imports
import { EPmdsCdkTableRowTypeStyle } from '../../models/pmds-cdk-table-row-type-style.model';
import { PmdsCdkCheckboxComponent } from '../../../pmds-cdk-checkbox/pmds-cdk-checkbox.component';

@Component({
	standalone: true,
	imports: [
		PmdsCdkCheckboxComponent,
		ReactiveFormsModule,
		FormsModule,
	],
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: '[pmds-cdk-dynamic-row]',
	templateUrl: './pmds-cdk-table-dynamic-row.component.html',
})
export class PmdsCdkDynamicRowComponent implements OnInit, OnChanges {
	@ViewChild('rowTemplate', { read: ViewContainerRef, static: true })
	rowTemplate!: ViewContainerRef;

	@Input() data!: any;
	@Input() dynamicRowComponent!: Type<any>;
	@Input() rowIndex!: number;
	@Input() rowSelected!: boolean;
	@Input() showSelectRow?: boolean;
	@Input() stylesConfig?: string;

	@Output() selectRow: EventEmitter<unknown> = new EventEmitter();

	form: any;

	ngOnInit(): void {
		this.loadComponent();
	}

	ngOnChanges() {
		if (
			this.showSelectRow &&
			this.form?.controls?.checkbox.value !== this.data.selected
		) {
			setTimeout(() => {
				this.form?.controls?.checkbox.setValue(this.data.selected);
			}, 1);
		}
	}

	loadComponent() {
		if (this.showSelectRow) this.loadForm();
		this.rowTemplate.clear();
		if (this.dynamicRowComponent !== undefined) {
			const rowComponentRef = this.rowTemplate.createComponent(
				this.dynamicRowComponent
			);
			rowComponentRef.instance.rowConfig = {
				data: this.data,
				rowIndex: this.rowIndex,
				stylesConfig: this.stylesConfig,
			};
			rowComponentRef.location.nativeElement.className =
				EPmdsCdkTableRowTypeStyle[
					`${'tableStyle'}${this.showSelectRow ? 'Checkbox' : ''}`
				];
		}
	}

	loadForm() {
		this.form = new FormBuilder().group({
			checkbox: [false, [Validators.required]],
		});

		this.form?.controls?.checkbox.valueChanges.subscribe((v: any) => {
			if (typeof v === 'undefined') this.data.selected = false;
			else this.data.selected = v;

			this.selectRow.emit(this.data);
		});
	}
}
