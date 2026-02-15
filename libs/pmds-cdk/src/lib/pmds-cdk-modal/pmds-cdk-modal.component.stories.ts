////////Third party libraries
import { StoryObj, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkModalConfig, IPmdsCdkModalData } from './models/pmds-cdk-modal.model';
import { PmdsCdkModalComponent } from './pmds-cdk-modal.component';
import { PmdsCdkModalService } from './utils/pmds-cdk-modal.service';
import { componentInfo, storyInfo, storyInfoLoading } from "./story-helpers/pmds-cdk-modal-component-info-story";
import { ModalCustomContentComponent } from "./story-helpers/pmds-cdk-modal-custom-content-component";
import { template, onClick, onClickWithComponent, onClickWithComponentLoading } from "./story-helpers/pmds-cdk-modal-component-const-story";

export default {
  title: 'Cdk/Resources/Modal - Sidebar overlay',
  decorators: [
    componentWrapperDecorator(
      (story) => `
        <div class="flex flex-col items-center">
          ${story}
        </div>`
    ),
    moduleMetadata({
      imports: [
        PmdsCdkModalComponent,
        ModalCustomContentComponent,
        PmdsCdkButtonComponent
      ],
      providers: [
        PmdsCdkModalService
      ]
    }),
  ],
  tags: ['autodocs'],
  args: {
    config: {
      hideBackButton: false,
      hasBackdropClick: true,
      disabledConfirmButton: true,
      isSidebar: false,
      hiddenFooter: false,
      isFullScreenMobile: false,
      modalSize: 'small',
      sidebarButtons: [
        {
          label: 'button',
          icon: 'pmicons-placeholder',
          actionFn: () => alert('sidebar button 1')
        }
      ],
      buttons: {
        closeLabel: 'close',
        backLabel: 'back',
        confirmLabel: 'accept',
      },
			dataQA:'storybook-qa-'
    }
  },
  argTypes: {
    config: {
      description: `For modal config **IPmdsCdkModalConfig**
      <li>**buttons**: literals for close, confirm and back label</li>
      <li>**dataQA**: reference for QA</li>
      <li>**disabledConfirmButton**: disabled the confirm button</li>
      <li>**hasBackdropClick**: close the modal click out the modal</li>
      <li>**hiddenFooter**: hide the footer section</li>
      <li>**hideBackButton**: hide in sidebar the back button</li>
      <li>**isSidebar**: set the sidebar overlay view</li>
      <li>**isFullScreenMobile**: in modal view, show in mobile the sidebar version</li>
      <li>**modalSize**: size for width</li>
      <li>**sidebarButtons**: config for the two buttons in header in sidebar view</li>
      `,
      table: {
        type: { summary:
          `
            IPmdsCdkModalConfig: {
              buttons?: IPmdsCdkModalButtons: {
                closeLabel?: string;
                confirmLabel?: string;
                backLabel?: string;
              };
              dataQA?: string;
              disabledConfirmButton?: boolean;
              hasBackdropClick?: boolean;
              hiddenFooter?: boolean;
              hideBackButton?: boolean;
              isFullScreenMobile?: boolean;
              isSidebar?: boolean;
              modalSize?: TPmdsCdkModalSize: 'small' | 'medium' | 'large';
              sidebarButtons?: IPmdsCdkModalSidebarButtons[]: [{
                label: string;
                icon: string;
                actionFn: () => void;
              }];
            }
          `
        },
        defaultValue: { summary:
          `
            {
              hasBackdropClick: false,
              isFullScreenMobile: true,
              isSidebar: false,
              modalSize: 'small'
              hideBackButton: 'true
            }
          `
        },
      },
      control: {
        type: 'object',
      },
    },
    data: {
      description: `For modal dataQA **IPmdsCdkModalData**
      <li>**title**: title for modal</li>
      <li>**body**: text for body modal</li>
      <li>**data**: data to use into modal</li>
      `,
      table: {
        type: { summary:
          `
            IPmdsCdkModalData: {
              title?: string;
              body?: string;
              data?: T;
            }
          `
        }
      }
    },
    component: {
      description: 'For inner component',
      table: {
        type: { summary:
          `
            ComponentType<T>
          `
        }
      }
    }
  },
  parameters: {
    injectInjectorToProps: true,
    docs: {
      subtitle: 'PmdsCdkModalComponent',
      description: {
        component: componentInfo
      },
    },
  },
};

