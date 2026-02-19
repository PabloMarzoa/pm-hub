////////Angular imports
import { Injector } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
////////Third party libraries
import { StoryObj, applicationConfig, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
////////PPMDS libraries
import { IPmdsCdkAlertData } from '../pmds-cdk-alert/models/pmds-cdk-alert.model';
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkToastConfig } from './models/pmds-cdk-toast-config.model';
import { PmdsCdkToastService } from './utils/pmds-cdk-toast-service';
import { template, config } from "./story-helpers/pmds-cdk-toast-component-const-story";
import { componentInfo, changeDefaultConfigInfo } from "./story-helpers/pmds-cdk-toast-component-info-story";

export default {
  title: 'Cdk/Feedback & system status/Toast',
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator(
      (story) => `
        <div class="flex flex-col items-center">
          ${story}
        </div>`
    ),
    moduleMetadata({
      imports: [
        PmdsCdkButtonComponent
      ],
      providers: [PmdsCdkToastService],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  argTypes: {
    data: {
      description: 'For toast data and actions',
      table: {
        type: { summary: `
          IPmdsCdkAlertData: {
            actionFn?: () => void;
            actionIcon?: string;
            cancelAutoClose?: boolean;
            closeFn?: () => void;
            content?: string;
            hideClose?: boolean;
            literals?: IPmdsCdkAlertLiterals: {
              action?: string;
              subject?: string;
              subjectContent?: string;
              message?: string;
              messageContent?: string;
            };
            title?: string;
            type?: TPmdsCdkAlertType: 'warning' | 'info' | 'success' | 'error';
          }
          `
         },
      },
      control: {
        type: 'object',
      },
    },
    config: {
      description: 'For toast config',
      table: {
        type: { summary: `
          PmdsCdkToastConfig: {
            animation?: {
                fadeOut: number;
                fadeIn: number;
            };
            dataQA?: string;
            floating?: boolean;
            panelClass?: string | string[];
            position?: {
              top: number;
            };
            timeInterval?: number;
          }
          `
        },
        defaultValue: { summary: `
          animation: {
              fadeOut: 1000,
              fadeIn: 300
          },
          floating: false,
          panelClass: ['flex', 'justify-center', 'w-full', 'pointer-events-auto'],
          position: {
            top: 88
          }
          timeInterval: 5000,
          `
        }
      },
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    injectInjectorToProps: true,
    docs: {
      subtitle: 'PmdsCdkToastComponent',
      defaultName: 'Documentation',
      source: {type: "code"},
      description: {
        component: componentInfo
      },
    },
  },
};

export const CompleteOptions: StoryObj<{data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig}> = {
  parameters: {
    docs: {
      description: {
        story: `
For show complete options toast:

~~~~
this.toastSrv.show({
    title: '[Main information]',
    type: 'info',
    actionFn: () => alert('Action click'),
    actionIcon: 'pmicons-cloud',
    cancelAutoClose: false,
    closeFn: () => alert('Close click'),
    content: '[Additional information]',
    hideClose: false,
    literals: {
      action: 'Action',
      subject: 'Subject:',
      subjectContent: 'Data',
      message: 'Message:',
      messageContent: 'Data'
    },
});
~~~~
        `,
      },
    }
  },
  args: {
    data: {
      actionFn: () => alert('Action click'),
      actionIcon: 'pmicons-cloud',
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
      type: 'info',
    },
    config: {
      ...config,
      timeInterval: 5000
    },
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: (injector: Injector, data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig): void => {
        injector
          .get<PmdsCdkToastService>(PmdsCdkToastService)
          .show(data, config);
      },
    },
    template
  }),
};

export const InfoWithCancelAutoclose: StoryObj<{data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig}> = {
  parameters: {
    docs: {
      description: {
        story: `
~~~~
this.toastSrv.show({
    cancelAutoClose: true,
    content: '[Additional information]',
    hideClose: false,
    title: '[Main information]',
    type: 'error'
    },
});
~~~~
        `,
      },
    }
  },
  args: {
    data: {
      cancelAutoClose: true,
      hideClose: false,
      content: '[Additional information]',
      title: '[Main information]',
      type: 'error',
    },
    config
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: (injector: Injector, data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig): void => {
        injector
          .get<PmdsCdkToastService>(PmdsCdkToastService)
          .show(data, config);
      },
    },
    template
  })
};


export const VariantsError: StoryObj<{data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig}> = {
  parameters: {
    docs: {
      description: {
        story: `
~~~~
this.toastSrv.show({
    content: '[Additional information]',
    title: '[Main information]',
    type: 'error'
    },
});
~~~~
        `,
      },
    }
  },
  args: {
    data: {
      content: '[Additional information]',
      title: '[Main information]',
      type: 'error',
    },
    config
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: (injector: Injector, data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig): void => {
        injector
          .get<PmdsCdkToastService>(PmdsCdkToastService)
          .show(data, config);
      },
    },
    template
  })
};

export const VariantsSuccess: StoryObj<{data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig}> = {
  parameters: {
    docs: {
      description: {
        story: `
~~~~
this.toastSrv.show({
    content: '[Additional information]',
    title: '[Main information]',
    type: 'success'
    },
});
~~~~
        `,
      },
    }
  },
  args: {
    data: {
      content: '[Additional information]',
      title: '[Main information]',
      type: 'success',
    },
    config
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: (injector: Injector, data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig): void => {
        injector
          .get<PmdsCdkToastService>(PmdsCdkToastService)
          .show(data, config);
      },
    },
    template
  })
};

export const VariantsInfo: StoryObj<{data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig}> = {
  parameters: {
    docs: {
      description: {
        story: `
~~~~
this.toastSrv.show({
    content: '[Additional information]',
    title: '[Main information]',
    type: 'info'
    },
});
~~~~
        `,
      },
    }
  },
  args: {
    data: {
      content: '[Additional information]',
      title: '[Main information]',
      type: 'info',
    },
    config
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: (injector: Injector, data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig): void => {
        injector
          .get<PmdsCdkToastService>(PmdsCdkToastService)
          .show(data, config);
      },
    },
    template
  })
};


export const VariantsWarning: StoryObj<{data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig}> = {
  parameters: {
    docs: {
      description: {
        story: `
~~~~
this.toastSrv.show({
    content: '[Additional information]',
    title: '[Main information]',
    type: 'warning'
    },
});
~~~~
        `,
      },
    }
  },
  args: {
    data: {
      content: '[Additional information]',
      title: '[Main information]',
      type: 'warning',
    },
    config
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: (injector: Injector, data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig): void => {
        injector
          .get<PmdsCdkToastService>(PmdsCdkToastService)
          .show(data, config);
      },
    },
    template
  })
};

export const ChangeDefaultConfig: StoryObj<{data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig}> = {
  parameters: {
    docs: {
      description: {
        story: changeDefaultConfigInfo,
      },
    }
  },
  args: {
    data: {
      content: '[Additional information]',
      title: '[Main information]',
      type: 'info',
    },
    config: {
      ...config,
      timeInterval: 1000,
      position: {
        top: 300
      },
    },
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: (injector: Injector, data: IPmdsCdkAlertData, config: IPmdsCdkToastConfig): void => {
        injector
          .get<PmdsCdkToastService>(PmdsCdkToastService)
          .show(data, config);
      },
    },
    template
  })
};

