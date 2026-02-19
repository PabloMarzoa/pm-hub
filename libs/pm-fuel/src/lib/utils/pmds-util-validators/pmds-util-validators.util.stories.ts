////////Angular imports
////////Component imports
import {componentInfo} from "./story-helpers/pmds-util-validators-info-story";
import {PmdsUtilValidatorsStoryComponent} from "./story-helpers/pmds-util-validators-story.component";

export default {
	title: 'Common/Utils/Validators',
	tags: ['autodocs'],
	component: PmdsUtilValidatorsStoryComponent,
	argTypes: {
		minTime: {
			description: 'Min for PmdsUtilValidators.minTime',
			control: {
				type: 'text',
			},
		},
		maxTime: {
			description: 'Max for PmdsUtilValidators.maxTime',
			control: {
				type: 'text',
			},
		},
		min: {
			description: 'Min for PmdsUtilValidators.min',
			control: {
				type: 'number',
			},
		},
		max: {
			description: 'Max for PmdsUtilValidators.max',
			control: {
				type: 'number',
			},
		},
		locale: {
			description: 'Locale for PmdsUtilValidators.min and PmdsUtilValidators.max',
			options: ['es-ES', 'en-EN'],
			control: {
				type: 'radio',
			},
		}
	},
	parameters: {
		docs: {
			subtitle: 'PmdsUtilValidators',
			source: {type: "code"},
			description: {
				component: componentInfo,
			},
		},
	},
};

export const Docs = {
	args: {
		minTime: '01:30',
		maxTime: '12:30',
		min: 5,
		max: 5,
		locale: 'es-ES',
		minLengthArray: 2
	},
};


