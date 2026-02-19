import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkProfilePhotoComponent } from './pmds-cdk-profile-photo.component';

describe('PmdsCdkProfilePhotoComponent', () => {
	let component: PmdsCdkProfilePhotoComponent;
	let fixture: ComponentFixture<PmdsCdkProfilePhotoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkProfilePhotoComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkProfilePhotoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
