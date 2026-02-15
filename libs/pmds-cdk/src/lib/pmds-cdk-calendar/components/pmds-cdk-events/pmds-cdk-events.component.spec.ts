import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkEventsComponent } from './pmds-cdk-events.component';

describe('PmdsCdkEventsComponent', () => {
	let component: PmdsCdkEventsComponent;
	let fixture: ComponentFixture<PmdsCdkEventsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkEventsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkEventsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
