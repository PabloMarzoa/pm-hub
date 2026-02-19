////////Angular imports
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable, Injector, inject } from '@angular/core';
import { Overlay, OverlayConfig, OverlayContainer, OverlayRef } from '@angular/cdk/overlay';
////////Component imports
import { IPmdsCdkActionBarConfig } from '../models/pmds-cdk-action-bar.model';
import { PmdsCdkActionBarComponent } from '../pmds-cdk-action-bar.component';
import { PmdsCdkActionBarRef } from './pmds-cdk-action-bar.ref';
import { PMDS_CDK_ACTION_BAR_CONFIG_TOKEN } from './pmds-cdk-action-bar.config';

@Injectable({
    providedIn: 'root'
})
export class PmdsCdkActionBarService {

    dialogRef!: PmdsCdkActionBarRef;

    private readonly injector = inject(Injector);    
    private readonly overlay = inject(Overlay);
    private readonly overlayContainer = inject(OverlayContainer);

    open(config: IPmdsCdkActionBarConfig): PmdsCdkActionBarRef {
        const actionBarConfig: IPmdsCdkActionBarConfig = config;
        const overlayRef = this.createOverlay();
        const dialogRef = new PmdsCdkActionBarRef(overlayRef);
        
        this.attachModalContainer(overlayRef, dialogRef, actionBarConfig, PmdsCdkActionBarComponent);
        overlayRef.backdropClick().subscribe(() => {
            dialogRef.close();
        });
        this.setOverlayContainerClassList();
        this.dialogRef = dialogRef;
        return dialogRef;
    }

    private attachModalContainer(overlayRef: OverlayRef, dialogRef: PmdsCdkActionBarRef,
        config: IPmdsCdkActionBarConfig, component: ComponentType<PmdsCdkActionBarComponent>
    ) {
        const injector = this.createInjector(dialogRef, config);
        const containerPortal = new ComponentPortal(component, null, injector);
        
        overlayRef.attach(containerPortal);
    }

    private createInjector(dialogRef: PmdsCdkActionBarRef, config: IPmdsCdkActionBarConfig): Injector {
        return Injector.create({
            parent: this.injector,
            providers: [
                { provide: PmdsCdkActionBarRef, useValue: dialogRef },
                { provide: PMDS_CDK_ACTION_BAR_CONFIG_TOKEN, useValue: config }
            ]
        });
    }

    private createOverlay(): OverlayRef {
        const overlayConfig = this.getOverlayConfig();
        
        return this.overlay.create(overlayConfig);
    }

    private getOverlayConfig(): OverlayConfig {
        const positionStrategy = this.overlay.position()
            .global()
            .bottom()
            .centerHorizontally();

        return new OverlayConfig({
            backdropClass: [
                'hidden',
                'pointer-events-none'
            ],
            hasBackdrop: true,
            panelClass: [
                'flex',
                'justify-center',
                'w-full',
                'pointer-events-auto',
                'bg-color-action-main-default',
                'animate-fade-in-up',
                '[&>*]:w-full'
            ],
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    }

    private setOverlayContainerClassList() {
        const container = this.overlayContainer.getContainerElement();
        const wrapper = container.children as HTMLCollection;
        const containerClassList = container.classList as DOMTokenList;
        
        Array.from(wrapper).forEach((element: Element) => element.classList.add(
            'top-0',
            'left-0',
            'h-full',
            'w-full',
            'flex',
            'absolute'
            )
        );      
        containerClassList.add(
            'top-0',
            'left-0',
            'h-full',
            'w-full',
            'fixed',
            'z-[1000]',
            'pointer-events-none'
        );
    }
    
}