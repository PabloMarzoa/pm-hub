import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkCheckboxComponent } from './pmds-cdk-checkbox.component';

describe('PmdsCdkCheckboxComponent', () => {
    let component: PmdsCdkCheckboxComponent;
    let fixture: ComponentFixture<PmdsCdkCheckboxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkCheckboxComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkCheckboxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});