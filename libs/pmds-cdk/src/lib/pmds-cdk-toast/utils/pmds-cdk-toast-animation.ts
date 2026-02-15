////////Angular imports
import {
    animate,
    AnimationTriggerMetadata,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export const PMDS_CDK_TOAST_ANIMATIONS: {
  readonly fadeToast: AnimationTriggerMetadata;
} = {
    fadeToast: trigger('fadeAnimation', [
        state('default', style({ opacity: 1 })),
        transition('void => *', [style({ opacity: 0 }), animate('{{ fadeIn }}ms')]),
        transition(
            'default => closing',
            animate('{{ fadeOut }}ms', style({ opacity: 0 }))
        )
    ])
};