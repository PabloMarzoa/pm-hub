////////Angular imports
import { DatePipe } from '@angular/common';
////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsPipeDateTime } from './pmds-pipe-date-time.pipe';
import { componentInfo } from "./story-helpers/pmds-pipe-date-time-component-info-story";
import { timezones } from "./story-helpers/pmds-pipe-date-time-component-const-story";

export default {
  title: 'Common/Pipes/Date time',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PmdsPipeDateTime],
      providers: [DatePipe],
    }),
  ],
  argTypes: {
    value: {
      description: 'Value to transform',
      options: ['2023-01-01T00:00:00', '2023-01-01T23:00:00', '2023-01-01T01:00:00'],
      control: {
        type: 'select',
      },
    },
    dateFormat: {
      description: 'Date format to parse',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'dd/MM/yyyy' },
      },
    },
    timeFormat: {
      description: 'Time format to parse',
      control: {
        type: 'text',
      },
    },
    timezone: {
      description: 'Time zone to parse',
      options: timezones,
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'PmdsPipeDateTime',
      description: {
        component: componentInfo,
      },
    },
  },
};

export const Docs: StoryObj<{
  value: string;
  dateFormat: string;
  timeFormat: string;
  timezone: string;
}> = {
  parameters: {
    sidebar: { disable: true },
  },
  args: {
    value: '2023-01-01T00:00:00',
    dateFormat: 'dd/MM/yyyy',
    timeFormat: '',
    timezone: 'Atlantic/Azores',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>{{ value | pmdsDateTime:dateFormat:timeFormat:timezone }}</div>
    `,
  }),
};
