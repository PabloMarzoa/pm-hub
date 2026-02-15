////////Angular imports
import { ComponentRef, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkDynamicCardComponent } from './pmds-cdk-table-dynamic-card.component';

describe('PmdsCdkDynamicCardComponent', () => {
    let component: PmdsCdkDynamicCardComponent;
    let fixture: ComponentFixture<PmdsCdkDynamicCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkDynamicCardComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkDynamicCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create with dynamicCardComponent', () => {
        component.dynamicCardComponent = new Type() as Type<any>
        jest.spyOn(component.cardTemplate, 'createComponent').mockImplementation(() => {
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
