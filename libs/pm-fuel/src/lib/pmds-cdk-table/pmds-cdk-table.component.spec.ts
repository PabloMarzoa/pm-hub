////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from '@angular/core';
////////Component imports
import { PmdsCdkTableComponent } from './pmds-cdk-table.component';
import { IPmdsCdkTableConfig } from './models/pmds-cdk-table.config.model';


describe('PmdsCdkTableComponent', () => {
    let component: PmdsCdkTableComponent;
    let fixture: ComponentFixture<PmdsCdkTableComponent>;

    const mockTableConfig: IPmdsCdkTableConfig = {
        headerColumns: [{
            label: 'label',
            styles: 'styles',
            order: 'ASC'
        }],
        rowComponent: {
            component: new Type() as Type<unknown>,
            cardComponent: new Type() as Type<unknown>
        }
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PmdsCdkTableComponent
            ],
            providers: [

            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkTableComponent);
        component = fixture.componentInstance;
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({ observe: () => null });
        window.IntersectionObserver = mockIntersectionObserver;
        component.tableConfig = mockTableConfig;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should onHeadClicked clicked', () => {
        component.onHeadClicked(() => undefined, 0);
        expect(component.headerColumnsConfig[0].order).toBe('DES');
        component.onHeadClicked(() => undefined, 0);
        expect(component.headerColumnsConfig[0].order).toBe('ASC');
    });

    it('should onClicked clicked', () => {
        component.onClicked({ test: 'test' } as any)
        expect(component).toBeTruthy();
    });

    it('should onClicked clicked with selectRowAction', () => {
        component.rowComponentConfig = { selectRowAction: () => undefined } as any;
        component.onClicked({ test: 'test' } as any)
        expect(component).toBeTruthy();
    });

    it('should onCardClicked clicked', () => {
        component.onCardClicked({ test: 'test' } as any)
        expect(component).toBeTruthy();
    });

});
