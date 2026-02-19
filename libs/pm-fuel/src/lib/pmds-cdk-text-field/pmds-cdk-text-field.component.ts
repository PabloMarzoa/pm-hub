////////Angular imports
import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgClass } from '@angular/common';
////////PNXT libraries
import { PmdsCdkTagLabelComponent } from '../pmds-cdk-tag-label/pmds-cdk-tag-label.component';
import { PmdsCdkCopyClipboardComponent } from '../pmds-cdk-copy-clipboard/pmds-cdk-copy-clipboard.component';
import { PmdsDirectiveTooltip } from '../../index';
import { PmdsDirectiveTitle } from '../../index';
import { PmdsCdkTagCategoryComponent } from '../pmds-cdk-tag-category/pmds-cdk-tag-category.component';
////////Component imports
import { IPmdsCdkTextFieldType } from './models/pmds-cdk-text-field-type.model';
import { IPmdsCdkTextField } from './models/pmds-cdk-text-field.model';
import { PmdsCdkAmountTextFieldSkeletonComponent } from './components/components/pmds-cdk-text-field-skeleton/pmds-cdk-text-field-skeleton.component';

const MOBILE_BREAKPOINT = 767;

@Component({
	selector: 'pmds-cdk-text-field',
	standalone: true,
	imports: [
		NgClass,
		PmdsCdkTagLabelComponent,
		PmdsCdkCopyClipboardComponent,
		PmdsDirectiveTooltip,
		PmdsDirectiveTitle,
		PmdsCdkTagCategoryComponent,
		PmdsCdkAmountTextFieldSkeletonComponent
	],
	templateUrl: './pmds-cdk-text-field.component.html',
})
export class PmdsCdkTextFieldComponent implements OnInit, OnChanges {
	@Input() dataQA!: string;
	@Input() field!: IPmdsCdkTextField;
	@Input() iconValue!: string;
	@Input() skeleton!: boolean;
	@Input() type!: IPmdsCdkTextFieldType;
	@Input() typeMobile!: IPmdsCdkTextFieldType;
	@Input() disabledEllipsis!: boolean;

	actualView: 'mobile' | 'screen' = window.innerWidth < MOBILE_BREAKPOINT ? 'mobile' : 'screen';
	componentSelector = 'pmds-cdk-text-field-'
	listValues: string[] = [];
	value = '';
	typeShow!: IPmdsCdkTextFieldType;

	inlineTypes = [
		'two-line-bold',
		'two-line-tag',
		'two-line-regular',
		'list',
		'two-line-link',
		'two-line-figure-bold',
		'two-line-country'
	];

	flexTypes = [
		'inline-bold',
		'inline-regular',
		'inline-figure-bold',
		'inline-figure-regular',
	];

	@HostListener('window:resize', ['$event'])
	onResize() {
		this.actualView = window.innerWidth < MOBILE_BREAKPOINT ? 'mobile' : 'screen';
		this.typeShow = this.actualView === 'screen' ? this.type : this.typeMobile || this.type;
	}

	ngOnInit(): void {
		this.typeShow = this.actualView === 'screen' ? this.type : this.typeMobile || this.type;
		this.parseValues();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['field']) {
			this.parseValues();
		}
	}

	private parseValues() {
		this.type === 'list'
		? (this.listValues = [...this.field.value])
		: (this.value = this.field.value as string);
	}
}
