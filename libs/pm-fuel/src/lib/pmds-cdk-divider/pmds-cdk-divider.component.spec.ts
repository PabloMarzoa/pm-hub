////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkDividerComponent } from './pmds-cdk-divider.component';

describe('PmdsCdkDividerComponent', () => {
    let component: PmdsCdkDividerComponent;
    let fixture: ComponentFixture<PmdsCdkDividerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkDividerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkDividerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
