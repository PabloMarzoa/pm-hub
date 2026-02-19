////////PNXT libraries
import { IPmdsCdkOptionDropdown } from '../../pmds-cdk-dropdown/models/pmds-cdk-option-dropdown.model';

export const literalsErrorFn = (name: string, error: string, value?: any) => {
	return (
		{
			required: `${name} is required`,
		}[error] || 'wrong value'
	);
};

export const options: IPmdsCdkOptionDropdown[] = [
	{
		label: '07:00',
		value: '07:00',
		category: 'Category 1'
	},
	{
		label: '08:00',
		value: '08:00',
		category: 'Category 1'
	},
	{
		label: '15:00',
		value: '15:00',
		category: 'Category 1'
	},
	{
		label: '16:00',
		value: '16:00',
		category: 'Category 2'
	},
	{
		label: '23:59',
		value: '23:59',
		category: 'Category 3'
	}
];

export const template = `

<div [formGroup]="form" class="w-full">
	<pmds-cdk-time-input
		[formControlName]="formControlName"
		[placeholder]="placeholder"
		[showClear]="showClear"
		[showCategory]="showCategory"
		[options]="options"
		[skeleton]="skeleton"
		[isDisabled]="isDisabled"
		[dataQA]="dataQA"
		[helperText]="helperText"
		[literalsErrorFn]="literalsErrorFn"
	/>
</div>
`;
