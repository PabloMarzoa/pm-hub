import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkTableCompleteComponent } from './pmds-cdk-table-complete.component';

describe('PmdsCdkTableCompleteComponent', () => {
	let component: PmdsCdkTableCompleteComponent;
	let fixture: ComponentFixture<PmdsCdkTableCompleteComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkTableCompleteComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkTableCompleteComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
