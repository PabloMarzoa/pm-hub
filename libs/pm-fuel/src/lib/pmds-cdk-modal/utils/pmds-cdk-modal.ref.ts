////////Angular imports
import { OverlayRef } from '@angular/cdk/overlay';
////////Third party libraries
import { Subject } from 'rxjs';
////////Component imports
import { IPmdsCdkModalData, TPmdsCdkModalAction } from '../models/pmds-cdk-modal.model';

export class PmdsCdkModalRef {

    events = new Subject<{ action: TPmdsCdkModalAction, data?: IPmdsCdkModalData<unknown> }>();

    constructor(
        private readonly overlayRef: OverlayRef
    ) { }

    close() {
        this.removeScrollBlockClassList();
        this.overlayRef.dispose();
    }

    private removeScrollBlockClassList() {
        document.querySelector('html')?.classList.remove(
            'fixed',
            'w-full'
        );
    }

}