import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkHeaderComponent } from './pmds-cdk-header.component';

describe('PmdsCdkHeaderComponent', () => {
	let component: PmdsCdkHeaderComponent;
	let fixture: ComponentFixture<PmdsCdkHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkHeaderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
