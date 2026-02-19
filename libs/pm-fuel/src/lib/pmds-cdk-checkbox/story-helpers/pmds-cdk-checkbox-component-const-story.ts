export const literalsErrorFn = (name: string, error: string, value?: any, label?: string) => {
	return (
		{
			required: `${label} is required true`
		}[error] || 'wrong value'
	);
};