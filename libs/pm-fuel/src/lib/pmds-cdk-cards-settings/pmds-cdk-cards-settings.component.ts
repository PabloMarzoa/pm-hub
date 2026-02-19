////////Angular imports
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
////////PNXT libraries
import { PmdsCdkTagLabelComponent } from '../pmds-cdk-tag-label/pmds-cdk-tag-label.component';
import { PmdsCdkToggleSwitchComponent } from '../pmds-cdk-toggle-switch/pmds-cdk-toggle-switch.component';
import { PmdsCdkTextFieldComponent } from '../pmds-cdk-text-field/pmds-cdk-text-field.component';
import { PmdsCdkCheckboxComponent } from '../pmds-cdk-checkbox/pmds-cdk-checkbox.component';
////////Component imports
import { IPmdsCdkCardsSettingsItem } from './models/pmds-cdk-cards-settings-item.model';
import { TPmdsCdkCardsSettingsType } from './models/pmds-cdk-cards-settings-type.model';
import {
	PmdsCdkCardsSettingsSkeletonComponent
} from './components/pmds-cdk-cards-settings-skeleton/pmds-cdk-cards-settings-skeleton.component';

@Component({
	selector: 'pmds-cdk-cards-settings',
	standalone: true,
	imports: [
		CommonModule,
		PmdsCdkTagLabelComponent,
		PmdsCdkToggleSwitchComponent,
		PmdsCdkTextFieldComponent,
		PmdsCdkCheckboxComponent,
		ReactiveFormsModule,
		FormsModule,
		CdkDropList,
		CdkDrag,
		PmdsCdkCardsSettingsSkeletonComponent
	],
	providers: [FormGroupDirective],
	templateUrl: './pmds-cdk-cards-settings.component.html',
})
export class PmdsCdkCardsSettingsComponent {

	@Input() dataQA!: string;
	@Input() settingsItems!: IPmdsCdkCardsSettingsItem[];
	@Input() showCheckbox!: boolean;
	@Input() showDeleteAction!: boolean;
	@Input() showEditAction!: boolean;
	@Input() skeleton!: boolean;
	@Input() type: TPmdsCdkCardsSettingsType = 'moveDelete';

	@Output() editedItem: EventEmitter<IPmdsCdkCardsSettingsItem> =
		new EventEmitter<IPmdsCdkCardsSettingsItem>();
	@Output() checkedItem: EventEmitter<IPmdsCdkCardsSettingsItem> =
		new EventEmitter<IPmdsCdkCardsSettingsItem>();
	@Output() toggledItem: EventEmitter<IPmdsCdkCardsSettingsItem> =
		new EventEmitter<IPmdsCdkCardsSettingsItem>();
	@Output() deletedItem: EventEmitter<IPmdsCdkCardsSettingsItem> =
		new EventEmitter<IPmdsCdkCardsSettingsItem>();

	componentSelector = 'pmds-cdk-cards-settings-';

	drop(event: CdkDragDrop<IPmdsCdkCardsSettingsItem[]>) {
		moveItemInArray(
			this.settingsItems,
			event.previousIndex,
			event.currentIndex
		);
	}
}
