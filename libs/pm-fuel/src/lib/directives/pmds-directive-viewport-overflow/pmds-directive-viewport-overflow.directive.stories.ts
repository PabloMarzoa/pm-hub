////////Third party libraries
import { moduleMetadata, StoryObj } from '@storybook/angular';
////////Component imports
import { PmdsDirectiveViewportOverflow } from './pmds-directive-viewport-overflow.directive';
import { componentInfo } from "./story-helpers/pmds-directive-viewport-component-info-story";

export default {
	title: 'Common/Directives/Viewport overflow',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [PmdsDirectiveViewportOverflow],
		}),
	],
	parameters: {
		docs: {
			subtitle: 'PmdsDirectiveViewportOverflow',
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Docs: StoryObj<{ value: string }> = {
	render: (args) => ({
		props: args,
		template: `
		<section class="w-full h-[500px] py-5 flex flex-col items-center justify-end">
			<div class="rounded border m-4 p-2">Container</div>
			<div class="rounded border p-2" [pmdsViewportOverflow]="{height: 100, translateY: 120}">Overflow</div>
		</section>
    `,
	}),
};
