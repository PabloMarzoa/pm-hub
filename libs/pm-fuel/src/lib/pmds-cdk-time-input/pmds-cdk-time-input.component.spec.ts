////////Angular imports
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective } from '@angular/forms';
import { By } from '@angular/platform-browser';
////////Third party libraries
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
////////PPMDS libraries
import { PmdsCdkTextInputComponent } from '../pmds-cdk-text-input/pmds-cdk-text-input.component';
import { PmdsCdkDropdownComponent } from '../pmds-cdk-dropdown/pmds-cdk-dropdown.component';
////////Component imports
import { PmdsCdkTimeInputComponent } from './pmds-cdk-time-input.component';

describe('PmdsCdkTimeInputComponent', () => {
	let component: PmdsCdkTimeInputComponent;
	let fixture: ComponentFixture<PmdsCdkTimeInputComponent>;
	let element: DebugElement;

	const fb = new FormBuilder();
    const formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = fb.group({
        control: fb.control(null)
    });

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				PmdsCdkTimeInputComponent,
				PmdsCdkTextInputComponent,
				PmdsCdkDropdownComponent,
			],
			providers: [
                FormBuilder,
                { provide: FormGroupDirective, useValue: formGroupDirective },
            ]
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkTimeInputComponent);
		component = fixture.componentInstance;
		component.formControlName = 'control';
		component.literalsErrorFn = () => 'error';
        dayjs.extend(customParseFormat);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should show text input time', () => {
		component.type = 'input';
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css('pmds-cdk-text-input'));
		expect(element).not.toBeNull();
	});

	it('should show dropdown time', () => {
		component.type = 'dropdown';
		fixture.detectChanges();
		element = fixture.debugElement.query(By.css('pmds-cdk-dropdown'));
		expect(element).not.toBeNull();
	});

	it('should validate text input time', () => {
		component.type = 'input';
		fixture.detectChanges();
		component.formControl.setValue('10:00');
		const validate = component.validate(component.formControl);
		expect(validate).toBeNull();
	});

	it('should not validate text input time', () => {
		component.type = 'input';
		fixture.detectChanges();
		component.formControl.setValue('66:66');
		const validate = component.validate(component.formControl);
		expect(validate).not.toBeNull();
	});

	it('should validate text input time with start and end time', () => {
		component.type = 'input';
		component.startTime = '08:00';
		component.endTime = '15:00';
		fixture.detectChanges();
		component.formControl.setValue('10:00');
		const validate = component.validate(component.formControl);
		expect(validate).toBeNull();
	});

	it('should not validate text input time with start and end time', () => {
		component.type = 'input';
		component.startTime = '08:00';
		component.endTime = '15:00';
		fixture.detectChanges();
		component.formControl.setValue('16:00');
		const validate = component.validate(component.formControl);
		expect(validate).not.toBeNull();
	});

});
