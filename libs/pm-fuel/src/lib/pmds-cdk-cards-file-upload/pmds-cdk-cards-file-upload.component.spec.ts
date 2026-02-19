import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkCardsFileUploadComponent } from './pmds-cdk-cards-file-upload.component';

describe('PmdsCdkCardsFileUploadComponent', () => {
	let component: PmdsCdkCardsFileUploadComponent;
	let fixture: ComponentFixture<PmdsCdkCardsFileUploadComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkCardsFileUploadComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkCardsFileUploadComponent);
		component = fixture.componentInstance;
		component.literals = {
			chooseFileTitle: 'Choose a file or drag and drop here',
			chooseFileSubtitle: 'Specifications',
			loadingTitle: 'Loading message',
			loadingSubtitle: 'Secondary text',
			button: 'Browser file',
			errorText: 'Error to upload file',
			errorMultipleText: 'Only can upload one file',
			errorTypeText: 'This format is not valid',
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
