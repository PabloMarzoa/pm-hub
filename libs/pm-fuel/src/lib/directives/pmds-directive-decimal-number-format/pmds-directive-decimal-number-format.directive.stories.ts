////////Angular imports
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsDirectiveDecimalNumberFormat } from './pmds-directive-decimal-number-format.directive';
import { componentInfo } from "./story-helpers/pmds-directive-decimal-number-component-info-story";

export default {
  title: 'Common/Directives/Decimal number format',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsDirectiveDecimalNumberFormat, ReactiveFormsModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }),
  ],
  parameters: {
    docs: {
      subtitle: 'PmdsDirectiveDecimalNumberFormat',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{ value: string }> = {
  render: (args) => ({
    props: {
      ...args,
      exampleForm: new FormBuilder().group({
        exampleControl: [],
      }),
    },
    template: `
    <div class="pb-2">
      Control value with '.' chart decimal parse: {{ exampleForm.get('exampleControl').value }}
    </div>
    
    <form [formGroup]="exampleForm">
      <input 
      class="border p-1"
        type="number"
        placeholder="123,56"
        formControlName="exampleControl"
        [control]="exampleForm.get('exampleControl')"
        nxtUiDecimalNumberFormat/>
    </form>
    `,
  }),
};
