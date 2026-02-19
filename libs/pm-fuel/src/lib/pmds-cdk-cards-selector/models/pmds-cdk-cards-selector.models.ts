import { TPmdsDirectiveTooltipPosition } from "../../../index"

export interface IPmdsCdkCardsSelectorOptionLiterals {
    label: string,
    helperText?: string,
    value?: string,
    helperValue?: string,
    icon?: string
}

export interface IPmdsCdkCardsSelectorImages {
    images?: string[],
	widthStyle?: string,
	heightStyle?: string
}

export interface IPmdsCdkCardsSelectorTooltip {
    title?: string,
    content: string,
    position?: TPmdsDirectiveTooltipPosition
}
