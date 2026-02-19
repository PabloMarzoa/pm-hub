////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Angular imports
import { PmdsCdkTextFieldComponent } from './pmds-cdk-text-field.component';
import { IPmdsCdkTextFieldType } from './models/pmds-cdk-text-field-type.model';
import { IPmdsCdkTextField } from './models/pmds-cdk-text-field.model';

describe('PmdsCdkTextFieldComponent', () => {
	let component: PmdsCdkTextFieldComponent;
	let fixture: ComponentFixture<PmdsCdkTextFieldComponent>;
	const type: IPmdsCdkTextFieldType = 'two-line-bold';
	const field: IPmdsCdkTextField = {
		label: 'label 1',
		value: 'value 1',
	};
	const dataQA = 'testDataQA';

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkTextFieldComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PmdsCdkTextFieldComponent);
		component = fixture.componentInstance;
		component.dataQA = dataQA;
		component.type = type;
		component.field = field;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should initialize no list type', () => {
		component.ngOnInit();

		expect(component.listValues).toEqual([]);
		expect(component.value).toEqual('value 1');
	});

	it('should initialize listValues and value correctly', () => {
		component.type = 'list';
		component.field = {
			label: 'label',
			value: ['value 1', 'value 2'],
		};
		component.ngOnInit();

		expect(component.listValues).toEqual(['value 1', 'value 2']);
		expect(component.value).toEqual('value 1');
	});
});
