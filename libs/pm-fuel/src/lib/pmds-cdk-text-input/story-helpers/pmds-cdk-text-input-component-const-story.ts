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

export const template = `
    <form [formGroup]="exampleForm">
        <pmds-cdk-text-input
            formControlName="text"
            [charactersLeftText]="charactersLeftText"
            [placeholder]="placeholder"
            [inputmode]="inputmode"
            [helperText]="helperText"
            [icon]="icon"
            [iconPosition]="iconPosition"
            [tooltip]="tooltip"
            [tooltipTitle]="tooltipTitle"
            [decimalCharacter]="decimalCharacter"
            [maxIntLength]="maxIntLength"
            [maxDecLength]="maxDecLength"
            [maxlength]="maxlength"
            [minlength]="minlength"
            [dataQA]="dataQA"
            [max]="max"
            [min]="min"
            [type]="type"
            [tagCategoryData]="tagCategoryData"
            [showClear]="showClear"
            [skeleton]="skeleton"
            [suffix]="suffix"
            [isDisabled]="isDisabled"
            [literalsErrorFn]="literalsErrorFn" />
    </form>
`;
