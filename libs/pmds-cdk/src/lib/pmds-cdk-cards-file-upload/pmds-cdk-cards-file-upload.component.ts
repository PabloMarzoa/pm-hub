////////Angular imports
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkLoaderComponent } from '../pmds-cdk-loader/pmds-cdk-loader.component';
////////Component imports
import { TPmdsCdkCardsFileUploadStates } from './models/pmds-cdk-cards-file-upload-states.model';
import { IPmdsCdkCardsFileUploadLiterals } from './models/pmds-cdk-cards-file-upload-literals.model';
import {
	PmdsCdkCardFileUploadSkeletonComponent
} from './components/pmds-cdk-cards-file-upload-skeleton/pmds-cdk-cards-file-upload-skeleton.component';

@Component({
	selector: 'pmds-cdk-cards-file-upload',
	standalone: true,
	imports: [
		PmdsCdkButtonComponent,
		PmdsCdkLoaderComponent,
		NgClass,
		PmdsCdkCardFileUploadSkeletonComponent
	],
	templateUrl: './pmds-cdk-cards-file-upload.component.html'
})
export class PmdsCdkCardsFileUploadComponent implements OnChanges {
	@ViewChild('selectFilesInput', { static: true }) selectFilesInput!: ElementRef;

	@Input() accept!: string;
	@Input() dataQA!: string;
	@Input() literals!: IPmdsCdkCardsFileUploadLiterals;
	@Input() multiFiles = false;
	@Input() maxFiles!: number;
	@Input() maxSize!: number;
	@Input() disabledLoading!: boolean;
	@Input() skeleton!: boolean;
	@Input() state: TPmdsCdkCardsFileUploadStates = 'initial';

	@Output() fileSelected = new EventEmitter<File | FileList>();
	@Output() stateChange = new EventEmitter<TPmdsCdkCardsFileUploadStates>();

	componentSelector = 'pmds-cdk-cards-file-upload-';
	errorText!: string;
	isDragover = false;

	ngOnChanges(changes: SimpleChanges): void {
		if(this.selectFilesInput) {
			changes['state'].currentValue === 'initial' && (this.selectFilesInput && (this.selectFilesInput.nativeElement.value = ''));
		}
	}

	onDrop(event: DragEvent) {
		this.errorText = this.literals.errorText;
		event.preventDefault();
		const files: FileList = event.dataTransfer?.files as FileList;
		if (this.maxFiles && files.length > this.maxFiles) {
			this.errorText = this.literals.errorFileMax || this.errorText;
			this.selectFilesInput && (this.selectFilesInput.nativeElement.value = '');
			this.updateValue('error');
			return;
		}
		if (!this.checkAcceptFiles(files)) {
			this.errorText = this.literals.errorTypeText || this.errorText;
			this.selectFilesInput && (this.selectFilesInput.nativeElement.value = '');
			this.updateValue('error');
			return;
		}
		if (!this.checkSizeFiles(files)) {
			this.errorText = this.literals.errorMaxSize || this.errorText;
			this.selectFilesInput && (this.selectFilesInput.nativeElement.value = '');
			this.updateValue('error');
			return;
		}
		if (this.multiFiles) {
			!this.disabledLoading && this.updateValue('loading');
			this.fileSelected.emit(files);
		} else {
			if (files?.length !== 1) {
				this.errorText = this.literals.errorMultipleText || this.errorText;
				this.selectFilesInput && (this.selectFilesInput.nativeElement.value = '');
				this.updateValue('error');
			} else {
				!this.disabledLoading && this.updateValue('loading');
				this.fileSelected.emit(files[0]);
			}
		}
	}

	selectFile(event: Event) {
		this.errorText = this.literals.errorText;
		const files = (event?.target as HTMLInputElement)?.files as FileList;
		if (this.maxFiles && files.length > this.maxFiles) {
			this.errorText = this.literals.errorFileMax || this.errorText;
			this.selectFilesInput && (this.selectFilesInput.nativeElement.value = '');
			this.updateValue('error');
			return;
		}
		if (!this.checkSizeFiles(files)) {
			this.errorText = this.literals.errorMaxSize || this.errorText;
			this.selectFilesInput && (this.selectFilesInput.nativeElement.value = '');
			this.updateValue('error');
			return;
		}
		!this.disabledLoading && this.updateValue('loading');
		this.fileSelected.emit(files.length === 1 ? files[0] : files);
	}

	onDragOver(event: DragEvent) {
		event.stopPropagation();
		event.preventDefault();
	}

	private checkAcceptFiles(files: FileList): boolean {
		if (this.accept) {
			const acceptedTypes: string[] = this.accept.split(',');
			return !Array.from(files).some(
				(file: File) => !acceptedTypes.includes(file.type)
			);
		} else {
			return true;
		}
	}

	private checkSizeFiles(files: FileList): boolean {
		if (this.maxSize) {
			return !Array.from(files).some(
				(file: File) => file.size > this.maxSize
			);
		} else {
			return true;
		}
	}

	private updateValue(value: TPmdsCdkCardsFileUploadStates) {
		this.state = value;
		this.stateChange.emit(value);
		if(value === 'error') {
			this.isDragover = false;
		}
	}
}
