export const template = `
    <div [formGroup]="exampleForm">
        <pmds-cdk-dropdown
			[assetsFolder]="assetsFolder"
			[categoryOrder]="categoryOrder"
			[dataQA]="dataQA"
			[disabledShowToTop]="disabledShowToTop"
			[enableSearch]="enableSearch"
			[formControlName]="formControlName"
			[isDisabled]="isDisabled"
			[isFilter]="isFilter"
			[isTitle]="isTitle"
			[keepValue]="keepValue"
			[label]="label"
			[literalsErrorFn]="literalsErrorFn"
			[literals]="literals"
			[multi]="multi"
			[openDefault]="openDefault"
			[optionsMinWidth]="optionsMinWidth"
			[options]="options"
            [placeholder]="placeholder"
            [positionRight]="positionRight"
            [positionTop]="positionTop"
            [showCategory]="showCategory"
            [skeleton]="skeleton"
            [tooltipPosition]="tooltipPosition"
            [tooltipTitle]="tooltipTitle"
            [tooltip]="tooltip"
            [warningText]="warningText"
        />
    </div>
`;

export const templateRight = `
	<section class="flex justify-end" [formGroup]="exampleForm">
		<div class="flex justify-end">
			<pmds-cdk-dropdown
				[assetsFolder]="assetsFolder"
				[categoryOrder]="categoryOrder"
				[dataQA]="dataQA"
				[disabledShowToTop]="disabledShowToTop"
				[enableSearch]="enableSearch"
				[formControlName]="formControlName"
				[isDisabled]="isDisabled"
				[isFilter]="isFilter"
				[isTitle]="isTitle"
				[keepValue]="keepValue"
				[label]="label"
				[literalsErrorFn]="literalsErrorFn"
				[literals]="literals"
				[multi]="multi"
				[openDefault]="openDefault"
				[optionsMinWidth]="optionsMinWidth"
				[options]="options"
				[placeholder]="placeholder"
				[positionRight]="positionRight"
				[positionTop]="positionTop"
				[showCategory]="showCategory"
				[skeleton]="skeleton"
				[tooltipPosition]="tooltipPosition"
				[tooltipTitle]="tooltipTitle"
				[tooltip]="tooltip"
				[warningText]="warningText"
			/>
		</div>
	</section>
`;

export const templateTop = `
	<section class="pt-[300px]"[formGroup]="exampleForm" >
			<pmds-cdk-dropdown
				[assetsFolder]="assetsFolder"
				[categoryOrder]="categoryOrder"
				[dataQA]="dataQA"
				[disabledShowToTop]="disabledShowToTop"
				[enableSearch]="enableSearch"
				[formControlName]="formControlName"
				[isDisabled]="isDisabled"
				[isFilter]="isFilter"
				[isTitle]="isTitle"
				[keepValue]="keepValue"
				[label]="label"
				[literalsErrorFn]="literalsErrorFn"
				[literals]="literals"
				[multi]="multi"
				[openDefault]="openDefault"
				[optionsMinWidth]="optionsMinWidth"
				[options]="options"
				[placeholder]="placeholder"
				[positionRight]="positionRight"
				[positionTop]="positionTop"
				[showCategory]="showCategory"
				[skeleton]="skeleton"
				[tooltipPosition]="tooltipPosition"
				[tooltipTitle]="tooltipTitle"
				[tooltip]="tooltip"
				[warningText]="warningText"
			/>
	</section>
`;

export const options = [
	{
		label: 'Label text 1',
		value: '1',
	},
	{
		label: 'Label text 2',
		value: '2',
	},
	{
		label: 'Label text 3',
		value: '3',
	},
	{
		label: 'Label text 4',
		value: '4',
	},
	{
		label: 'Label text 5',
		value: '5',
	},
	{
		label: 'Label text 6',
		value: '6',
	},
	{
		label: 'Label text 7',
		value: '7',
	},
	{
		label: 'Label text 8',
		value: '8',
	}
];

export const optionsSublabel = [
	{
		label: 'Label text 1',
		sublabel: 'Sublabel text 1',
		value: '1',
	},
	{
		label: 'Label text 2',
		sublabel: 'Sublabel text 2',
		value: '2',
	},
	{
		label: 'Label text 3',
		sublabel: 'Sublabel text 3',
		value: '3',
	},
	{
		label: 'Label text 4',
		sublabel: 'Sublabel text 4',
		value: '4',
	},
	{
		label: 'Label text 5',
		sublabel: 'Sublabel text 5',
		value: '5',
	},
	{
		label: 'Label text 6',
		sublabel: 'Sublabel text 6',
		value: '6',
	},
	{
		label: 'Label text 7',
		sublabel: 'Sublabel text 7',
		value: '7',
	},
	{
		label: 'Label text 8',
		sublabel: 'Sublabel text 8',
		value: '8',
	}
];

export const optionsCategory = [
	{
		label: 'Label text 1',
		value: '1',
		category: 'Category 1'
	},
	{
		label: 'Label text 2',
		value: '2',
		category: 'Category 2'
	},
	{
		label: 'Label text 3',
		value: '3',
		category: 'Category 1'
	},
	{
		label: 'Label text 4',
		value: '4',
		category: 'Category 2'
	},
	{
		label: 'Label text 5',
		value: '5',
		category: 'Category 1'
	},
	{
		label: 'Label text 6',
		value: '6',
		category: 'Category 2'
	}
];

export const optionsFlag = [
	{
		label: 'Label text 1',
		value: '1',
		flagCode: 'EU'
	},
	{
		label: 'Label text 2',
		value: '2',
		flagCode: 'US'

	},
	{
		label: 'Label text 3',
		value: '3',
		flagCode: 'GB'
	},
	{
		label: 'Label text 4',
		value: '4',
		flagCode: 'PE'
	}
];

export const optionsComplete = [
	{
		icon: 'pmicons-tv',
		label: 'Label text',
		sublabel: 'Sublabel text',
		sublabelIcon: 'pmicons-trophy',
		value: '1'
	},
	{
		icon: 'pmicons-travel',
		label: 'Label text',
		sublabel: 'Sublabel text',
		sublabelIcon: 'pmicons-transfer',
		value: '2'
	},
];

export const literals = {
	accept: 'Accept',
	filterBy: 'FilterBy',
	cancel: 'Cancel',
	clear: 'Clear',
	searchPlaceholder: 'Search by...',
	all: 'All',
};

export const literalsErrorFn = (name: string, error: string, value?: any, label?: string) => {
	return (
		{
			required: `${label} is required`,
			min: `${name} must be greater than or equal to ${value?.min}`,
			max: `${name} must be less than or equal to ${value?.max}`,
			minlength: `${name} must be at least ${value?.requiredLength} characters`,
			maxlength: `${name} must be less than ${value?.requiredLength} characters`,
			pattern: `${name} invalid format`,
		}[error] || 'wrong value'
	);
};
