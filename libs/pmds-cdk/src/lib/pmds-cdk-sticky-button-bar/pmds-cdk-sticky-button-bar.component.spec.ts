import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkStickyButtonBarComponent } from './pmds-cdk-sticky-button-bar.component';

describe('PmdsCdkStickyButtonBarComponent', () => {
	let component: PmdsCdkStickyButtonBarComponent;
	let fixture: ComponentFixture<PmdsCdkStickyButtonBarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkStickyButtonBarComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkStickyButtonBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
