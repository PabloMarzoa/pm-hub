////////Angular imports
import {HttpClientModule} from '@angular/common/http';
import {
	importProvidersFrom,
} from '@angular/core';
////////Third party libraries
import type {StoryObj} from '@storybook/angular';
import {moduleMetadata} from '@storybook/angular';
////////Component imports
import {PmdsCdkTableCompleteComponent} from './pmds-cdk-table-complete.component';
import {IPmdsCdkTableCompleteConfig} from './models/pmds-cdk-table-complete-config.model';
import {componentInfo} from "./story-helpers/pmds-cdk-table-complete-component-info-story";
import {PmdsCdkCompleteTableWrapperComponent} from "./story-helpers/pmds-cdk-table-complete-wrapper.component";
import {PmdsCdkCompleteTableFixedColumnsWrapperComponent} from "./story-helpers/pmds-cdk-table-complete-fixed-columns-wrapper.component";
import { emptyStateLiterals, extraColumns, paginatorLiterals, rowComponent, tableInfoHeader, tableInfoHeaderUpload, template, templateColumnsWrapper, templateFixed } from "./story-helpers/pmds-cdk-table-complete-component-const-story";

export default {
	title: 'Cdk/Resources/Table complete',
	component: PmdsCdkTableCompleteComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				PmdsCdkCompleteTableWrapperComponent,
				PmdsCdkCompleteTableFixedColumnsWrapperComponent
			]
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		initialPaginationInfo: {
			actualPage: 1,
			itemsPage: 10,
			total: 0
		},
		sortOneColumnAtATime: true
	},
	argTypes: {
		filteredFields: {
			description: 'Filtered fields to show on header info',
			table: {
				type: {summary: 'string[]'},
				defaultValue: {summary: []}
			},
			control: {
				type: 'array',
			},
		},
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: {summary: 'string'},
				defaultValue: {summary: ''},
			},
			control: {
				type: 'text',
			},
		},
		itemsPage: {
			description: 'Array for items for page options',
			table: {
				type: {summary: 'number[]'},
				defaultValue: {summary: '[10, 25, 50]'},
			},
			control: {
				type: 'array',
			},
		},
		sortOneColumnAtATime: {
			description: 'Sort only one column at a time',
			table: {
				type: {summary: 'boolean'},
				defaultValue: {summary: 'true'}
			},
			control: {
				type: 'boolean',
			}
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
		cardItemsPerLoad: {
			description: 'Items per page on card view',
			table: {
				type: {summary: 'number'},
				defaultValue: {summary: 5},
			},
			control: {
				type: 'number',
			},
		},
		initialPaginationInfo: {
			description: 'Can set the initial page values',
			table: {
				type: {
					summary: `Partial<IPmdsCdkPaginationInfo>: { actualPage: number, itemsPage: number, total: number }`
				},
				defaultValue: {
					summary: `{ actualPage: 1, itemsPage: 10, total: 0 }`
				},
			},
			control: {
				type: 'object',
			},
		},
		tableConfiguration: {
			description: `
Config for table **IPmdsCdkTableCompleteConfig**<br>
**showSelectRow**: show first column to select items<br><br>
**resService**: the rest service that extends the library PmdsCdkTableCompleteDataService service.<br><br>

**tableInfoHeader**:<br>
<li>**literals**: {displaying: string, items: string, item: string, searchedBy: string}</li>
<li>**actions**: {actionIcon: string, actionLabel: string, actionFn: () => void}[]</li>

**paginatorLiterals**:<br>
<li>**items**: items string (plural)</li>
<li>**item**: item string (singular)</li>
<li>**itemsDisplayed**: items displayed string</li>
<li>**jumpTo**: jump to string</li>
<li>**labelOf**: label of string</li>
<li>**next**: next string</li>
<li>**prev**: prev string</li>
<li>**to**: to string</li>

**tableConfig**:<br>
**fixedColumns?: 'first' | 'first-second'**: fix first or first and second column<br>
**emptyStateLiterals**:<br>
<li>**contentWithFilters**: content if there are filters</li>
<li>**contentWithoutFilters**: content if there are not filters</li>
<li>**title**: title</li>
<li>**src**: source</li>
<li>**buttonText**: button's text</li>
<li>**imgText**: image's text</li>
**headerColumns**:
<li>**label**: header label</li>
<li>**sortableField**: the variable name to be sorted</li>
<li>**order**: sort order</li>
<li>**styles**: custom styles</li>
<li>**tooltip**: header tooltip</li>
<li>**tooltipTitle**: header tooltip title</li>
<li>**tooltipPosition**: header tooltip position</li>
**rowComponent**:
<li>**component**: add component template for row</li>
<li>**cardComponent**: add component template for mobile view</li>
<li>**selectRowAction**: callback when click in a row</li>
<li>**selectCardAction**: callback when click in a card</li>
<li>**selectedRows**: callback when click in a checkbox</li><br>`,
			table: {
				type: {
					summary:`IPmdsCdkTableCompleteConfig: { showSelectRow?: boolean, tableConfig: { emptyStateLiterals?: { contentWithFilters: string, contentWithoutFilters: string, title: string, src?: string, buttonText?: string, imgText?: string } headerColumns: IPmdsCdkHeaderCompleteConfig[]: { label: string, sortableField?: string, order?: 'ASC' | 'DES' | undefined, styles?: string , tooltip?: string , tooltipTitle?: string , tooltipPosition?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' } fixedColumns?: 'first' | 'first-second'} rowComponent: IPmdsCdkDynamicRowDefaultComponentConfig: { component?: Type<any>, cardComponent?: Type<any>, selectRowAction?: (row: Type<any>) => void, selectCardAction?: (card: Type<any>) => void, selectedRows?: (rows: Type<any>) => void}, resService: PmdsCdkTableCompleteDataAbstractService, paginatorLiterals?: { items: string, itemsDisplayed: stringm jumpTo: string, labelOf: string, next: string, prev: string, to: string}, tableInfoHeader?: { literals: { displaying: string, items: string, searchedBy: string }, actions?: { actionIcon: string, actionLabel: string, actionFn: () => void, }[]} }`
				},
			},
			control: {
				type: 'object',
			},
			type: {
				type: 'object',
				required: true
			}
		},
		clearFilters: {
			description: 'Emit event when empty state button is selected to clear filters',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<"void">'},
			},
		},
		changeView: {
			description: 'Emit event when toggle view',
			table: {
				category: 'Events',
				type: {summary: 'EventEmitter<"card" | "table">'},
			},
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
		}
	},
	parameters: {
		injectInjectorToProps: true,
		docs: {
			subtitle: 'PmdsCdkTableCompleteComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const TableComplete: StoryObj<{ tableConfiguration: Partial<IPmdsCdkTableCompleteConfig>, itemsPage: number[] }> = {
	args: {
		tableConfiguration: {
			tableConfig: {
				headerColumns: [
					{
						label: 'Pokemon',
						sortableField: 'name',
						styles: 'pl-4 bg-color-surface-primary',
						tooltipTitle: 'Tooltip title',
						tooltip: 'Tooltip content'
					},
					{
						label: 'Url',
						sortableField: 'url',
						tooltip: 'URL',
						styles: 'text-start pr-4'
					}
				],
				rowComponent
			},
			paginatorLiterals,
			tableInfoHeader: tableInfoHeaderUpload
		},
		itemsPage: [10, 25, 50]
	},
	render: (args) => {
		return {
			applicationConfig: {
				providers: [importProvidersFrom(HttpClientModule)],
			},
			props: {
				...args,
				getConfig() {
					return args.tableConfiguration;
				}
			},
			template
		};
	}
};

export const Checkbox: StoryObj<{
	tableConfiguration: Partial<IPmdsCdkTableCompleteConfig>,
	itemsPage: number[]
}> = {
	args: {
		tableConfiguration: {
			showSelectRow: true,
			tableConfig: {
				headerColumns: [
					{
						label: 'Pokemon',
						sortableField: 'name',
						styles: 'pl-4 bg-color-surface-primary',
						tooltipTitle: 'Tooltip title',
						tooltip: 'Tooltip content'
					},
					{
						label: 'Url',
						styles: 'text-start pr-4'
					}
				],
				rowComponent
			},
			paginatorLiterals,
			tableInfoHeader: tableInfoHeaderUpload
		},
		itemsPage: [10, 25, 50]
	},
	render: (args) => {
		return {
			applicationConfig: {
				providers: [importProvidersFrom(HttpClientModule)],
			},
			props: {
				...args,
				getConfig() {
					return args.tableConfiguration;
				}
			},
			template
		};
	}
};

export const FixedColumn: StoryObj<{ tableConfiguration: Partial<IPmdsCdkTableCompleteConfig>, itemsPage: number[] }> = {
	args: {
		tableConfiguration: {
			tableConfig: {
				headerColumns: [
					{
						label: 'Pokemon',
						sortableField: 'name',
						styles: 'pl-4 bg-color-surface-primary !w-[150px]',
						tooltipTitle: 'Tooltip title',
						tooltip: 'Tooltip content'
					},
					...extraColumns
				],
				rowComponent,
				fixedColumns: 'first'
			},
			paginatorLiterals,
			tableInfoHeader: tableInfoHeaderUpload
		},
		itemsPage: [10, 25, 50]
	},
	render: (args) => {
		return {
			applicationConfig: {
				providers: [importProvidersFrom(HttpClientModule)],
			},
			props: {
				...args,
				getConfig() {
					return args.tableConfiguration;
				}
			},
			template: templateColumnsWrapper
		};
	}
};

export const FixedTwoColumns: StoryObj<{ tableConfiguration: Partial<IPmdsCdkTableCompleteConfig>, itemsPage: number[] }> = {
	args: {
		tableConfiguration: {
			tableConfig: {
				headerColumns: [
					{
						label: 'Pokemon',
						sortableField: 'name',
						styles: 'pl-4 bg-color-surface-primary !w-[150px]',
						tooltipTitle: 'Tooltip title',
						tooltip: 'Tooltip content'
					},
					...extraColumns
				],
				rowComponent,
				fixedColumns: 'first-second'
			},
			paginatorLiterals,
			tableInfoHeader: tableInfoHeaderUpload
		},
		itemsPage: [10, 25, 50]
	},
	render: (args) => {
		return {
			applicationConfig: {
				providers: [importProvidersFrom(HttpClientModule)],
			},
			props: {
				...args,
				getConfig() {
					return args.tableConfiguration;
				}
			},
			template: templateColumnsWrapper
		};
	}
};

export const CheckboxFixedOneColumn: StoryObj<{
	tableConfiguration: Partial<IPmdsCdkTableCompleteConfig>,
	itemsPage: number[]
}> = {
	args: {
		tableConfiguration: {
			showSelectRow: true,
			tableConfig: {
				headerColumns: [
					{
						label: 'Pokemon',
						sortableField: 'name',
						styles: 'pl-4 bg-color-surface-primary !w-[150px]',
						tooltipTitle: 'Tooltip title',
						tooltip: 'Tooltip content'
					},
					...extraColumns
				],
				rowComponent,
				fixedColumns: 'first'
			},
			paginatorLiterals,
			tableInfoHeader: tableInfoHeaderUpload
		},
		itemsPage: [10, 25, 50]
	},
	render: (args) => {
		return {
			applicationConfig: {
				providers: [importProvidersFrom(HttpClientModule)],
			},
			props: {
				...args,
				getConfig() {
					return args.tableConfiguration;
				}
			},
			template: templateColumnsWrapper
		};
	}
};

export const CheckboxFixedTwoColumn: StoryObj<{
	tableConfiguration: Partial<IPmdsCdkTableCompleteConfig>,
	itemsPage: number[]
}> = {
	args: {
		tableConfiguration: {
			showSelectRow: true,
			tableConfig: {
				headerColumns: [
					{
						label: 'Pokemon',
						sortableField: 'name',
						styles: '!pl-2 bg-color-surface-primary !w-[150px]',
						tooltipTitle: 'Tooltip title',
						tooltip: 'Tooltip content'
					},
					...extraColumns
				],
				rowComponent,
				fixedColumns: 'first-second'
			},
			paginatorLiterals,
			tableInfoHeader: tableInfoHeaderUpload
		},
		itemsPage: [10, 25, 50]
	},
	render: (args) => {
		return {
			applicationConfig: {
				providers: [importProvidersFrom(HttpClientModule)],
			},
			props: {
				...args,
				getConfig() {
					return args.tableConfiguration;
				}
			},
			template: templateColumnsWrapper
		};
	}
};

export const Skeleton: StoryObj<{
	filteredFields: string[],
	tableConfiguration: Partial<IPmdsCdkTableCompleteConfig>,
	itemsPage: number[]
	skeleton: boolean
}> = {
	args: {
		skeleton: true
	},
	render: (args) => {
		return {
			applicationConfig: {
				providers: [importProvidersFrom(HttpClientModule)],
			},
			props: args,
			template: `<pmds-cdk-complete-table-wrapper [skeleton]="skeleton"></pmds-cdk-complete-table-wrapper>`
		};
	}
};
