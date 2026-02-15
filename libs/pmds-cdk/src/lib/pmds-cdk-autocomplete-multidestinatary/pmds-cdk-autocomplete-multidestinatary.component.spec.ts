import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkAutocompleteMultidestinataryComponent } from './pmds-cdk-autocomplete-multidestinatary.component';

describe('PmdsCdkAutocompleteMultidestinataryComponent', () => {
	let component: PmdsCdkAutocompleteMultidestinataryComponent;
	let fixture: ComponentFixture<PmdsCdkAutocompleteMultidestinataryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkAutocompleteMultidestinataryComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(
			PmdsCdkAutocompleteMultidestinataryComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
