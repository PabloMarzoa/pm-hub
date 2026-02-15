export const literalsErrorFn = (name: string, error: string, value?: any) => {
	return (
		{
			required: `${name} is required`,
			minlength: `${name} must be at least ${value?.requiredLength} characters`,
			maxlength: `${name} must be less than ${value?.requiredLength} characters`,
		}[error] || 'wrong value'
	);
};