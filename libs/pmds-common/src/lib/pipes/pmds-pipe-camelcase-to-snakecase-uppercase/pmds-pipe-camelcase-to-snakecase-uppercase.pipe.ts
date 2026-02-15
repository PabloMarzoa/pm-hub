////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pmdsCamelcaseToSnakecaseUppercase',
  standalone: true,
})
export class PmdsPipeCamelcaseToSnakecaseUppercase implements PipeTransform {
    transform(value: string): string  {
        return value.replace(/[A-Z]/g, (letter: string) => `_${letter}`).toUpperCase();
    }
}
