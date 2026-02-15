////////Angular imports
import {Directive, ElementRef, forwardRef, HostListener, inject, Renderer2} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
	selector: '[pmdsCdkOnlyNumber]',
	standalone: true,
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => PmdsCdkOnlyNumberDirective),
		multi: true
	}]
})
export class PmdsCdkOnlyNumberDirective implements ControlValueAccessor {
	private elementRef = inject(ElementRef);
	private renderer = inject(Renderer2);
	private value: string | undefined;

	@HostListener('input', ['$event.target.value'])
	onInputChange(value: string) {
		const filteredValue: string = filterValue(value);
		this.updateTextInput(filteredValue, this.value !== filteredValue);
	}

	@HostListener('blur')
	onBlur() {
		this.onTouched();
	}

	onChange = (_: unknown) => {
		_;
	};
	onTouched = () => undefined;

	private updateTextInput(value: string, propagateChange: boolean) {
		this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
		if (propagateChange) {
			this.onChange(value);
		}
		this.value = value;
	}

	// ControlValueAccessor Interface
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
	}

	writeValue(value: any): void {
		value = value ? String(value) : '';
		this.updateTextInput(value, false);
	}
}

function filterValue(value: string): string {
	return value.replace(/[^0-9]*/g, '');
}
