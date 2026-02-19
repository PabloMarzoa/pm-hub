////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkCountryLabelComponent } from './pmds-cdk-country-label.component';


describe('PmdsCdkCountryLabelComponent', () => {
	let component: PmdsCdkCountryLabelComponent;
	let fixture: ComponentFixture<PmdsCdkCountryLabelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkCountryLabelComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkCountryLabelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
