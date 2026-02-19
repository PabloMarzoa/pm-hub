////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkOptionButtonsComponent } from './pmds-cdk-option-buttons.component';
import { IPmdsCdkOptionButtons } from './models/pmds-cdk-option-buttons.model';

describe('PmdsCdkOptionButtonsComponent', () => {
    let component: PmdsCdkOptionButtonsComponent;
    let fixture: ComponentFixture<PmdsCdkOptionButtonsComponent>;
    const labelsMock = [
        {
            id: '0',
            label: 'label',
        },
        {
            id: '1',
            label: 'label',
        },
        {
            id: '3',
            label: 'label',
        }
    ] as IPmdsCdkOptionButtons[];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkOptionButtonsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkOptionButtonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('emit click event', () => {
        component.labels = labelsMock;
        const spy = jest.spyOn(component.optionSelected, 'emit');
        component.selectOption('0');
        expect(spy).toHaveBeenCalled();
    });

    it('not labels', () => {
        const fixture2 = TestBed.createComponent(PmdsCdkOptionButtonsComponent);
        const component2 = fixture2.componentInstance;
        fixture2.detectChanges();
        expect(component2).toBeTruthy();
    });
});
