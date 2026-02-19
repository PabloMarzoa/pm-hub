////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeTruncateEllipsis } from './pmds-pipe-truncate-ellipsis.pipe';
import { componentInfo } from "./story-helpers/pmds-pipe-truncate-ellipsis-component-info-story";

export default {
  title: 'Common/Pipes/Truncate ellipsis',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsPipeTruncateEllipsis],
    }),
  ],
  argTypes: {
    value: {
      description: 'Value to transform',
      table: {
        type: { summary: 'string'}
      },
      control: {
        type: 'text',
      },
    },
    max: {
      description: 'Max length for truncate',
      table: {
        defaultValue: { summary: '12'},
        type: { summary: 'number'}
      },
      control: {
        type: 'number',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'PmdsPipeTruncateEllipsis',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{ value: string, max: number }> = {
  args: {
    value: 'Test content for truncate',
    max: 12,
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsTruncateEllipsis:max }}</div>
    `,
  }),
};
