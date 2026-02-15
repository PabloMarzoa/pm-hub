////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkTabComponent } from './pmds-cdk-tab.component';

describe('PmdsCdkTabComponent', () => {
    let component: PmdsCdkTabComponent;
    let fixture: ComponentFixture<PmdsCdkTabComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkTabComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
