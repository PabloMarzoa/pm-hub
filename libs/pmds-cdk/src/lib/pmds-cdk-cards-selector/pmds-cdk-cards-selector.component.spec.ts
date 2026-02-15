import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkCardsSelectorComponent } from './pmds-cdk-cards-selector.component';

describe('PmdsCdkCardsSelectorComponent', () => {
	let component: PmdsCdkCardsSelectorComponent;
	let fixture: ComponentFixture<PmdsCdkCardsSelectorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkCardsSelectorComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkCardsSelectorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
