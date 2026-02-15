////////Angular imports
import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	inject,
	Input,
	OnChanges,
	OnDestroy,
	Output,
	Renderer2,
	SimpleChanges,
	ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
////////PNXT libraries
import { PmdsDirectiveTitle } from '@pmhub/pmds-common';
////////Component imports
import { TPmdsCdkMenuSubmenuType } from './models/pmds-cdk-menu-submenu-type.model';
import { IPmdsCdkMenuOptions } from './models/pmds-cdk-menu-submenu-options.model';

const MOBILE_BREAKPOINT = 768;

@Component({
	selector: 'pmds-cdk-menu-and-submenu',
	standalone: true,
	imports: [CommonModule, PmdsDirectiveTitle],
	templateUrl: './pmds-cdk-menu-and-submenu.component.html',
})
export class PmdsCdkMenuAndSubmenuComponent implements AfterViewInit, OnDestroy, OnChanges {

	@Input() dataQA!: string;
	@Input() selectMenu!: string;
	@Input() selectSubmenu!: string;
	@Input() menuOptions: IPmdsCdkMenuOptions[] = [];
	@Input() type: TPmdsCdkMenuSubmenuType = 'OPERATIONAL';

	@Output() selectedMenuItemChange: EventEmitter<{menuItem: string, submenuItem: string}> = new EventEmitter<{menuItem: string, submenuItem: string}>();

	@ViewChild('menuComponent', {static: false}) menuComponent!: ElementRef;

	componentSelector = 'pmds-cdk-menu-and-submenu-';
	selectedMenuItem = '';
	selectedSubmenuItem = '';
	openMenu = '';

	private renderer = inject(Renderer2);
	private unlistener!: () => void;

	ngAfterViewInit() {
		this.unlistener = this.renderer.listen('window', 'click', (e: Event) => {
			if (this.openMenu !== '' && e.target !== this.menuComponent?.nativeElement) {
				this.closeSubmenu();
			}
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['selectMenu']) {
			this.selectedMenuItem = this.selectMenu;
		}
		if (changes['selectSubmenu']) {
			this.selectedSubmenuItem = this.selectSubmenu;
		}
	}

	ngOnDestroy() {
		!!this.unlistener && this.unlistener();
	}

	setMenuItem(menuItem: string) {
		this.selectedMenuItem = menuItem;
		this.selectedSubmenuItem = '';
		this.selectedMenuItemChange.emit({menuItem, submenuItem: ''});
	}

	openOnHover(menuItem: IPmdsCdkMenuOptions) {
		window.innerWidth >= MOBILE_BREAKPOINT && (this.openMenu = menuItem.label);
	}

	setSubmenuItem(menuItem: string, submenuItem: string) {
		this.selectedMenuItem = menuItem;
		this.selectedSubmenuItem = submenuItem;
		this.selectedMenuItemChange.emit({menuItem, submenuItem});
	}

	selectMenuButton(menuItem: IPmdsCdkMenuOptions, $event: MouseEvent) {
		$event.stopPropagation();
		menuItem.action && menuItem.action();
		if (menuItem.children) {
			this.openMenu = menuItem.label;
			if (this.type === 'ADMIN' && menuItem.children.findIndex(child => child.label === this.selectedSubmenuItem) !== -1) {
				this.selectedSubmenuItem = '';
			}
		} else {
			this.closeSubmenu();
			this.setMenuItem(menuItem.label);
		}
	}

	private closeSubmenu() {
		this.openMenu = '';
	}
}
