import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkButtonDropdownComponent } from './pmds-cdk-button-dropdown.component';

describe('PmdsCdkButtonDropdownComponent', () => {
	let component: PmdsCdkButtonDropdownComponent;
	let fixture: ComponentFixture<PmdsCdkButtonDropdownComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkButtonDropdownComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkButtonDropdownComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
