////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkIdAppSvgQRComponent } from './pmds-cdk-id-app-svg-qr.component';

describe('PmdsCdkIdAppSvgQRComponent: Generic buttons for download id app', () => {
    let component: PmdsCdkIdAppSvgQRComponent;
    let fixture: ComponentFixture<PmdsCdkIdAppSvgQRComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ PmdsCdkIdAppSvgQRComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkIdAppSvgQRComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
