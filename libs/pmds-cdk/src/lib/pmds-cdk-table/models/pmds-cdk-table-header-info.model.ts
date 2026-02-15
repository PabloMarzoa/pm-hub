export interface IPmdsCdkTableHeaderInfo {
	literals: {displaying: string, items: string, item: string, searchedBy: string},
	actions?: {actionIcon: string, actionLabel: string, actionFn: () => void}[]
}
