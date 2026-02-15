/////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkProcessHeaderComponent } from './pmds-cdk-process-header.component';

describe('PmdsCdkProcessHeaderComponent', () => {
    let component: PmdsCdkProcessHeaderComponent;
    let fixture: ComponentFixture<PmdsCdkProcessHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkProcessHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkProcessHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});