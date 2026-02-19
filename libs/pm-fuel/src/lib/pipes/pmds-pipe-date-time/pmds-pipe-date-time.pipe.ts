////////Angular imports
import { DatePipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pmdsDateTime',
  standalone: true,
})
export class PmdsPipeDateTime implements PipeTransform {
  private datePipe = inject(DatePipe);
  transform(
    value: number | string | undefined | null,
    dateFormat: string = 'dd/MM/yyyy',
    timeFormat: string = '',
    timezone?: string
  ): string | null {
    if (value) {
      let timezoneDate: string | undefined;
      const valueParse = new Date(value +'+0000').getDate() ? value + '+0000' : value;

      switch (timezone) {
        case 'GMC': {
          timezoneDate = new Date(valueParse).toLocaleString('en', {
            timeZone: 'UTC',
          });
          break;
        }
        default: {
          timezoneDate = new Date(valueParse).toLocaleString('en', {
            timeZone: timezone ? timezone : 'Europe/Madrid',
          });
          break;
        }
      }
      return this.datePipe.transform(
        timezoneDate,
        `${dateFormat}${!!timeFormat && !!dateFormat ? ', ' : ''}${timeFormat}`,
        timezone
      );
    } else {
      return '';
    }
  }
}
