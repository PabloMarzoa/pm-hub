import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkTextareaComponent } from './pmds-cdk-textarea.component';

describe('PmdsCdkTextareaComponent', () => {
	let component: PmdsCdkTextareaComponent;
	let fixture: ComponentFixture<PmdsCdkTextareaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkTextareaComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkTextareaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
