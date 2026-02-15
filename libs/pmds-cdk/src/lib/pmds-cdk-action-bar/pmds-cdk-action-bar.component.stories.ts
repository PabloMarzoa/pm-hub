////////Third party libraries
import {
	componentWrapperDecorator,
	moduleMetadata,
	StoryObj,
} from '@storybook/angular';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component imports
import { IPmdsCdkActionBarConfig } from './models/pmds-cdk-action-bar.model';
import { PmdsCdkActionBarService } from './utils/pmds-cdk-action-bar.service';
import { componentInfo } from './story-helpers/pmds-cdk-action-bar-component-info-story';
import { storyGenerate } from './story-helpers/pmds-cdk-action-bar-component-const-story';

export default {
	title: 'Cdk/Navigation/Action bar',
	decorators: [
		componentWrapperDecorator(
			(story) => `
        <div class="flex flex-col items-center">
          ${story}
        </div>`
		),
		moduleMetadata({
			providers: [PmdsCdkActionBarService],
			imports: [PmdsCdkButtonComponent],
		}),
	],
	tags: ['autodocs'],
	argTypes: {
		actionBarConfig: {
			description: 'Config for action bar',
			table: {
				type: {
					summary: `
            IPmdsCdkActionBarConfig: {
              actionBarButtons?: IPmdsCdkActionBarButton[];
              clearBarButton?: {
                  label: string;
              };
              dataQA?: string;
            }
            IPmdsCdkActionBarButton: {
              action: (button: unknown) => void;
              label?: string;
            }
          `,
				},
			},
			control: {
				type: 'object',
			},
			type: { required: true },
		},
	},
	parameters: {
		injectInjectorToProps: true,
		docs: {
			subtitle: 'PmdsCdkActionBarComponent',
			description: {
				component: componentInfo,
			},
			source: { type: 'code' },
		},
	},
};

export const ActionBar: StoryObj<{
	actionBarConfig: IPmdsCdkActionBarConfig;
}> = storyGenerate(1);

export const ActionBarWithSixActions: StoryObj<{
	actionBarConfig: IPmdsCdkActionBarConfig;
}> = storyGenerate(6);

export const ActionBarWithMoreThanSixActions: StoryObj<{
	actionBarConfig: IPmdsCdkActionBarConfig;
}> = storyGenerate(8);
