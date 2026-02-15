import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkSkeletonComponent } from './pmds-cdk-skeleton.component';

describe('PmdsCdkSkeletonComponent', () => {
	let component: PmdsCdkSkeletonComponent;
	let fixture: ComponentFixture<PmdsCdkSkeletonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkSkeletonComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkSkeletonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
