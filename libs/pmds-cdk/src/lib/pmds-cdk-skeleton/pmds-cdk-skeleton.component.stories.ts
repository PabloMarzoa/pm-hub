////////Third party libraries
import { type StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsCdkSkeletonComponent } from './pmds-cdk-skeleton.component';
import { componentInfo } from './story-helpers/pmds-cdk-skeleton-component-info-story';

export default {
	title: 'Cdk/Resources/Skeleton',
	component: PmdsCdkSkeletonComponent,
	tags: ['autodocs'],
	args: {
		dataQA: 'storybook-qa-',
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
		style: {
			description: 'Custom style for the component in tailwind',
			table: {
				type: { summary: 'tailwind class string' },
			},
			type: { required: true },
			control: {
				type: 'text',
			},
		},
	},
	parameters: {
		docs: {
			subtitle: 'PmdsCdkSkeletonComponent',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Shape: StoryObj<PmdsCdkSkeletonComponent> = {
	args: {
		style: 'w-full h-12',
	},
};

export const Layout: StoryObj<PmdsCdkSkeletonComponent> = {
	render: (args) => ({
		template: `
		<section class="bg-color-background-default py-4">
			<section class="w-full flex items-center gap-2 p-4">
				<pmds-cdk-skeleton [style]="'mobile:w-[15rem] md:w-[20rem] h-8'"></pmds-cdk-skeleton>
				<pmds-cdk-skeleton [style]="'h-6 w-6'"></pmds-cdk-skeleton>
			</section>
			<section class="px-4">
				<pmds-cdk-skeleton [style]="'h-1 w-12'"></pmds-cdk-skeleton>
			</section>
			<pmds-cdk-skeleton [style]="'my-6 h-[1px] w-full'"></pmds-cdk-skeleton>
			<section class="flex gap-8 mobile:flex-col px-4">

				<section class="w-2/3 mobile:w-full">
					<section class="flex flex-col gap-2 items-center w-full">
						<pmds-cdk-skeleton class="w-full" [style]="'h-6 w-1/3'"></pmds-cdk-skeleton>
						<pmds-cdk-skeleton class="w-full" [style]="'h-4 w-2/3'"></pmds-cdk-skeleton>
					</section>
					<section class="grid grid-cols-3 gap-x-4 gap-y-12 mobile:gap-y-4 mobile:grid-cols-2 items-center w-full py-6">
						@for (_ of [1,2,3,4,5,6]; track _) {
							<pmds-cdk-skeleton class="w-full" [style]="'h-24 w-full'"></pmds-cdk-skeleton>
						}
					</section>
					<pmds-cdk-skeleton class="w-full" [style]="'h-6 w-1/5'"></pmds-cdk-skeleton>
					<section class="grid grid-cols-4 gap-4 mobile:gap-y-4 mobile:grid-cols-2 items-center w-full py-6">
						@for (_ of [11,12,13,14]; track _) {						  
							<section class="flex flex-col items-center justify-center gap-4 rounded-pmds border border-color-skeleton-01 bg-color-surface-primary p-4 w-full h-24">
								<pmds-cdk-skeleton [style]="'h-4 w-4'"></pmds-cdk-skeleton>
								<pmds-cdk-skeleton [style]="'h-4 w-16'"></pmds-cdk-skeleton>
							</section>
						}
					</section>
					<pmds-cdk-skeleton class="w-full" [style]="'h-6 w-1/5'"></pmds-cdk-skeleton>
					<section class="w-full p-4 mt-6 bg-color-surface-secondary grid grid-cols-6 gap-4">
						@for (_ of [21,22,23,24,25,26]; track _) {
							<pmds-cdk-skeleton class="w-full" [style]="'h-4 w-2/3'"></pmds-cdk-skeleton>
						}
					</section>
					@for (_ of [31,32]; track _) {					  
						<section class="w-full p-4 border-t border-color-skeleton-01 bg-color-surface-primary grid grid-cols-6 gap-4">
							@for (_ of [41,42,43,44,45,46]; track _) {
								<pmds-cdk-skeleton class="w-full" [style]="'h-4 w-2/3'"></pmds-cdk-skeleton>
							}
						</section>
					}
				</section>
				<section class="w-1/3 mobile:w-full">
					<section class="rounded-pmds border border-color-skeleton-01 bg-color-surface-primary p-4 w-full">
						<section class="flex justify-between items-center">
							<pmds-cdk-skeleton [style]="'h-6 w-24'"></pmds-cdk-skeleton>
							<pmds-cdk-skeleton [style]="'h-8 w-24'"></pmds-cdk-skeleton>
						</section>
						<pmds-cdk-skeleton [style]="'my-6 h-6 w-32'"></pmds-cdk-skeleton>
						<pmds-cdk-skeleton [style]="'h-48 w-full'"></pmds-cdk-skeleton>
						<section class="flex items-center justify-center py-6">
							<pmds-cdk-skeleton [style]="'h-8 w-24'"></pmds-cdk-skeleton>
						</section>
						<pmds-cdk-skeleton [style]="'h-[1px] w-full'"></pmds-cdk-skeleton>
						<pmds-cdk-skeleton [style]="'my-6 h-6 w-32'"></pmds-cdk-skeleton>
						<pmds-cdk-skeleton [style]="'h-24 w-full'"></pmds-cdk-skeleton>
					</section>
				</section>
			</section>
		</section>`,
	}),
};
