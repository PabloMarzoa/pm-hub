/* eslint-disable @typescript-eslint/no-empty-function */
////////Angular imports
import { trigger } from '@angular/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
////////PPMDS libraries
import { PMDS_CDK_ALERT_DATA_TOKEN } from '../pmds-cdk-alert/models/pmds-cdk-alert.model';
////////Component imports
import { PmdsCdkToastComponent } from './pmds-cdk-toast.component';
import { PmdsCdkToastRef } from './utils/pmds-cdk-toast-ref';
import { PMDS_CDK_TOAST_CONFIG_TOKEN } from './utils/pmds-cdk-toast-config';

describe('PmdsCdkToastComponent', () => {
    let component: PmdsCdkToastComponent;
    let fixture: ComponentFixture<PmdsCdkToastComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                PmdsCdkToastComponent,
            ],
            providers: [
                { provide: PMDS_CDK_TOAST_CONFIG_TOKEN, useValue: {} },
                { provide: PMDS_CDK_ALERT_DATA_TOKEN, useValue: {} },
                { provide: PmdsCdkToastRef, useValue: { close: () => {}, isVisible: () => {}, getPosition: () => {} } }
            ],

        })
        .overrideComponent(PmdsCdkToastComponent, {
            set: {
              animations: [trigger('fadeAnimation', [])]
            }
        })
        .compileComponents();

        fixture = TestBed.createComponent(PmdsCdkToastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should close toast', () => {
        const spy = jest.spyOn(component['ref'], 'close');
        component.close();
        expect(spy).toHaveBeenCalled();
    });

    it('should run action toast', () => {
        component.data.actionFn = () => undefined;
        component.action();
        expect(component.animationState).toEqual('closing');
    });

    it('should close toast on fade finished', () => {
        const spy = jest.spyOn(component['ref'], 'close');
        component.animationState = 'closing';
        component.onFadeFinished({ toState: 'closing' } as any);
        expect(spy).toHaveBeenCalled();
    });

});
