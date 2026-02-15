////////Angular imports
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsDirectiveTitle } from './pmds-directive-title.directive';

@Component({
  template: `
    <div class="max-w-[8rem]">
      <div id="testId" pmdsTitle>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dolor
        fuga quis, vel quibusdam possimus sapiente consequatur, architecto ex
        eligendi hic libero modi? Odio nulla voluptatem consequatur, quisquam
        suscipit dolorem!
      </div>
    </div>
  `,
})
class TestComponent {}

describe('NxtdTitleDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [PmdsDirectiveTitle]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show tooltip', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('#testId');
    div.dispatchEvent(new MouseEvent('mouseenter'));
    expect(div).toBeTruthy();
  });
});