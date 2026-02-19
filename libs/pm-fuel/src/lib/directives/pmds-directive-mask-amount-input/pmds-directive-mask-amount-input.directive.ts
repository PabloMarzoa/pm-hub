////////Angular imports
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[pmdsMaskAmountInput]',
	standalone: true,
})
export class PmdsDirectiveMaskAmountInput {
	@Input() pmdsMAIDecimalCharacter = ',';
    @Input() pmdsMAIMaxIntLength = 5;

    @HostListener('input', ['$event']) onInput(event: any) {
        const input = event.target as HTMLInputElement;
        const regex = new RegExp(`[^\\d${this.pmdsMAIDecimalCharacter}]`, 'g');        
        let value = input.value.replace(regex, '');
        
        if (value.length) {
            const parts = value.split(`${this.pmdsMAIDecimalCharacter}`);
            let integerPart = parts[0].substring(0, this.pmdsMAIMaxIntLength);
            integerPart = integerPart.length ? String(parseInt(integerPart, 10)) : '';
            const decimalPart = parts[1] ? parts[1].substring(0, 2) : '';
            let decimal = '';
                        
            if (input.value.indexOf(`${this.pmdsMAIDecimalCharacter}`) > -1) {
                if (integerPart.length) 
                    decimal = this.pmdsMAIDecimalCharacter;
                else {
                    decimal =`${this.pmdsMAIDecimalCharacter}`;
                    integerPart = '0';
                }
            } else if (
                event.inputType !== 'deleteContentBackward' && 
                ((integerPart.length===1 && integerPart === '0') || (integerPart.length === this.pmdsMAIMaxIntLength))
            )
                decimal = this.pmdsMAIDecimalCharacter;            

            value = decimalPart ? `${integerPart}${decimal}${decimalPart}` : `${integerPart}${decimal}`;
        }

        input.value = value;
    }
}
