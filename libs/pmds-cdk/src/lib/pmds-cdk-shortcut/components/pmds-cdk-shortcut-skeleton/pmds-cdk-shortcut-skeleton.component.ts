////////Angular imports
import { Component, Input } from '@angular/core';
////////PPMDS libraries
import { PmdsCdkSkeletonComponent } from '../../../pmds-cdk-skeleton/pmds-cdk-skeleton.component';
////////Component imports
import { IPmdsCdkShortcutItem } from '../../models/pmds-cdk-shortcut-item.model';

@Component({
    selector: 'pmds-cdk-shortcut-skeleton',
    standalone: true,
    imports: [PmdsCdkSkeletonComponent],
    templateUrl: './pmds-cdk-shortcut-skeleton.component.html',
})
export class PmdsCdkShortcutSkeletonComponent {
    @Input() dataQA!: string;
	@Input() shortcutItems!: IPmdsCdkShortcutItem[];

}
