////////Angular imports
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
////////Third party libraries
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
////////Component imports
import { PmdsCdkDatepickerDayClassDirective } from './pmds-cdk-datepicker-day-class.directive';

@Component({
	standalone: true,
    template: `
		<div pmdsCdkDatepickerDayClass id="directive"
			[pmdsCdkDatepickerDayClassDay]="day"
			[pmdsCdkDatepickerDayClassMonth]="displayMonth"
			[pmdsCdkDatepickerDayClassYear]="displayYear"
			[pmdsCdkDatepickerDayClassMin]="min"
			[pmdsCdkDatepickerDayClassMax]="max"
			[pmdsCdkDatepickerDayClassSelectedDate]="selectedDate"
			[pmdsCdkDatepickerDayClassDateInfo]="dateInfo"
			[pmdsCdkDatepickerDayClassFormat]="format"
		>Test</div>
    `,
	imports: [
		PmdsCdkDatepickerDayClassDirective
	]
})
class TestComponent {
	date = dayjs(new Date());

	dateInfo = '';
	day = this.date.get('date');
	displayMonth = this.date.get('month');
	displayYear = this.date.get('year');
	format = '';
	max = '';
	min = '';
	selectedDate = new Date();
}

describe('PmdsCdkDatepickerDayClassDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
	let divEl: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
				TestComponent
            ],
			providers: [
			]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
		dayjs.extend(customParseFormat);
		divEl = fixture.debugElement.query(By.css('#directive'));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

	it('should add class bg-color-surface-hover on mouseover', () => {
		divEl.triggerEventHandler('mouseover', null);
		expect(divEl.nativeElement.classList).toContain('bg-color-surface-hover');
    });

	it('should remove class bg-color-surface-hover on mouseleave', () => {
		divEl.triggerEventHandler('mouseleave', null);
		expect(divEl.nativeElement.classList).not.toContain('bg-color-surface-hover');
    });

	it('should add class text-color-disabled', () => {
		const date = dayjs(new Date());
		component.day = date.get('date') + 2;
		fixture.detectChanges();
		expect(divEl.nativeElement.classList).toContain('text-color-disabled');
    });

	it('should remove class text-color-disabled', () => {
		const date = dayjs(new Date());
		component.day = date.get('date') - 1;
		fixture.detectChanges();
		expect(divEl.nativeElement.classList).not.toContain('text-color-disabled');
    });

	it('should add class border', () => {
		expect(divEl.nativeElement.classList).toContain('border');
    });

	it('should remove class border', () => {
		const date = dayjs(new Date());
		component.day = date.get('date') + 1;
		fixture.detectChanges();
		expect(divEl.nativeElement.classList).not.toContain('border');
    });

	it('should add class border', () => {
		expect(divEl.nativeElement.classList).toContain('border');
    });

	it('should remove class border', () => {
		const date = dayjs(new Date());
		component.day = date.get('date') + 1;
		fixture.detectChanges();
		expect(divEl.nativeElement.classList).not.toContain('border');
    });

});
