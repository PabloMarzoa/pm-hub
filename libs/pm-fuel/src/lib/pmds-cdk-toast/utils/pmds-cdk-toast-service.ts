////////Angular imports
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector, inject } from '@angular/core';
import { Overlay, OverlayConfig, OverlayContainer } from '@angular/cdk/overlay';
////////PPMDS libraries
import { IPmdsCdkAlertData, PMDS_CDK_ALERT_DATA_TOKEN } from '../../pmds-cdk-alert/models/pmds-cdk-alert.model';
////////Component imports
import { IPmdsCdkToastConfig } from '../models/pmds-cdk-toast-config.model';
import { PmdsCdkToastComponent } from '../pmds-cdk-toast.component';
import { PMDS_CDK_TOAST_CONFIG_TOKEN, PMDS_CDK_TOAST_DEFAULT_CONFIG } from './pmds-cdk-toast-config';
import { PmdsCdkToastRef } from './pmds-cdk-toast-ref';

@Injectable({
    providedIn: 'root'
})
export class PmdsCdkToastService {

    lastToast!: PmdsCdkToastRef;
    toastRefs: PmdsCdkToastRef[] = [];

    private readonly injector = inject(Injector);
    private readonly overlay = inject(Overlay);
    private readonly overlayContainer = inject(OverlayContainer);
    private readonly toastConfig: IPmdsCdkToastConfig = PMDS_CDK_TOAST_DEFAULT_CONFIG;

    show(data: IPmdsCdkAlertData, config?: IPmdsCdkToastConfig): PmdsCdkToastRef {
        const toastConfig: IPmdsCdkToastConfig = this.getToastConfig(config);
        const overlayRef = this.overlay.create(this.getPositionStrategy(toastConfig));
        const toastRef = new PmdsCdkToastRef(overlayRef);
        const injector = this.getInjector(data, toastRef, toastConfig);
        const toastPortal = new ComponentPortal(PmdsCdkToastComponent, null, injector);

        this.setOverlayContainerClassList(toastConfig);
        this.lastToast = toastRef;
        this.toastRefs.push(toastRef);
        overlayRef.attach(toastPortal);
        return toastRef;
    }

    closeAll() {
        this.toastRefs = this.toastRefs
            ?.filter((toastRef: PmdsCdkToastRef) => toastRef?.close());
    }

    private getPositionStrategy(config: IPmdsCdkToastConfig) {
        const positionStrategy = this.overlay.position().global().top('0');

        return new OverlayConfig({
            panelClass: config?.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            positionStrategy
        });
    }

    private getInjector(data: IPmdsCdkAlertData, toastRef: PmdsCdkToastRef, config: IPmdsCdkToastConfig): Injector {
        return Injector.create({
            parent: this.injector,
            providers: [
                { provide: PmdsCdkToastRef, useValue: toastRef },
                { provide: PMDS_CDK_ALERT_DATA_TOKEN, useValue: data },
                { provide: PMDS_CDK_TOAST_CONFIG_TOKEN, useValue: config }
            ],
        });
    }

    private getToastConfig(config?: IPmdsCdkToastConfig): IPmdsCdkToastConfig {
        const panelClass = (
            Array.isArray(config?.panelClass)
                ? config?.panelClass
                : [config?.panelClass]
        ) as string[];
        const toastPanelClass = (
            Array.isArray(this.toastConfig?.panelClass)
                ? this.toastConfig?.panelClass
                : [this.toastConfig?.panelClass]
            ) as string[];
        return {
            ...this.toastConfig,
            ...config,
            panelClass: [...toastPanelClass, ...panelClass]
        };
    }

    private setOverlayContainerClassList(config?: IPmdsCdkToastConfig) {
        const container = this.overlayContainer.getContainerElement();
        const wrapper = container.children as HTMLCollection;
        const containerClassList = container.classList as DOMTokenList;

        Array.from(wrapper).forEach((element: Element, index: number) =>
            {
                element.classList.add(
                    'flex',
                    'mx-auto',
                    'w-fit',
                    'mb-4'
                );
                (index + 1) === Array.from(wrapper).length && element.classList.add(
                    '!relative',
                    'z-[1000]'
                )
            }
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
        container.style.paddingTop = `${config?.position?.top}px`;
    }

}
