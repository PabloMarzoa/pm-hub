////////Angular imports
import {PmdsCdkActionRowBarComponent} from './pmds-cdk-action-row-bar.component';
////////Third party libraries
import type {StoryObj} from '@storybook/angular';
////////Component imports
import {componentInfo} from './story-helpers/pmds-cdk-action-row-bar-component-info-story';

export default {
	title: 'Cdk/Navigation/Action row bar',
	component: PmdsCdkActionRowBarComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		actionBarButtons: [
			{
				label: 'Button',
				action: () => {
					alert('button clicked!')
				}
			},
			{
				label: 'Button',
				action: () => {
					alert('button clicked!')
				}
			},
		]
	},
	argTypes: {
		actionBarButtons: {
			description: 'For config butttons',
			table: {
				type: {
					summary: `
          IPmdsCdkActionRowBar[]: {
            label: string;
            action: () => void
          }[]
        `
				},
			},
			control: {
				type: 'array',
			},
		},
		disabled: {
			description: 'For disable action row bar',
			table: {
				type: {summary: 'true | false'},
				defaultValue: {summary: 'false'}
			},
			control: {
				type: 'boolean',
			},
		},
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: {summary: 'string'},
			},
			control: {
				type: 'text',
			},
		}
	},
	parameters: {
    docs: {
      subtitle: 'PmdsCdkActionRowBarComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const RowsInTable: StoryObj<PmdsCdkActionRowBarComponent> = {
	args: {
		disabled: false,
	},
	render: (args) => ({
		props: {
			...args,
			alertMe: () => alert('row click')
		},
		template: `
      <div class="h-48">
        <table class="w-full">
          <tbody>
            <tr (click)="alertMe()" class="flex items-center h-16 border-t border-b text-color-text-primary text-sm relative py-1 hover:bg-color-surface-hover overflow-hidden">
              <td class="w-1/3 pl-4">
                00/00/0000
              </td>
              <td class="w-1/3">
                ES12 **** 7890
              </td>
              <td class="w-1/3">
                123456789-ABC
              </td>
              <td class="w-1/3">
                Name and surname
              </td>
              <td class="w-1/3">
                <pmds-cdk-action-row-bar
                  [dataQA]="dataQA"
                  [actionBarButtons]="actionBarButtons"
                  [disabled]="disabled" />
              </td>
            </tr>
            <tr (click)="alertMe()" class="flex items-center h-16 border-b text-color-text-primary text-sm relative py-4 hover:bg-color-surface-hover overflow-hidden">
              <td class="w-1/3 pl-4">
                00/00/0000
              </td>
              <td class="w-1/3">
                ES12 **** 7890
              </td>
              <td class="w-1/3">
                123456789-ABC
              </td>
              <td class="w-1/3">
                Name and surname
              </td>
              <td class="w-1/3">
                <pmds-cdk-action-row-bar
                  [dataQA]="dataQA"
                  [actionBarButtons]="actionBarButtons"
                  [disabled]="disabled" />
              </td>
            </tr>
            <tr (click)="alertMe()" class="flex items-center h-16 border-b text-color-text-primary text-sm relative py-4 hover:bg-color-surface-hover overflow-hidden">
              <td class="w-1/3 pl-4">
                00/00/0000
              </td>
              <td class="w-1/3">
                ES12 **** 7890
              </td>
              <td class="w-1/3">
                123456789-ABC
              </td>
              <td class="w-1/3">
                Name and surname
              </td>
              <td class="w-1/3">
                <pmds-cdk-action-row-bar
                  [dataQA]="dataQA"
                  [actionBarButtons]="actionBarButtons"
                  [disabled]="disabled" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
	}),
};

export const Disabled = {
	args: {
		disabled: true
	},
	render: (args: any) => ({
		props: args,
		template: `
      <div class="h-48">
        <table class="w-full">
          <tbody>
            <tr class="flex items-center h-16 border-t border-b text-color-text-primary text-sm relative py-4 hover:bg-color-surface-hover overflow-hidden">
              <td class="w-1/3 pl-4">
                00/00/0000
              </td>
              <td class="w-1/3">
                ES12 **** 7890
              </td>
              <td class="w-1/3">
                123456789-ABC
              </td>
              <td class="w-1/3">
                Name and surname
              </td>
              <td class="w-1/3">
                <pmds-cdk-action-row-bar
                  [dataQA]="dataQA"
                  [actionBarButtons]="actionBarButtons"
                  [disabled]="disabled" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
	}),
};
