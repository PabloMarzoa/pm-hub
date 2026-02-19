////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeTransactionReference } from './pmds-pipe-transaction-reference.pipe';
import { componentInfo } from "./story-helpers/pmds-pipe-transaction-reference-component-info-story";

export default {
  title: 'Common/Pipes/Transaction reference',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsPipeTransactionReference],
    }),
  ],
  argTypes: {
    value: {
      description: 'Value to transform, use "NOTPROVIDED" or "NONREF" for get the change',
      control: {
        type: 'text',
      },
    },
    text: {
      description: 'Text for replace',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'PmdsPipeTransactionReference',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{ value: string, text: string }> = {
  args: {
    value: 'NOTPROVIDED',
    text: '-'
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsTransactionReference:text }}</div>
    `,
  }),
};
