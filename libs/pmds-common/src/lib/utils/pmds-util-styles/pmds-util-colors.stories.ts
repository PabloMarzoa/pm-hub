////////Angular imports
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
////////Third party libraries
import { moduleMetadata } from '@storybook/angular';
////////PPMDS libraries

import { PmdsCdkRadioButtonsComponent } from '@pmhub/pmds-cdk';
import { PmdsCdkCopyClipboardComponent } from '@pmhub/pmds-cdk';

export default {
	title: 'Foundations/Colors',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [

				PmdsCdkRadioButtonsComponent,
				PmdsCdkCopyClipboardComponent
			],
			providers: [FormGroupDirective, FormsModule],
		}),
	],
	parameters: {
		docs: {
			subtitle: 'How to use our colors',
			source: {
				type: 'code',
			},
			description: {
				component: `
1 - Add in your **angular.json** in [your-project].architect.build.options this code:

~~~
"stylePreprocessorOptions": {
	"includePaths": ["./node_modules"]
}
~~~

2 - Add your style.scss this code:

~~~
@use '@pmhub/pmds-common/src/assets/styles/emi-colors.scss';
@use '@pmhub/pmds-common/src/assets/styles/emi-shapes.scss';
~~~

3 - For use it only copy the class (add prefix **text-**(for apply the color to text), **bg-**(for apply the color to background) or **border-**(for apply the color to border)))
<code>'class="text-color-text-info"'&nbsp;&nbsp;<span class="text-color-text-info">example</span></code>
				`,
			},
		},
	},
};

export const Docs = {
	render: () => ({
		props: {
			listColors: (text: string, type: 'text' | 'background') =>
				text ? listColors[type].filter((color: any) =>
				color.hex.toLowerCase().includes(text.toLowerCase()) ||
				color.rgb.toLowerCase().includes(text.toLowerCase()) ||
				color.token.toLowerCase().includes(text.toLowerCase()) ||
				color.tokenEmi.toLowerCase().includes(text.toLowerCase())
			) : listColors[type],
			element: 'text'
		},
		template: `
<section class="text-color-text-primary text-sm">
	<section class="pb-2 flex flex-col mobile:relative">
		<input
		class="w-full p-3 border border-color-border-default rounded-md text-color-text-primary bg-color-background-default focus:border-color-border-focus outline-none transition-colors"
		[placeholder]="'Search color'"
		(input)="search = $any($event).target.value"
		/>
	</section>
	<div class="flex items-center justify-between py-4 mobile:absolute mobile:items-start mobile:justify-around w-full mobile:pt-16">
		<pmds-cdk-radio-buttons
			(checkOption)="element = $event"
			[groupLabel]="'Element (select class for copy token)'"
			[options]="[{label: 'Text', value: 'text', checked: true}, {label: 'Background', value: 'bg'}, {label: 'Border', value: 'border'}]"
		/>
	</div>
	@for (type of [
		{id: 'text', label: 'Text'},
		{id: 'background', label: 'Background'},
		{id: 'surface', label: 'Surface'},
		{id: 'icon', label: 'Icon'},
		{id: 'action', label: 'Action'},
		{id: 'border', label: 'Border'},
		{id: 'componentSpecific', label: 'Component Specific'},
		{id: 'support', label: 'Support'}
		]; track type.id) {	  
		<section>
			<h1 class="text-xl">{{type.label}}</h1>
			<hr class="border-color-border-default my-2">
			@for (color of listColors(search, type.id); track color.token) {			  
				<section class="flex text-color-text-tertiary py-4 justify-between animate-fade-in">
						<div class="w-[10%] flex items-center justify-center">
							<div [class]="'rounded-full h-16 w-16 mobile:h-10 mobile:w-10 border border-color-border-default bg' + color.token"></div>
						</div>
						<div class="pl-2 w-[24%]">
							<div class="w-fit">
								<h2 class="text-color-text-primary">Rol</h2>
								<hr class="border-color-border-default">
							</div>
							{{ color.rol }}
						</div>
						<div class="pl-2 w-[12%]">
							<div class="w-fit">
								<h2 class="text-color-text-primary">Hex</h2>
								<hr class="border-color-border-default">
							</div>
							{{ color.hex }}<br>
						</div>
						<div class="pl-2 w-[20%]">
							<div class="w-fit">
								<h2 class="text-color-text-primary">Rgb</h2>
								<hr class="border-color-border-default">
							</div>
							{{ color.rgb }}<br>
						</div>
						<div class="pl-2 w-[17%]">
							<div class="w-fit">
								<h2 class="text-color-text-primary">Brand token</h2>
								<hr class="border-color-border-default">
							</div>
							{{ color.tokenEmi }}<br>
						</div>
						<div class="pl-2 w-[17%]">
							<div class="w-fit">
								<h2 class="text-color-text-primary">Global token</h2>
								<hr class="border-color-border-default">
							</div>
							-{{ color.token }}<pmds-cdk-copy-clipboard [textToCopy]="element + color.token"/>
						</div>
				</section>
			}
		</section>
	}
</section>
		`,
	}),
};

