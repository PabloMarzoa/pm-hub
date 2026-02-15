import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkEditableContentComponent } from './pmds-cdk-editable-content.component';

describe('PmdsCdkEditableContentComponent', () => {
	let component: PmdsCdkEditableContentComponent;
	let fixture: ComponentFixture<PmdsCdkEditableContentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkEditableContentComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkEditableContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
