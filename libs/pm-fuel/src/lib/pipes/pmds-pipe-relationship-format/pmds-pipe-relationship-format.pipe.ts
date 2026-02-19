////////Angular imports
import { Pipe, PipeTransform } from '@angular/core';
////////Component imports
import { TPmdsRelationshipFormatType } from './models/relationship-format-type.model';
import { IPmdsRelationshipFormat } from './models/relationship-format.model';
import { IPmdsRelationshipLiterals } from './models/relationship-literals.model';

@Pipe({
  name: 'pmdsRelationshipFormat',
  standalone: true,
})
export class PmdsPipeRelationshipFormat implements PipeTransform {

    private formats = new Map([
        ['father', {text: 'Father', identifier: 'FATHER'}],
        ['mother', {text: 'Mother', identifier: 'MOTHER'}],
        ['selfPayed', {text: 'Same person', identifier: 'SAME_PERSON'}]
    ]);
    
    transform(value: string | number | undefined | null, type: TPmdsRelationshipFormatType = 'text', literals: IPmdsRelationshipLiterals): string {
        this.getLiterals(literals);
        const newValue: string = value ? `${value}` : '';
        const availableFormat: IPmdsRelationshipFormat = this.formats.get(newValue) || {
            identifier: newValue,
            text: newValue
        };
        return availableFormat[type];
    }

    private getLiterals(literals: IPmdsRelationshipLiterals) {
        this.formats = new Map([
            ['father', {text: literals.father, identifier: 'FATHER'}],
            ['mother', {text: literals.mother, identifier: 'MOTHER'}],
            ['selfPayed', {text: literals.selfPayed, identifier: 'SAME_PERSON'}]
        ]);
    }
}
