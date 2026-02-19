import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkGraphsLineChartComponent } from './pmds-cdk-graphs-line-chart.component';

describe('PmdsCdkGraphsLineChartComponent', () => {
	let component: PmdsCdkGraphsLineChartComponent;
	let fixture: ComponentFixture<PmdsCdkGraphsLineChartComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkGraphsLineChartComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkGraphsLineChartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
