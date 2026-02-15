////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkCardsFileUploadComponent } from './pmds-cdk-cards-file-upload.component';
import { componentInfo } from "./story-helpers/pmds-cdk-cards-file-upload-component-info-story";
import { template } from "./story-helpers/pmds-cdk-cards-file-upload-component-const-story"

export default {
	title: 'Cdk/Resources/Cards file upload',
	component: PmdsCdkCardsFileUploadComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-'
	},
	argTypes: {
		accept: {
			description: 'Html input attribute for limit type files',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
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
		literals: {
			description: 'Literals to show in component',
			table: {
				type: {
					summary: `IPmdsCdkCardsFileUploadLiterals: {
							chooseFileTitle: string,
    						chooseFileSubtitle: innerHtml,
    						loadingTitle: string,
    						loadingSubtitle: string,
    						button: string,
    						errorText: string,
    						errorMultipleText: string,
    						errorTypeText: string
						}`,
				},
			},
			type: { required: true },
			control: {
				type: 'object',
			},
		},
		multiFiles: {
			description: 'Confirm if you can upload multiple files',
			table: {
				type: { summary: 'boolean' },
			},
			control: {
				type: 'boolean',
			},
		},
		disabledLoading: {
			description: 'Disable change state to loading',
			table: {
				type: { summary: 'boolean' },
				defaultValue: {
					summary: 'false',
				},
			},
			control: {
				type: 'boolean',
			},
		},
		state: {
			name: '[(state)]',
			description:
				'Is a two-way binding [(state)] for control the state from component',
			table: {
				type: {
					summary: `TPmdsCdkCardsFileUploadStates: | 'initial' | 'loading' | 'error'`,
				},
				defaultValue: {
					summary: 'initial',
				},
				category: 'TwoDataBiding'
			},
			options: ['initial', 'loading', 'error'],
			control: {
				type: 'radio',
			},
		},
		fileSelected: {
			description: 'Emit the file or files (in multiple case)',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<File | FileList>' },
			},
		},
		stateChange: {
			description: 'Emit the state changes',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<string>' },
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
			subtitle: 'PmdsCdkCardsFileUploadComponent',
			description: {
				component: componentInfo
			},
		},
	},
};

export const Initial: StoryObj<PmdsCdkCardsFileUploadComponent> = {
	args: {
		literals: {
			chooseFileTitle: 'Choose a file or drag and drop here',
			chooseFileSubtitle: '<strong>Specifications</strong><div>Inner HTML example</div>',
			loadingTitle: 'Loading message',
			loadingSubtitle: 'Secondary text',
			button: 'Browser file',
			errorText: 'Error to upload file',
			errorMultipleText: 'Only can upload one file',
			errorTypeText: 'This format is not valid',
		},
		multiFiles: false,
		state: 'initial',
	},
	render: (args) => ({
		props: {
			...args,
			fileSelected: (file: File) => {
				alert(`File emit ${file.name}`);
			},
		},
		template,
	}),
};

export const Loading: StoryObj<PmdsCdkCardsFileUploadComponent> = {
	args: {
		accept: '',
		dataQA: 'storybook-',
		literals: {
			chooseFileTitle: 'Choose a file or drag and drop here',
			chooseFileSubtitle: 'Specifications',
			loadingTitle: 'Loading message',
			loadingSubtitle: 'Secondary text',
			button: 'Browser file',
			errorText: 'Error to upload file',
			errorMultipleText: 'Only can upload one file',
			errorTypeText: 'This format is not valid',
		},
		multiFiles: false,
		state: 'loading',
	},
	render: (args: any) => ({
		props: {
			...args,
			fileSelected: (file: File) => {
				alert(`File emit ${file.name}`);
			},
		},
		template,
	}),
};

export const Error: StoryObj<PmdsCdkCardsFileUploadComponent> = {
	args: {
		accept: '',
		dataQA: 'storybook-',
		literals: {
			chooseFileTitle: 'Choose a file or drag and drop here',
			chooseFileSubtitle: 'Specifications',
			loadingTitle: 'Loading message',
			loadingSubtitle: 'Secondary text',
			button: 'Browser file',
			errorText: 'Error to upload file',
			errorMultipleText: 'Only can upload one file',
			errorTypeText: 'This format is not valid',
		},
		multiFiles: false,
		state: 'error',
	},
	render: (args: any) => ({
		props: {
			...args,
			fileSelected: (file: FileList | File) => {
				alert('File emit');
			},
		},
		template,
	}),
};

export const Multiple: StoryObj<PmdsCdkCardsFileUploadComponent> = {
	args: {
		accept: '',
		dataQA: 'storybook-',
		literals: {
			chooseFileTitle: 'Choose a file or drag and drop here',
			chooseFileSubtitle: 'Specifications',
			loadingTitle: 'Loading message',
			loadingSubtitle: 'Secondary text',
			button: 'Browser file',
			errorText: 'Error to upload file',
			errorMultipleText: 'Only can upload one file',
			errorTypeText: 'This format is not valid',
		},
		multiFiles: true,
		state: 'initial',
	},
	render: (args: any) => ({
		props: {
			...args,
			fileSelected: (file: FileList) => {
				alert(`Number files ${file.length}`);
			},
		},
		template,
	}),
};

export const OnlyAcceptJpeg: StoryObj<PmdsCdkCardsFileUploadComponent> = {
	args: {
		literals: {
			chooseFileTitle: 'Choose a file or drag and drop here',
			chooseFileSubtitle: '<strong>Specifications</strong><div>Inner HTML example</div>',
			loadingTitle: 'Loading message',
			loadingSubtitle: 'Secondary text',
			button: 'Browser file',
			errorText: 'Error to upload file',
			errorMultipleText: 'Only can upload one file',
			errorTypeText: 'This format is not valid',
		},
		accept: 'image/jpeg',
		multiFiles: false,
		state: 'initial',
	},
	render: (args) => ({
		props: {
			...args,
			fileSelected: (file: File) => {
				alert(`File emit ${file.name}`);
			},
		},
		template,
	}),
};

export const Skeleton: StoryObj<PmdsCdkCardsFileUploadComponent> = {
	args: {
		accept: '',
		dataQA: 'storybook-',
		literals: {
			chooseFileTitle: 'Choose a file or drag and drop here',
			chooseFileSubtitle: 'Specifications',
			loadingTitle: 'Loading message',
			loadingSubtitle: 'Secondary text',
			button: 'Browser file',
			errorText: 'Error to upload file',
			errorMultipleText: 'Only can upload one file',
			errorTypeText: 'This format is not valid',
		},
		multiFiles: false,
		state: 'error',
		skeleton: true
	},
	render: (args: any) => ({
		props: {
			...args,
			fileSelected: (file: FileList | File) => {
				alert('File emit');
			},
		},
		template,
	}),
};
