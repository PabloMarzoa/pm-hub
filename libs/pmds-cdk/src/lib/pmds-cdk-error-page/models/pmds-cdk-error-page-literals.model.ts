export interface IPmdsCdkErrorPageLiterals {
	401?: IPmdsCdkErrorPageLiteralsError;
	403?: IPmdsCdkErrorPageLiteralsError;
	404?: IPmdsCdkErrorPageLiteralsError;
	500?: IPmdsCdkErrorPageLiteralsError;
	503?: IPmdsCdkErrorPageLiteralsError;
}

export interface IPmdsCdkErrorPageLiteralsError {
	error: string;
	title: string;
	paragraph: string;
	buttons?: [IPmdsCdkErrorPageButtons] | [IPmdsCdkErrorPageButtons, IPmdsCdkErrorPageButtons]
}

export interface IPmdsCdkErrorPageButtons {
    label: string,
    type: 'primary' | 'secondary',
	disabled?: boolean;
    action: () => void;
}
