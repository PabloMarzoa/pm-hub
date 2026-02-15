export const componentInfo = `

Import: **@pmhub/pmds-cdk**

~~~~
import { PmdsCdkAccordionComponent } from '../pmds-cdk-accordion.component';
~~~~

Add to import array the **PmdsCdkAccordionComponent** in your component

~~~~
imports: [
	PmdsCdkAccordionComponent
]
~~~~

Selector: **pmds-cdk-accordion**

~~~~
<pmds-cdk-accordion>
</pmds-cdk-accordion>
~~~~
`

export const storyWithNgContentInfo = `Remenber set to the first accordion **[hideBottomBorder]="true"**

<pmds-cdk-accordion
	[literals]="literals"
	[content]="content"
	-> [hideBottomBorder]="true" <-
	[dataQA]="dataQA"
/>`

export const storyMoreOneExpansionPanel = `
<pmds-cdk-accordion
  [literals]="literals"
  [content]="content"
  [hideBottomBorder]="true"
  [dataQA]="dataQA"
  [skeleton]="false"
  >
  <div class="flex items-center justify-center p-3 border border-color-border-error text-color-text-error">
	 Additional content
  </div>
</pmds-cdk-accordion>
<pmds-cdk-accordion
  [literals]="literals2"
  [content]="content"
  [dataQA]="dataQA"
  >
  <div class="flex items-center justify-center p-3 border border-color-border-error text-color-text-error">
	 Additional content
  </div>
</pmds-cdk-accordion>
`

