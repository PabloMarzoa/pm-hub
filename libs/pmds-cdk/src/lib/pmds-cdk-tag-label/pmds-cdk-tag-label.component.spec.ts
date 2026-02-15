import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkTagLabelComponent } from './pmds-cdk-tag-label.component';

describe('PmdsCdkTagLabelComponent', () => {
	let component: PmdsCdkTagLabelComponent;
	let fixture: ComponentFixture<PmdsCdkTagLabelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkTagLabelComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkTagLabelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
