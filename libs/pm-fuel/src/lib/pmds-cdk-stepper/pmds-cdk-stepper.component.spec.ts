import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkStepperComponent } from './pmds-cdk-stepper.component';

describe('PmdsCdkStepperComponent', () => {
	let component: PmdsCdkStepperComponent;
	let fixture: ComponentFixture<PmdsCdkStepperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkStepperComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkStepperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
