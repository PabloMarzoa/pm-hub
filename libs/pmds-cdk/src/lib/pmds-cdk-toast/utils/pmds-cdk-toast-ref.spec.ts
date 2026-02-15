////////Angular imports
import { Overlay } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkToastRef } from './pmds-cdk-toast-ref';

describe('PmdsCdkToastRef', () => {
    let overlay: Overlay;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                Overlay
            ]
        });
    });

    beforeEach(() => {
        overlay = TestBed.inject(Overlay);
    });

    it('should be created', () => {
        const overlayRef = overlay.create();
        const toastRef = new PmdsCdkToastRef(overlayRef);
        expect(toastRef).toBeTruthy();
    });

});
