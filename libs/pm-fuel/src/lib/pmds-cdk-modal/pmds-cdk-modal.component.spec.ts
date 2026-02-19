////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Third party libraries
import { Subject } from 'rxjs';
////////Component imports
import { TPmdsCdkModalAction } from './models/pmds-cdk-modal.model';
import { PmdsCdkModalComponent } from './pmds-cdk-modal.component';
import { PmdsCdkModalRef } from './utils/pmds-cdk-modal.ref';
import { PMDS_CDK_MODAL_DATA_TOKEN } from './models/pmds-cdk-modal.model';
import { PMDS_CDK_MODAL_CONFIG_TOKEN } from './utils/pmds-cdk-modal.config';

describe('PmdsCdkModalComponent', () => {
    let component: PmdsCdkModalComponent;
    let fixture: ComponentFixture<PmdsCdkModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkModalComponent ],
            providers: [
                { provide: PMDS_CDK_MODAL_CONFIG_TOKEN, useValue: {} },
                { provide: PMDS_CDK_MODAL_DATA_TOKEN, useValue: {} },
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                { provide: PmdsCdkModalRef, useValue: { events: new Subject<{ action: TPmdsCdkModalAction }>(), close: () => {}, confirm: () => {} } }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
