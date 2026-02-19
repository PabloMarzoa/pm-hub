////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from '@angular/common';

@Pipe({
	name: 'pmdsAmountFormat',
	standalone: true,
})
export class PmdsPipeAmountFormat implements PipeTransform {
	transform(
		value: string | number | undefined,
		showDecimals = true,
		locale = 'es-ES',
		numberDecimals = 2,
		numberFormat?: string,
		currency?: string
	): string {
		if (numberFormat) {
			locale =
				numberFormat?.indexOf('.') > numberFormat?.indexOf(',')
					? 'en-en'
					: 'es-es';
		}
		if (value !== undefined && value !== null && !Number.isNaN(value)) {
			if (currency) {
				return this.getFormattedValueByCurrency(
					currency === 'HUF' ? 'JPY' : currency,
					locale,
					value
				);
			} else {
				return formatNumber(
					+value,
					locale,
					showDecimals
						? `1.${numberDecimals}-${numberDecimals}`
						: '1.0-0'
				);
			}
		} else {
			return '-';
		}
	}

	private getFormattedValueByCurrency(
		currency: string,
		locale: string,
		value: string | number
	): string {
		const formattedValue = new Intl.NumberFormat(locale, {
			style: 'currency',
			currency: currency,
			useGrouping: true,
		})
			.format(+value)
			.split(/ /)[0]
			.replace(/[^\d.,]/g, '');
		const formattedResult =
			value.toString().indexOf('-') === -1
				? formattedValue
				: '-' + formattedValue;
		return formattedResult;
	}
}
