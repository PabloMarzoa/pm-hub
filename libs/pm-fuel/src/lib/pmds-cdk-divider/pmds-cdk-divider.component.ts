////////Angular imports
import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'pmds-cdk-divider',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './pmds-cdk-divider.component.html'
})

export class PmdsCdkDividerComponent {
    @Input() dataQA!: string;
    @Input() styles = 'pb-6 mobile:pb-4';

    componentSelector = 'pmds-cdk-divider-'
}