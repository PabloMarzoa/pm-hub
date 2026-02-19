import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkCardsInformationComponent } from './pmds-cdk-cards-information.component';

describe('PmdsCdkCardsInformationComponent', () => {
	let component: PmdsCdkCardsInformationComponent;
	let fixture: ComponentFixture<PmdsCdkCardsInformationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkCardsInformationComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkCardsInformationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
