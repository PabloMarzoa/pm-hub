////////Component imports
import { PmdsCdkDownloadIdAppButtonsComponent } from './pmds-cdk-download-id-app-buttons.component';
import { componentInfo } from "./story-helpers/pmds-cdk-download-id-app-component-info-story";

export default {
	title: 'Cdk/Resources/Download id app buttons',
	component: PmdsCdkDownloadIdAppButtonsComponent,
	tags: ['autodocs'],
	args: {
		direction: 'row',
		dataQA: 'storybook-qa-',
		width: 185,
		height: 185,
	},
	argTypes: {
		direction: {
			description: 'Direction for id app buttons',
			table: {
				type: { summary: `string` },
				defaultValue: { summary: `row` },
			},
			options: ['row', 'col'],
			control: { type: 'select' },
		},
		width: {
			description: 'QR width',
			table: {
				type: { summary: `number` },
				defaultValue: { summary: `185` },
			},
			control: { type: 'number' },
		},
		height: {
			description: 'QR height',
			table: {
				type: { summary: `number` },
				defaultValue: { summary: `185` },
			},
			control: { type: 'number' },
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
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkDownloadIdAppButtonsComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const DownloadIdAppButtonsDefault = {};

export const DownloadIdAppButtonsVertical = {
	args: {
		direction: 'col',
		width: 150,
		height: 150,
	},
};
