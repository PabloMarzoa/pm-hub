////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pmdsOnlyDecimals',
  standalone: true,
})
export class PmdsPipeOnlyDecimals implements PipeTransform {
  transform(
    value: number | string | undefined | null,
    separator: string = '.'
  ): string {
    if (value) {
      const str = String(value);
      return str.indexOf(separator) !== -1
        ? separator + str.split(separator)[1]
        : '';
    } else {
      return '';
    }
  }
}
