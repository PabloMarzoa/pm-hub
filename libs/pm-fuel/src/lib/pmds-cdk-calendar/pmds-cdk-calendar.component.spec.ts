import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkCalendarComponent } from './pmds-cdk-calendar.component';

describe('PmdsCdkCalendarComponent', () => {
	let component: PmdsCdkCalendarComponent;
	let fixture: ComponentFixture<PmdsCdkCalendarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkCalendarComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkCalendarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
