////////Angular imports
import { CurrencyPipe } from '@angular/common';
import {
  Directive,
  LOCALE_ID,
  DEFAULT_CURRENCY_CODE as CURRENCY_CODE,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
////////Component imports
import { INumberFormatOptions } from './models/pmds-number-format-option.model';

const DEFAULT_LOCALE_ID = 'es-ES';
const DEFAULT_CURRENCY_CODE = 'EUR';
const DEFAULT_MAX_LENGTH_INT = 6;
const DEFAULT_MAX_LENGTH_DEC = 2;

@Directive({
  selector: '[pmdsNumberFormat]',
  standalone: true,
  providers: [
    {
      provide: LOCALE_ID,
      useValue: DEFAULT_LOCALE_ID,
    },
    {
      provide: CURRENCY_CODE,
      useValue: DEFAULT_CURRENCY_CODE,
    },
    CurrencyPipe,
  ],
})
export class PmdsDirectiveNumberFormat implements OnInit {
  @Input() pmdsNumberOptions: Partial<INumberFormatOptions> = {};
  private inputValue!: string;
  formControl: FormControl = new FormControl();
  private regExp: any;

  constructor(
    private readonly currencyPipe: CurrencyPipe,
    private formGroupDirective: FormGroupDirective
  ) {}

  ngOnInit() {
    this.regExp = new RegExp(
      this.regexCurrency(
        this.pmdsNumberOptions?.maxLengthInt || DEFAULT_MAX_LENGTH_INT,
        this.pmdsNumberOptions?.maxLengthDec || DEFAULT_MAX_LENGTH_DEC
      ),
      'g'
    );
    this.formControl = this.formGroupDirective.form.get(
      this.pmdsNumberOptions?.formControlName as string
    ) as FormControl;
    const value: string = (this.formControl?.value || '').replace(/\./g, ',');
    const formattedValue: string | null = this.formatCurrency(
      (this.formControl?.value || '').replace(/\,/g, '.')
    );
    this.saveInputValue(value);
    this.formControl?.setValue(value);
    this.formControl?.setValue(formattedValue, { onlySelf: true });
  }

  private regexCurrency(
    maxInt = DEFAULT_MAX_LENGTH_INT,
    maxDec = DEFAULT_MAX_LENGTH_DEC
  ): string {
    const maxIntExp = maxInt ? `{0,${maxInt - 1}}` : `+`;
    const maxDecExp = maxDec ? `{0,${maxDec}}` : `+`;
    return `^((0|([1-9][0-9]${maxIntExp}))(\,[0-9]${maxDecExp})?)$`;
  }

  private formatCurrency(value: string | number): string | null {
    return value
      ? this.currencyPipe.transform(
          value,
          undefined,
          '',
          undefined,
          DEFAULT_LOCALE_ID
        )
      : '';
  }

  private isValidCurrency(value: string = ''): boolean {
    return !value || !!(String(value).match(this.regExp) || []).join('');
  }

  private cleanValue(value: string): string {
    return !value.split(',')[1] ? value?.replace(/\,/g, '') : value;
  }

  private saveInputValue(value: string): void {
    this.inputValue = this.cleanValue(value);
  }

  @HostListener('input', ['$event.target'])
  onInput(input: HTMLInputElement): void {
    const value: string = this.isValidCurrency(input.value)
      ? input.value
      : this.inputValue;
    this.saveInputValue(value);
    this.formControl?.setValue(value);
  }

  @HostListener('focusout', ['$event'])
  onFocusOut(_event: FocusEvent) {
    const formattedValue: string | null = this.formatCurrency(
      this.inputValue.replace(/\,/g, '.')
    );
    this.formControl?.setValue(this.inputValue);
    this.formControl?.setValue(formattedValue, { onlySelf: true });
  }

  @HostListener('focusin', ['$event'])
  onFocusIn(_event: FocusEvent) {
    const value: string = this.inputValue.replace(/\./g, ',');
    this.formControl?.setValue(value, { onlySelf: true });
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    if (
      !/[0-9]|\,/.test(event.key) ||
      !this.isValidCurrency(this.formControl?.value + event.key)
    ) {
      event.preventDefault();
    }
  }
}
