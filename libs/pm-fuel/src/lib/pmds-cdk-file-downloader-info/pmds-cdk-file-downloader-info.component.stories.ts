////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkFileDownloaderInfoComponent } from './pmds-cdk-file-downloader-info.component';
import { componentInfo } from "./story-helpers/pmds-cdk-file-downloader-info-component-info-story";
import { template } from "./story-helpers/pmds-cdk-file-download-info-component-const-story"

export default {
	title: 'Cdk/Resources/File downloader info',
	component: PmdsCdkFileDownloaderInfoComponent,
	tags: ['autodocs'],
	args: {
		dataQA : 'storybook-qa',
		literals: {
			processing: 'Processing',
			cancel: 'Cancel',
			download: 'Download',
			failedTo: 'Failed to generate file',
			subTitle: '[Subtitle]',
			showErrors: 'Show errors'
		},
		buttons: [
			{
				label: 'Button A',
				icon: 'pmicons-placeholder',
				actionFn: () => alert('Button A')
			},
			{
				label: 'Button B',
				icon: 'pmicons-placeholder',
				actionFn: () => alert('Button B')
			},
		]
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
		file: {
			description: 'Internal representation for file',
			table: {
				type: {
					summary: `
        IPmdsCdkFileDownloaderInfoFile: {
          id: string;
          fileName: string;
          status: TPmdsCdkFileDownloaderInfoStatus: {
            | 'COMPLETED'
            | 'FAILURE'
            | 'PROCESSING'
            | 'PENDING'
            | 'WAITING_VIRTUAL_ACCOUNTS'
            | ''
          };
          createdAt: string;
          url?: string;
        }
        `,
				},
			},
			control: {
				type: 'object',
			},
		},
		literals: {
			description: 'Literals for template',
			table: {
				type: {
					summary: `
          IPmdsCdkFileDownloaderInfoLiterals: {
              processing: string;
              cancel: string;
              download: string;
              failedTo: string;
			  subtitle: string;
			  showErrors: string
          }
          `,
				},
			},
			control: {
				type: 'object',
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
		buttons: {
			description: 'Buttons to be showed',
			table: {
				type: {
					summary: `
        IPmdsCdkFileDownloaderInfoButtons: {
			label: string;
			icon: string;
			actionFn: (file? : any) => void;
        }
        `,
				},
			},
			control: {
				type: 'object',
			},
		},
		errorIncluded: {
			description: 'Control if the component is going to show errors ',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: false },
			},
			control: {
				type: 'boolean',
			},
		},
		cancelClick: {
			name: 'cancelClick',
			description: 'Emit the file to be removed',
			table: {
				category: 'Events',
				type: { summary: 'EventEmitter<IPmdsCdkFileDownloaderInfo>' },
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkFileDownloaderInfoComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Completed: StoryObj<PmdsCdkFileDownloaderInfoComponent> =
	{
		args: {
			file: {
				id: '4c042d20-f4e1-472e-a35f-13e42153bd7a',
				fileName: '1660221904777_Students.csv',
				status: 'COMPLETED',
				createdAt: '2022-08-11T11:45:04.812Z',
			},
		},
		render: (args) => {
			return {
				props: {
					...args,
					downloadClick: (): void => alert('download click!'),
					cancelClick: (): void => alert('remove click!'),
				},
			};
		},
	};

export const Processing: StoryObj<PmdsCdkFileDownloaderInfoComponent> = {
	args: {
		file: {
			id: '4c042d20-f4e1-472e-a35f-13e42153bd7a',
			fileName: '1660221904777_Students.csv',
			status: 'PENDING',
			createdAt: '2022-08-11T11:45:04.812Z',
		},
	},
};

export const FailedWithoutErrors: StoryObj<PmdsCdkFileDownloaderInfoComponent> = {
	args: {
		file: {
			id: '4c042d20-f4e1-472e-a35f-13e42153bd7a',
			fileName: '1660221904777_Students.csv',
			status: 'FAILURE',
			createdAt: '2022-08-11T11:45:04.812Z',
		},
	},
};

export const FailedWithErrors: StoryObj<PmdsCdkFileDownloaderInfoComponent> = {
	args: {
		file: {
			id: '4c042d20-f4e1-472e-a35f-13e42153bd7a',
			fileName: '1660221904777_Students.csv',
			status: 'FAILURE',
			createdAt: '2022-08-11T11:45:04.812Z',
		},
		errorIncluded : true,
	},
	render: (args: any) => ({
		props: {
			...args,
		},
		template,
	}),
};

export const Skeleton: StoryObj<PmdsCdkFileDownloaderInfoComponent> = {
	args: {
		skeleton: true
	},
};
