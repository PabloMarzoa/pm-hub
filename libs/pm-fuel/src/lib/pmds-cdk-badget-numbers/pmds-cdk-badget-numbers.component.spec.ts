import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkBadgetNumbersComponent } from './pmds-cdk-badget-numbers.component';

describe('PmdsCdkBadgetNumbersComponent', () => {
	let component: PmdsCdkBadgetNumbersComponent;
	let fixture: ComponentFixture<PmdsCdkBadgetNumbersComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkBadgetNumbersComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkBadgetNumbersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
