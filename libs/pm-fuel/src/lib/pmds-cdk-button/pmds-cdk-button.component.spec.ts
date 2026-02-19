////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkButtonComponent } from './pmds-cdk-button.component';

describe('PmdsCdkButtonComponent', () => {
  let component: PmdsCdkButtonComponent;
  let fixture: ComponentFixture<PmdsCdkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmdsCdkButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmdsCdkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emit value', () => {
    const spy = jest.spyOn(component.buttonClick, 'emit');
    component.onButtonClick(new Event('click'));
    expect(spy).toBeCalled();
  });
});
