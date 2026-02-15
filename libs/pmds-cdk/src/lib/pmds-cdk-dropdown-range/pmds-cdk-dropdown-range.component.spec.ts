////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	FormBuilder,
	FormGroupDirective,
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';
import { DatePipe } from '@angular/common';
////////Third party libraries
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
////////Project imports
import { PmdsCdkDropdownRangeComponent } from './pmds-cdk-dropdown-range.component';


describe('PmdsCdkDropdownRangeComponent', () => {
	let component: PmdsCdkDropdownRangeComponent;
	let fixture: ComponentFixture<PmdsCdkDropdownRangeComponent>;

	const fb = new FormBuilder();
	const formGroupDirective = new FormGroupDirective([], []);
	formGroupDirective.form = fb.group({
		from: fb.control(null),
		to: fb.control(null),
	});

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				FormsModule,
				ReactiveFormsModule,
				PmdsCdkDropdownRangeComponent,
			],
			declarations: [],
			providers: [
				FormBuilder,
				{ provide: FormGroupDirective, useValue: formGroupDirective },
				{ provide: DatePipe },
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PmdsCdkDropdownRangeComponent);
		component = fixture.componentInstance;
		component.showOptions = true;
		component.literals = {
			clearAll: 'clearAll',
			apply: 'apply',
			from: 'from',
			to: 'to',
			datepickerLiterals: {
				month: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
				],
				today: 'today',
				weekDay: [
					'sunday',
					'monday',
					'tuesday',
					'thursday',
					'frinday',
					'saturday',
					'sunday',
				],
			},
		};
		component.fromFormControlName = 'from';
		component.toFormControlName = 'to';
		component.pattern = 'DD/MM/YYYY';
		dayjs.extend(customParseFormat);
		fixture.detectChanges();
	});

	it('should create', () => {
		component.mode = 'date';
		expect(component).toBeTruthy();
	});

	it('should toggle option to show', () => {
		component.showOptions = false;
		component.toggleShowOption();
		expect(component.showOptions).toBeTruthy();
	});

	it('should toggle option to hide', () => {
		component.toggleShowOption();
		expect(component.showOptions).toBeFalsy();
	});

	it('should toggle option to hide', () => {
		const spy = jest.spyOn(component.selectChange, 'emit');
		component.setSelection();
		expect(spy).toHaveBeenCalled();
	});

	it('should reset form controls', () => {
		const fromControl = formGroupDirective.form?.get('from');
		const toControl = formGroupDirective.form?.get('to');
		fromControl?.setValue('1');
		toControl?.setValue('1');
		component.clear();
		expect(fromControl?.value).toBeNull();
		expect(toControl?.value).toBeNull();
	});

	it('should be enabled', () => {
		component['checkDisableButton']();
		expect(component.disabledApply).toBeFalsy();
	});

});
