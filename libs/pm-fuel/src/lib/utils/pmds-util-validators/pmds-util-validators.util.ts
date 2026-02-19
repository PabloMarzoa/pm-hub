////////Angular imports
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
////////Component imports
import { PmdsUtilNumberParser } from './utils/pmds-util-validators-number-parser';

export class PmdsUtilValidators {
	static validChars =
		'a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ';

	static minTime(min: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (
				PmdsUtilValidators.isEmptyValue(control.value) ||
				PmdsUtilValidators.isEmptyValue(min)
			) {
				return null;
			}
			const hours: number = control.value.split(':')[0];
			const minutes: number = control.value.split(':')[1];
			const hoursMin: number = min.split(':')[0] as unknown as number;
			const minutesMin: number = min.split(':')[1] as unknown as number;

			return hours < hoursMin ||
				(hours === hoursMin && minutes < minutesMin)
				? { min: { min: min, actual: control.value } }
				: null;
		};
	}

	static maxTime(max: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (
				PmdsUtilValidators.isEmptyValue(control.value) ||
				PmdsUtilValidators.isEmptyValue(max)
			) {
				return null;
			}
			const hours: number = control.value.split(':')[0];
			const minutes: number = control.value.split(':')[1];
			const hoursMax: number = max.split(':')[0] as unknown as number;
			const minutesMax: number = max.split(':')[1] as unknown as number;

			return hours > hoursMax ||
				(hours === hoursMax && minutes > minutesMax)
				? { max: { max: max, actual: control.value } }
				: null;
		};
	}

	static min(min: number, locale: string = 'es-ES'): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (
				PmdsUtilValidators.isEmptyValue(control.value) ||
				PmdsUtilValidators.isEmptyValue(min)
			) {
				return null;
			}
			const value: number = new PmdsUtilNumberParser(locale).parse(
				control.value
			);
			return !isNaN(value) && value < min
				? { min: { min: min, actual: control.value } }
				: null;
		};
	}

	static max(max: number, locale: string = 'es-ES'): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (
				PmdsUtilValidators.isEmptyValue(control.value) ||
				PmdsUtilValidators.isEmptyValue(max)
			) {
				return null;
			}
			const value: number = new PmdsUtilNumberParser(locale).parse(
				control.value
			);
			return !isNaN(value) && value > max
				? { max: { max: max, actual: control.value } }
				: null;
		};
	}

	static nameRegex(
		control: AbstractControl
	): { [key: string]: unknown } | null {
		if (control.value === null || control.value === undefined) {
			return null;
		}
		if (control.value.length > 50) {
			return {
				maxlength: {
					requiredLength: 50,
					actualLength: control.value.length,
				},
			};
		}
		const value = control.value;
		if (value.charAt(0) === ' ' || value.charAt(value.length - 1) === ' ') {
			return { pattern: true };
		}
		const regex = new RegExp(`^(?:['_.,&\\-\\sa-zA-ZÁ-ÿ0-9])+$`);
		const words: string[] = value.split(' ');
		let isValid = true;
		words.forEach((word) => {
			!regex.test(word) && (isValid = false);
		});
		return isValid ? null : { pattern: true };
	}

	static emailRegex(
		control: AbstractControl
	): { [key: string]: unknown } | null {
		const regex = new RegExp(
			`^[${PmdsUtilValidators.validChars}0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,}$`
		);
		if (control.value !== null) {
			return regex.test(control.value) ? null : { pattern: true };
		}
		return null;
	}

	static noSpaces(
		control: AbstractControl
	): { [key: string]: unknown } | null {
		if (control.value === null || control.value === undefined) {
			return null;
		}
		return (control.value as string).indexOf(' ') >= 0
			? { pattern: true }
			: null;
	}

	static noWhitespace(
		control: AbstractControl
	): { [key: string]: unknown } | null {
		return PmdsUtilValidators.isEmptyValue(control.value)
			? { required: true }
			: null;
	}

	static isEmptyValue(value?: unknown): boolean {
		return (
			value === null ||
			value === undefined ||
			(typeof value === 'string' &&
				value.replace(/\s/g, '').length === 0) ||
			(Array.isArray(value) && value.length === 0)
		);
	}

	static studentId(control: AbstractControl): { [key: string]: any } | null {
		if (control.value === null || control.value === undefined) {
			return null;
		}
		const regex = new RegExp(`^[a-zA-ZÄ-ü0-9-_@.+]*$`);
		return regex.test(control.value) ? null : { pattern: true };
	}

	static minLengthArray(min: number): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (control.value?.length >= min) return null;

			return { min: { min: min, actual: control.value.length } };
		};
	}

	static maxAmount(
		max: number,
		decimalCharacter: ',' | '.' = ','
	): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			if (control.value) {
				const parseValue =
					decimalCharacter === ','
						? Number(
								control.value.toString().replace('.', '').replace(',', '.')
						  )
						: Number(control.value.toString().replace(',', ''));
				if (parseValue < max) {
					return null;
				}
				return { max: { max: max, actual: control.value } };
			}
			return null;
		};
	}
}
