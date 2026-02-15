////////Project imports
import { IPmdsCdkDropdownRangeLiterals } from "../models/dropdown-range-literals.model";

export const literals: IPmdsCdkDropdownRangeLiterals = {
	from: 'From',
	to: 'To',
	clearAll: 'Clear all',
	apply: 'Apply',
	datepickerLiterals: {
		today: 'Today',
		weekDay: [
			'Monday',
			'Tuesday',
			'Wendesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday'
		],
		month: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
	},
};

export const template = `
<pmds-cdk-dropdown-range
					[dataQA]="dataQA"
					[isDisabled]="isDisabled"
					[fromFormControlName]="fromFormControlName"
					[literals]="literals"
					[maxNumber]="maxNumber"
					[max]="max"
					[minNumber]="minNumber"
					[min]="min"
					[mode]="mode"
					[pattern]="pattern"
					[placeholder]="placeholder"
					[decimalCharacter]="decimalCharacter"
					[skeleton]="skeleton"
					[maxIntLength]="maxIntLength"
					[maxDecLength]="maxDecLength"
					[toFormControlName]="toFormControlName"
				/>
`;
