import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmdsCdkShortcutComponent } from './pmds-cdk-shortcut.component';

describe('PmdsCdkShortcutComponent', () => {
	let component: PmdsCdkShortcutComponent;
	let fixture: ComponentFixture<PmdsCdkShortcutComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkShortcutComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkShortcutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
