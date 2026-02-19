////////Component imports
import { IPmdsCdkButtonModalButton } from '../models/pmds-cdk-button-modal.models';

export const buttons: IPmdsCdkButtonModalButton[] = [
	{
		type: 'primary',
		label: 'Primary button',
		action: () => alert('Primary button'),
		icon: 'pmicons-clip',
		iconPosition: 'right',
	},
	{
		type: 'secondary',
		label: 'Secondary button',
		action: () => alert('Secondary button'),
		icon: 'pmicons-clients',
		iconPosition: 'right',
	},
	{
		type: 'tertiary',
		label: 'Tertiary button',
		action: () => alert('Tertiary button'),
		icon: 'pmicons-civil-liability',
		iconPosition: 'right',
	},
];

export const buttonsDisabled: IPmdsCdkButtonModalButton[] = [
	{
		type: 'primary',
		label: 'Primary button',
		action: () => alert('Primary button'),
		icon: 'pmicons-clip',
		iconPosition: 'right',
		disabled: true,
	},
	{
		type: 'secondary',
		label: 'Secondary button',
		action: () => alert('Secondary button'),
		icon: 'pmicons-clients',
		iconPosition: 'right',
	},
	{
		type: 'tertiary',
		label: 'Tertiary button',
		action: () => alert('Tertiary button'),
		icon: 'pmicons-civil-liability',
		iconPosition: 'right',
	},
];

export const buttonsDropdown: IPmdsCdkButtonModalButton[] = [
	{
		type: 'primary',
		label: 'Primary button',
		action: () => alert('Primary button'),
		icon: 'pmicons-chevron-right-bold',
		iconPosition: 'right',
		dropdownButtons: [
			{
				type: 'secondary',
				label: 'Dropdown button 1',
				action: () => alert('Dropdown button 1'),
			},
			{
				type: 'secondary',
				label: 'Dropdown button 2',
				action: () => alert('Dropdown button 2'),
			},
			{
				type: 'secondary',
				label: 'Dropdown button 2',
				action: () => alert('Dropdown button 2'),
			},
			{
				type: 'secondary',
				label: 'Dropdown button 2',
				action: () => alert('Dropdown button 2'),
			},
		],
	},
	{
		type: 'secondary',
		label: 'Secondary button',
		action: () => alert('Secondary button'),
		icon: 'pmicons-clients',
		iconPosition: 'right',
	},
	{
		type: 'tertiary',
		label: 'Tertiary button',
		action: () => alert('Tertiary button'),
		icon: 'pmicons-civil-liability',
		iconPosition: 'right',
	},
];

export const template = `
	<pmds-cdk-button
		buttonType="primary"
		(buttonClick)="show=!show"
		(click)="show=true"
		label="Open button modal"
	/>
	<pmds-cdk-button-modal
		[buttons]="buttons"
		[backLiteral]="backLiteral"
		[dataQA]="dataQA"
		[hasBackdropClick]="hasBackdropClick"
		[(show)]="show"
	/>
`;
