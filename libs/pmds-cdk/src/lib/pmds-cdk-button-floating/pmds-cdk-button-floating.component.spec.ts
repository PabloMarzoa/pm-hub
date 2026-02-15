import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkButtonFloatingComponent } from './pmds-cdk-button-floating.component';

describe('PmdsCdkButtonFloatingComponent', () => {
	let component: PmdsCdkButtonFloatingComponent;
	let fixture: ComponentFixture<PmdsCdkButtonFloatingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkButtonFloatingComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkButtonFloatingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
