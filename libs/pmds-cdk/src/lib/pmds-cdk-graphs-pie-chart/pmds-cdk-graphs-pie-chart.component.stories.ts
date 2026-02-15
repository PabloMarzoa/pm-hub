////////Third party libraries
import type { StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkGraphsPieChartComponent } from './pmds-cdk-graphs-pie-chart.component';
import { componentInfo } from './story-helpers/pmds-cdk-graphs-pie-chart-component-info-story';
import { generatePie } from './story-helpers/pmds-cdk-graphs-pie-chart-component-const-story';

export default {
	title: 'Cdk/Graphs/Graphs pie chart',
	component: PmdsCdkGraphsPieChartComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
		data: generatePie(5),
		config: {
			title: 'Pie chart',
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
			<li>**label**: label for the pie and legend</li>
			<li>**tooltip**: method for parse a string the tooltip content (as params recive percent value, y label value and pie label)</li>
			<li>**value**: label for value for pie</li>
				`,
			table: {
				type: {
					summary: `IPmdsCdkGraphsPieChartData {
						label: string;
						tooltip?: (percent: number, value: number, label: string) => string;
						value: number,
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
			<li>**title**: text for the title label</li>
			<li>**subtitle**: text for the subtitle label</li>
			<li>**onlyChart**: show only the chart and legend</li>
			<li>**noData**: configuration for no data state</li>
			<li class="pl-2">**title**: text for title</li>
			<li class="pl-2">**content**: text for content</li>
			<li class="pl-2">**buttonText**: text for label button</li>
			<li class="pl-2">**disabledButton**: boolean for disable button</li>
			<li class="pl-2">**buttonClick**: function for click button</li>
			`,
			table: {
				type: {
					summary: `IPmdsCdkGraphsPieChartConfig {
					height?: number;
					subtitle?: string;
					onlyChart?: boolean;
					title?: string;
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
			subtitle: 'PmdsCdkGraphsPieChartComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const LowDensity: StoryObj<PmdsCdkGraphsPieChartComponent> = {};

export const MidDensity: StoryObj<PmdsCdkGraphsPieChartComponent> = {
	args: {
		data: generatePie(15)
	}
};

export const HighDensity: StoryObj<PmdsCdkGraphsPieChartComponent> = {
	args: {
		data: generatePie(20)
	}
};

export const CustomTooltip: StoryObj<PmdsCdkGraphsPieChartComponent> = {
	args: {
		data: generatePie(5).map(pie => (
			{
				...pie,
				tooltip: (percent, value, label) => `${label}: ${value} <br> ${percent.toFixed(2)}%`
			}
		))
	}
};


export const OnlyChart: StoryObj<PmdsCdkGraphsPieChartComponent> = {
	args: {
		config: {
			onlyChart: true
		}
	},
};

export const NoData: StoryObj<PmdsCdkGraphsPieChartComponent> = {
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

export const IsLoading: StoryObj<PmdsCdkGraphsPieChartComponent> = {
	args: {
		isLoading: true,
	},
};