interface listColors {
	rgb: string,
	hex: string,
	tokenEmi: string,
	token: string,
	rol: string,
}

const listColorsText: listColors[] = [
	{
		rgb: 'rgb(48, 62, 92)',
		hex: '#303E5C',
		tokenEmi: '--primary-dark-blue',
		token: '-color-text-primary',
		rol: 'Primary text and content of the app',
	},
	{
		rgb: 'rgb(255,255,255)',
		hex: '#FFFFFF',
		tokenEmi: '--primary-white',
		token: '-color-text-secondary',
		rol: 'Alternative color to the text',
	},
	{
		rgb: 'rgb(89, 101, 125)',
		hex: '#59657D',
		tokenEmi: '--primary-medium-blue',
		token: '-color-text-tertiary',
		rol: 'Alternative color to the text. Used for placeholders',
	},
	{
		rgb: 'rgb(143, 143, 143)',
		hex: '#8F8F8F',
		tokenEmi: '--neutral-70',
		token: '-color-text-disabled',
		rol: 'Disabled text color',
	},
	{
		rgb: 'rgb(24, 83, 72)',
		hex: '#185348',
		tokenEmi: '--success-darker',
		token: '-color-text-success',
		rol: 'Success text color',
	},
	{
		rgb: 'rgb(196, 0, 4)',
		hex: '#C40004',
		tokenEmi: '--error-darker',
		token: '-color-text-error',
		rol: 'Error text color',
	},
	{
		rgb: 'rgb(168, 123, 9)',
		hex: '#A87B09',
		tokenEmi: '--warning-darker',
		token: '-color-text-warning',
		rol: 'Warning text color',
	},
	{
		rgb: 'rgb(3, 85, 129)',
		hex: '#035581',
		tokenEmi: '--info-darker',
		token: '-color-text-info',
		rol: 'Info text color',
	},
];

const listColorsBackground: listColors[] = [
	{
		rgb: 'rgb(248, 248, 248)',
		hex: '#F8F8F8',
		tokenEmi: '--primary-lighter-storm',
		token: '-color-background-default',
		rol: 'Background color for the page',
	},
	{
		rgb: 'rgb(255,255,255)',
		hex: '#FFFFFF',
		tokenEmi: '--primary-white',
		token: '-color-background-alternative',
		rol: 'Background color for panels, sidebars incrustadas,...',
	},
	{
		rgb: 'rgb(232, 248, 245)',
		hex: '#E8F8F5',
		tokenEmi: '--success-lighter',
		token: '-color-background-success',
		rol: 'Success background for alerts',
	},
	{
		rgb: 'rgb(255, 230, 230)',
		hex: '#FFE6E6',
		tokenEmi: '--error-lighter',
		token: '-color-background-error',
		rol: 'Error background for alerts',
	},
	{
		rgb: 'rgb(254, 252, 245)',
		hex: '#FEFCF5',
		tokenEmi: '--warning-lighter',
		token: '-color-background-warning',
		rol: 'Warning background for alerts',
	},
	{
		rgb: 'rgb(234, 247, 254)',
		hex: '#EAF7FE',
		tokenEmi: '--info-lighter',
		token: '-color-background-info',
		rol: 'Info background Info for alerts',
	},
	{
		rgb: 'rgba(25, 41, 74, 0.5)',
		hex: '#19294A 50%',
		tokenEmi: '--opacity-primary',
		token: '-color-background-overlay-primary',
		rol: 'Color for filling the overlays when a hub or a modal is trigered',
	},
	{
		rgb: 'rgba(255, 255, 255, 0.8)',
		hex: '#FFFFFF 50%',
		tokenEmi: '--opacity-secondary',
		token: '-color-background-overlay-secondary',
		rol: 'Color for filling the overlays when a loader is trigered',
	},
];

