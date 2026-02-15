////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkActionRowBarComponent } from './pmds-cdk-action-row-bar.component';

describe('PmdsCdkActionRowBarComponent', () => {
    let component: PmdsCdkActionRowBarComponent;
    let fixture: ComponentFixture<PmdsCdkActionRowBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkActionRowBarComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkActionRowBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
