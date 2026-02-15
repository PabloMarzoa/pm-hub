const theme = require('./libs/pmds-common/src/lib/utils/pmds-util-styles/src/assets/styles/tailwind.base.config');

const withOpacity =
	(variableName) =>
	({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};

/** @type {import('tailwindcss').Config} */
const tailwindBaseConfig = {
	libContent: ['../../../libs/**/src/**/!(*.stories|*.spec).{ts,html}}'],
	theme,
	plugins: [],
};

module.exports = {
	withOpacity,
	tailwindBaseConfig,
};
