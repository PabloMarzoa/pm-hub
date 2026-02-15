////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeAccountFormat } from './pmds-pipe-account-format.pipe';
import { componentInfo } from "./story-helpers/pmds-pipe-account-format-component-info-story";

export default {
  title: 'Common/Pipes/Account format',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
        imports: [PmdsPipeAccountFormat],
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
      subtitle: 'PmdsPipeAccountFormat',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{value: string}> = {
  args: {
   value: 'ES9121000418450200051332'
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsAccountFormat }}</div>
    `,
  }),
};
