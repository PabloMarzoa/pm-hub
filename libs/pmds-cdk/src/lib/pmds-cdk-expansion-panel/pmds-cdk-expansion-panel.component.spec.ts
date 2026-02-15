import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkExpansionPanelComponent } from './pmds-cdk-expansion-panel.component';

describe('PmdsCdkExpansionPanelComponent', () => {
	let component: PmdsCdkExpansionPanelComponent;
	let fixture: ComponentFixture<PmdsCdkExpansionPanelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkExpansionPanelComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkExpansionPanelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
