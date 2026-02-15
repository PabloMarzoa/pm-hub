export const template = `
<pmds-cdk-cards-settings
	[dataQA]="dataQA"
	[type]="type"
	[settingsItems]="settingsItems"
	[skeleton]="skeleton"
	[showCheckbox]="showCheckbox"
	[showEditAction]="showEditAction"
	[showDeleteAction]="showDeleteAction"
	(editedItem)="alertMe('Item edit')"
	(checkedItem)="alertMe('Item checked')"
	(toggledItem)="alertMe('Item toggled')"
	(deletedItem)="alertMe('Item deleted')"
	(sortedItems)="alertMe('Items sorted')"
/>
`
