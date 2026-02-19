import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkNotificationsPopoverComponent } from './pmds-cdk-notifications-popover.component';

describe('PmdsCdkNotificationsPopoverComponent', () => {
	let component: PmdsCdkNotificationsPopoverComponent;
	let fixture: ComponentFixture<PmdsCdkNotificationsPopoverComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkNotificationsPopoverComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkNotificationsPopoverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
