////////Angular imports
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
////////Third party libraries
import { StoryObj, moduleMetadata } from '@storybook/angular';
////////Component imports
import { PmdsCdkOptionButtonsComponent } from './pmds-cdk-option-buttons.component';
import { componentInfo } from "./story-helpers/pmds-cdk-option-buttons-component-info-story";

export default {
    title: 'Cdk/Forms, data input and selections/Option buttons',
    component: PmdsCdkOptionButtonsComponent,
    tags: ['autodocs'],
    decorators: [
	    moduleMetadata({
		    imports: [ReactiveFormsModule, FormsModule],
	    }),
    ],
    args: {
        dataQA: 'storybook-qa-',
        labels: [
            {
                id: '1',
                label: 'Label',
                icon: 'pmicons-circle-account-user'
            },
            {
                id: '2',
                label: 'Label',
                icon: 'pmicons-circle-account-user'
            },
            {
                id: '3',
                label: 'Label',
                icon: 'pmicons-circle-account-user'
            }
        ],
		noSelectionByDefault: false
    },
    argTypes: {
        labels: {
            description: 'Label/id/icon for each option',
            table: {
                type: {
                    summary: "IPmdsCdkOptionButtons: { id: 'number', label: 'string', icon: 'pmicons-XXX' }"
                },
            },
            control: {
                type: 'object',
            },
        },
		selectedOption: {
            description: 'Id of the default selected option.',
            table: {
                type: {
                    summary: "text"
                },
            },
            control: {
                type: 'text',
            },
        },
        size: {
            description: 'Button size',
            table: {
                type: { summary: 'large | small' },
                defaultValue: { summary: 'large' },
            },
            options: ['small','large'],
            control: {
                type: 'radio',
            },
        },
        dataQA: {
            description: 'Reference for QA',
            table: {
                type: { summary: 'string' },
            },
            control: {
                type: 'text',
            }
        },
        optionSelected: {
            name: 'optionSelected',
            description: 'Emit the id from label clicked',
            table: {
                category: 'Events',
                type: { summary: 'EventEmitter<string>()' },
            },
        },
		noSelectionByDefault: {
			description: 'No selection by default',
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
			control: {
				type: 'boolean',
			},
		},
        skeleton: {
            description: 'Show the skeleton section',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: {
                type: 'boolean',
            },
        },
		likeDislike: {
			description: 'Change template to like and dislike option',
			table: {
				type: { summary: "boolean" },
				defaultValue: { summary: "false" },
			},
			control: {
				type: 'boolean',
			},
		}
    },
    parameters: {
        docs: {
            subtitle: 'PmdsCdkOptionButtonsComponent',
            description: {
                component: componentInfo
            },
        },
    },
};

export const LargeTextAndIcon: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        size: 'large',
    },
};

export const LargeTextAndIconWithoutSelection: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        size: 'large',
		noSelectionByDefault: true
    },
};

export const LargeTextAndIconAndSecondAsDefault: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
		selectedOption: '2',
        size: 'large',
    },
};

export const SmallTextAndIcon: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        size: 'small',
    },
};

export const LargeWithoutLabel: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        labels: [
            {
                id: '1',
                icon: 'pmicons-circle-account-user'
            },
            {
                id: '2',
                icon: 'pmicons-circle-account-user'
            },
            {
                id: '3',
                icon: 'pmicons-circle-account-user'
            }
        ],
        size: 'large'
    },
};

export const SmallWithoutLabel: StoryObj<PmdsCdkOptionButtonsComponent> = {
     args: {
        labels: [
            {
                id: '1',
                icon: 'pmicons-circle-account-user'
            },
            {
                id: '2',
                icon: 'pmicons-circle-account-user'
            },
            {
                id: '3',
                icon: 'pmicons-circle-account-user'
            }
        ],
        size: 'small'
    },
};

export const LargeWithoutIcon: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        labels: [
            {
                id: '1',
                label: 'Label'
            },
            {
                id: '2',
                label: 'Label'
            },
            {
                id: '3',
                label: 'Label'
            }
        ],
        size: 'large',
    },
};

export const SmallWithoutIcon: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        labels: [
            {
                id: '1',
                label: 'Label'
            },
            {
                id: '2',
                label: 'Label'
            },
            {
                id: '3',
                label: 'Label'
            }
        ],
        size: 'small',
    },
};

export const LikeDislike: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        likeDislike: true
    },
    render: (args) => ({
		props: {
			...args,
			optionSelected: (id: string) => alert(id)
		},
	}),
};

export const withForm: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        labels: [
            {
                id: '1',
                label: 'Label',
                icon: 'pmicons-circle-account-user'
            },
            {
                id: '2',
                label: 'Label',
                icon: 'pmicons-circle-account-user'
            },
            {
                id: '3',
                label: 'Label',
                icon: 'pmicons-circle-account-user'
            }
        ],
    },
  render: (args: any) => {
		return {
			props: {
				...args,
				exampleForm: new FormBuilder().group({
					control: ['1'],
				}),
			},
			template: `
          Form value: {{ exampleForm.get('control').value }}
          <form [formGroup]="exampleForm">
            <pmds-cdk-option-buttons
              [labels]="labels"
              formControlName="control"
              />
          </form>
        `,
		};
	},
};

export const Skeleton: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        labels: [
            {
                id: '1',
                label: 'Label'
            },
            {
                id: '2',
                label: 'Label'
            },
            {
                id: '3',
                label: 'Label'
            }
        ],
        size: 'large',
        skeleton: true,
        likeDislike: false
    },
};

export const SkeletonLikeDislike: StoryObj<PmdsCdkOptionButtonsComponent> = {
    args: {
        labels: [
            {
                id: '1',
                label: 'Label'
            },
            {
                id: '2',
                label: 'Label'
            },
            {
                id: '3',
                label: 'Label'
            }
        ],
        size: 'large',
        skeleton: true,
        likeDislike: true
    },
};

