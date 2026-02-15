/////////Angular imports
import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkProcessHeaderLiterals } from './models/pmds-cdk-process-header-literals.model';
import { IPmdsCdkProcessHeaderActions } from './models/pmds-cdk-process-header-actions.model';
import { TPmdsCdkProcessHeaderMaxDesktopWidth } from './models/pmds-cdk-process-header-max-desktop-width.model';

@Component({
    selector: 'pmds-cdk-process-header',
    standalone: true,
    imports: [
        NgClass,
        NgStyle,
        PmdsCdkButtonComponent
    ],
    templateUrl: './pmds-cdk-process-header.component.html'
})

export class PmdsCdkProcessHeaderComponent {

    @Input() literals: IPmdsCdkProcessHeaderLiterals = {
        title: '',
        stepTitle: '',
        stepSubtitle: '',
     };
     @Input() dataQA!: string;
     @Input() titleImg: string | null = null;
     @Input() progress = 50;
     @Input() subtitleStyles!: string;
     @Input() centerSubtitle = false;
     @Input() maxDesktopWidth: TPmdsCdkProcessHeaderMaxDesktopWidth = 'max-w-[808px]';
     @Input() actions: IPmdsCdkProcessHeaderActions[] = [];
     @Input() backButton!: IPmdsCdkProcessHeaderActions;

    componentSelector = 'pmds-cdk-process-header-';
}
