////////Angular imports
import { TestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Overlay } from '@angular/cdk/overlay';
////////Component imports
import { PmdsCdkActionBarService } from './pmds-cdk-action-bar.service';

describe('PmdsCdkActionBarService', () => {
    let service: PmdsCdkActionBarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                PmdsCdkActionBarService,
                Overlay,
                Injector
            ]
        });
    });

    beforeEach(() => {
        service = TestBed.inject(PmdsCdkActionBarService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should open action bar', () => {
        jest.spyOn<any, any>(service, 'attachModalContainer').mockImplementation();
        const actionBar = service.open({ hasBackdropClick: true });
        actionBar.close();
        actionBar.events.subscribe((e: any) => expect(e).toBeDefined());
        expect(actionBar).toBeDefined();
    });
});
