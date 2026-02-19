export const literalsErrorFn = (name: string, error: string, value?: any) => {
	return (
		{
			required: `${name} is required`,
		}[error] || 'wrong value'
	);
};
