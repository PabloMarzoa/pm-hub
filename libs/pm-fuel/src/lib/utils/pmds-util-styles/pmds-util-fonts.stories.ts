////////Angular imports
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
////////Third party libraries
import { moduleMetadata } from '@storybook/angular';
////////PPMDS libraries

import { PmdsCdkRadioButtonsComponent } from '../../../index';
import { PmdsCdkCopyClipboardComponent } from '../../../index';

interface IPmdsFont {
	class: string;
	title: string;
	fontName: string;
	fontSize: string;
	lineHeight: string;
	fontWeight: string;
}

export default {
	title: 'Foundations/Fonts',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				NgFor,
				NgIf,

				PmdsCdkRadioButtonsComponent,
				PmdsCdkCopyClipboardComponent,
			],
			providers: [FormGroupDirective, FormsModule],
		}),
	],
	parameters: {
		docs: {
			subtitle: 'How to use our fonts',
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

2 - Add your fonts.scss this code(choose saas or emi):

~~~

@use '../../../index/src/assets/styles/fonts.scss';

~~~

3 - For use it only copy the class in your html tag
<code>'class="font-body-m-bold"'&nbsp;&nbsp;<span class="font-body-m-bold">example</span></code>
				`,
			},
		},
	},
};

export const Docs = {
	render: () => ({
		props: {
			search: '',
			sections: (searchText: string) =>
				searchText
					? [
							filterFont(searchText, displayDesktop),
							filterFont(searchText, displayMobile),
							filterFont(searchText, headlineDesktop),
							filterFont(searchText, headlineMobile),
							filterFont(searchText, bodyMobileDesktop),
					  ]
					: [
							displayDesktop,
							displayMobile,
							headlineDesktop,
							headlineMobile,
							bodyMobileDesktop,
					  ],
			titles: [
				'Display Desktop',
				'Display Mobile',
				'Headline Desktop',
				'Headline Mobile',
				'Body Mobile & Desktop',
			],
			listFonts,
			sectionsFiltered: listFonts,
		},
		template: `
<section class="pb-4 flex flex-col mobile:relative">
	<input
		class="w-full p-3 border border-color-border-default rounded-md text-color-text-primary bg-color-background-default focus:border-color-border-focus outline-none transition-colors"
		[placeholder]="'Search font'"
		(input)="sectionsFiltered = sections($any($event).target.value)"
	/>
</section>
@for (type of listFonts; track (type + '-' + $index)) {  
	@if (sectionsFiltered[$index].length) {
		<p class="font-headline-desktop-l-bold"> {{ titles[$index]}} </p>
		<section class="flex flex-wrap">
		@for (font of sectionsFiltered[$index]; track (font.title + '-' + $index)) {  
			<section class="text-color-text-primary w-1/2 flex py-4">
				<div [class]="font.class + ' w-1/4'">Aa</div>
				<section class="w-3/4 font-body-m-regular">
					<p>{{font.title}}</p>
					<p>{{font.fontName}}</p>
					<p>{{font.fontSize}}</p>
					<p>{{font.lineHeight}}</p>
					<p>{{font.fontWeight}}</p>
					<p class="flex relative rounded-full bg-color-background-success justify-center items-center">{{font.class}}<pmds-cdk-copy-clipboard [textToCopy]="font.class"/></p>
				</section>
			</section>
		}
		</section>
	}
}`,
	}),
};

const filterFont = (searchText: string, font: IPmdsFont[]): IPmdsFont[] =>
	searchText
		? font.filter(
				(font) =>
					font.fontSize
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					font.class
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					font.fontName
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					font.lineHeight
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					font.fontWeight
						.toLowerCase()
						.includes(searchText.toLowerCase())
		  )
		: font;

const displayDesktop = [
	{
		class: 'font-display-desktop-xl-bold',
		title: 'Display desktop XL Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 54px',
		lineHeight: 'Line-height: 64px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-display-desktop-xl-regular',
		title: 'Display desktop XL Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 54px',
		lineHeight: 'Line-height: 64px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-display-desktop-l-bold',
		title: 'Display desktop L Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 48px',
		lineHeight: 'Line-height: 60px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-display-desktop-l-regular',
		title: 'Display desktop L Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 48px',
		lineHeight: 'Line-height: 60px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-display-desktop-m-bold',
		title: 'Display desktop M Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 42px',
		lineHeight: 'Line-height: 52px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-display-desktop-m-regular',
		title: 'Display desktop M Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 42px',
		lineHeight: 'Line-height: 52px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-display-desktop-s-bold',
		title: 'Display desktop S Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 32px',
		lineHeight: 'Line-height: 36px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-display-desktop-s-regular',
		title: 'Display desktop S Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 32px',
		lineHeight: 'Line-height: 36px',
		fontWeight: 'Font weight: Regular',
	},
];
const displayMobile = [
	{
		class: 'font-display-mobile-l-bold',
		title: 'Display Mobile L Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 42px',
		lineHeight: 'Line-height: 52px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-display-mobile-l-regular',
		title: 'Display Mobile L Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 42px',
		lineHeight: 'Line-height: 52px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-display-mobile-m-bold',
		title: 'Display Mobile M Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 28px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-display-mobile-m-regular',
		title: 'Display Mobile M Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 28px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-display-mobile-s-bold',
		title: 'Display Mobile S Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 24px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-display-mobile-s-regular',
		title: 'Display Mobile S Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 24px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Regular',
	},
];
const headlineDesktop = [
	{
		class: 'font-headline-desktop-l-bold',
		title: 'Headline Desktop L Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 28px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-headline-desktop-l-regular',
		title: 'Headline Desktop L Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 28px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-headline-desktop-l-bold',
		title: 'Headline Desktop L Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 24px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-headline-desktop-l-regular',
		title: 'Headline Desktop L Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 24px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-headline-desktop-s-bold',
		title: 'Headline Desktop S Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 20px',
		lineHeight: 'Line-height: 24px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-headline-desktop-s-regular',
		title: 'Headline Desktop S Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 20px',
		lineHeight: 'Line-height: 24px',
		fontWeight: 'Font weight: Regular',
	},
];
const headlineMobile = [
	{
		class: 'font-headline-mobile-l-bold',
		title: 'Headline Mobile L Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 24px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-headline-mobile-l-regular',
		title: 'Headline Mobile L Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 24px',
		lineHeight: 'Line-height: 32px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-headline-mobile-m-bold',
		title: 'Headline Mobile M Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 20px',
		lineHeight: 'Line-height: 24px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-headline-mobile-m-regular',
		title: 'Headline Mobile M Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 20px',
		lineHeight: 'Line-height: 24px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-headline-mobile-s-bold',
		title: 'Headline Mobile S Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 18px',
		lineHeight: 'Line-height: 24px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-headline-mobile-s-regular',
		title: 'Headline Mobile S Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 18px',
		lineHeight: 'Line-height: 24px',
		fontWeight: 'Font weight: Regular',
	},
];
const bodyMobileDesktop = [
	{
		class: 'font-body-m-bold',
		title: 'Body M Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 16px',
		lineHeight: 'Line-height: 24px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-body-m-regular',
		title: 'Body M Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 16px',
		lineHeight: 'Line-height: 24px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-body-s-bold',
		title: 'Body S Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 14px',
		lineHeight: 'Line-height: 20px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-body-s-regular',
		title: 'Body S Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 14px',
		lineHeight: 'Line-height: 20px',
		fontWeight: 'Font weight: Regular',
	},
	{
		class: 'font-body-xs-bold',
		title: 'Body XS Bold',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 12px',
		lineHeight: 'Line-height: 16px',
		fontWeight: 'Font weight: Bold',
	},
	{
		class: 'font-body-xs-regular',
		title: 'Body XS Regular',
		fontName: 'Font family: Helvetica Neue',
		fontSize: 'Font size: 12px',
		lineHeight: 'Line-height: 16px',
		fontWeight: 'Font weight: Regular',
	},
];

const listFonts = [
	displayDesktop,
	displayMobile,
	headlineDesktop,
	headlineMobile,
	bodyMobileDesktop,
];
