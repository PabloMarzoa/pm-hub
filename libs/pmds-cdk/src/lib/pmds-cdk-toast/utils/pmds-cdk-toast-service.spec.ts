////////Angular imports
import { Injector } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Overlay } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkToastService } from './pmds-cdk-toast-service';

describe('PmdsCdkToastService', () => {
    let service: PmdsCdkToastService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule
            ],
            providers: [
                Injector,
                PmdsCdkToastService,
                Overlay
            ]
        });
    });

    beforeEach(() => {
        service = TestBed.inject(PmdsCdkToastService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should show toast', () => {
        const toast = service.show({ type: 'success' });
        expect(service.toastRefs?.length).toBe(1);
        expect(toast).toBeDefined();
    });

    it('should close all toast', () => {
        service.show({ type: 'error' });
        service.show({ type: 'info' });
        service.show({ type: 'warning' });
        service.closeAll();
        expect(service.toastRefs).toStrictEqual([]);
    });

});
