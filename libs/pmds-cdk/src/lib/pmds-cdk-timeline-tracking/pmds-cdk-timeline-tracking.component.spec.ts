import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkTimelineTrackingComponent } from './pmds-cdk-timeline-tracking.component';

describe('PmdsCdkTimelineTrackingComponent', () => {
	let component: PmdsCdkTimelineTrackingComponent;
	let fixture: ComponentFixture<PmdsCdkTimelineTrackingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkTimelineTrackingComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkTimelineTrackingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
