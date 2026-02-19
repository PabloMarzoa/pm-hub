export const componentInfo = `
Import **PmdsPipeExchangeDecimals** from **../../../../index**

~~~~
import {
	PmdsPipeExchangeDecimals
} from '../../../../index';
~~~~

Add to import array the **PmdsPipeExchangeDecimals** in your component

~~~~
imports: [
	PmdsPipeExchangeDecimals
]
~~~~

**IMPORTANT** use it in a innerHTML attribute:

~~~~
<div
      class="text-color-text-primary font-headline-desktop-m-bold mobile:font-headline-mobile-m-bold"
      [innerHTML]="'12.345678' | pmdsExchangeDecimals : 'xx.XXxxxx' : 'font-display-desktop-s-bold'">
</div>
~~~~

Use this pipe to format exchanges values:

`;
