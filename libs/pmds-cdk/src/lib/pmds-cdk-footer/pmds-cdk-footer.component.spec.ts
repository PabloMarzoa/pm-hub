import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkFooterComponent } from './pmds-cdk-footer.component';

describe('PmdsCdkFooterComponent', () => {
	let component: PmdsCdkFooterComponent;
	let fixture: ComponentFixture<PmdsCdkFooterComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkFooterComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkFooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
