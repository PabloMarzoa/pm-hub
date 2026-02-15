////////Component imports
import { StoryObj } from '@storybook/angular';
import { PmdsCdkAlertComponent } from './pmds-cdk-alert.component';
import { componentInfo } from './story-helpers/pmds-cdk-alert-component-info-story';

export default {
  title: 'Cdk/Feedback & System status/Alert',
  component: PmdsCdkAlertComponent,
  tags: ['autodocs'],
  args: {
    dataQA: 'storybook-qa-'
  },
  argTypes: {
    data: {
      description: 'For alert data and actions',
      table: {
        type: { summary: `
            IPmdsCdkAlertData: {
              actionFn?: () => void;
              actionIcon?: string;
              cancelAutoClose?: boolean;
              closeFn?: () => void;
              content?: string;
              hideClose?: boolean;
              literals?: IPmdsCdkAlertLiterals;
              title?: string;
              type?: TPmdsCdkAlertType;
            }
          `
        },
      },
      control: {
        type: 'object',
      },
      type: { required: true }
    },
    dataQA: {
      description: 'Reference for QA',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    closeEmit: {
      description: 'Emit button close click',
        table: {
          category: 'Events',
          type: { summary: 'EventEmitter<void>' },
        }
    }
  },
  parameters: {
    docs: {
      subtitle: 'PmdsCdkAlertComponent',
      description: {
        component: componentInfo
      },
    },
  },
};

export const WithMessageAndAction: StoryObj<PmdsCdkAlertComponent> = {
  args: {
    data: {
        actionFn: () => alert('Action click'),
        actionIcon: 'pmicons-upload',
        cancelAutoClose: false,
        closeFn: () => alert('Close click'),
        content: '[Additional information]',
        hideClose: false,
        literals: {
          action: 'Action',
          subject: 'Subject:',
          subjectContent: 'Data',
          message: 'Message:',
          messageContent: 'Data',
        },
        title: '[Main information]',
        type: 'success',
      },
  },
  render: (args) =>( {
    props: {
      ...args,
      closeEmit: () => alert('Close click'),
    }  
  })
};

export const Default: StoryObj<PmdsCdkAlertComponent> = {
  args: {
    data: {
        cancelAutoClose: false,
        content: '[Additional information]',
        hideClose: true,
        title: '[Main information]',
        type: 'success',
      },
  },
  render: (args) =>( {
    props: {
      ...args,
      closeEmit: () => alert('Close click'),
    }  
  })
};

export const WithAction: StoryObj<PmdsCdkAlertComponent> = {
  args: {
    data: {
        actionFn: () => alert('Action click'),
        actionIcon: 'pmicons-upload',
        cancelAutoClose: false,
        content: '[Additional information]',
        hideClose: true,
        literals: {
          action: 'Action',
        },
        title: '[Main information]',
        type: 'success',
      },
  },
  render: (args) =>( {
    props: {
      ...args,
      closeEmit: () => alert('Close click'),
    }  
  })
};

export const WithMessage: StoryObj<PmdsCdkAlertComponent> = {
  args: {
    data: {
        cancelAutoClose: false,
        content: '[Additional information]',
        hideClose: true,
        literals: {
          subject: 'Subject:',
          subjectContent: 'Data',
          message: 'Message:',
          messageContent: 'Data',
        },
        title: '[Main information]',
        type: 'success',
      },
  },
  render: (args) =>( {
    props: {
      ...args,
      closeEmit: () => alert('Close click'),
    }  
  })
};

export const StateSuccess: StoryObj<PmdsCdkAlertComponent> = {
  args: {
    data: {
        cancelAutoClose: false,
        content: '[Additional information]',
        hideClose: true,
        title: '[Main information]',
        type: 'success',
      },
  },
  render: (args) =>( {
    props: {
      ...args,
      closeEmit: () => alert('Close click'),
    }  
  })
};

export const StateWarning: StoryObj<PmdsCdkAlertComponent> = {
  args: {
    data: {
        cancelAutoClose: false,
        content: '[Additional information]',
        hideClose: true,
        title: '[Main information]',
        type: 'warning',
      },
  },
  render: (args) =>( {
    props: {
      ...args,
      closeEmit: () => alert('Close click'),
    }  
  })
};


export const StateInformation: StoryObj<PmdsCdkAlertComponent> = {
  args: {
    data: {
        cancelAutoClose: false,
        content: '[Additional information]',
        hideClose: true,
        title: '[Main information]',
        type: 'info',
      },
  },
  render: (args) =>( {
    props: {
      ...args,
      closeEmit: () => alert('Close click'),
    }  
  })
};

export const StateError: StoryObj<PmdsCdkAlertComponent> = {
  args: {
    data: {
        cancelAutoClose: false,
        content: '[Additional information]',
        hideClose: true,
        title: '[Main information]',
        type: 'error',
      },
  },
  render: (args) =>( {
    props: {
      ...args,
      closeEmit: () => alert('Close click'),
    }  
  })
};

export const OnlyTitle: StoryObj<PmdsCdkAlertComponent> = {
  args: {
    data: {
        cancelAutoClose: false,
        title: '[Main information]',
        type: 'success',
      },
  },
  render: (args) =>( {
    props: {
      ...args,
      closeEmit: () => alert('Close click'),
    }  
  })
};
