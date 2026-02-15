////////Component imports
import { PmdsCdkTextFieldComponent } from './pmds-cdk-text-field.component';
import { componentInfo } from "./story-helpers/pmds-cdk-text-field-component-info-story";

export default {
	title: 'Cdk/Resources/Text field',
	component: PmdsCdkTextFieldComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-'
	},
	argTypes: {
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		field: {
			description: `Field data to text:
			<li>**label:** title to field</li>
<li>**value:** string to value</li>
<li>**tagColor:** color for the tag in two-line-tag typ</li>
<li>**tooltip:** string for tooltip</li>
<li>**actionFn:** action in two-lin-link</li>
<li>**flagCode:** code for flag in two-line-country</li>
<li>**assetsFolder:** assets folder in two-line-country</li>
<li>**copyValue:** string for copy option</li>`,
			table: {
				type: {summary: 'IPmdsCdkTextField: { label: string, value: string | string[], tagColor?: TPmdsCdkTagLabelColor, tooltip?: string, copyValue?: string, actionFn?: () => void, assetsFolder?: string, flagCode?: string }' },
			},
			control: {
				required: true
			},
		},
		icon: {
			description: 'Icon string, name must be in the icons library',
			table: {
				type: { summary: 'pmicons-XXXX' },
			},
			control: {
				type: 'text',
			},
		},
		disabledEllipsis: {
			description: 'Disabled the ellipsis in overflow text',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			},
			control: {
				type: 'boolean',
			},
		},
		skeleton: {
            description: 'Show the skeleton section',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: {
                type: 'boolean',
            },
        },
		type: {
			description: 'Type for position data **IPmdsCdkTextFieldType**',
			table: {
				type: {
					summary:
						'two-line-bold | two-line-tag | two-line-regular | list | two-line-link | inline-bold | inline-regular | inline-figure-bold | inline-figure-regular | two-line-country',
				},
			},
			options: [
				'two-line-bold',
				'two-line-tag',
				'two-line-regular',
				'list',
				'two-line-link',
				'two-line-figure-bold',
				'inline-bold',
				'inline-regular',
				'inline-figure-bold',
				'inline-figure-regular',
				'two-line-country'
			],
			control: {
				required: true,
				type: 'select'
			},
		},
		typeMobile: {
			description: 'Type for position data **IPmdsCdkTextFieldType** in mobile, if it don,t set the type will be same that desktop',
			table: {
				type: {
					summary:
						'two-line-bold | two-line-tag | two-line-regular | list | two-line-link | inline-bold | inline-regular | inline-figure-bold | inline-figure-regular | two-line-country',
				},
			},
			options: [
				'two-line-bold',
				'two-line-tag',
				'two-line-regular',
				'list',
				'two-line-link',
				'two-line-figure-bold',
				'inline-bold',
				'inline-regular',
				'inline-figure-bold',
				'inline-figure-regular',
				'two-line-country'
			],
			control: {
				type: 'select'
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkTextFieldComponent',
			description: {
				component: componentInfo,
			},
		},
	}
};

export const TwoLineBold = {
	args: {
		field: {
			label: 'Field',
			value: 'Value'
		},
		type: 'two-line-bold',
	},
};

export const TwoLineTag = {
	args: {
		field: {
			label: 'Field',
			value: 'Value',
			tagColor: 'red'
		},
		type: 'two-line-tag',
	},
};

export const TwoLineregular = {
	args: {
		field: {
			label: 'Field',
			value: 'Label',
			tagColor: 'red'
		},
		type: 'two-line-regular',
	},
};

export const List = {
	args: {
		field: {
			label: 'Field',
			value: ['Value', 'Value', 'Value'],
			tagColor: 'red'
		},
		type: 'list',
	},
};

export const TwoLineLink = {
	args: {
		field: {
			label: 'Field',
			value: 'Link',
			actionFn: () => alert('Link')
		},
		type: 'two-line-link',
	},
};

export const InlineBold = {
	args: {
		field: {
			label: 'Field',
			value: 'Value'
		},
		type: 'inline-bold',
	},
};

export const InlineRegular = {
	args: {
		field: {
			label: 'Field',
			value: 'Value'
		},
		type: 'inline-regular',
	},
};

export const InlineFigureBold = {
	args: {
		field: {
			label: 'Field',
			value: '000.000.000.000.00 ISO'
		},
		type: 'inline-figure-bold',
	},
};

export const TwoLineFigureBold = {
	args: {
		field: {
			label: 'Field',
			value: '000.000.000.000.00 ISO'
		},
		type: 'two-line-figure-bold',
	},
};

export const InlineFigureRegular = {
	args: {
		field: {
			label: 'Field',
			value: '000.000.000.000.00 ISO'
		},
		type: 'inline-figure-regular',
	},
};

export const TwoLineCountry = {
	args: {
		field: {
			label: 'Field',
			value: 'Value',
			assetsFolder: 'assets',
			flagCode: 'EU'
		},
		type: 'two-line-country',
	},
};

export const WithTooltip = {
	args: {
		field: {
			label: 'Field',
			value: 'Value',
			tooltip: 'Tooltip'
		},
		type: 'two-line-bold',
	},
};

export const WithIcon = {
	args: {
		field: {
			label: 'Field',
			value: 'Value',
		},
		type: 'two-line-bold',
		iconValue: 'pmicons-placeholder'
	},
};

export const InlineWithIcon = {
	args: {
		field: {
			label: 'Field',
			value: 'Value',
		},
		type: 'inline-bold',
		iconValue: 'pmicons-placeholder'
	},
};

export const WithCopyTwoLine = {
	args: {
		field: {
			label: 'Field',
			value: 'Value',
			copyValue: 'Value'
		},
		type: 'two-line-bold',
	},
};

export const WithCopyInline = {
	args: {
		field: {
			label: 'Field',
			value: 'Value',
			copyValue: 'Value'
		},
		type: 'inline-bold',
	},
};

export const DisabledEllipsis = {
	args: {
		field: {
			label: 'Field',
			value: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
		},
		disabledEllipsis: true,
		type: 'inline-regular',
	},
};

export const DesktopInlineBoldMobileTwoLineBold = {
	args: {
		field: {
			label: 'Field',
			value: 'Value'
		},
		disabledEllipsis: true,
		typeMobile: 'two-line-bold',
		type: 'inline-bold',
	},
};

export const Skeleton = {
	args: {
		field: {
			label: 'Field',
			value: 'Value'
		},
		skeleton: true
	},
};