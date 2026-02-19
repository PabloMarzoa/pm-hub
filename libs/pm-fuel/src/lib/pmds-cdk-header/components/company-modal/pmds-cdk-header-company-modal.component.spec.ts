////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkCompanyModalComponent } from './pmds-cdk-header-company-modal.component';

describe('PmdsCdkCompanyModalComponent', () => {
    let component: PmdsCdkCompanyModalComponent;
    let fixture: ComponentFixture<PmdsCdkCompanyModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkCompanyModalComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkCompanyModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});