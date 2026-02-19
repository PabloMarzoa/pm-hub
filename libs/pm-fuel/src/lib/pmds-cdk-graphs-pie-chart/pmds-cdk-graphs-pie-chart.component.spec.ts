import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkGraphsPieChartComponent } from './pmds-cdk-graphs-pie-chart.component';

describe('PmdsCdkGraphsPieChartComponent', () => {
	let component: PmdsCdkGraphsPieChartComponent;
	let fixture: ComponentFixture<PmdsCdkGraphsPieChartComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkGraphsPieChartComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkGraphsPieChartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
