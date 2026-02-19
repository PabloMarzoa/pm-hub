////////Third party imports
import { StoryObj, moduleMetadata } from '@storybook/angular';
////////PPMDS libraries
import { PmdsCdkButtonComponent } from '../pmds-cdk-button/pmds-cdk-button.component';
////////Component import
import { PmdsCdkLoaderComponent } from './pmds-cdk-loader.component';
import { componentInfo } from "./story-helpers/pmds-cdk-loader-component-info-story";
import { template } from "./story-helpers/pmds-cdk-loader-component-const-story";

export default {
    title: 'Cdk/Feedback & System status/Loader',
    component: PmdsCdkLoaderComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [PmdsCdkButtonComponent],
        })
    ],
    args: {
        dataQA: 'storybook-qa-',
        isPrimary: true,
        isFullscreen: true,
    },
    argTypes: {
        isPrimary: {
            description: 'Change the style loading',
            type: { required: true },
            defaultValue: { summary: 'true' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
            control: {
                type: 'boolean',
            },
        },
        embedBody: {
            description: 'Send true for the fullscreen is hover of the parent',
            type: { required: true },
            defaultValue: { summary: 'true' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: {
                type: 'boolean',
            },
        },
        title: {
            description: 'String for title',
            type: { type: 'string', required: false },
            table: {
                type: { summary: 'string' },
            },
            control: {
                type: 'text',
            },
        },
        subtitle: {
            description: 'String for subtitle',
            type: { type: 'string', required: false },
            table: {
                type: { summary: 'string' },
            },
            control: {
                type: 'text',
            },
        },
        bgClass: {
            description: 'Background color',
            type: { type: 'string', required: false },
            table: {
                type: { summary: 'string' },
            },
            control: {
                type: 'text',
            },
        },
		customStyles: {
            description: 'Custom container styles',
            type: { type: 'string', required: false },
            table: {
                type: { summary: 'string' },
            },
            control: {
                type: 'text',
            },
        },
        isFullscreen: {
            description: 'In primary version adapt the style for fullscreen',
            type: { type: 'boolean' },
            defaultValue: { summary: 'true' },
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'true' },
            },
            control: {
                type: 'boolean',
            },
        },
        dataQA: {
            description: 'Reference for QA',
            table: {
                type: { summary: 'string' },
            },
            control: {
                type: 'text',
            },
        }
    },
    parameters: {
        docs: {
            subtitle: 'PmdsCdkLoaderComponent',
            description: {
            component: componentInfo
        },
        },
    },
};

export const Primary: StoryObj<PmdsCdkLoaderComponent> = {
    args: {
        embedBody: true
    },
    render: (args) => ({
        props: args,
        template,
    }),
};

export const PrimaryWithInfo: StoryObj<PmdsCdkLoaderComponent> = {
    args: {
        title: 'Title',
        subtitle: 'Subtitle',
        embedBody: true
    },
    render: (args) => ({
        props: args,
        template,
    }),
};

export const PrimaryWithBackground: StoryObj<PmdsCdkLoaderComponent> = {
    args: {
        bgClass: 'bg-white',
        title: 'Title',
        subtitle: 'Subtitle',
        embedBody: true
    },
    render: (args) => ({
        props: args,
        template,
    }),
};

export const PrimaryWithBackgroundOpacity: StoryObj<PmdsCdkLoaderComponent> = {
    args: {
        bgClass: 'bg-black/10',
        title: 'Title',
        subtitle: 'Subtitle',
        embedBody: true
    },
    render: (args) => ({
        props: args,
        template,
    }),
};

export const PrimaryNoFullscreen: StoryObj<PmdsCdkLoaderComponent> = {
    args: {
        isPrimary: true,
        isFullscreen: false
    },
};

export const PrimaryNoFullscreenWithText: StoryObj<PmdsCdkLoaderComponent> = {
    args: {
        isPrimary: true,
        isFullscreen: false,
        title: 'Title',
        subtitle: 'Subtitle',
    },
};

export const Secondary: StoryObj<PmdsCdkLoaderComponent> = {
    args: {
        isPrimary: false,
        isFullscreen: false
    },
};

export const SecondaryWithInfo: StoryObj<PmdsCdkLoaderComponent> = {
    args: {
        isPrimary: false,
        isFullscreen: false,
        title: 'Title',
        subtitle: 'Subtitle',
    },
};
