////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeRelationshipFormat } from './pmds-pipe-relationship-format.pipe';
import { TPmdsRelationshipFormatType } from './models/relationship-format-type.model';
import { IPmdsRelationshipLiterals } from './models/relationship-literals.model';
import { componentInfo } from "./story-helpers/pmds-pipe-relationship-format-component-info-story";

export default {
  title: 'Common/Pipes/Relationship format',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsPipeRelationshipFormat],
    }),
  ],
  argTypes: {
    value: {
      description: 'Value to transform',
      options: ['father', 'mother', 'selfPayed'],
      control: {
        type: 'radio',
      },
    },
    type: {
      description: 'Type return value',
      table: {
        type: { summary: 'text | identifier'},
        defaultValue: { summary: 'text'}
      },
      options: ['text', 'identifier'],
      control: {
        type: 'radio',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'PmdsPipeRelationshipFormat',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{ value: string, type: TPmdsRelationshipFormatType, literals: IPmdsRelationshipLiterals }> = {
  args: {
    value: 'father',
    type: 'text',
    literals: {
      father: 'Father',
      mother: 'Mother',
      selfPayed: 'Self payed',
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsRelationshipFormat:type:literals }}</div>
    `,
  }),
};
