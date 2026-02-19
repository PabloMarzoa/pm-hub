import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkLoaderComponent } from './pmds-cdk-loader.component';

describe('PmdsCdkLoaderComponent', () => {
    let component: PmdsCdkLoaderComponent;
    let fixture: ComponentFixture<PmdsCdkLoaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkLoaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
});