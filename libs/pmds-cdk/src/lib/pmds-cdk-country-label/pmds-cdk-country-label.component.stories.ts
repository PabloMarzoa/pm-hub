////////Component imports
import { PmdsCdkCountryLabelComponent } from './pmds-cdk-country-label.component';
import { componentInfo } from './story-helpers/pmds-cdk-country-label-component-info-story';

export default {
	title: 'Cdk/Resources/Country label',
	component: PmdsCdkCountryLabelComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-'
	},
	argTypes: {
		codeCountry: {
			description: 'Text for code contry',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Default' },
			},
		},
		dataQA: {
			description: 'Reference for QA',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		label: {
			description: 'Text for label',
			control: {
				type: 'text',
			},
			table: {
				type: { summary: 'string' },
			},
		},
		showLabel: {
			description: 'For disabled input',
			table: {
				type: { summary: 'boolean' },
				options: [true, false],
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		assetsFolder: {
			description:
				'Name for assets folder, add this only if your assets folder is different to "assets"',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'assets' },
			},
			control: {
				type: 'string',
			},
		},
		size: {
			description: 'For size contry label',
			table: {
				type: { summary: 'TPmdsCdkCountryLabelSize: | small | large' },
				defaultValue: { summary: 'small' },
			},
			options: ['small', 'large'],
			control: {
				type: 'radio',
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
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkCountryLabelComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const CountryLabel = {
	args: {
		codeCountry: 'EU',
		label: 'Europa',
		showLabel: true,
		size: 'small',
	},
};

export const OnlyIcon = {
	args: {
		codeCountry: 'EU',
		label: 'Europa',
		showLabel: false,
		size: 'small',
	},
};

export const SizeLarge = {
	args: {
		codeCountry: 'EU',
		label: 'Europa',
		showLabel: true,
		size: 'large',
	},
};

export const Skeleton = {
	args: {
		codeCountry: 'EU',
		label: 'Europa',
		showLabel: true,
		skeleton: true
	},
};

export const SkeletonLarge = {
	args: {
		codeCountry: 'EU',
		label: 'Europa',
		showLabel: true,
		size: 'large',
		skeleton: true
	},
};
