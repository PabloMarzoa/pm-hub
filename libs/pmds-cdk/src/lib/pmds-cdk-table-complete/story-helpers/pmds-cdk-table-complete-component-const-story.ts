export const template = `<pmds-cdk-complete-table-wrapper [tableOptions]="getConfig()" [sortOneColumnAtATime]="sortOneColumnAtATime" [itemsPage]="itemsPage" [dataQA]="dataQA" [initialPaginationInfo]="initialPaginationInfo"></pmds-cdk-complete-table-wrapper>`

export const templateColumnsWrapper = `<pmds-cdk-complete-table-fixed-columns-wrapper [tableOptions]="getConfig()" [sortOneColumnAtATime]="sortOneColumnAtATime" [itemsPage]="itemsPage" [dataQA]="dataQA" [initialPaginationInfo]="initialPaginationInfo"></pmds-cdk-complete-table-fixed-columns-wrapper>`

export const templateFixed = `<pmds-cdk-complete-table-fixed-columns-wrapper [tableOptions]="getConfig()" [sortOneColumnAtATime]="sortOneColumnAtATime" [itemsPage]="itemsPage" [dataQA]="dataQA" [filteredFields]="filteredFields" [initialPaginationInfo]="initialPaginationInfo"></pmds-cdk-complete-table-fixed-columns-wrapper>`

export const paginatorLiterals = {
	items: 'items',
	item: 'item',
	itemsDisplayed: 'showed',
	jumpTo: 'go to',
	labelOf: 'of',
	next: 'next',
	prev: 'prev',
	to: 'to'
}

export const tableInfoHeader = {
	literals: {
		displaying: 'Displaying',
		items: 'items',
		item: 'item',
		searchedBy: 'searched by'
	},
	actions: [{
		actionIcon: 'pmicons-download',
		actionLabel: 'Download',
		actionFn: () => {
			alert('Download alert')
		}
	}]
}

export const tableInfoHeaderUpload = {
	literals: {
		displaying: 'Displaying',
		items: 'items',
		item: 'item',
		searchedBy: 'searched by'
	},
	actions: [{
		actionIcon: 'pmicons-upload',
		actionLabel: 'Upload',
		actionFn: () => {
			alert('upload alert')
		}
	}]
}

export const rowComponent = {
	selectRowAction: () => alert('Select Row'),
	selectCardAction: () => alert('Select Card'),
	selectedRows: (rows: any) => console.log(rows),
}

export const emptyStateLiterals = {
	contentWithFilters: 'This query has no results to display.',
	contentWithoutFilters: 'This query has no results to display.',
	title: 'No results found',
	buttonText: 'Clear filters',
}

export const extraColumns = [
	{
		label: 'Has Url',
		styles: 'pl-2 bg-color-surface-primary'
	},
	{
		label: 'Url',
		styles: 'text-start pr-4 !w-[300px]'
	},
	{
		label: 'Url 2',
		styles: 'text-start pr-4 !w-[300px]'
	},
	{
		label: 'Url 3',
		styles: 'text-end pr-4 !w-[300px]'
	}
]