export const componentInfo = `

Import: **../../../index**

~~~~
import { PmdsCdkFormErrorMessageComponent } from '../pmds-cdk-form-error-message.component';
~~~~

Add to import array the **PmdsCdkFormErrorMessageComponent** in your component

~~~~
imports: [
	PmdsCdkFormErrorMessageComponent
]
~~~~

Selector: **pmds-cdk-form-error-message**

~~~~
<pmds-cdk-form-error-message>
</pmds-cdk-form-error-message>
~~~~

This is a **literalsErrorFn** example

~~~~
const literalsErrorFn = (name = '', error: string, value?: any, label:string) => {
  return {
   'required': 'field {{label}} is required'
   'min': {{name}} must be greater than or equal to {{value.min}}
  }[error] || 'wrong field'
}
~~~~
`
