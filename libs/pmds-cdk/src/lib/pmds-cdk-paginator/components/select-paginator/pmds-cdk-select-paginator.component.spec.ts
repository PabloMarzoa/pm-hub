////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkSelectPaginatorComponent } from './pmds-cdk-select-paginator.component';

describe('PmdsCdkSelectPaginatorComponent', () => {
    let component: PmdsCdkSelectPaginatorComponent;
    let fixture: ComponentFixture<PmdsCdkSelectPaginatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkSelectPaginatorComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkSelectPaginatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should click outside for select', () => {
        component.displayValues = true;
        window.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(component.displayValues).toBeFalsy();
    });

    it('on value click', () => {
        const spy = jest.spyOn(component.valueClick, 'emit');
        component.onValueClick(20);
        expect(spy).toBeCalled();  
    });
});