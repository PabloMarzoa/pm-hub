////////Angular imports
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
////////Component imports
import {
    PmdsCdkButtonSize,
    PmdsCdkButtonType,
    PMDS_CDK_BUTTON_PRIMARY,
    PMDS_CDK_BUTTON_SECONDARY,
    PMDS_CDK_BUTTON_TERTIARY
} from './models/pmds-cdk-button.models';

@Component({
    selector: 'pmds-cdk-button',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './pmds-cdk-button.component.html'
})
export class PmdsCdkButtonComponent {

    @Input() buttonSize: PmdsCdkButtonSize = 'medium';
    @Input() buttonSizeMobile!: PmdsCdkButtonSize;
    @Input() buttonType: PmdsCdkButtonType = 'primary';
    @Input() customIconStyle!: string;
    @Input() customStyle!: string;
    @Input() dataQA!: string;
    @Input() disabled = false;
    @Input() fullWidth = false;
    @Input() smallFit = false;
    @Input() hideLabelMobile = false;
    @Input() icon!: string;
    @Input() iconPosition: 'left' | 'right' = 'right';
    @Input() label!: string;
    @Input() type: 'button' | 'submit' = 'button';

    @Output() buttonClick: EventEmitter<Event> = new EventEmitter<Event>();

    buttonTypes: Map<PmdsCdkButtonType, string> = new Map([
        ['primary', `bg-color-action-main-default px-3 py-1 font-body-m-bold text-white ${PMDS_CDK_BUTTON_PRIMARY.HOVER} ${PMDS_CDK_BUTTON_PRIMARY.ACTIVE} ${PMDS_CDK_BUTTON_PRIMARY.DISABLED}`],
        ['secondary', `bg-white px-3 py-1 font-body-m-bold text-color-action-main-default border border-color-action-main-default ${PMDS_CDK_BUTTON_SECONDARY.HOVER} ${PMDS_CDK_BUTTON_SECONDARY.ACTIVE} ${PMDS_CDK_BUTTON_SECONDARY.DISABLED}`],
        ['tertiary', `bg-transparent !h-6 !mobile:h-6 font-body-m-regular text-color-action-main-default ${PMDS_CDK_BUTTON_TERTIARY.HOVER} ${PMDS_CDK_BUTTON_TERTIARY.ACTIVE} ${PMDS_CDK_BUTTON_TERTIARY.DISABLED}`],
    ]);
    buttonSizes: Map<PmdsCdkButtonSize, string> = new Map([
        ['small', 'h-8'],
        ['medium', 'h-12']
    ]);
    buttonSizesMobile: Map<PmdsCdkButtonSize, string> = new Map([
        ['small', 'mobile:h-8'],
        ['medium', 'mobile:h-12']
    ]);
    componentSelector = 'pmds-cdk-button-';

    onButtonClick(event: Event) {
        this.buttonClick.emit(event);
    }

    getClass(): string {
        return `
            ${this.buttonTypes.get(this.buttonType)}
            ${this.buttonSizes.get(this.buttonSize)}
            ${this.buttonSizeMobile ? this.buttonSizesMobile.get(this.buttonSizeMobile) : ''}
            ${this.fullWidth ? 'w-full' : ''}
            ${this.smallFit || this.buttonType === 'tertiary' ? '' : 'min-w-[136px] mobile:w-full'}
            ${this.customStyle || ''}
            `;
    }

    getIconClass(): string {
        return `
            ${this.customIconStyle || ''}
            ${this.icon + (!this.label
                ? ''
                : this.iconPosition === 'left'
                    ? ' mr-2 order-first'
                    : ' ml-2')}
            ${this.hideLabelMobile ? ' mobile:ml-0' : ''}`;
    }

}
