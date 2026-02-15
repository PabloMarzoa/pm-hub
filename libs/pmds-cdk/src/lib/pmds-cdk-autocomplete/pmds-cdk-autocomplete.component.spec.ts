////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
////////Component imports
import { PmdsCdkAutocompleteComponent } from './pmds-cdk-autocomplete.component';
import { PmdsCdkAutocompleteDynamicLabelComponent } from './components/pmds-cdk-autocomplete-dynamic-label/pmds-cdk-autocomplete-dynamic-label.component';
import { PmdsCdkAutocompleteDynamicRowComponent } from './components/pmds-cdk-autocomplete-table/pmds-cdk-autocomplete-dynamic-row/pmds-cdk-autocomplete-dynamic-row.component';
import { IPmdsCdkAutocompleteConfig } from './models/pmds-cdk-autocomplete.model';

describe('PmdsCdkAutocompleteComponent', () => {
    let component: PmdsCdkAutocompleteComponent;
    let fixture: ComponentFixture<PmdsCdkAutocompleteComponent>;
    
    const fg: FormGroup = new FormGroup({
        'control': new FormControl('')
    });
    let fgd: FormGroupDirective;

    const mockAutocompleteConfig: IPmdsCdkAutocompleteConfig = {
        input: {
            labelComponent: {
                component: PmdsCdkAutocompleteDynamicLabelComponent
            }
        },
        table: {
            rowComponent: {
                component: PmdsCdkAutocompleteDynamicRowComponent
            }
        }
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PmdsCdkAutocompleteComponent,
                PmdsCdkAutocompleteDynamicLabelComponent,
                PmdsCdkAutocompleteDynamicRowComponent
            ],
            providers: [
                {
                    provide: ControlContainer, useValue: fgd
                }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PmdsCdkAutocompleteComponent);
        component = fixture.componentInstance;
        fgd = new FormGroupDirective([], []);
        fgd.form = fg;
        component.control = fg;
        component.config = mockAutocompleteConfig;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('write value', () => {
        component.onInput({ target: { value: '1' } } as any);
        expect(component.value).toBe('1');
    })

    it('register form reactive methods', () => {
        const fn = () => undefined;
        component.writeValue('1');
        expect(component.value).toBe('1');
        component.writeValue('');
        expect(component.value).toBe('');
        component.control.markAsDirty();
        component.control.markAsTouched();
        component.registerOnChange(fn);
        component.registerOnTouched(fn);
        expect(component.control.touched).toBeTruthy();
    });

    it('enter value', () => {
        component.onEnter();
        component['debouncerKeyEnter$'].subscribe(r => expect(r).toBeTruthy());
    });

    it('select row', () => {
        component.onSelectRow({ target: { value:'1' } } as any);
        expect(component.label).toStrictEqual({ target: { value: '1' } });
    });

    it('set input', () => {
        component.onSetInput({ target: { value:'1' } } as any);
        expect(component.value).toBeDefined();
    });

});
