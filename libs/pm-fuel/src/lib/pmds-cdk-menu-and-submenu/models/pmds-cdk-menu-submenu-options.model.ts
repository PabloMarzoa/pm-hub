export interface IPmdsCdkMenuOptions {
	label: string,
	action?: () => void,
	icon?: string,
	children?: {
		label: string,
		action: () => void
	}[]
}
