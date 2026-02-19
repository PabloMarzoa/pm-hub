////////Angular imports
import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective } from '@angular/forms';
////////Third party libraries
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
////////PPMDS libraries
import { PmdsCdkTextInputComponent } from '../pmds-cdk-text-input/pmds-cdk-text-input.component';
////////Component imports
import { PmdsCdkDatepickerComponent } from './pmds-cdk-datepicker.component';
import { PmdsCdkCalendarComponent } from './components/pmds-cdk-datepicker-calendar.component';

describe('PmdsCdkDatepickerComponent', () => {
    let component: PmdsCdkDatepickerComponent;
    let fixture: ComponentFixture<PmdsCdkDatepickerComponent>;
    const fb = new FormBuilder();
    const formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = fb.group({
        control: fb.control(null)
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PmdsCdkDatepickerComponent,
                PmdsCdkCalendarComponent,
                PmdsCdkTextInputComponent
            ],
            providers: [
                FormBuilder,
                { provide: FormGroupDirective, useValue: formGroupDirective },
            ]
        })
        .overrideComponent(PmdsCdkDatepickerComponent, {
            set: { changeDetection: ChangeDetectionStrategy.OnPush }
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkDatepickerComponent);
        component = fixture.componentInstance;
        component.dateInfo = [
            {
                date: new Date(),
                label: 'label'
            }
        ];
        component.formControlName = 'control';
        component.format = 'DD/MM/YYYY';
        component.isDisabled = false;
        component.literals = {
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
                'December'
            ],
            weekDay: [
                'sunday',
                'monday',
                'tuesday',
                'thursday',
                'frinday',
                'saturday',
                'sunday'
            ],
            today: 'sunday',
            formatHelp: 'help'
        };
        component.literalsErrorFn = () => 'error';
        dayjs.extend(customParseFormat);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should reset value on fail validate date', () => {
        const spy = jest.spyOn<any, any>(component, 'resetValue');
        component.checkValidDate();
        component.checkValidDate(true);
        expect(spy).toHaveBeenCalled();
    });

    it('should not write value on fail validate date', () => {
        const spy = jest.spyOn<any, any>(component, 'writeValue');
        component.checkValidDate();
        expect(spy).not.toHaveBeenCalled();
    });

    it('should write value on validate date', () => {
        const spy = jest.spyOn<any, any>(component, 'writeValue');
        formGroupDirective.form?.get('control')?.setValue('01/01/2000');
        component.checkValidDate();
        expect(spy).toHaveBeenCalled();
    });

    it('should write value on select day change', () => {
        const date = new Date();
        const dateFormatted = dayjs(date).format(component.format);
        component.selectDayChange(date);
        const value = formGroupDirective.form?.get('control')?.value;
        expect(value).toStrictEqual(dateFormatted);
    });

    it('should change date on check limit dates with min', () => {
        const spy = jest.spyOn<any, any>(component, 'changeDate');
        const setDate = new Date(dayjs('31-12-1999', component.format).format('YYYY-MM-DD'));
        const min = new Date(dayjs('01-01-2000', component.format).format('YYYY-MM-DD'));
        component.setDate = setDate;
        component.min = min;
        component['checkLimitDates']();
        expect(spy).toHaveBeenCalled();
    });

    it('should not change date on check limit dates with min', () => {
        const spy = jest.spyOn<any, any>(component, 'changeDate');
        const setDate = new Date(dayjs('31-12-1999', component.format).format('YYYY-MM-DD'));
        const min = new Date(dayjs('01-01-1999', component.format).format('YYYY-MM-DD'));
        component.setDate = setDate;
        component.min = min;
        component['checkLimitDates']();
        expect(spy).not.toHaveBeenCalled();
    });

    it('should change date on check limit dates with max', () => {
        const spy = jest.spyOn<any, any>(component, 'changeDate');
        const setDate = new Date(dayjs('31-12-1999', component.format).format('YYYY-MM-DD'));
        const max = new Date(dayjs('01-01-1999', component.format).format('YYYY-MM-DD'));
        component.setDate = setDate;
        component.max = max;
        component['checkLimitDates']();
        expect(spy).toHaveBeenCalled();
    });

    it('should not change date on check limit dates with max', () => {
        const spy = jest.spyOn<any, any>(component, 'changeDate');
        const setDate = new Date(dayjs('31-12-1999', component.format).format('YYYY-MM-DD'));
        const max = new Date(dayjs('01-01-2000', component.format).format('YYYY-MM-DD'));
        component.setDate = setDate;
        component.max = max;
        component['checkLimitDates']();
        expect(spy).not.toHaveBeenCalled();
    });

});
