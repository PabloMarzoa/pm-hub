////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'pmdsExchangeDecimals',
	standalone: true,
})
export class PmdsPipeExchangeDecimals implements PipeTransform {
	transform(
		value: string,
		format: 'xx.xxXXxx' | 'xx.XXxxxx' | 'xx.xxxxXX',
		bigFont: string
	): string {
		return this.calculateSizeOfRate(value, format, bigFont);
	}

	calculateSizeOfRate(value: string, format: string, bigFont: string): any {
		const sizes = {
			smallXSize: format.substring(
				format.indexOf('.') + 1,
				format.indexOf('X')
			).length,
			bigXSize: format.substring(
				format.indexOf('X'),
				format.lastIndexOf('X') + 1
			).length,
			secondSmallXSize: format.substring(format.lastIndexOf('X') + 1)
				.length,
		};
		const decimalChart = value.includes('.') ? '.' : ',';
		if (value.includes(decimalChart)) {
			const intValue = value.substring(0, value.indexOf(decimalChart));

			const decimalValue = value.substring(
				value.indexOf(decimalChart) + 1
			);

			return `<span></span>${intValue}${decimalChart}${decimalValue.substring(
				0,
				sizes.smallXSize
			)}</span><span class="${bigFont}">${decimalValue.substring(
				sizes.smallXSize,
				sizes.smallXSize + sizes.bigXSize
			)}</span><span>${decimalValue.substring(
				sizes.smallXSize + sizes.bigXSize,
				sizes.smallXSize + sizes.bigXSize + sizes.secondSmallXSize
			)}</span>
			`;
		} else {
			return value;
		}
	}
}
