////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkDownloadIdAppButtonsComponent } from './pmds-cdk-download-id-app-buttons.component';
import { PmdsCdkIdAppSvgQRComponent } from './components/pmds-cdk-id-app-svg-qr/pmds-cdk-id-app-svg-qr.component';

describe('PmdsCdkDownloadIdAppButtonsComponent', () => {
  let component: PmdsCdkDownloadIdAppButtonsComponent;
  let fixture: ComponentFixture<PmdsCdkDownloadIdAppButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PmdsCdkDownloadIdAppButtonsComponent,
        PmdsCdkIdAppSvgQRComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PmdsCdkDownloadIdAppButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});