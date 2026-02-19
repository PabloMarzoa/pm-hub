export const componentInfo = `
Use this util to add custom validators to reactive forms

Import in your component the **PmdsUtilValidators** from **../../../../index**

~~~
import {
  PmdsUtilValidators
} from '../../../../index';
~~~

Add in your reactive form control

~~~
this.fb.group({
  control: ['', PmdsUtilValidators.{{validator name}}]
})
~~~

Test it
`
