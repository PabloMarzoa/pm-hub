////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pmdsTruncateEllipsis',
  standalone: true,
})
export class PmdsPipeTruncateEllipsis implements PipeTransform {
  transform(value: string, max: number = 12): string {
    return value.length > max
      ? `${value.substring(0, max - 1).trim()}...`
      : value;
  }
}
