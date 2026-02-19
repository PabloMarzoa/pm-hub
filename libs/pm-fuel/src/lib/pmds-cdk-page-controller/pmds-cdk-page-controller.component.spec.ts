import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkPageControllerComponent } from './pmds-cdk-page-controller.component';

describe('PmdsCdkPageControllerComponent', () => {
  let component: PmdsCdkPageControllerComponent;
  let fixture: ComponentFixture<PmdsCdkPageControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmdsCdkPageControllerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmdsCdkPageControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('detects change page', () => {
    component.totalItems = 5;
    const spy = jest.spyOn(component.changePage, 'emit');
    component.changePageEmit(2)
    expect(spy).toBeCalled();
    expect(component.actualItem).toBe(2);
  });

  it('page negative', () => {
    component.totalItems = 5;
    const spy = jest.spyOn(component.changePage, 'emit');
    component.changePageEmit(-1)
    expect(spy).not.toBeCalled();
    expect(component.actualItem).toBe(1);
  });

  it('page greater than total page', () => {
    component.totalItems = 5;
    component.actualItem = 5;
    const spy = jest.spyOn(component.changePage, 'emit');
    component.changePageEmit(6)
    expect(spy).not.toBeCalled();
    expect(component.actualItem).toBe(5);
  });
});
