////////Angular imports
import { StoryObj, componentWrapperDecorator } from '@storybook/angular';
////////Component imports
import { PmdsCdkPaginatorComponent } from './pmds-cdk-paginator.component';
import { componentInfo } from "./story-helpers/pmds-cdk-paginator-component-info-story";

export default {
  title: 'Cdk/Navigation/Paginator',
  component: PmdsCdkPaginatorComponent,
  tags: ['autodocs'],
  args: {
		dataQA: 'storybook-qa-'
	},
  decorators: [
    componentWrapperDecorator((story) => (`
        <div class="h-32">
          ${story}
        </div>`))
  ],
  argTypes: {
    itemsPage: {
      description: 'Array for items for page options',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[10, 25, 50]' },
      },
      control: {
        type: 'array',
      },
    },
	forceTabletView: {
	  description: 'Force tablet responsive view',
	  table: {
		  type: {summary: 'boolean'},
		  defaultValue: {summary: 'false'}
	  },
	  control: {
		  type: 'boolean',
	  }
	},
    paginationInfo: {
      description: 'Data for pagination values',
      control: {
        type: 'object',
      },
      table: {
        type: { summary: 'IPmdsCdkPaginationInfo: { total: number, actualPage: number, itemsPage: number }'},
        defaultValue: { summary: '{ total: 10, actualPage: 1, itemsPage: 10 }'},
      },
    },
    literals: {
      description: 'Literals for template',
      control: {
        type: 'object',
      },
      table: {
        type: { summary: 'IPmdsCdkPaginatorLiterals: { itemsDisplayed: string, jumpTo: string, to: string, labelOf: string, items: string, prev: string, next: string } | undefined'},
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
    changePage: {
      description: 'Emit change page',
        table: {
          category: 'Events',
          type: { summary: 'EventEmitter<number>' },
        }
    },
    itemChangedPerPage: {
      description: 'Emit item changed per page',
        table: {
          category: 'Events',
          type: { summary: 'EventEmitter<number>' },
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
  },
  parameters: {
    docs: {
      subtitle: 'PmdsCdkPaginatorComponent',
      description: {
        component: componentInfo
      },
    },
  },
};

export const PaginationLess7Pages = {
  args: {
    itemsPage: [10, 25, 50],
    paginationInfo: {
      total: 50,
      actualPage: 1,
      itemsPage: 10
    },
    literals: {
      itemsDisplayed: 'Items displayed',
      jumpTo: 'Jump to',
      to: 'to',
      labelOf: 'of',
      items: 'items',
      prev: 'Prev',
      next: 'Next'
    },
    dataQA: ''
  },
};

export const PaginationMore7Pages: StoryObj<PmdsCdkPaginatorComponent> = {
  args: {
    itemsPage: [10, 25, 50],
    paginationInfo: {
      total: 110,
      actualPage: 5,
      itemsPage: 10
    },
    literals: {
      itemsDisplayed: 'Items displayed',
      jumpTo: 'Jump to',
      to: 'to',
      labelOf: 'of',
      items: 'items',
	  item: 'item',
      prev: 'Prev',
      next: 'Next'
    },
  },
  render: (args) => ({
    props: {
        ...args,
        itemChangedPerPage: (itemsPages: number) => {
            args.paginationInfo = {
                ...args.paginationInfo,
                actualPage: 1,
                itemsPage: itemsPages
            }
        },
        changePage: (page: number) => {
            args.paginationInfo = {
                ...args.paginationInfo,
                actualPage: page
            }
        },
    },
    template: `
    <pmds-cdk-paginator
        [itemsPage]="itemsPage"
        [paginationInfo]="paginationInfo"
        [dataQA]="dataQA"
        [literals]="literals"
        (itemChangedPerPage)="itemChangedPerPage($event)"
        (changePage)="changePage($event)"
    />
    `
  })
};

export const PaginationInitialPage = {
  args: {
    itemsPage: [10, 25, 50],
    paginationInfo: {
      total: 110,
      actualPage: 1,
      itemsPage: 10
    },
    literals: {
      itemsDisplayed: 'Items displayed',
      jumpTo: 'Jump to',
      to: 'to',
      labelOf: 'of',
      items: 'items',
      prev: 'Prev',
      next: 'Next'
    },
  },
};

export const PaginationLastPage = {
  args: {
    itemsPage: [10, 25, 50],
    paginationInfo: {
      total: 110,
      actualPage: 11,
      itemsPage: 10
    },
    literals: {
      itemsDisplayed: 'Items displayed',
      jumpTo: 'Jump to',
      to: 'to',
      labelOf: 'of',
      items: 'items',
      prev: 'Prev',
      next: 'Next'
    },
    dataQA: ''
  },
};

export const Skeleton = {
  args: {
    itemsPage: [10, 25, 50],
    paginationInfo: {
      total: 110,
      actualPage: 11,
      itemsPage: 10
    },
    literals: {
      itemsDisplayed: 'Items displayed',
      jumpTo: 'Jump to',
      to: 'to',
      labelOf: 'of',
      items: 'items',
      prev: 'Prev',
      next: 'Next'
    },
    skeleton: true
  },
};
