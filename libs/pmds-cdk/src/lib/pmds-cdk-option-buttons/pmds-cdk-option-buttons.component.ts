////////Angular imports
import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	forwardRef,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
////////Component imports
import { IPmdsCdkOptionButtons } from './models/pmds-cdk-option-buttons.model';
import { PmdsCdkOptionButtonsSkeletonComponent } from './components/pmds-cdk-option-buttons-skeleton/pmds-cdk-option-buttons-skeleton.component';

@Component({
	selector: 'pmds-cdk-option-buttons',
	standalone: true,
	imports: [NgClass, PmdsCdkOptionButtonsSkeletonComponent],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PmdsCdkOptionButtonsComponent),
			multi: true,
		},
	],
	templateUrl: './pmds-cdk-option-buttons.component.html',
})
export class PmdsCdkOptionButtonsComponent implements OnInit {
	@Input() likeDislike!: boolean;
	@Input() noSelectionByDefault = false;
	@Input() dataQA = '';
	@Input() labels: IPmdsCdkOptionButtons[] = [];
	@Input() selectedOption?: string | null;
	@Input() size: 'small' | 'large' = 'large';
	@Input() skeleton!: boolean;

	@Output() optionSelected = new EventEmitter<string>();

	componentSelector = 'pmds-cdk-option-buttons-';
	options: IPmdsCdkOptionButtons[] = [];

	private likeDislikeOptions: IPmdsCdkOptionButtons[] = [
		{
			id: 'like',
			icon: 'pmicons-help-us-to-improve text-color-icon-success',
			active: false,
		},
		{
			id: 'dislike',
			icon: 'pmicons-help-us-to-improve-down text-color-icon-error',
			active: false,
		},
	];

	ngOnInit() {
		this.options = (
			this.likeDislike ? this.likeDislikeOptions : this.labels
		).map((option: IPmdsCdkOptionButtons, index: number) => ({
			...option,
			active: this.selectedOption
				? option.id === this.selectedOption
				: !this.noSelectionByDefault && index === 0,
		}));
	}

	onChange = (_: unknown) => {};

	onTouch = () => {};

	selectOption(optionId: string) {
		this.onTouch();
		this.optionSelected.emit(optionId);
		this.onChange(optionId);
		this.options = this.options.map((option: IPmdsCdkOptionButtons) => ({
			...option,
			active: option.id === optionId,
		}));
	}

	writeValue(value: string | number) {
		this.options = this.labels.map(
			(option: IPmdsCdkOptionButtons, index: number) => ({
				...option,
				active: option.id === value,
			})
		);
	}

	registerOnChange(fn: (_: unknown) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => unknown) {
		this.onTouch = fn;
	}
}
