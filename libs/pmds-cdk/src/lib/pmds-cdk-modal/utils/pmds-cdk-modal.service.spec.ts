////////Angular imports
import { Component, Injector } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkModalService } from './pmds-cdk-modal.service';

describe('PmdsCdkModalService', () => {
    let service: PmdsCdkModalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                Injector,
                PmdsCdkModalService,
                Overlay,
            ]
        });
    });

    beforeEach(() => {
        service = TestBed.inject(PmdsCdkModalService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should close', () => {
        service.dialogRef = {
            close: () => { console.log('ok') }
        } as any;
        service.close();
        expect(service).toBeTruthy();
    });

    it('should open modal', () => {
        const modal = service.open(MockModalComponent, { hasBackdropClick: true });
        modal.close();
        modal.events.subscribe((e: unknown) => expect(e).toBeDefined());
        expect(modal).toBeDefined();
    });
});

@Component({
    standalone: true,
    template: ''
})
class MockModalComponent {}
