export const literalsErrorFn = (name: string, error: string, value?: any) => {
	return (
		{
			required: `${name} is required`
		}[error] || 'wrong value'
	);
};

export const options = [
	{
		codeCountry: 'MX',
		country: 'Mexico',
		label: '+52',
		value: '+52',
	},
	{
		codeCountry: 'PT',
		country: 'Portugal',
		label: '+351',
		value: '+351',
	},
	{
		codeCountry: 'ES',
		country: 'Spain',
		label: '+34',
		value: '+34',
	},
	{
		codeCountry: 'AM',
		country: 'Armenia',
		label: '+374',
		value: '+374',
	},
	{
		codeCountry: 'AL',
		country: 'Albania',
		label: '+355',
		value: '+355',
	},
	{
		codeCountry: 'GE',
		country: 'Georgia',
		label: '+995',
		value: '+995',
	},
	{
		codeCountry: 'AZ',
		country: 'Azerbaiyán',
		label: '+994',
		value: '+994',
	},
	{
		codeCountry: 'FR',
		country: 'France',
		label: '+33',
		value: '+33',
	},
	{
		codeCountry: 'HN',
		country: 'Honduras',
		label: '+504',
		value: '+504',
	}
];

export const optionsWithSearch = [
	{
		codeCountry: 'MX',
		country: 'Mexico',
		label: '+52',
		value: '+52',
	},
	{
		codeCountry: 'PT',
		country: 'Portugal',
		label: '+351',
		value: '+351',
	},
	{
		codeCountry: 'ES',
		country: 'Spain',
		label: '+34',
		value: '+34',
	},
	{
		codeCountry: 'AM',
		country: 'Armenia',
		label: '+374',
		value: '+374',
	},
	{
		codeCountry: 'AL',
		country: 'Albania',
		label: '+355',
		value: '+355',
	},
	{
		codeCountry: 'GE',
		country: 'Georgia',
		label: '+995',
		value: '+995',
	},
	{
		codeCountry: 'AZ',
		country: 'Azerbaiyán',
		label: '+994',
		value: '+994',
	},
	{
		codeCountry: 'FR',
		country: 'France',
		label: '+33',
		value: '+33',
	},
	{
		codeCountry: 'HN',
		country: 'Honduras',
		label: '+504',
		value: '+504',
	},
	{
		codeCountry: 'IN',
		country: 'India',
		label: '+91',
		value: '+91',
	},
	{
		codeCountry: 'HK',
		country: 'Hong Kong',
		label: '+852',
		value: '+852',
	}
];

export const literals = {
	placeholder: 'placeholder',
	searchPlaceholder: 'searchPlaceholder',
	emptyStateTitle: 'No results',
	emptyStateContent: 'Please try again with other parameters',
	helperText: 'Select country of the number'
};

export const template = `
<form [formGroup]="exampleForm" class="h-96">
  <pmds-cdk-phone-input
	  [assetsFolder]="assetsFolder"
	  [dataQA]="dataQA"
	  [formControlName]="formControlName"
	  [initialValue]="initialValue"
	  [isDisabled]="isDisabled"
	  [literalsErrorFn]="literalsErrorFn"
	  [literals]="literals"
	  [options]="options"
	  [skeleton]="skeleton"/>
</form>
`
