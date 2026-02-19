export const componentInfo = `


Import: **PmdsPipeAmountFormat** from **../../../../index**

~~~~
import {
	PmdsPipeAmountFormat
} from '../../../../index';
~~~~

Add to import array the **PmdsPipeAmountFormat** in your component

~~~~
imports: [
	PmdsPipeAmountFormat
]
~~~~

Use this pipe to format amount with locale

**IMPORTANT** is necessary registerLocaleData

~~~~
import { registerLocaleData } from '@angular/common'
import localeEs from '@angular/common/locales/es'
import localeEn from '@angular/common/locales/en'

...

registerLocaleData(localeEs, 'es-ES')
registerLocaleData(localeEn, 'en-EN')
~~~~`
