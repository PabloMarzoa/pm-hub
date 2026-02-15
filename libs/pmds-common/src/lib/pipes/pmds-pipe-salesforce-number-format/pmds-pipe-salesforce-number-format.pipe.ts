////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pmdsSalesforceNumberFormat',
  standalone: true,
})
export class PmdsPipeSalesforceNumberFormat implements PipeTransform {
  transform(
    value: number | string | undefined | null,
    mask: string = '',
    noDecimals: boolean = false,
    separator: string = '.'
  ): string {
    const decimalChart = mask.indexOf('.') > mask.indexOf(',') ? '.' : ',';
    const pointChart = mask.indexOf('.') < mask.indexOf(',') ? '.' : ',';
    const numberDecimals = mask.length - (mask.indexOf(decimalChart) + 1);
    if (value != undefined) {
      const str = String(value);
      return noDecimals
        ? `${((+value).toString().startsWith('-0')
            ? '-0'
            : Math.trunc(+value).toString()
          ).replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, pointChart)}`
        : `${((+value).toString().startsWith('-0')
            ? '-0'
            : Math.trunc(+value).toString()
          ).replace(
            /\B(?!\.\d*)(?=(\d{3})+(?!\d))/g,
            pointChart
          )}${decimalChart}${this.getDecimals(str, separator, numberDecimals)}`;
    }
    return '';
  }

  private getDecimals(
    str: string,
    separator: string,
    numberDecimals: number
  ): string {
    let decimalNumber = `${Number(
      `0.${str.indexOf(separator) !== -1 ? str.split(separator)[1] : ''}`
    )}`;
    decimalNumber = (+decimalNumber).toFixed(numberDecimals);
    return decimalNumber.substring(2);
  }
}
