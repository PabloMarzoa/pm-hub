////////Angular imports
import { Directive, HostListener } from '@angular/core';
////////PNXT libraries

@Directive({
	selector: '[pmdsNoLeadingSpacesInput]',
	standalone: true,
})
export class PmdsDirectiveNoLeadingSpacesInput {
	@HostListener('input', ['$event']) onInput(event: any) {
        const input = event.target as HTMLInputElement;
        const inputValue = input.value;
        const trimmedValue = inputValue.trimStart();

        if (inputValue !== trimmedValue) {
            input.value = trimmedValue;
            input.dispatchEvent(new Event('input'));
        }
    }
}
