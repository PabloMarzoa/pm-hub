export interface IPmdsCdkHeaderConfig {
	label: string,
	styles?: string,
	order?: 'ASC' | 'DES' | undefined,
	action?: () => void,
	tooltip?: string,
	tooltipTitle?: string,
	tooltipPosition?: 'top-left'
		| 'top-center'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right'
}

