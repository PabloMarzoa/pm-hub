import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkCardsAccountActionComponent } from './pmds-cdk-cards-account-action.component';

describe('PmdsCdkCardsAccountActionComponent', () => {
  let component: PmdsCdkCardsAccountActionComponent;
  let fixture: ComponentFixture<PmdsCdkCardsAccountActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmdsCdkCardsAccountActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmdsCdkCardsAccountActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
