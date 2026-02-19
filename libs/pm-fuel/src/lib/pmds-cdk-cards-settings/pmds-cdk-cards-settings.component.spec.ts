import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkCardsSettingsComponent } from './pmds-cdk-cards-settings.component';

describe('PmdsCdkCardsSettingsComponent', () => {
	let component: PmdsCdkCardsSettingsComponent;
	let fixture: ComponentFixture<PmdsCdkCardsSettingsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkCardsSettingsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkCardsSettingsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
