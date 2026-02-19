/////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkPageHeaderComponent } from './pmds-cdk-page-header.component';

describe('PmdsCdkPageHeaderComponent', () => {
    let component: PmdsCdkPageHeaderComponent;
    let fixture: ComponentFixture<PmdsCdkPageHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkPageHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkPageHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('click on back button', () => {
        jest.spyOn(component.clickBackButton, 'emit')
        component.emitBackButton();
        expect(component.clickBackButton.emit).toHaveBeenCalledTimes(1);
    });

});