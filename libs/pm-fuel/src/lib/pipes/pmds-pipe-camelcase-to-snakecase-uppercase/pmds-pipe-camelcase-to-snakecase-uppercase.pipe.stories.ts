////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeCamelcaseToSnakecaseUppercase } from './pmds-pipe-camelcase-to-snakecase-uppercase.pipe';
import { componentInfo } from "./story-helpers/pmds-pipe-camelcase-to-snakecase-uppercase-component-info-story";

export default {
  title: 'Common/Pipes/Camelcase to uppersnakecase',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsPipeCamelcaseToSnakecaseUppercase],
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
      subtitle: 'PmdsPipeCamelcaseToSnakecaseUppercase',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{ value: string }> = {
  args: {
    value: 'exampleCase',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsCamelcaseToSnakecaseUppercase }}</div>
    `,
  }),
};
