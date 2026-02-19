////////Angular imports
import { OverlayRef } from '@angular/cdk/overlay';

export class PmdsCdkToastRef {
    
    constructor(
        private overlay: OverlayRef
    ) { }

    close() {
        this.overlay?.dispose();
    }

    isVisible(): HTMLElement {
        return this.overlay && this.overlay?.overlayElement;
    }

    getPosition(): DOMRect {
        return this.overlay?.overlayElement?.getBoundingClientRect();
    }
}