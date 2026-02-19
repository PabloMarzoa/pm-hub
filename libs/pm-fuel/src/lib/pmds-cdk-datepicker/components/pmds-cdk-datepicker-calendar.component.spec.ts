////////Angular imports
// import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroupDirective } from '@angular/forms';
////////Third party libraries
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { PmdsCdkDatepickerCalendarComponent } from './pmds-cdk-datepicker-calendar.component';
import { PmdsCdkDatepickerDayClassDirective } from '../directives/pmds-cdk-datepicker-day-class.directive';

describe('PmdsCdkCalendarComponent', () => {
    let component: PmdsCdkDatepickerCalendarComponent;
    let fixture: ComponentFixture<PmdsCdkDatepickerCalendarComponent>;
    const fb = new FormBuilder();
    const formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = fb.group({
        control: fb.control(null)
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PmdsCdkDatepickerCalendarComponent,
                PmdsCdkButtonComponent,
                PmdsCdkDatepickerDayClassDirective
            ],
            providers: [

            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkDatepickerCalendarComponent);
        component = fixture.componentInstance;

        component.dateInfo = [
            {
                date: new Date(),
                label: 'label'
            }
        ];
        component.format = 'DD/MM/YYYY';
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
        component.setDate = new Date(dayjs('2000-01-01', component.format).format('YYYY-MM-DD'));
        dayjs.extend(customParseFormat);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set first day and days', () => {
        component.fillCalendardisplayMonth(2000, 1);
        expect(component.firstDayOfMonthWeekday).toBe(2);
        expect(component.daysArray?.length).toBe(29);
    });

    it('should call to fill calendar display month on change month', () => {
        const spy = jest.spyOn(component, 'fillCalendardisplayMonth');
        component.displayMonth = 1;
        component.changeMonth(1);
        expect(spy).toHaveBeenCalled();
    });

    it('should set display month to 2 on change month', () => {
        component.displayMonth = 1;
        component.changeMonth(1);
        expect(component.displayMonth).toBe(2);
    });

    it('should set display month to 0 on change month', () => {
        component.displayMonth = 11;
        component.changeMonth(1);
        expect(component.displayMonth).toBe(0);
    });

    it('should set display month to 0 on change month', () => {
        component.displayMonth = -1;
        component.changeMonth(1);
        expect(component.displayMonth).toBe(0);
    });

    it('should set display month to 11 on change month', () => {
        component.displayMonth = -2;
        component.changeMonth(1);
        expect(component.displayMonth).toBe(11);
    });

    it('should call to fill calendar display month on change year', () => {
        const spy = jest.spyOn(component, 'fillCalendardisplayMonth');
        component.displayMonth = 1;
        component.changeYear(1);
        expect(spy).toHaveBeenCalled();
    });

    it('should call to set display calendar on set today', () => {
        const spy = jest.spyOn<any, any>(component, 'setDisplayCalendar');
        component.setToday();
        expect(spy).toHaveBeenCalled();
    });

    it('should set selected date on select day', () => {
        component.selectDay(1);
        expect(component.selectedDate).toBeDefined();
    });

    it('should emit close calendar on click day', () => {
        const spy = jest.spyOn<any, any>(component.closeCalendar, 'emit');
        component.clickDay(1);
        expect(spy).toHaveBeenCalled();
    });

});
