////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeSalesforceNumberFormat } from './pmds-pipe-salesforce-number-format.pipe';
import { componentInfo } from "./story-helpers/pmds-pipe-salesforce-number-format-component-info-story";

export default {
  title: 'Common/Pipes/Salesforce number format',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsPipeSalesforceNumberFormat],
    }),
  ],
  argTypes: {
    value: {
      description: 'Value to transform',
      control: {
        type: 'text',
      },
    },
    mask: {
      description: 'Salesforce number mask',
      options: ['###,###.##', '###.###,##'],
      table: {
        type: 'string'
      },
      control: {
        type: 'radio',
      },
    },
    noDecimals: {
      description: 'Boolean for hide decimals',
      table: {
        type: 'boolean'
      },
      control: {
        type: 'boolean',
      },
    },
    separator: {
      description: 'Chart use the value for separate decimals',
      table: {
        type: 'string',
        defaultValue: {summary: '.'}
      },
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'PmdsPipeSalesforceNumberFormat',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{ value: string, mask: string, noDecimals: boolean, separator: string }> = {
  args: {
    value: '12345.67',
    mask: '###,###.##',
    noDecimals: false,
    separator: '.',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsSalesforceNumberFormat:mask:noDecimals:separator }}</div>
    `,
  }),
};
