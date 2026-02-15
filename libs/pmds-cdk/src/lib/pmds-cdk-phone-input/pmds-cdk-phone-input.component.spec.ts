import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkPhoneInputComponent } from './pmds-cdk-phone-input.component';

describe('PmdsCdkPhoneInputComponent', () => {
	let component: PmdsCdkPhoneInputComponent;
	let fixture: ComponentFixture<PmdsCdkPhoneInputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkPhoneInputComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkPhoneInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
