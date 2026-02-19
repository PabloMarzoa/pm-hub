import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkButtonAllFiltersComponent } from './pmds-cdk-button-all-filters.component';

describe('PmdsCdkButtonAllFiltersComponent', () => {
	let component: PmdsCdkButtonAllFiltersComponent;
	let fixture: ComponentFixture<PmdsCdkButtonAllFiltersComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkButtonAllFiltersComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkButtonAllFiltersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
