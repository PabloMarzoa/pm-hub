////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'pmdsTypeOf',
	standalone: true,
})
export class PmdsPipeTypeOf implements PipeTransform {
	transform(value: unknown): string {
		return typeof value;;
	}
}
