import type { StorybookConfig } from '@storybook/angular';
import { DefinePlugin } from 'webpack';

const config: StorybookConfig = {
	stories: [
		'./pages/**/*.mdx',
		'../../../libs/**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
	],
	addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
	staticDirs: [
		{ from: '../../../apps/pmds-hub-storybook/src/assets', to: '/assets' },
		{
			from: '../../../libs/pm-fuel/src/lib/utils/pmds-util-img-flags/src/assets',
			to: '/assets',
		},
		{
			from: '../../../libs/pm-fuel/src/lib/utils/pmds-util-img-svgs/src/assets',
			to: '/assets',
		},
	],
	framework: {
		name: '@storybook/angular',
		options: {},
	},
	webpackFinal: async (cfg, { configType }) => {
		const define = cfg.plugins?.find(
			(p): p is DefinePlugin => p instanceof DefinePlugin
		);
		if (define) {
			define.definitions['process.env.NODE_ENV'] = JSON.stringify(
				configType?.toLocaleLowerCase()
			);
		} else
			cfg.plugins?.push(
				new DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify(
						configType?.toLocaleLowerCase()
					),
				})
			);
		return cfg;
	},
};

export default config;
