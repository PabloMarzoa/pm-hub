////////Third party libraries
import {
	StoryObj,
	componentWrapperDecorator,
	moduleMetadata,
} from '@storybook/angular';
////////Component imports
import { PmdsCdkTableComponent } from './pmds-cdk-table.component';
import { componentInfo } from './story-helpers/pmds-cdk-table-component-info-story';
import { data } from './story-helpers/pmds-cdk-table-component-const-story';
import { PmdsCdkTableRowStoryRowComponent } from './story-helpers/pmds-cdk-table-row-story.component';
import { PmdsCdkCardRowStoryRowComponent } from './story-helpers/pmds-cdk-table-card-story.component';
import { PmdsCdkTableScrollEndComponent } from './story-helpers/pmds-cdk-table-scroll-end.component';
import { PmdsCdkTableCheckboxComponent } from './story-helpers/pmds-cdk-table-checkbox.component';

export default {
	title: 'Cdk/Resources/Table',
	component: PmdsCdkTableComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				PmdsCdkTableScrollEndComponent,
				PmdsCdkTableCheckboxComponent,
			],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
	},
	argTypes: {
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		showOnlyHeader: {
			description: 'Show only header, while loading',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'true | false' },
				defaultValue: { summary: 'false' },
			},
		},
		paginationInfo: {
			description: 'Data for pagination values',
			control: {
				type: 'object',
			},
			table: {
				type: {
					summary:
						'IPmdsCdkPaginationInfo: { total: number, actualPage: number, itemsPage: number }',
				},
				defaultValue: {
					summary: '{ total: 10, actualPage: 1, itemsPage: 10 }',
				},
			},
		},
		showSelectRow: {
			description: 'Show checkbox',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'true | false' },
				defaultValue: { summary: 'false' },
			},
		},
		tableConfig: {
			description: `
Config for table **PmdsCdkTableConfig**<br>
**headerColumns**:
<li>**label**: label for header</li>
<li>**styles**: styles for header</li>
<li>**order**: 'ASC' | 'DES' | undefined sort direction</li>
<li>**action**: action for click the header column</li>
<li>**tooltip**: tooltip for header</li>
<li>**tooltipTitle**: tooltip title for header</li>
<li>**tooltipPosition**: tooltip position</li>
**fixedColumns?: 'first' | 'first-second'**: : fix first or first and second column<br>
**rowComponent**:<br>
<li>**component**: add component template for row</li>
<li>**selectRowAction**: callback when click in a row</li>
<li>**styles**: add custom class to row</li>
<li>**cardComponent**: add component template for mobile view</li>
<li>**selectCardAction**: callback when click in a card</li>
<li>**stylesCard**: add custom class to card</li>
<li>**selectedRows**: callback when click in a checkbox</li>
**emptyStateLiterals**:<br>
<li>**contentWithFilters**: content for no results</li>
<li>**contentWithoutFilters**: content for no data</li>
<li>**title**: title for show in empty state</li>
<li>**buttonText**: buttonText for show in empty state</li>
<li>**icon**: icon for the button for show in empty state</li>`,
			table: {
				type: {
					summary: `{
						headerColumns: IPmdsCdkHeaderConfig[];
						rowComponent: IPmdsCdkDynamicRowComponentConfig;
						fixedColumns?: 'first' | 'first-second';
						emptyStateLiterals?: {
							contentWithFilters: string,
							contentWithoutFilters: string,
							title: string,
							buttonText: string,
							icon?: string;
						}
					}`,
				},
			},
			control: {
				type: 'object',
			},
		},
		tableData: {
			description: 'Data for show in each row/card',
			table: {
				type: { summary: 'Array' },
			},
			control: {
				type: 'array',
			},
		},
		filteredFields: {
			description: 'Filtered fields labels to show',
			control: {
				type: 'array',
			},
			table: {
				type: {
					summary: `string[]`,
					defaultValue: { summary: [] },
				},
			},
		},
		showBottomBorder: {
			description: 'Enable/disable the bottom border',
			control: {
				type: 'boolean',
			},
			table: {
				type: { summary: 'true | false' },
				defaultValue: { summary: 'true' },
			},
		},
		scrollEnd: {
			description: 'Emit event in card view when scroll to last card',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<void>' },
			},
		},
		changeView: {
			description: 'Emit event when toggle view',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<"card" | "table">' },
			},
		},
		clearFilters: {
			description:
				'Emit event when empty state button is selected to clear filters',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<"void">' },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTableComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Table = {
	args: {
		showSelectRow: false,
		tableData: data,
		tableConfig: {
			headerColumns: [
				{
					label: 'Header 1',
					tooltip: 'Header 1',
					action: () => {
						alert(1);
					},
				},
				{
					label: 'Header 2',
					action: () => {
						alert(2);
					},
				},
				{
					label: 'Header 3',
					action: () => {
						alert(3);
					},
				},
				{
					label: 'Header 4',
					action: () => {
						alert(4);
					},
				},
				{ label: 'Header 5' },
			],
			rowComponent: {
				component: PmdsCdkTableRowStoryRowComponent,
				selectRowAction: () => alert('Select Row'),
				styles: '',
				cardComponent: PmdsCdkCardRowStoryRowComponent,
				selectCardAction: () => alert('Select Card'),
				stylesCard: '',
				selectedRows: (rows: any) => console.log(rows),
			},
		},
	},
};

