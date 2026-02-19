import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkMenuAndSubmenuComponent } from './pmds-cdk-menu-and-submenu.component';

describe('PmdsCdkMenuAndSubmenuComponent', () => {
	let component: PmdsCdkMenuAndSubmenuComponent;
	let fixture: ComponentFixture<PmdsCdkMenuAndSubmenuComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkMenuAndSubmenuComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkMenuAndSubmenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
