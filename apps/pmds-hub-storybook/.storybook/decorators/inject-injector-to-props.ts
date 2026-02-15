////////Angular imports
import { APP_INITIALIZER, Injector } from '@angular/core';
////////Third party libraries
import { makeDecorator } from '@storybook/preview-api';

export const InjectInjectorToProps = makeDecorator({
    name: 'injectInjectorToProps',
    parameterName: 'injectInjectorToProps',
    skipIfNoParametersOrOptions: true,
    wrapper: (getStory, context) => {
        const story = getStory(context) as { props: any; applicationConfig: any };
        if (!story.applicationConfig) {
            story.applicationConfig = {};
        }
        if (!story.applicationConfig?.providers) {
            story.applicationConfig.providers = [];
        }
        story.applicationConfig.providers.push({
            provide: APP_INITIALIZER,
            useFactory: (injector: Injector): void => {
                Object.assign(story.props, { injector });
            },
            deps: [Injector],
        });
        return story;
    },
});