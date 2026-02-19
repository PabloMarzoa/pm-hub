////////Angular imports
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
////////Third party libraries
import { moduleMetadata } from '@storybook/angular';
////////PPMDS libraries

import { PmdsCdkRadioButtonsComponent } from '../../../index';
import { PmdsCdkCopyClipboardComponent } from '../../../index';
import {
	listIconArrows,
	listIconBrand,
	listIconCards,
	listIconCharts,
	listIconCommunication,
	listIconCurrencies,
	listIconDevices,
	listIconDocuments,
	listIconHands,
	listIconMoney,
	listIconObjects,
	listIconPeople,
	listIconPlaces,
	listIconSecurity,
	listIconSymbols,
	listIconTechnology,
} from './utils/pmds-util-icons.const';

export default {
	title: 'Foundations/Icons',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [

				PmdsCdkRadioButtonsComponent,
				PmdsCdkCopyClipboardComponent,
			],
			providers: [FormGroupDirective, FormsModule],
		}),
	],
	parameters: {
		docs: {
			subtitle: 'How to use our icons',
			source: {
				type: 'code',
			},
			description: {
				component: `
1 - Copy the PmIcons (**../../../index/src/assets/fonts/PmIcons**) in your assets folder

2 - Add your style.scss this code(add pathname variable with your path):

~~~
$pathname:[put your assets path here];

@font-face {
	font-family: "pm-icons";
	src: url("#{$pathname}/fonts/PmIcons/pm-icons.eot");
	src: url("#{$pathname}/fonts/PmIcons/pm-icons.eot")
		format("embedded-opentype"),
	url("#{$pathname}/fonts/PmIcons/pm-icons.ttf")
		format("truetype"),
	url("#{$pathname}/fonts/PmIcons/pm-icons.woff")
		format("woff"),
	url("#{$pathname}/fonts/PmIcons/pm-icons.svg")
		format("svg");
	font-weight: normal;
	font-style: normal;
	font-display: block;
}

@use '../../../index/src/assets/styles/icons.scss';
~~~

3 - For use it only copy the icon class in a span tag
<code><section class="flex items-center">'span class="pmicons-cloud"'&nbsp;&nbsp;<span class="pmicons-cloud"></section></code>

EXTRA - You can add more classes for size or color
<code><section class="flex items-center">'span class="pmicons-cloud text-2xl text-color-icon-action"'&nbsp;&nbsp;<span class="pmicons-cloud !text-2xl text-color-icon-action"></section></code>
				`,
			},
		},
	},
};

export const Docs = {
	render: () => ({
		props: {
			listIcons: (text: string) => {
				return text
					? listIcons
							.filter(
								(icon) =>
									icon.name
										.toLowerCase()
										.includes(
											text
												.toLowerCase()
												.replace('pmicons-', '')
										) ||
									icon.keywords
										.toLowerCase()
										.includes(
											text
												.toLowerCase()
												.replace('pmicons-', '')
										) ||
									icon.code
										.toLowerCase()
										.includes(
											text
												.toLowerCase()
												.replace('pmicons-', '')
										)
							)
							.reduce(function (memo: any, x) {
								if (!memo[x['category']]) {
									memo[x['category']] = [];
								}
								memo[x['category']].push(x);
								return memo;
							}, {})
					: listIcons.reduce(function (memo: any, x) {
							if (!memo[x['category']]) {
								memo[x['category']] = [];
							}
							memo[x['category']].push(x);
							return memo;
					  }, {});
			},
			listIconsSearched: listIcons.reduce(function (memo: any, x) {
				if (!memo[x['category']]) {
					memo[x['category']] = [];
				}
				memo[x['category']].push(x);
				return memo;
			}, {}),
			copy: (text: string, size: string, color: string) => {
				return `pmicons-${text} ${size || ''} ${color || ''}`.trim();
			},
			size: 'text-2xl',
		},
		template: `
<section class="pb-4 flex flex-col mobile:relative mobile:pb-40 text-color-text-primary">
	<input
		class="w-full p-3 border border-color-border-default rounded-md text-color-text-primary bg-color-background-default focus:border-color-border-focus outline-none transition-colors"
 		[placeholder]="'Search icon'"
	 	(input)="listIconsSearched = listIcons($any($event).target.value)"
 />
	<div class="flex items-center justify-between pt-4 mobile:absolute mobile:items-start mobile:justify-around w-full mobile:mt-16">
		<pmds-cdk-radio-buttons
			(checkOption)="color = $event"
			[groupLabel]="'Colors'"
			[options]="[{label: 'Primary', value: 'text-color-text-primary', checked: true}, {label: 'Action', value: 'text-color-icon-action'}, {label: 'Error', value: 'text-color-text-error'}]"
		/>
		<pmds-cdk-radio-buttons
			(checkOption)="size = $event"
			[groupLabel]="'Sizes'"
			[options]="[{label: 'Default', value: ''}, {label: 'Medium', value: 'text-2xl', checked: true}, {label: 'Large', value: 'text-4xl'}]"
		/>
	</div>
</section>
<section class="mobile:pt-4">
	@for(icons of listIconsSearched | keyvalue; track icons.key) {
		<section class="pb-2 text-color-text-primary">
			<section class="w-full font-headline-desktop-m-bold py-4">
				{{icons.key}}
			</section>
			<section class="grid grid-cols-2 mobile:grid-cols-1">
				@for(icon of icons.value; track icon) {
					<div class="flex items-center">
						<span [class]="'mr-2 pmicons-' + icon.name + ' ' + size + ' ' + color"></span><span>{{'pmicons-' + icon.name}}</span>
						<pmds-cdk-copy-clipboard [textToCopy]="copy(icon.name, size, color)"/>
					</div>
				}
			</section>
		</section>
	}
</section>
@if(listIconsSearched.length === 0) {
	<section class="w-full flex justify-center items-center text-color-text-primary">
		No results <span class="pmicons-close-bold text-3xl"></span>
	</section>
}`,
	}),
};

const listIcons = [
	...listIconCurrencies,
	...listIconMoney,
	...listIconCards,
	...listIconSecurity,
	...listIconCharts,
	...listIconDevices,
	...listIconTechnology,
	...listIconPeople,
	...listIconDocuments,
	...listIconSymbols,
	...listIconArrows,
	...listIconHands,
	...listIconObjects,
	...listIconPlaces,
	...listIconCommunication,
	...listIconBrand,
];
