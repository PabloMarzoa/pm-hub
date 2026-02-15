////////Component imports
import { IPmdsCdkDatepickerLiterals } from '../models/pmds-cdk-datepicker-literals.model';

export const template = `<div [formGroup]="exampleForm" class="max-w-[300px] min-w-[150px] h-[450px]">
    <pmds-cdk-datepicker
		[dataQA]="dataQA"
		[formControlName]="formControlName"
		[enabledToday]="enabledToday"
      	[dateInfo]="dateInfo"
      	[format]="format"
      	[isDisabled]="isDisabled"
      	[literalsErrorFn]="literalsErrorFn"
      	[literals]="literals"
      	[max]="max"
      	[min]="min"
      	[placeholder]="placeholder"
      	[positionRight]="positionRight"
      	[selectableDates]="selectableDates"
      	[skeleton]="skeleton"
    />
  </div>`;

export const literalsErrorFn = (name: string, error: string, value?: any) => {
	return (
		{
			required: `${name} is required`,
			minlength: `${name} must be at least ${value?.requiredLength} characters`,
			maxlength: `${name} must be less than ${value?.requiredLength} characters`,
			pattern: `${name} must be a valid email`,
		}[error] || 'wrong value'
	);
};

export const literals: IPmdsCdkDatepickerLiterals = {
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
	weekDay: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
	today: 'Today',
	formatHelp: 'Format dd/mm/yyyy',
};
