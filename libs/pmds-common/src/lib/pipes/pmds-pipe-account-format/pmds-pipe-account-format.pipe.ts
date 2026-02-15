////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pmdsAccountFormat',
    standalone: true
})
export class PmdsPipeAccountFormat implements PipeTransform {
    transform(value: string): string {
        return value ?
			`${value.substring(0, 4)} ${value.substring(4, 8)} ${value.substring(8, 12)} ${value.substring(12, 16)} ${value.substring(16, 20)} ${value.substring(20, (value.length))}`
            : '-';
    }
}
