////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkAutocompleteDynamicLabelComponent } from './pmds-cdk-autocomplete-dynamic-label.component';

describe('NxtdDynamicRowComponent', () => {
    let component: PmdsCdkAutocompleteDynamicLabelComponent;
    let fixture: ComponentFixture<PmdsCdkAutocompleteDynamicLabelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkAutocompleteDynamicLabelComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkAutocompleteDynamicLabelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});