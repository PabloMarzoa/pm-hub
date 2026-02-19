/* eslint-disable @typescript-eslint/no-empty-function */
////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
////////Component imports
import { PmdsCdkRadioButtonsComponent } from './pmds-cdk-radio-buttons.component';

describe('PmdsCdkRadioButtonComponent', () => {
    let component: PmdsCdkRadioButtonsComponent;
    let fixture: ComponentFixture<PmdsCdkRadioButtonsComponent>;
    const fg: FormGroup =new FormGroup({
        'control': new FormControl('')
});
let fgd: FormGroupDirective;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkRadioButtonsComponent],
            providers: [
            {
                provide: ControlContainer, useValue: fgd
            }
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(PmdsCdkRadioButtonsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    });


    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkRadioButtonsComponent);
        component = fixture.componentInstance;
        fgd = new FormGroupDirective([], []);
        fgd.form = fg;
        component.options = [
            {
                label: 'label',
                value: 'value'
            }
        ];
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('write value', () => {
        component.onChecked('value');
        expect(component.options[0].checked).toBeTruthy;
    });

    it('register form reactive methods', () => {
        const fn = () => {};
        component.writeValue('value');
        expect(component.options[0].checked).toBeTruthy;
        component.writeValue('');
        expect(component.options[0].checked).toBeFalsy;
        component.registerOnChange(fn);
        component.registerOnTouched(fn);
        component.setDisabledState(true);
        expect(component.isDisabled).toBe(true);
    });
});