export const Checkbox: StoryObj<PmdsCdkTableComponent> = {
	render: () => ({
		props: {},
		template: `
      		<pmds-cdk-table-checkbox/>
     	`,
	}),
};

export const Scroll: StoryObj<PmdsCdkTableComponent> = {
	render: () => ({
		props: {},
		template: `
      		<pmds-cdk-table-scroll-end/>
     	`,
	}),
};

export const EmptyState: StoryObj<PmdsCdkTableComponent> = {
	args: {
		showSelectRow: false,
		tableData: [],
		tableConfig: {
			headerColumns: [
				{ label: 'Header 1' },
				{ label: 'Header 2' },
				{ label: 'Header 3' },
				{ label: 'Header 4' },
				{ label: 'Header 5' },
			],
			rowComponent: {
				component: PmdsCdkTableRowStoryRowComponent,
				selectRowAction: () => alert('Select Row'),
				cardComponent: PmdsCdkCardRowStoryRowComponent,
				selectCardAction: () => alert('Select Card'),
				stylesCard: 'bg-white',
				selectedRows: (rows: any) => console.log(rows),
			},
			emptyStateLiterals: {
				contentWithFilters: 'This query has no results to display',
				contentWithoutFilters: 'We do not have records at this time',
				title: 'No data found',
				buttonText: 'Check again',
			},
		},
	},
};

export const EmptyStateWithFilter: StoryObj<PmdsCdkTableComponent> = {
	args: {
		showSelectRow: false,
		filteredFields: ['Header 1'],
		tableData: [],
		tableConfig: {
			headerColumns: [
				{ label: 'Header 1' },
				{ label: 'Header 2' },
				{ label: 'Header 3' },
				{ label: 'Header 4' },
				{ label: 'Header 5' },
			],
			rowComponent: {
				component: PmdsCdkTableRowStoryRowComponent,
				selectRowAction: () => alert('Select Row'),
				cardComponent: PmdsCdkCardRowStoryRowComponent,
				selectCardAction: () => alert('Select Card'),
				stylesCard: 'bg-white',
				selectedRows: (rows: any) => console.log(rows),
			},
			emptyStateLiterals: {
				contentWithFilters:
					'This query has no results to display. Please, change the filters and try again.',
				contentWithoutFilters: 'This query has no results to display.',
				title: 'No results found',
				buttonText: 'Clear filters',
			},
		},
	},
};
