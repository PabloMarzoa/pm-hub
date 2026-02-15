import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkButtonModalComponent } from './pmds-cdk-button-modal.component';

describe('PmdsCdkButtonModalComponent', () => {
	let component: PmdsCdkButtonModalComponent;
	let fixture: ComponentFixture<PmdsCdkButtonModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkButtonModalComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkButtonModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
