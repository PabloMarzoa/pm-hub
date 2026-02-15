////////Component imports
import { componentWrapperDecorator } from "@storybook/angular";
import { InjectInjectorToProps } from "./decorators/inject-injector-to-props";

export const parameters = {
  options: {
    storySort: {
        method: 'alphabetical',
        order: ['Docs', 'Foundations'],
        locales: 'en-US',
    }
  },
}

export const decorators = [componentWrapperDecorator(
  (story) => `
    <section class="bg-color-surface-secondary rounded-pmds p-4">
      <section>
      ${story}
      </section>
    </section>`
), InjectInjectorToProps];
