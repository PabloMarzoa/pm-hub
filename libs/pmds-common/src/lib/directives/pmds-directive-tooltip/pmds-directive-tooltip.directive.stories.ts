////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsDirectiveTooltip } from './pmds-directive-tooltip.directive';
import { componentInfo } from './story-helpers/pmds-directive-tooltip-component-info-story';
import { PmdsCdkButtonComponent } from '@pmhub/pmds-cdk';

export default {
	title: 'Cdk/Feedback & System status/Tooltip',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsDirectiveTooltip, PmdsCdkButtonComponent],
		}),
	],
	argTypes: {
		pmdsTooltip: {
			description: 'Tooltip content',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		pmdsTooltipTitle: {
			description: 'Tooltip title content',
			table: {
				type: { summary: 'string' },
			},
			control: {
				type: 'text',
			},
		},
		pmdsTooltipActivate: {
			description:
				'By default the tooltip appears when hovering, if this property is set, it only appears when passing a true',
			table: {
				type: { summary: 'boolean' },
			},
			control: {
				type: 'boolean',
			},
		},
		pmdsTooltipPosition: {
			description: 'Position for Tooltip',
			options: [
				'top-left',
				'top-center',
				'top-right',
				'middle-left',
				'middle-center',
				'middle-right',
				'bottom-left',
				'bottom-center',
				'bottom-right',
			],
			table: {
				defaultValue: { summary: 'bottom-center' },
				type: {
					summary:
						'TPmdsDirectiveTooltipPosition: | top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | middle-left | middle-center | middle-right',
				},
			},
			control: {
				type: 'radio',
			},
		},
		delay: {
			description: 'Delay in ms for Tooltip hide',
			options: [
				'0',
				'75',
				'100',
				'150',
				'200',
				'300',
				'500',
				'700',
				'1000',
			],
			table: {
				defaultValue: { summary: '300' },
				type: {
					summary:
						'0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000',
				},
			},
			control: {
				type: 'radio',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsDirectiveTooltip',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const OnHover: StoryObj<{
	pmdsTooltip: string;
	pmdsTooltipTitle: string;
	pmdsTooltipPosition: string;
	delay: string;
}> = {
	args: {
		pmdsTooltip:
			'Tooltip paragraph dolor sit amet, consectetur adipiscing elit. Donec sit amet eleifend.',
		pmdsTooltipTitle: 'Tooltip title',
		pmdsTooltipPosition: 'bottom-center',
		delay: '300',
	},
	render: (args) => ({
		props: args,
		template: `
	<div class="w-full flex justify-center">
    	<div class="w-fit" [pmdsTooltip]="pmdsTooltip"
			[pmdsTooltipTitle]="pmdsTooltipTitle"
			[pmdsTooltipPosition]="pmdsTooltipPosition"
			[delay]="delay">
			<span class="pmicons-info-circle text-2xl text-color-icon-action"></span>
		</div>
    </div>
    `,
	}),
};

export const OnClick: StoryObj<{
	pmdsTooltip: string;
	pmdsTooltipTitle: string;
	pmdsTooltipPosition: string;
	delay: string;
}> = {
	args: {
		pmdsTooltip:
			'Tooltip paragraph dolor sit amet, consectetur adipiscing elit. Donec sit amet eleifend.',
		pmdsTooltipTitle: 'Tooltip title',
		pmdsTooltipPosition: 'bottom-center',
		delay: '300',
	},
	render: (args) => ({
		props: {
			...args,
			isActive: false,
			checkActive: (active: boolean) => active,
		},
		template: `
    <div
		class="w-full flex justify-center items-center gap-4"
	>
		<pmds-cdk-button
		[label]="'Toggle tooltip'"
		(buttonClick)="isActive=!isActive"
		/>
    	<div
			class="w-fit"
			[pmdsTooltip]="pmdsTooltip"
			[pmdsTooltipTitle]="pmdsTooltipTitle"
			pmdsTooltipPosition="top-left"
			[pmdsTooltipActivate]="isActive"
			[delay]="0"
			>
			<span class="pmicons-info-circle text-2xl text-color-icon-action"></span>
		</div>
    </div>
    `,
	}),
};
