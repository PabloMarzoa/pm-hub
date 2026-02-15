////////Angular imports
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
import { PmdsCdkCardAccountActionSkeletonComponent } from './components/pmds-cdk-cards-account-action-skeleton/pmds-cdk-cards-account-action-skeleton.component';

@Component({
    selector: 'pmds-cdk-cards-account-action',
    standalone: true,
    imports: [CommonModule, PmdsCdkButtonComponent, PmdsCdkCardAccountActionSkeletonComponent],
    templateUrl: './pmds-cdk-cards-account-action.component.html'
})
export class PmdsCdkCardsAccountActionComponent {

    @Input() dataQA!: string;
    @Input() icon!: string;
    @Input() label!: string;
    @Input() skeleton!: boolean;

    @Output() clickCard: EventEmitter<void> = new EventEmitter<void>();

    componentSelector = 'pmds-cdk-cards-account-action-';

    emitClickCard(){
        this.clickCard.emit();
    }

}
