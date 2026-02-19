export const componentInfo = `

Create a autocomplete-custom-row.component.ts for template results in tablet and desktop

~~~~
@Component({
  template: '<td><div>{{ data.id }}</div></td>'
})
export class AutocompleteCustomRowComponent implements OnInit {
   @Input() rowConfig!: any;
   data = this.rowConfig.data;
}
~~~~

Create a autocomplete-custom-card.component.ts for template results in mobile

~~~~
@Component({
  template: '<section class="p-4"><div>{{ data.id }}</div></section>'
})
export class AutocompleteCustomCardComponent implements OnInit {
   @Input() rowConfig!: any;
   data = this.rowConfig.data;
}
~~~~

Create a autocomplete-custom-label.component.ts

~~~~
@Component({
  template: '@if(data) {<span>{{ data.id }}</span>}'
})
export class AutocompleteCustomLabelComponent implements OnInit {
  @Input() labelConfig!: any;
  data = this.labelConfig.data;
}
~~~~

Import: **../../../index**

~~~~
import { PmdsCdkAutocompleteComponent } from '../pmds-cdk-autocomplete.component';
~~~~

Add to import array the **PmdsCdkAutocompleteComponent** in your component

~~~~
imports: [
	PmdsCdkAutocompleteComponent
]
~~~~

In your component:

~~~~
...
form = new FormBuilder().group({ search: ['', Validators.required] });
config = {
   input: {
     placeholder: 'placeholder',
     icon: 'pmicons-account-user',
     labelComponent: {
       component: AutocompleteCustomLabelComponent
      }
    },
    table: {
      rowComponent: {
        component: AutocompleteCustomRowComponent,
        cardComponent: AutocompleteCustomCardComponent
       selectRowAction: alert('ok')
     },
     error: {
       title: 'error title',
       body: 'error body'
     }
   }
};
suggestions: string = '';
states = { isLoading: false, isError: false };
data = [ { id: '1' }, { id: '2' } ];
const literalsErrorFn = (name: string, error: string, value?: any) => {
   return {
     'required': '{{name}} is required'
   }[error] || 'wrong value';
}
...
//on search
this.states = { isLoading: true, isError: false };
...
//on search finished
this.suggestions = new String('Suggestions for ...') as string;
this.states = { isLoading: false, isError: false };
this.data = [ ...data ];
...
~~~~

Selector: **pmds-cdk-autocomplete**

~~~~
<pmds-cdk-autocomplete>
</pmds-cdk-autocomplete>
~~~~
`
