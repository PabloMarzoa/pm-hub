import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkMessageComponent } from './pmds-cdk-message.component';

describe('PmdsCdkMessageComponent', () => {
	let component: PmdsCdkMessageComponent;
	let fixture: ComponentFixture<PmdsCdkMessageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkMessageComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkMessageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
