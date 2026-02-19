/////////////// Angular imports
import {NgClass} from '@angular/common';
import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
/////////////// Project imports
import {TPmdsCdkToggleSwitchSize} from './models/pmds-cdk-toggle-switch.model'

const CUSTOM_PROVIDERS = [
	{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => PmdsCdkToggleSwitchComponent),
		multi: true,
	},
];

@Component({
	selector: 'pmds-cdk-toggle-switch',
	templateUrl: './pmds-cdk-toggle-switch.component.html',
	standalone: true,
	imports: [NgClass, FormsModule],
	providers: [CUSTOM_PROVIDERS],
})
export class PmdsCdkToggleSwitchComponent implements ControlValueAccessor {

	@Input() dataQA = "";
	@Input() label = "";
	@Input() isDisabled!: boolean;
	@Input() compact = true;
	@Input() size: TPmdsCdkToggleSwitchSize = 'medium'

	@Output() switchChange: EventEmitter<boolean> = new EventEmitter<boolean>();

	componentSelector = 'pmds-cdk-toggle-switch-';
	value = false;
	sizeClass: Map<TPmdsCdkToggleSwitchSize, string> = new Map([
		['small', 'after:content-[""] w-9 h-4 after:h-4 after:w-4 after:top-0 after:-ml-[1px] !peer-checked:after:right-4'],
		['medium', 'after:content-[""] w-14 h-6 after:h-6 after:w-6 after:top-0 after:-ml-[1px] !peer-checked:after:right-6'],
		['large', 'after:content-[""] w-[72px] h-8 after:h-8 after:w-8  after:top-0 after:-ml-[1px] !peer-checked:after:right-8']
	]);

	private onChangeCallback = (_: boolean) => {
	};
	private onTouchCallback = () => {
	};

	setValue(event: Event) {
		const value = (event.target as HTMLInputElement)?.checked;
		this.value = value;
		this.onChangeCallback(value);
		this.onTouchCallback();
		this.switchChange.emit(this.value);
	}

	writeValue(value: boolean): void {
		this.value = value;
	}

	registerOnChange(fn: (_: boolean) => void): void {
		this.onChangeCallback = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouchCallback = fn;
	}

	setDisabledState(disabled: boolean): void {
		this.isDisabled = this.isDisabled ? this.isDisabled : disabled;
	}
}
