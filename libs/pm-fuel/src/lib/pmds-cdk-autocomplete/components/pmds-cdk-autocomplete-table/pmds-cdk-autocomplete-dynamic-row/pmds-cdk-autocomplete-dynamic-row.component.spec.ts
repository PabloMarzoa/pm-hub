////////Angular imports
import { ComponentRef, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkAutocompleteDynamicRowComponent } from './pmds-cdk-autocomplete-dynamic-row.component';

describe('NxtdDynamicRowComponent', () => {
    let component: PmdsCdkAutocompleteDynamicRowComponent;
    let fixture: ComponentFixture<PmdsCdkAutocompleteDynamicRowComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkAutocompleteDynamicRowComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkAutocompleteDynamicRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create with dynamicRowComponent', () => {
        fixture = TestBed.createComponent(PmdsCdkAutocompleteDynamicRowComponent);
        component = fixture.componentInstance;
        component.autocompleteDynamicRowComponent = new Type() as Type<unknown>
        jest.spyOn(component.rowTemplate, 'createComponent').mockImplementation(() => {
            return {
                instance: {
                    rowConfig: {}
                } 
            } as ComponentRef<unknown>}
        );
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
