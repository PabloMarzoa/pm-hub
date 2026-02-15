////////Angular imports
import { Component, DebugElement, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
////////Third party libraries
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
////////Component imports
import { PmdsCdkTimeFormatDirective } from './pmds-cdk-time-input.directive';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	standalone: true,
    template: `
        <input 
            id="directive" 
            [formControl]="control"
            pmdsCdkTimeFormat
        />
    `,
	imports: [
		PmdsCdkTimeFormatDirective,
        ReactiveFormsModule
	]
})
class TestComponent {
    control = new FormControl('');
}

describe('PmdsCdkTimeFormatDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let input: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
				TestComponent
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
		dayjs.extend(customParseFormat);
		input = fixture.debugElement.query(By.css('#directive'));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should format time', () => {
        const event = new KeyboardEvent('input', { });
        component.control?.setValue('0830');
        input.nativeElement.dispatchEvent(event);
        expect(component.control?.value).toBe('08:30');
    });

});