export const ModalWithoutComponent: StoryObj<{ config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown> }> = {
  args: {
    data: {
      title: 'Title',
      body: 'Body text lorem',
    }
  },
  render: (args) => ({
    props: {
      ...args,
      onClick
    },
    template: template('Open Modal')
  }),
};

export const ModalWithComponent: StoryObj<{ config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown> }> = {
  parameters: {
    docs: {
      description: {
        story: storyInfo
      },
    }
  },
  args: {
    data: {
      title: 'Title',
    }
  },
  render: (args) => ({
    props: {
      ...args,
      config: {
        ...args?.config
      },
      onClick: onClickWithComponent
    },
    template: template('Open Modal')
  }),
};

export const ModalLarge: StoryObj<{ config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown> }> = {
  args: {
    data: {
      title: 'Title',
      body: 'Lorem ipsum text'
    }
  },
  render: (args) => ({
    props: {
      ...args,
      config: {
        ...args?.config,
        modalSize: 'large'
      },
      onClick: onClickWithComponent
    },
    template: template('Open Modal')
  }),
};

export const ModalFullScreenOnMobile: StoryObj<{ config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown> }> = {
  args: {
    data: {
      title: 'Title',
      body: 'Lorem ipsum text'
    }
  },
  render: (args) => ({
    props: {
      ...args,
      config: {
        ...args?.config,
        modalSize: 'large',
        hideBackButton: true,
        isFullScreenMobile: true,
      },
      onClick: onClickWithComponent
    },
    template: template('Open Modal')
  }),
};

export const SidebarOverlaySmall: StoryObj<{ config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown> }> = {
  args: {
    data: {
      title: 'Title',
    },
    config: {
      isSidebar: true,
      modalSize: 'small',
      buttons: {
        closeLabel: 'cancel',
        confirmLabel: 'confirm',
        backLabel: 'back'
      },
      sidebarButtons: [
        {
          label: 'label',
          icon: 'pmicons-placeholder',
          actionFn: () => alert('action 1')
        },
        {
          label: 'label',
          icon: 'pmicons-placeholder',
          actionFn: () => alert('action 2')
        }
      ]
    }
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: onClickWithComponent
    },
    template: template('Open sidebar overlay')
  }),
};

export const SidebarOverlayMedium: StoryObj<{ config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown> }> = {
  args: {
    data: {
      title: 'Title',
    },
    config: {
      isSidebar: true,
      modalSize: 'medium',
      buttons: {
        closeLabel: 'cancel',
        confirmLabel: 'confirm',
        backLabel: 'back'
      },
      sidebarButtons: [
        {
          label: 'label',
          icon: 'pmicons-placeholder',
          actionFn: () => alert('action 1')
        },
        {
          label: 'label',
          icon: 'pmicons-placeholder',
          actionFn: () => alert('action 2')
        }
      ]
    }
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: onClickWithComponent
    },
    template: template('Open sidebar overlay')
  }),
};

export const SidebarOverlayLarge: StoryObj<{ config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown> }> = {
  args: {
    data: {
      title: 'Title',
    },
    config: {
      isSidebar: true,
      modalSize: 'large',
      buttons: {
        closeLabel: 'cancel',
        confirmLabel: 'confirm',
        backLabel: 'back'
      },
      sidebarButtons: [
        {
          label: 'label',
          icon: 'pmicons-placeholder',
          actionFn: () => alert('action 1')
        },
        {
          label: 'label',
          icon: 'pmicons-placeholder',
          actionFn: () => alert('action 2')
        }
      ]
    }
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: onClickWithComponent
    },
    template: template('Open sidebar overlay')
  }),
};

export const SidebarLoading: StoryObj<{ config: IPmdsCdkModalConfig, data?: IPmdsCdkModalData<unknown> }> = {
  parameters: {
    docs: {
      description: {
        story: storyInfoLoading
      },
    }
  },
  args: {
    data: {
      title: 'Title',
    },
    config: {
      isSidebar: true,
      hasBackdropClick: true,
      modalSize: 'large',
      buttons: {
        closeLabel: 'cancel',
        confirmLabel: 'confirm',
        backLabel: 'back'
      },
      sidebarButtons: [
        {
          label: 'label',
          icon: 'pmicons-placeholder',
          actionFn: () => alert('action 1')
        },
        {
          label: 'label',
          icon: 'pmicons-placeholder',
          actionFn: () => alert('action 2')
        }
      ]
    }
  },
  render: (args) => ({
    props: {
      ...args,
      config: {
        ...args?.config
      },
      onClick: onClickWithComponentLoading
    },
    template: template('Open sidebar')
  }),
};
