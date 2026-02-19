import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkSidebarEmbeddedComponent } from './pmds-cdk-sidebar-embedded.component';

describe('PmdsCdkSidebarEmbeddedComponent', () => {
	let component: PmdsCdkSidebarEmbeddedComponent;
	let fixture: ComponentFixture<PmdsCdkSidebarEmbeddedComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkSidebarEmbeddedComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkSidebarEmbeddedComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