const listColorsSurface: listColors[] = [
	{
		rgb: 'rgb(255,255,255)',
		hex: '#FFFFFF',
		tokenEmi: '--primary-white',
		token: '-color-surface-primary',
		rol: 'Used for assets that sit on the display background. e.g form, paginator, chips, accordions, inputs, international cards...',
	},
	{
		rgb: 'rgb(243, 245, 249)',
		hex: '#F3F5F9',
		tokenEmi: '--tints-storm-50',
		token: '-color-surface-secondary',
		rol: 'Used for assets specific that sit on the display background. e.g option buttons, notifications...',
	},
	{
		rgb: 'rgb(236, 236, 236)',
		hex: '#ECECEC',
		tokenEmi: '--neutral-20',
		token: '-color-surface-tertiary',
		rol: 'Used for toggles background',
	},
	{
		rgb: 'rgb(233, 237, 245)',
		hex: '#E9EDF5',
		tokenEmi: '--storm-90',
		token: '-color-surface-hover',
		rol: 'Used for the interactive layer in hover state in some assets when needed',
	},
	{
		rgb: 'rgb(35, 119, 154)',
		hex: '#23779A',
		tokenEmi: '--secondary-darker-sky',
		token: '-color-surface-selected',
		rol: 'Used for the interactive layer in pressed state in some assets when needed',
	},
	{
		rgb: 'rgb(233, 241, 245)',
		hex: '#E9F1F5',
		tokenEmi: '--alternative-storm',
		token: '-color-surface-selected-alternative',
		rol: 'Used for the interactive layer in pressed state in table rows',
	},
	{
		rgb: 'rgb(246, 246, 246)',
		hex: '#F6F6F6',
		tokenEmi: '--neutral-10',
		token: '-color-surface-disabled',
		rol: 'Used for disabled layers',
	}
];

const listColorsIcon: listColors[] = [
	{
		rgb: 'rgb(48, 62, 92)',
		hex: '#303E5C',
		tokenEmi: '--primary-dark-blue',
		token: '-color-icon-default',
		rol: 'Primary icon color',
	},
	{
		rgb: 'rgb(143, 143, 143)',
		hex: '#8F8F8F',
		tokenEmi: '--neutral-70',
		token: '-color-icon-disabled',
		rol: 'Disabled icon color',
	},
	{
		rgb: 'rgb(255,255,255)',
		hex: '#FFFFFF',
		tokenEmi: '--primary-white',
		token: '-color-icon-alternative',
		rol: 'Used for icons on inverted and high contrasted backgrounds',
	},
	{
		rgb: 'rgb(51, 102, 255)',
		hex: '#3366FF',
		tokenEmi: '--primary-blue',
		token: '-color-icon-action',
		rol: 'Used for non and interactive icons with the brand color',
	},
	{
		rgb: 'rgb(24, 83, 72)',
		hex: '#185348',
		tokenEmi: '--success-darker',
		token: '-color-icon-success',
		rol: 'Success icon color',
	},
	{
		rgb: 'rgb(196, 0, 4)',
		hex: '#C40004',
		tokenEmi: '--error-darker',
		token: '-color-icon-error',
		rol: 'Error icon color',
	},
	{
		rgb: 'rgb(168, 123, 9)',
		hex: '#A87B09',
		tokenEmi: '--warning-darker',
		token: '-color-icon-warning',
		rol: 'Warning icon color',
	},
	{
		rgb: 'rgb(3, 85, 129)',
		hex: '#035581',
		tokenEmi: '--info-darker',
		token: '-color-icon-info',
		rol: 'Info icon color, used only for tooltips',
	}
];

