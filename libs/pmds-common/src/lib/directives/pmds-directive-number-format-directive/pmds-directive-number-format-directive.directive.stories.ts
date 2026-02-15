////////Angular imports
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsDirectiveNumberFormat } from './pmds-directive-number-format-directive.directive';
import { componentInfo } from "./story-helpers/pmds-directive-number-format-component-info-story";

export default {
  title: 'Common/Directives/Number format directive',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsDirectiveNumberFormat, ReactiveFormsModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }),
  ],
  argTypes: {
    maxLengthInt: {
      description: 'Max length in int part',
      table: {
        defaultValue: { summary: '6' },
      },
      control: {
        type: 'number',
      },
    },
    maxLengthDec: {
      description: 'Max length in decimal part',
      table: {
        defaultValue: { summary: '4' },
      },
      control: {
        type: 'number',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'PmdsDirectiveNumberFormat',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{ maxLengthInt: number; maxLengthDec: number }> =
  {
    args: {
      maxLengthInt: 6,
      maxLengthDec: 4,
    },
    render: (args) => {
      registerLocaleData(localeEs, 'es-ES');
      return {
        props: {
          ...args,
          exampleForm: new FormBuilder().group({
            exampleControl: [''],
          }),
          pmdsNumberOptions: {
            maxLengthInt: args.maxLengthInt,
            maxLengthDec: args.maxLengthDec,
            formControlName: 'exampleControl',
          },
        },
        template: `
        <form [formGroup]="exampleForm">
          <input
           class="border rounded-pmds w-full p-2"
            placeholder="123,56"
            formControlName="exampleControl"
            pmdsNumberFormat
            [pmdsNumberOptions]="pmdsNumberOptions"/>
        </form>
        `,
      };
    },
  };
