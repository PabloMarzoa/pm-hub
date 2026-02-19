////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Third party libraries
import { Subject } from 'rxjs';
////////Component imports
import { PmdsCdkActionBarComponent } from './pmds-cdk-action-bar.component';
import { PmdsCdkActionBarRef } from './utils/pmds-cdk-action-bar.ref';
import { PMDS_CDK_ACTION_BAR_CONFIG_TOKEN } from './utils/pmds-cdk-action-bar.config';

describe('PmdsCdkActionBarComponent', () => {
    let component: PmdsCdkActionBarComponent;
    let fixture: ComponentFixture<PmdsCdkActionBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkActionBarComponent],
            providers: [
            { provide: PMDS_CDK_ACTION_BAR_CONFIG_TOKEN, useValue: {} },
            { provide: PmdsCdkActionBarRef, useValue: { events: new Subject<{ action: string }>(), close: () => undefined } }
        ]
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkActionBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should clear action bar', () => {
        expect(component.clear()).toBeUndefined();
    });

    it('should clear action bar', () => {
        component.actionBarButtons = [{
            label: 'label',
            action: () => undefined
        }];
        component.showMenuActionBarButtons;
        expect(component.showMenuActionBarButtons).toBeFalsy();
    });

    it('should not create showMenuActionBarButtons', () => {
        expect(component.showMenuActionBarButtons).toBe(false);
    });
});
