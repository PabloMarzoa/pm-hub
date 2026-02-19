import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkTagCategoryComponent } from './pmds-cdk-tag-category.component';

describe('PmdsCdkTagCategoryComponent', () => {
	let component: PmdsCdkTagCategoryComponent;
	let fixture: ComponentFixture<PmdsCdkTagCategoryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkTagCategoryComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkTagCategoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
