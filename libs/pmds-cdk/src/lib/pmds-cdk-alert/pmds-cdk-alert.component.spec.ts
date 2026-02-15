/* eslint-disable @typescript-eslint/no-empty-function */
////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkAlertComponent } from './pmds-cdk-alert.component';

describe('PmdsCdkAlertComponent', () => {
    let component: PmdsCdkAlertComponent;
    let fixture: ComponentFixture<PmdsCdkAlertComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkAlertComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkAlertComponent);
        component = fixture.componentInstance;
        component.data = {
            actionFn: () => {},
            actionIcon: '',
            cancelAutoClose: true,
            closeFn: () => {},
            content: '',
            hideClose: true,
            literals: {
                action: '',
                subject: '',
                subjectContent: '',
                message: '',
                messageContent: ''
            },
            title: '',
            type: 'error'
        }
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should run action fn', () => {
        const spy = jest.spyOn(component.data, 'actionFn');
        component.action();
        expect(spy).toHaveBeenCalled();
    });

    it('should emit close event', () => {
        const spy = jest.spyOn(component.closeEmit, 'emit');
        component.close();
        expect(spy).toHaveBeenCalled();
    });
    
});
