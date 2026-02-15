////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pmdsTransactionReference',
  standalone: true,
})
export class PmdsPipeTransactionReference implements PipeTransform {
  private referenceStatus = ['NOTPROVIDED', 'NONREF'];

    transform(value: string, text = '-'): string {
        return this.referenceStatus.includes(value) ? text : value;
    }
}
