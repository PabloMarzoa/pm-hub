////////Angular imports
import { AnimationEvent } from '@angular/animations';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
////////PPMDS libraries
import { PMDS_CDK_ALERT_DATA_TOKEN } from '../pmds-cdk-alert/models/pmds-cdk-alert.model';
import { PmdsCdkAlertComponent } from '../pmds-cdk-alert/pmds-cdk-alert.component';
////////Component imports
import { TPmdsCdkToastAnimationState } from './models/pmds-cdk-toast-animation-state.model';
import { PMDS_CDK_TOAST_ANIMATIONS } from './utils/pmds-cdk-toast-animation';
import { PMDS_CDK_TOAST_CONFIG_TOKEN } from './utils/pmds-cdk-toast-config';
import { PmdsCdkToastRef } from './utils/pmds-cdk-toast-ref';

@Component({
    selector: 'pmds-cdk-toast',
    standalone: true,
    imports: [
        NgClass,
        PmdsCdkAlertComponent
    ],
    templateUrl: './pmds-cdk-toast.component.html',
    animations: [PMDS_CDK_TOAST_ANIMATIONS.fadeToast]
})
export class PmdsCdkToastComponent implements OnInit, OnDestroy {

    actionFnData!: () => void;
    animationState: TPmdsCdkToastAnimationState = 'default';
    componentSelector = 'pmds-cdk-toast-';
    dataQA = '';

    readonly config = inject(PMDS_CDK_TOAST_CONFIG_TOKEN);
    readonly data = inject(PMDS_CDK_ALERT_DATA_TOKEN);
    readonly ref = inject(PmdsCdkToastRef);

    private intervalId: ReturnType<typeof setTimeout> | null = null;

    ngOnInit() {
        if (!this.data?.cancelAutoClose) {
            this.intervalId = setTimeout(
                () => (this.animationState = 'closing'),
                this.config?.timeInterval
            );
        }
        if (this.data?.actionFn) {
            this.actionFnData = this.data.actionFn;
            this.data.actionFn = this.autoCloseActionFn.bind(this);
        }
        this.dataQA = this.config?.dataQA || '';
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearTimeout(this.intervalId);
        }
    }

    close() {
        if (this.data?.closeFn) {
            this.data.closeFn();
        }
        this.ref.close();
    }

    action() {
        if (this.data?.actionFn) {
            this.animationState = 'closing';
            this.data.actionFn();
        }
    }

    onFadeFinished(event: AnimationEvent) {
        const { toState } = event;
        const fadeOutDone = (toState as TPmdsCdkToastAnimationState) === 'closing';
        const animationFinished = this.animationState === 'closing';

        if (fadeOutDone && animationFinished) {
            this.ref.close();
        }
    }

    private autoCloseActionFn() {
        this.actionFnData();
        this.ref.close();
    }

}
