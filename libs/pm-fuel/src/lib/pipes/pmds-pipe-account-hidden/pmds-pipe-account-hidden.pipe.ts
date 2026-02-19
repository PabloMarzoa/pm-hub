////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pmdsAccountHidden',
  standalone: true,
})
export class PmdsPipeAccountHidden implements PipeTransform {
  transform(value: string): string {
    if (value?.length <= 8) {
		if (value?.length > 4) {
			return value.substring(0, 4) + '****';
		}
      return value;
    } else {
      return value ? `${value.substring(0, 4)} **** ${value.substring(value.length-4, value.length)}` : '-';
    }
  }
}
