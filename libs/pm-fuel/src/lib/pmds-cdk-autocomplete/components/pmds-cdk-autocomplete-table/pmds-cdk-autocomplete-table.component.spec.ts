////////Angular imports
import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { IPmdsCdkAutocompleteTableConfig } from '../../models/pmds-cdk-autocomplete-table.model';
import { PmdsCdkAutocompleteTableComponent } from './pmds-cdk-autocomplete-table.component';

describe('NxtdTableComponent', () => {
    let component: PmdsCdkAutocompleteTableComponent;
    let fixture: ComponentFixture<PmdsCdkAutocompleteTableComponent>;
    const mockTableConfig: IPmdsCdkAutocompleteTableConfig = {
        rowComponent: {
            component: new Type() as Type<unknown>
        },
        customHeight: ''
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkAutocompleteTableComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkAutocompleteTableComponent);
        component = fixture.componentInstance;
        component.config = mockTableConfig;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('on click', () => {
        const spy = jest.spyOn(component.selectRow, 'emit');
        component.onClick({});
        expect(spy).toHaveBeenCalled();
    });
});
