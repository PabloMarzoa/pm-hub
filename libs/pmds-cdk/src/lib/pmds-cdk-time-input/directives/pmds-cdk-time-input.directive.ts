
////////Angular imports
import { Directive, HostListener } from '@angular/core';

const TIME_SEPARATOR = ':';

@Directive({
  	selector: '[pmdsCdkTimeFormat]',
	standalone: true
})
export class PmdsCdkTimeFormatDirective {

	@HostListener('input', ['$event.target'])
	onInput(input: HTMLInputElement) {
		input.value = this.formatTime(input?.value);
	}

	private formatTime(value: string): string {
		if (value?.slice(-1) === TIME_SEPARATOR) {
			return value?.replace(TIME_SEPARATOR, '');
		}
		if (value?.length >= 2 && !value.includes(TIME_SEPARATOR)) {
			return value?.slice(0, 2) + TIME_SEPARATOR + value?.slice(2);
		}
		return value;
	}

}