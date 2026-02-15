////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeAccountHidden } from './pmds-pipe-account-hidden.pipe';
import { componentInfo } from "./story-helpers/pmds-pipe-account-hidden-component-info-story";

export default {
  title: 'Common/Pipes/Account hidden',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsPipeAccountHidden],
    }),
  ],
  argTypes: {
    value: {
      description: 'Value to transform',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'PmdsPipeAccountHidden',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const More8Length: StoryObj<{ value: string }> = {
  args: {
    value: 'ES123456781234567890',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsAccountHidden }}</div>
    `,
  }),
};

export const With8Length: StoryObj<{ value: string }> = {
  args: {
    value: 'ES123456',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsAccountHidden }}</div>
    `,
  }),
};
