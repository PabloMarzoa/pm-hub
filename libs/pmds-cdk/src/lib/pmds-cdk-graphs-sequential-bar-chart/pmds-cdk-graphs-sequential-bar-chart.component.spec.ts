import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkGraphsSequentialBarChartComponent } from './pmds-cdk-graphs-sequential-bar-chart.component';

describe('PmdsCdkGraphsSequentialBarChartComponent', () => {
	let component: PmdsCdkGraphsSequentialBarChartComponent;
	let fixture: ComponentFixture<PmdsCdkGraphsSequentialBarChartComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkGraphsSequentialBarChartComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(
			PmdsCdkGraphsSequentialBarChartComponent
		);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
