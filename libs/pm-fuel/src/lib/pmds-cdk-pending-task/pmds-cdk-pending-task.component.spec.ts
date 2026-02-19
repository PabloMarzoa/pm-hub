import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkPendingTaskComponent } from './pmds-cdk-pending-task.component';

describe('PmdsCdkPendingTaskComponent', () => {
	let component: PmdsCdkPendingTaskComponent;
	let fixture: ComponentFixture<PmdsCdkPendingTaskComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkPendingTaskComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkPendingTaskComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
