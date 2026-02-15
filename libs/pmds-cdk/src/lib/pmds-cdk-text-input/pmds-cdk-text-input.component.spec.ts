////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
////////Component imports
import { PmdsCdkTextInputComponent } from './pmds-cdk-text-input.component';

describe('PmdsCdkTextInputComponent', () => {
    let component: PmdsCdkTextInputComponent;
    let fixture: ComponentFixture<PmdsCdkTextInputComponent>;
    const fg: FormGroup = new FormGroup({
        'control': new FormControl('', Validators.required)
    });
    let fgd: FormGroupDirective;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PmdsCdkTextInputComponent
            ],
            providers: [
                FormGroupDirective
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkTextInputComponent);
        component = fixture.componentInstance;
        fgd = new FormGroupDirective([], []);
        fgd.form = fg;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show error true on focus out', () => {
        component.formControl = fg;
        component.formControlName = 'control';
        fg.get('control')?.markAsDirty();
        fg.get('control')?.markAsTouched();
        component.onFocusOut();
        expect(component.showError).toBeTruthy();
    });

    it('should show error false on focus out', () => {
        component.formControl = fg;
        component.formControlName = 'control';
        fg.get('control')?.setValue('value');
        component.onFocusOut();
        expect(component.showError).toBeFalsy();
    });

    it('should call show format value on focus out', () => {
        const spy1 = jest.spyOn<any, any>(component, 'showFormatValue');
        component.type = 'number';
        component.onFocusOut();
        expect(spy1).toHaveBeenCalled();
    });

    it('should set value on input and call methods', () => {
        const spy1 = jest.spyOn(component, 'onTouch');
        const spy2 = jest.spyOn(component, 'onChange');
        component.onInput({ target: { value: '1' } } as any);
        expect(component.value).toBe('1');
        expect(spy1).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();
    });

    it('register form reactive methods', () => {
        const fn = () => {}
        component.writeValue('1');
        expect(component.value).toBe('1');
        component.writeValue('');
        expect(component.value).toBe('');
        component.setDisabledState(true);
        component.registerOnChange(fn);
        component.registerOnTouched(fn);
        expect(component.isDisabled).toBe(true);
    });

});
