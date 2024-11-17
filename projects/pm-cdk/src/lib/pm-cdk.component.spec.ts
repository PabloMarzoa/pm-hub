import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmCdkComponent } from './pm-cdk.component';

describe('PmCdkComponent', () => {
  let component: PmCdkComponent;
  let fixture: ComponentFixture<PmCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmCdkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
