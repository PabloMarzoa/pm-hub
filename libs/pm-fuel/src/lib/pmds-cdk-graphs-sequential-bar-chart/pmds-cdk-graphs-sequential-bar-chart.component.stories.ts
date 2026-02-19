////////Third party libraries
import { StoryObj, moduleMetadata } from '@storybook/angular';
////////PNXT libraries
import { PmdsCdkOptionButtonsComponent } from '../pmds-cdk-option-buttons/pmds-cdk-option-buttons.component';
////////Component imports
import { PmdsCdkGraphsSequentialBarChartComponent } from './pmds-cdk-graphs-sequential-bar-chart.component';
import { componentInfo } from './story-helpers/pmds-cdk-graphs-sequential-bar-chart-component-info-story';
import {
	dataMixed,
	dataPositive,
	smallValues,
	highDensity,
	midDensity,
} from './story-helpers/pmds-cdk-graphs-sequential-bar-chart-component-const-story';

export default {
	title: 'Cdk/Graphs/Graphs sequential bar chart',
	component: PmdsCdkGraphsSequentialBarChartComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
		  imports: [
			PmdsCdkOptionButtonsComponent
		  ]
		})
	  ],
	args: {
		dataQA: 'storybook-qa-',
		data: dataPositive,
		config: {
			title: 'Bar chart',
			subtitle: 'Subtitle',
			source: 'Sources: Corporativa; Santander'
		},
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
		isLoading: {
			description: 'Show a spiner',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
			control: {
				type: 'boolean',
			},
		},
		data: {
			description: `Data for fill graph, label and labelMobile can be html
			<li>**label**: text for x axis label</li>
			<li>**labelSecondLine**: text for x axis label in a second line</li>
			<li>**labelMobile**: text for x axia label in mobile (default is label value)</li>
			<li>**tooltip**: method for parse a string the tooltip content (as params recived y label value)</li>
			<li>**value**: value for the bar</li>
				`,
			table: {
				type: {
					summary: `IPmdsCdkGraphsSequentialBarChartData: {
					value: number;
					label: string;
					labelMobile?: string;
					tooltip?: (value: number) => string;
				}`,
				},
			},
			control: {
				type: 'object',
			},
			type: { required: true },
		},
		config: {
			description: `Set configuration for the graph
			<li>**height**: height for the graphs (default is 242px)</li>
			<li>**lines**: y axys min lines (default is 6)</li>
			<li>**source**: text for the source label</li>
			<li>**title**: text for the title label</li>
			<li>**subtitle**: text for the subtitle label</li>
			<li>**onlyChart**: show only the chart and legend</li>
			<li>**yLabel**: method for parse a string y label axis (as params recive y label value)</li>
			<li>**noData**: configuration for no data state</li>
			<li class="pl-2">**title**: text for title</li>
			<li class="pl-2">**content**: text for content</li>
			<li class="pl-2">**buttonText**: text for label button</li>
			<li class="pl-2">**disabledButton**: boolean for disable button</li>
			<li class="pl-2">**buttonClick**: function for click button</li>
			`,
			table: {
				type: {
					summary: `IPmdsCdkGraphsSequentialBarChartConfig {
					height?: number;
					lines?: number;
					source?: string;
					subtitle?: string;
					title?: string;
					onlyChart?: boolean;
					yLabel?: (value: number) => string;
					noData?: {
						title: string,
						content: string,
						buttonText?: string,
						icon?: string,
						disabledButton?: boolean,
						buttonClick?: () => void
					}
				}`,
				},
			},
			control: {
				type: 'object',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkGraphsSequentialBarChartComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const PositiveValues: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> =
	{};

export const CustomLabels: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> =
	{
		args: {
			data: [
				...dataPositive.map((data) => ({
					...data,
					tooltip: (value: number) =>
						`Value: <br> · ${value.toLocaleString('en-GB') + '€'}`,
				})),
			],
			config: {
				title: 'Bar chart',
				subtitle: 'Subtitle',
				source: 'Sources: Corporativa; Santander',
				yLabel: (value: number) => value.toLocaleString('en-GB') + '€',
			},
		},
	};

export const MixedValues: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> =
	{
		args: {
			data: dataMixed,
		},
	};

export const LowValues: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> =
	{
		args: {
			data: smallValues,
		},
	};

export const MidDensity: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> = {
	args: {
		data: midDensity,
	},
};

export const HighDensity: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> =
	{
		args: {
			data: highDensity,
		},
	};

export const WithContent: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> = {
	render: (args) => ({
		props: args,
		template: `
		<pmds-cdk-graphs-sequential-bar-chart
			[dataQA]="dataQA"
			[data]="data"
			[config]="config"
			>
			<pmds-cdk-option-buttons
  				[labels]="[{id: '1', label: 'Label', icon: 'pmicons-circle-account-user'}, {id: '2', label: 'Label', icon: 'pmicons-circle-account-user'}, {id: '3', label: 'Label', icon: 'pmicons-circle-account-user'}]"
  				[dataQA]="dataQA"
				size="small"
				/>
		</pmds-cdk-graphs-sequential-bar-chart>
		`
	  }),
};

export const OnlyChart: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> = {
	args: {
		config: {
			onlyChart: true,
			source: 'Sources: Corporativa; Santander'
		},
	},
};

export const NoData: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> = {
	args: {
		data: undefined,
		config: {
			noData: {
				title: 'There is no data yet',
				content: 'As soon as we have info, we will show it to you here',
				buttonText: 'Refresh data',
				icon: 'pmicons-refresh-reload-screen',
				disabledButton: false,
				buttonClick: () => alert('Refrresh'),
			},
		},
	},
};

export const IsLoading: StoryObj<PmdsCdkGraphsSequentialBarChartComponent> = {
	args: {
		isLoading: true,
	},
};
