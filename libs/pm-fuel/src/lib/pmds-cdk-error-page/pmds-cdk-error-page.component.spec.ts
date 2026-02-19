import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkErrorPageComponent } from './pmds-cdk-error-page.component';

describe('PmdsCdkErrorPageComponent', () => {
	let component: PmdsCdkErrorPageComponent;
	let fixture: ComponentFixture<PmdsCdkErrorPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkErrorPageComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkErrorPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
