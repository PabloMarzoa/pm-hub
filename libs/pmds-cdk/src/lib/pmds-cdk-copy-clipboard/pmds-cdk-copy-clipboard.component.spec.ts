import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PmdsCdkCopyClipboardComponent } from './pmds-cdk-copy-clipboard.component';
import { Clipboard } from '@angular/cdk/clipboard';

describe('PmdsCdkCopyClipboardComponent', () => {
	let component: PmdsCdkCopyClipboardComponent;
	let fixture: ComponentFixture<PmdsCdkCopyClipboardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PmdsCdkCopyClipboardComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(PmdsCdkCopyClipboardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('copyTextToClipboard', () => {
		it('should call copyTextToClipboard', () => {
		  const service = fixture.debugElement.injector.get(Clipboard);
		  const spy = jest.spyOn(service, 'copy');
		  const mouseEvent = {
			stopPropagation: () => {}
		  } as MouseEvent;
		  component.copyTextToClipboard(mouseEvent);
	
		  expect(spy).toHaveBeenCalled();
		});
	  });
	
	  describe('initCopiedTimer', () => {
		it('should show "Copied!" message for 2 seconds', fakeAsync(() => {
		  component['initCopiedTimer']();
		  expect(component.showCopied).toBeTruthy();
		  tick(2000);
		  expect(component.showCopied).toBeFalsy();
		}));
	  });
});
