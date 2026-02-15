
////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { PmdsCdkToggleSwitchComponent } from './pmds-cdk-toggle-switch.component';

describe('PmdsCdkToggleSwitchComponent', () => {
	let component: PmdsCdkToggleSwitchComponent;
	let fixture: ComponentFixture<PmdsCdkToggleSwitchComponent>;

	const fg: FormGroup = new FormGroup({
        'control': new FormControl('')
    });

	beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkToggleSwitchComponent],
            providers: [
                FormGroupDirective
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkToggleSwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('change value', () => {
		component.writeValue(true);
		expect(component.value).toBe(true);
		expect(component).toBeTruthy();
	});

});
