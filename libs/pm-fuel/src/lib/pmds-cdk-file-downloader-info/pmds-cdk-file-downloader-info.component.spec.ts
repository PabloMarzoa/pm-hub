////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
////////Component imports
import { PmdsCdkFileDownloaderInfoComponent } from './pmds-cdk-file-downloader-info.component';

describe('PmdsCdkFileDownloaderInfoComponent', () => {
    let component: PmdsCdkFileDownloaderInfoComponent;
    let fixture: ComponentFixture<PmdsCdkFileDownloaderInfoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkFileDownloaderInfoComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkFileDownloaderInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        component.remove();
        component.download();
        expect(component).toBeTruthy();
    });

    it('should emit download and remove', () => {
        const spy = jest.spyOn(component.downloadClick, 'emit')
        component.download();
        expect(spy).toHaveBeenCalledTimes(1);
        const spy2 = jest.spyOn(component.removeClick, 'emit')
        component.remove();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy2).toHaveBeenCalledTimes(1);
    });

});