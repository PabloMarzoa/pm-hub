////////Third party libraries
import { moduleMetadata, type StoryObj } from '@storybook/angular';
////////PNXT libraries
import { PmdsCdkOptionButtonsComponent } from '../pmds-cdk-option-buttons/pmds-cdk-option-buttons.component';
////////Component imports
import { PmdsCdkGraphsLineChartComponent } from './pmds-cdk-graphs-line-chart.component';
import { componentInfo } from './story-helpers/pmds-cdk-graphs-line-chart-component-info-story';
import { data } from './story-helpers/pmds-cdk-graphs-line-chart-component-const-story';

export default {
	title: 'Cdk/Graphs/Graphs line chart',
	component: PmdsCdkGraphsLineChartComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsCdkOptionButtonsComponent],
		}),
	],
	args: {
		dataQA: 'storybook-qa-',
		data: data(1, 10),
		config: {
			title: 'Line chart',
			subtitle: 'Subtitle',
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
			<li>**value**: label for value for x axis</li>
			<li>**valueSecondLine**: label for value for x axis in a second line</li>
			<li>**valueMobile**: value for x axis</li>
			<li>**lines**: data for lines</li>
			<li class="pl-4">**value**: array for values for each point in x axis</li>
			<li class="pl-4">**label**: label for the line and legend</li>
			<li class="pl-4">**labelMobile**: text for x axia label in mobile (default is label value)</li>
			<li class="pl-4">**tooltip**: method for parse a string the tooltip content (as params recive y label value, line label and x axis label)</li>
				`,
			table: {
				type: {
					summary: `IPmdsCdkGraphsLineChartData {
						value: string[],
						valueMobile?: string[],
						lines: {
							value: number[];
							label: string;
							tooltip?: (value: number, label: string, xLabel:string) => string;
						}[]
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
					summary: `IPmdsCdkGraphsLineChartConfig {
					height?: number;
					lines?: number;
					subtitle?: string;
					onlyChart?:boolean;
					title?: string;
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
			subtitle: 'PmdsCdkGraphsLineChartComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const PositiveValues: StoryObj<PmdsCdkGraphsLineChartComponent> = {};

export const CustomLabels: StoryObj<PmdsCdkGraphsLineChartComponent> = {
	args: {
		data: data(1, 10, true),
		config: {
			title: 'Line chart',
			subtitle: 'Subtitle',
			yLabel: (value: number) => value.toLocaleString('en-GB') + '€',
		},
	},
};

export const MixedValues: StoryObj<PmdsCdkGraphsLineChartComponent> = {
	args: {
		data: data(1, 10, false, -100, -200),
	},
};

export const MoreLines: StoryObj<PmdsCdkGraphsLineChartComponent> = {
	args: {
		data: data(6, 10),
	},
};

export const WithContent: StoryObj<PmdsCdkGraphsLineChartComponent> = {
	render: (args) => ({
		props: args,
		template: `
		<pmds-cdk-graphs-line-chart
			[dataQA]="dataQA"
			[data]="data"
			[config]="config"
			>
			<pmds-cdk-option-buttons
  				[labels]="[{id: '1', label: 'Label', icon: 'pmicons-circle-account-user'}, {id: '2', label: 'Label', icon: 'pmicons-circle-account-user'}, {id: '3', label: 'Label', icon: 'pmicons-circle-account-user'}]"
  				[dataQA]="dataQA"
				size="small"
				/>
		</pmds-cdk-graphs-line-chart>
		`,
	}),
};

export const OnlyChart: StoryObj<PmdsCdkGraphsLineChartComponent> = {
	args: {
		config: {
			onlyChart: true,
		},
	},
};

export const NoData: StoryObj<PmdsCdkGraphsLineChartComponent> = {
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

export const IsLoading: StoryObj<PmdsCdkGraphsLineChartComponent> = {
	args: {
		isLoading: true,
	},
};
