////////Angular imports
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Injectable, Injector, inject } from '@angular/core';
import {
	Overlay,
	OverlayConfig,
	OverlayContainer,
	OverlayRef,
} from '@angular/cdk/overlay';
////////Component imports
import {
	IPmdsCdkModalConfig,
	IPmdsCdkModalData,
	PMDS_CDK_MODAL_DATA_TOKEN,
} from '../models/pmds-cdk-modal.model';
import {
	PMDS_CDK_MODAL_CONFIG_TOKEN,
	PMDS_CDK_MODAL_DEFAULT_CONFIG,
} from './pmds-cdk-modal.config';
import { PmdsCdkModalRef } from './pmds-cdk-modal.ref';
import { PmdsCdkModalComponent } from '../pmds-cdk-modal.component';

@Injectable({
	providedIn: 'root',
})
export class PmdsCdkModalService {
	dialogRef!: PmdsCdkModalRef;

	private injector = inject(Injector);
	private modalConfig!: IPmdsCdkModalConfig;
	private overlay = inject(Overlay);
	private overlayContainer = inject(OverlayContainer);

	open<T>(
		component: ComponentType<T> | null,
		config: IPmdsCdkModalConfig = {},
		data?: IPmdsCdkModalData<unknown>
	): PmdsCdkModalRef {
		this.modalConfig = { ...PMDS_CDK_MODAL_DEFAULT_CONFIG, ...config };
		const overlayRef = this.createOverlay();
		const dialogRef = new PmdsCdkModalRef(overlayRef);
		const modalComponent =
			component || (PmdsCdkModalComponent as ComponentType<T>);

		this.attachModalContainer<T>(
			overlayRef,
			dialogRef,
			this.modalConfig,
			modalComponent,
			data
		);
		overlayRef.backdropClick().subscribe(() => {
			if (this.modalConfig.hasBackdropClick) {
				dialogRef.close();
			}
		});
		this.setOverlayContainerClassList();
		this.setScrollBlockClassList();
		this.dialogRef = dialogRef;
		return dialogRef;
	}

	close() {
		this.dialogRef.close();
	}

	private attachModalContainer<T>(
		overlayRef: OverlayRef,
		dialogRef: PmdsCdkModalRef,
		config: IPmdsCdkModalConfig,
		component: ComponentType<T>,
		data?: IPmdsCdkModalData<unknown>
	) {
		const injector = this.createInjector(dialogRef, config, data);
		const containerPortal = new ComponentPortal(component, null, injector);

		overlayRef.attach(containerPortal);
	}

	private createInjector(
		dialogRef: PmdsCdkModalRef,
		config: IPmdsCdkModalConfig,
		data?: IPmdsCdkModalData<unknown>
	): Injector {
		return Injector.create({
			parent: this.injector,
			providers: [
				{ provide: PmdsCdkModalRef, useValue: dialogRef },
				{ provide: PMDS_CDK_MODAL_CONFIG_TOKEN, useValue: config },
				{ provide: PMDS_CDK_MODAL_DATA_TOKEN, useValue: data },
			],
		});
	}

	private createOverlay(): OverlayRef {
		const overlayConfig = this.getOverlayConfig();
		return this.overlay.create(overlayConfig);
	}

	private getOverlayConfig(): OverlayConfig {
		const positionStrategy = this.overlay
			.position()
			.global()
			.centerHorizontally()
			.centerVertically();

		return new OverlayConfig({
			hasBackdrop: true,
			backdropClass: [
				'bg-[#57575780]',
				'absolute',
				'top-0',
				'bottom-0',
				'left-0',
				'right-0',
				'pointer-events-auto',
			],
			panelClass: ['z-[1000]', 'pointer-events-auto'],
			scrollStrategy: this.overlay.scrollStrategies.block(),
			positionStrategy,
		});
	}

	private setOverlayContainerClassList() {
		const container = this.overlayContainer.getContainerElement();
		const wrapper = container.children as HTMLCollection;
		const containerClassList = container.classList as DOMTokenList;
		Array.from(wrapper).forEach((element: Element) => {
			element.classList.add(
				'absolute',
				'top-0',
				'left-0',
				'h-full',
				'w-full',
				'flex',
				'animate-fade-in_fast',
				this.modalConfig.isSidebar ? '!justify-end' : 'justify-center',
				this.modalConfig.isSidebar ? '!items-start' : 'items-center'
			);
			this.modalConfig.isSidebar && element.classList.add('tablet:!items-end');
		});
		containerClassList.add(
			'fixed',
			'top-0',
			'left-0',
			'h-full',
			'w-full',
			'z-[1000]',
			'pointer-events-none'
		);
	}

	private setScrollBlockClassList() {
		document.querySelector('html')?.classList.add('fixed', 'w-full');
	}

}
