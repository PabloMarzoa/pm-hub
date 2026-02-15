////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkFormErrorMessageComponent } from './pmds-cdk-form-error-message.component';

describe('PmdsCdkFormErrorMessageComponent', () => {
    let component: PmdsCdkFormErrorMessageComponent;
    let fixture: ComponentFixture<PmdsCdkFormErrorMessageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkFormErrorMessageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkFormErrorMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
