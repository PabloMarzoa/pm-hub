////////Angular imports
import { Injector } from '@angular/core';
////////Third party libraries
import { StoryObj } from '@storybook/angular';
////////Component imports
import { IPmdsCdkActionBarConfig } from '../models/pmds-cdk-action-bar.model';
import { PmdsCdkActionBarService } from '../utils/pmds-cdk-action-bar.service';

const actionBarConfigGenerate = (
	actions: number
): IPmdsCdkActionBarConfig => ({
	actionBarButtons: Array(actions)
		.fill(0)
		.map((_, index) => ({
			label: `Action ${index + 1}`,
			action: () => alert(`clicked action ${index + 1}!`),
		})),
	clearBarButton: {
		label: 'Clear selection',
	},
	secondaryBarButton: {
		label: 'Button',
		action: () => alert('Secondary action'),
	},
	dataQA: 'storybook-qa-',
});

const template = `
<pmds-cdk-button
  (buttonClick)="onClick(injector, actionBarConfig)"
  label="Open action bar"
/>
`;

export const storyGenerate = (
	actions: number
): StoryObj<{
	actionBarConfig: IPmdsCdkActionBarConfig;
}> => ({
	args: {
		actionBarConfig: actionBarConfigGenerate(actions),
	},
	render: (args) => ({
		props: {
			...args,
			onClick: (
				injector: Injector,
				actionBarConfig: IPmdsCdkActionBarConfig
			): void => {
				const actionBar = injector
					.get<PmdsCdkActionBarService>(PmdsCdkActionBarService)
					.open(actionBarConfig);
				actionBar.events.subscribe((ev) => alert('Clear'));
			},
		},
		template,
	}),
});
