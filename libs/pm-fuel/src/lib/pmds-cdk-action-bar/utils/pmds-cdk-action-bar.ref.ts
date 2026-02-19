////////Angular imports
import { OverlayRef } from '@angular/cdk/overlay';
////////Third party libraries
import { Subject } from 'rxjs';

export class PmdsCdkActionBarRef {

    events = new Subject<{ action: 'clear' }>();

    constructor(
        private readonly overlayRef: OverlayRef
    ) { }

    close() {
        this.overlayRef.dispose();
    }
    
}