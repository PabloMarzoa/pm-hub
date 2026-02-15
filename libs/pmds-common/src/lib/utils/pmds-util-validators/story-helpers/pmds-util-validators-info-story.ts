export const componentInfo = `
Use this util to add custom validators to reactive forms

Import in your component the **PmdsUtilValidators** from **@pmhub/pmds-common**

~~~
import {
  PmdsUtilValidators
} from '@pmhub/pmds-common';
~~~

Add in your reactive form control

~~~
this.fb.group({
  control: ['', PmdsUtilValidators.{{validator name}}]
})
~~~

Test it
`
