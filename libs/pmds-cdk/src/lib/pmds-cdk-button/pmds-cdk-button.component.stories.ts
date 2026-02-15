////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkButtonComponent } from './pmds-cdk-button.component';
import { componentInfo } from './story-helpers/pmds-cdk-button-component-info-story';

export default {
  title: 'Cdk/Buttons/Button',
  component: PmdsCdkButtonComponent,
  tags: ['autodocs'],
  args: {
    dataQA: 'storybook-qa-',
    type: 'button',
  },
  argTypes: {
    buttonSize: {
      description: 'For set button size',
      table: {
        type: { summary: 'PmdsCdkButtonSize: | small | medium ' },
        defaultValue: { summary: `medium` }
      },
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
    buttonSizeMobile: {
      description: 'For set button size on mobile',
      table: {
        type: { summary: 'PmdsCdkButtonSize: | small | medium ' },
        defaultValue: { summary: `same the buttonSize` }
      },
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
    buttonType: {
      description: 'For set button type',
      table: {
        type: { summary: 'PmdsCdkButtonType: | primary | secondary | tertiary' },
        defaultValue: { summary: `primary` }
      },
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    customIconStyle: {
      description: 'For customize icon style',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    customStyle: {
      description: 'For customize style',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
    },
    disabled: {
      description: 'For disable click',
      table: {
        type: { summary: 'true | false' },
        defaultValue: { summary: `false` }
      },
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      description: 'For set full width',
      table: {
        type: { summary: 'true | false' },
        defaultValue: { summary: `false` }
      },
      control: {
        type: 'boolean',
      },
    },
    smallFit: {
      description: 'If is not set the button have the default width (136px)',
      table: {
        type: { summary: 'true | false' },
        defaultValue: { summary: `false` }
      },
      control: {
        type: 'boolean',
      },
    },
    icon: {
			description: 'Icon string, name must be in the icons library',
			table: {
				type: { summary: 'pmicons-XXXX' },
			},
			control: {
				type: 'text',
			},
		},
    iconPosition: {
      description: 'For icon position',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: `right` }
      },
      options: ['left', 'right'],
      control: { type: 'select' }
    },
    hideLabelMobile: {
      description: 'Hide label in mobile screen',
      table: {
        type: { summary: 'true | false' },
        defaultValue: { summary: `false` }
      },
      control: {
        type: 'boolean',
      },
    },
    label: {
      description: 'For label button',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
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
    type: {
      description: 'Type button or submit',
      table: {
          type: { summary: 'button | submit' },
					defaultValue: { summary: `button` }
      },
			options: ['button', 'submit'],
      control: { type: 'select',}
    },
    buttonClick: {
      description: 'Emit button click',
        table: {
          category: 'Events',
          type: { summary: 'EventEmitter<Event>' },
        }
    }
  },
  parameters: {
    docs: {
      subtitle: 'PmdsCdkButtonComponent',
      description: {
        component: componentInfo
      },
    },
  },
};

export const PrimaryOnlyTextMedium: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    buttonSize: 'medium',
    buttonType: 'primary',
    disabled: false,
    fullWidth: false,
    smallFit: false,
    hideLabelMobile: false,
    iconPosition: 'right',
    label: 'Primary button',
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const PrimaryOnlyTextSmall: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Primary button',
    buttonSize: 'small'
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const PrimaryOnlyTextDisabled: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Primary button',
    disabled: true
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const PrimaryTextAndIcon: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Primary button',
    icon: 'pmicons-account-user'
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const PrimaryTextAndIconDisabled: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Primary button',
    icon: 'pmicons-account-user',
    disabled: true
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const SecondaryOnlyText: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Secondary button',
    buttonType: 'secondary'
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const SecondaryOnlyTextDisabled: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Secondary button',
    buttonType: 'secondary',
    disabled: true
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const SecondaryTextAndIcon: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Secondary button',
    icon: 'pmicons-account-user',
    buttonType: 'secondary'
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const SecondaryTextAndIconDisabled: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Secondary button',
    icon: 'pmicons-account-user',
    buttonType: 'secondary',
    disabled: true
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const TertiaryOnlyText: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Tertiary button',
    buttonType: 'tertiary'
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const TertiaryOnlyTextDisabled: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Tertiary button',
    buttonType: 'tertiary',
    disabled: true
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const TertiaryTextAndIconLeft: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Tertiary button',
    icon: 'pmicons-account-user',
    iconPosition: 'left',
    buttonType: 'tertiary'
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const TertiaryTextAndIconRight: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Tertiary button',
    icon: 'pmicons-account-user',
    buttonType: 'tertiary'
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const HideLabelMobile: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Tertiary button',
    icon: 'pmicons-account-user',
    buttonType: 'tertiary',
    hideLabelMobile: true
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const SmallDesktopMediumMobile: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Primary button',
    buttonSize: 'small',
    buttonSizeMobile: 'medium',
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};

export const TertiaryTextAndIconDisabled: StoryObj<PmdsCdkButtonComponent> = {
  args: {
    label: 'Tertiary button',
    icon: 'pmicons-account-user',
    buttonType: 'tertiary',
    disabled: true
  },
  render: (args) =>( {
    props: {
      ...args,
      buttonClick: () => alert('Button click'),
    }  
  })
};
