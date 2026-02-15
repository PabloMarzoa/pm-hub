////////Third party libraries
import { componentWrapperDecorator } from '@storybook/angular';
////////Project imports
import { PmdsCdkPageControllerComponent } from './pmds-cdk-page-controller.component';
import { componentInfo } from "./story-helpers/pmds-cdk-page-controller-component-info-story";

export default {
    title: 'Cdk/Navigation/Page controller',
    component: PmdsCdkPageControllerComponent,
    tags: ['autodocs'],
    decorators: [
        componentWrapperDecorator(
            (story) => `
                <div class="flex flex-col items-center">
                    ${story}
                </div>`
        )
    ],
    args: {
        dataQA: 'storybook-qa-',
        onlyDots: false
    },
    argTypes: {
        totalItems: {
            description: 'Total number of items to be shown',
            table: {
                type: { summary: 'number' },
            },
            control: {
                type: 'number',
            },
        },
        actualItem: {
            description: 'Current item shown',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '1' }
            },
            control: {
                type: 'number',
            },
        },
        changePage: {
            description: 'Emit change page',
            table: {
                category: 'Events',
                type: { summary: 'EventEmitter<number>' },
            }
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
		onlyDots: {
          description: 'Hide the arrows',
          table: {
              type: { summary: 'boolean' },
              defaultValue: { summary: 'false' }
          },
          control: {
              type: 'boolean',
          }
        }
    },
    parameters: {
        docs: {
            subtitle: 'PmdsCdkPageControllerComponent',
            description: {
                component: componentInfo
            },
        },
    },
};

export const SeveralItems = {
    args: {
        totalItems: 9,
        actualItem: 5
    }
};

export const OneItem = {
    args: {
        totalItems: 1,
        actualItem: 1
    }
};

export const OnlyDots = {
    args: {
        totalItems: 9,
        actualItem: 1,
        onlyDots: true
    }
};

export const Skeleton = {
    args: {
        skeleton: true
    }
};
