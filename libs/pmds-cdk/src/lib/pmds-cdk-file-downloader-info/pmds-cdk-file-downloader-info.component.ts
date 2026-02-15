////////Angular imports
import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsDirectiveTitle } from '@pmhub/pmds-common';
////////Project imports
import { IPmdsCdkFileDownloaderInfoLiterals } from './models/pmds-cdk-file-downloader-info-literals.model.ts';
import {
	IPmdsCdkFileDownloaderInfoButtons,
	IPmdsCdkFileDownloaderInfoFile
} from './models/pmds-cdk-file-downloader-info.model';
import {
	PmdsCdkFileDownloaderInfoSkeletonComponent
} from './components/pmds-cdk-file-downloader-info-skeleton/pmds-cdk-file-downloader-info-skeleton.component';

@Component({
	selector: 'pmds-cdk-file-downloader-info',
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkButtonComponent,
		PmdsDirectiveTitle,
		PmdsCdkFileDownloaderInfoSkeletonComponent,
	],
	templateUrl: './pmds-cdk-file-downloader-info.component.html',
})
export class PmdsCdkFileDownloaderInfoComponent {
	@Input() dataQA!: string;
	@Input() file!: IPmdsCdkFileDownloaderInfoFile;
	@Input() literals!: IPmdsCdkFileDownloaderInfoLiterals;
	@Input() buttons!: IPmdsCdkFileDownloaderInfoButtons[];
	@Input() errorIncluded: boolean = false;
	@Input() skeleton!: boolean;

	@Output() cancelClick: EventEmitter<IPmdsCdkFileDownloaderInfoFile> =
		new EventEmitter<IPmdsCdkFileDownloaderInfoFile>();

	errorsDisplayed = false;
	componentSelector = 'pmds-cdk-file-downloader-info-';

	cancel() {
		this.cancelClick.emit(this.file);
	}
}
