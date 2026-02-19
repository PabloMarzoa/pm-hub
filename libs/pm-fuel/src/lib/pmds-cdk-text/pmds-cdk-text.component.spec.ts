import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkTextComponent } from './pmds-cdk-text.component';

describe('PmdsCdkTextComponent', () => {
	let component: PmdsCdkTextComponent;
	let fixture: ComponentFixture<PmdsCdkTextComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkTextComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkTextComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
