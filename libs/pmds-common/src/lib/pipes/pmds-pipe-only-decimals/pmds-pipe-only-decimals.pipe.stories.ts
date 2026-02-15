////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeOnlyDecimals } from './pmds-pipe-only-decimals.pipe';
import { componentInfo } from "./story-helpers/pmds-pipe-only-decimals-component-info-story";

export default {
  title: 'Common/Pipes/Only decimals',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsPipeOnlyDecimals],
    }),
  ],
  argTypes: {
    value: {
      description: 'Value to transform',
      table: {
        type: { summary: 'number | string | undefined | null'},
        defaultValue: { summary: '.' }
      },
      control: {
        type: 'text',
      },
    },
    separator: {
      description: 'Decimal chart separator from value',
      table: {
        type: { summary: ', | .'},
        defaultValue: { summary: '.' }
      },
      options: ['.', ','],
      control: {
        type: 'radio',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'PmdsPipeOnlyDecimals',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{ value: string, separator: string }> = {
  args: {
    value: '12345.67',
    separator: '.',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsOnlyDecimals:separator }}</div>
    `,
  }),
};