const listColorsAction: listColors[] = [
	{
		rgb: 'rgb(51, 102, 255)',
		hex: '#3366FF',
		tokenEmi: '--primary-blue',
		token: '-color-action-main-default',
		rol: 'Primary interaction components active e.g dropdowns, datepickers,...',
	},
	{
		rgb: 'rgb(255,255,255)',
		hex: '#FFFFFF',
		tokenEmi: '--primary-white',
		token: '-color-action-on-main-default',
		rol: 'Used for elements that are placed over the main action color. It should only be used for texts and icons. E.g. Primary text button',
	},
	{
		rgb: 'rgb(0, 55, 221)',
		hex: '#0037DD',
		tokenEmi: '--primary-klein',
		token: '-color-action-main-hover',
		rol: 'Used for hover state of main actions',
	},
	{
		rgb: 'rgb(0, 34, 136)',
		hex: '#002288',
		tokenEmi: '--primary-navy',
		token: '-color-action-main-selected',
		rol: 'Used for hover state of main actions',
	},
	{
		rgb: 'rgb(35, 119, 154)',
		hex: '#23779A',
		tokenEmi: '--secondary-darker-sky',
		token: '-color-action-alternative-default',
		rol: 'Used for default state minor interactions. It doesn’t matter if it’s a bg, text or border. E.g. Checkbox, radio button,...',
	},
	{
		rgb: 'rgb(255,255,255)',
		hex: '#FFFFFF',
		tokenEmi: '--primary-white',
		token: '-color-action-on-alternative-default',
		rol: 'Used for hover state of elements that are placed over the main action color. Only be used for texts and icons',
	},
	{
		rgb: 'rgb(246, 246, 246)',
		hex: '#F6F6F6',
		tokenEmi: '--neutral-10',
		token: '-color-action-disabled',
		rol: 'Used for background of action disabled state',
	},
	{
		rgb: 'rgb(143, 143, 143)',
		hex: '#8F8F8F',
		tokenEmi: '--neutral-70',
		token: '-color-action-on-disabled',
		rol: 'Used for forefround elements of actions disabled state',
	}
];

const listColorsborder: listColors[] = [
	{
		rgb: 'rgb(200, 207, 221)',
		hex: '#C8CFDD',
		tokenEmi: '--primary-medium-storm',
		token: '-color-border-default',
		rol: 'Used for border in components like inputs or cards in default state',
	},
	{
		rgb: 'rgb(35, 119, 154)',
		hex: '#23779A',
		tokenEmi: '--secondary-darker-sky',
		token: '-color-border-focus',
		rol: 'Used for border in components like inputs or cards in focus state',
	},
	{
		rgb: 'rgb(181, 181, 181)',
		hex: '#B5B5B5',
		tokenEmi: '--neutral-50',
		token: '-color-border-disabled',
		rol: 'Used for borders in disabled components like inputs or cards',
	},
	{
		rgb: 'rgb(255, 255, 255)',
		hex: '#FFFFFF',
		tokenEmi: '--primary-white',
		token: '-color-border-alternative',
		rol: 'Used for border that needs contrast',
	},
	{
		rgb: 'rgb(51, 102, 255)',
		hex: '#3366FF',
		tokenEmi: '--primary-blue',
		token: '-color-border-active',
		rol: 'Used for active border like process headers, tabs,...',
	},
	{
		rgb: 'rgb(3, 85, 129)',
		hex: '#035581',
		tokenEmi: '--info-darker',
		token: '-color-border-info',
		rol: 'Used for border in info components like alerts',
	},
	{
		rgb: 'rgb(24, 83, 72)',
		hex: '#185348',
		tokenEmi: '--success-darker',
		token: '-color-border-success',
		rol: 'Used for border in success components like alerts',
	},
	{
		rgb: 'rgb(168, 123, 9)',
		hex: '#A87B09',
		tokenEmi: '--warning-darker',
		token: '-color-border-warning',
		rol: 'Used for border in warning components like alerts',
	},
	{
		rgb: 'rgb(196, 0, 4)',
		hex: '#C40004',
		tokenEmi: '--error-darker',
		token: '-color-border-error',
		rol: 'Used for border in error components like alerts',
	}
];

