export const componentInfo = `

Import: **PmdsDirectiveNumberFormat** from **@pmhub/pmds-common**

~~~~
import {
	PmdsDirectiveNumberFormat
} from '@pmhub/pmds-common';
~~~~

Add to import array the **PmdsDirectiveNumberFormat** in your component

~~~~
imports: [
	PmdsDirectiveNumberFormat
]
~~~~

Use this directive to set number with a defined int and decimal part length<br>

For set options add:

~~~~
pmdsNumberOptions: {
  maxLengthInt: number,
  maxLengthDec: number,
  formControlName: string
}
~~~~

**IMPORTANT** is necessary registerLocaleData

In your component.ts

~~~~
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es-ES');
~~~~
`;
