////////Angular imports
import { ComponentRef, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkDynamicRowComponent } from './pmds-cdk-table-dynamic-row.component';

describe('PmdsCdkDynamicRowComponent', () => {
    let component: PmdsCdkDynamicRowComponent;
    let fixture: ComponentFixture<PmdsCdkDynamicRowComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkDynamicRowComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkDynamicRowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create with dynamicRowComponent', () => {
        component.dynamicRowComponent = new Type() as Type<any>
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