const listColorsComponentSpecificColor: listColors[] = [
	{
		rgb: 'rgb(255, 255, 255)',
		hex: '#FFFFFF',
		tokenEmi: '--primary-white',
		token: '-color-button-secondary-default',
		rol: 'Used for secondary buttons background',
	},
	{
		rgb: 'rgb(51, 102, 255)',
		hex: '#3366FF',
		tokenEmi: '--primary-blue',
		token: '-color-button-secondary-on-default',
		rol: 'Used for elements displayed on secondary buttons',
	},
	{
		rgb: 'rgb(0, 55, 221)',
		hex: '#0037DD',
		tokenEmi: '--primary-klein',
		token: '-color-button-secondary-on-hover',
		rol: 'Used for text or any content displayed above hover secondary buttons',
	},
	{
		rgb: 'rgb(0, 34, 136)',
		hex: '#002288',
		tokenEmi: '--primary-navy',
		token: '-color-button-secondary-on-pressed',
		rol: 'Used for text or any content displayed above hover secondary buttons',
	},
	{
		rgb: 'rgb(143, 143, 143)',
		hex: '#8F8F8F',
		tokenEmi: '--neutral-70',
		token: '-color-button-secondary-on-disabled',
		rol: 'Used for text or any content displayed above hover secondary buttons',
	},
	{
		rgb: 'rgb(48, 62, 92)',
		hex: '#303E5C',
		tokenEmi: '--primary-dark-blue',
		token: '-color-tooltip',
		rol: 'Used for tooltip backgrounds',
	},
	{
		rgb: 'rgb(248, 248, 248)',
		hex: '#F8F8F8',
		tokenEmi: '--primary-lighter-storm',
		token: '-color-background-funnel',
		rol: 'Used for funnels backgrounds',
	}
];

const supportColor: listColors[] = [
	{
		rgb: 'rgb(236, 236, 236)',
		hex: '#ECECEC',
		tokenEmi: '--neutral-20',
		token: '-color-support-01',
		rol: 'Used for draft and expired status',
	},
	{
		rgb: 'rgb(89, 101, 125)',
		hex: '#59657D',
		tokenEmi: '--primary-medium-blue',
		token: '-color-support-02',
		rol: 'Used for border in draft and expired status',
	},
	{
		rgb: 'rgb(255, 230, 230)',
		hex: '#FFE6E6',
		tokenEmi: '--error-lighter',
		token: '-color-support-03',
		rol: 'Used for error, cancelled or expired status',
	},
	{
		rgb: 'rgb(255, 77, 81)',
		hex: '#FF4D51',
		tokenEmi: '--error-base',
		token: '-color-support-04',
		rol: 'Used for rejected, cancel or errors',
	},
	{
		rgb: 'rgb(234, 247, 254)',
		hex: '#EAF7FE',
		tokenEmi: '--info-lighter',
		token: '-color-support-05',
		rol: 'Used for in transit, in process, out of delivery, available for pickup, exception, in review status',
	},
	{
		rgb: 'rgb(52, 180, 250)',
		hex: '#34B4FA',
		tokenEmi: '--info-base',
		token: '-color-support-06',
		rol: 'Used for border in transit, in process, out of delivery, available for pickup, exception, in review status',
	},
	{
		rgb: 'rgb(254, 252, 245)',
		hex: '#FEFCF5',
		tokenEmi: '--warning-lighter',
		token: '-color-support-07',
		rol: 'Used for pending status',
	},
	{
		rgb: 'rgb(246, 200, 84)',
		hex: '#F6C854',
		tokenEmi: '--warning-base',
		token: '-color-support-08',
		rol: 'Used for border in pending status',
	},
	{
		rgb: 'rgb(232, 248, 245)',
		hex: '#E8F8F5',
		tokenEmi: '--success-lighter',
		token: '-color-support-09',
		rol: 'Used for completed, approved, paid delivered or settled status',
	},
	{
		rgb: 'rgb(61, 199, 173)',
		hex: '#3DC7AD',
		tokenEmi: '--success-base',
		token: '-color-support-10',
		rol: 'Used for border in completed, approved, paid delivered or settled status',
	}
];

const listColors: {
	text: listColors[],
	background: listColors[],
	surface: listColors[],
	icon: listColors[],
	action: listColors[]
	border: listColors[]
	componentSpecific: listColors[],
	support: listColors[]
} = {
	text: listColorsText,
	background: listColorsBackground,
	surface: listColorsSurface,
	icon: listColorsIcon,
	action: listColorsAction,
	border: listColorsborder,
	componentSpecific: listColorsComponentSpecificColor,
	support: supportColor,
}
