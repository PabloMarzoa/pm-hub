import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkAccordionComponent } from './pmds-cdk-accordion.component';

describe('PmdsCdkAccordionComponent', () => {
	let component: PmdsCdkAccordionComponent;
	let fixture: ComponentFixture<PmdsCdkAccordionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkAccordionComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkAccordionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
