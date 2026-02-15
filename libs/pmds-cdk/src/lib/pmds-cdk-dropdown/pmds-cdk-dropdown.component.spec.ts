////////Angular imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
////////PMDS imports
import { PmdsCdkDropdownComponent } from './pmds-cdk-dropdown.component';

describe('PmdsCdkDropdownComponent', () => {
    let component: PmdsCdkDropdownComponent;
    let fixture: ComponentFixture<PmdsCdkDropdownComponent>;
    const fg: FormGroup =new FormGroup({
    'control': new FormControl('')  
    });
    let fgd: FormGroupDirective;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PmdsCdkDropdownComponent],
            providers: [
                FormGroupDirective,
            {
                provide: ControlContainer
            }
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(PmdsCdkDropdownComponent);
        component = fixture.componentInstance;
        component.options = [];
        fgd = new FormGroupDirective([], []);
        component.literals =  {
            accept: '',
            filterBy: '',
            cancel: '',
            clear: '',
            searchPlaceholder: ''
        } 
        fgd.form = fg;
        component.formControlName = 'control';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should click outside for close dropdown', () => {
        const spy = jest.spyOn(component, 'toggleShowOption');
        component.showOptions = true;
        component.optionsContent = {
            nativeElement: undefined
        };
        window.dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(spy).toBeCalled();
        expect(component.showOptions).toBeFalsy();
    });

    it('should click outside for close dropdown with disabled component', () => {
        component.isDisabled = true;
        component.toggleShowOption();
        expect(component.showOptions).toBeTruthy();
    });

    it('should click outside for close dropdown without force', () => {
        component.toggleShowOption();
        expect(component.showOptions).toBeTruthy();
    });

    it('should preventClose', () => {
        component.preventClose(new Event(''));
        expect(component.showOptions).toBeFalsy();
    });

    it('should select option', () => {
        component.selectOption({ label: '1', value: '1' });
        expect(component.value).toBe('1');
    })

    it('should write value', () => {
        component.writeValue(undefined as any);
        expect(component.value).toBe('');
        component.options = [{ value: '1', label: '1' }];
        component.writeValue('1');
        expect(component.value).toBe('1');
    })
});
