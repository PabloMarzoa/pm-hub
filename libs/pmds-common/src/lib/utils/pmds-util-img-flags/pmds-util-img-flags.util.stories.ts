////////Angular imports
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
////////Third party libraries
import { moduleMetadata } from '@storybook/angular';
////////PPMDS libraries

import { PmdsCdkRadioButtonsComponent } from '@pmhub/pmds-cdk';
import { PmdsCdkCopyClipboardComponent } from '@pmhub/pmds-cdk';

export default {
	title: 'Foundations/Flags',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				NgFor,

				PmdsCdkRadioButtonsComponent,
				PmdsCdkCopyClipboardComponent,
			],
			providers: [FormGroupDirective, FormsModule],
		}),
	],
	parameters: {
		docs: {
			subtitle: 'How to use our flags',
			description: {
				component: `
1 - Add in your **angular.json** in [your-project].architect.build.options.assets this code:

~~~
{
  "glob": "**/*",
  "input": "node_modules/@pmhub/pmds-common/src/assets",
  "output": "assets"
}
~~~

2 - In your component.ts, create the **resourcesPath** and in **initializeApp** method set it form  enviroment attribute **ENVIRONMENT_REQUEST_CONFIG.configDomain**:

~~~
...
resourcesPath!: string;
...

private initializeApp(env: any) {
    const { ENVIRONMENT_REQUEST_CONFIG } = env;
    this.resourcesPath = ENVIRONMENT_REQUEST_CONFIG.configDomain;
}
~~~

3 - For use it only add the path from the list in your src (set your asset folder)
<code><section class="flex items-center">'[src]="resourcesPath + 'ngAssets[APP_NAME]/img/flags/EU.svg'"'&nbsp;&nbsp;<img src="assets/img/flags/EU.svg" width="24px"></section></code>
				`,
			},
		},
	},
};

export const Docs = {
	render: () => ({
		props: {
			listFlags: (text: string) =>
				text
					? listFlags.filter(
							(flag) =>
								flag.country
									.toLowerCase()
									.includes(text.toLowerCase()) ||
								flag.flag
									.toLowerCase()
									.includes(text.toLowerCase())
					  )
					: listFlags,
			copy: (flag: string) => {
				return `resourcesPath + 'ngAssets[APP_NAME]/img/flags/${flag}.svg'`.trim();
			},
		},
		template: `
<section class="pb-4 flex flex-col mobile:relative text-color-text-primary">
	<input
		class="w-full p-3 border border-color-border-default rounded-md text-color-text-primary bg-color-background-default focus:border-color-border-focus outline-none transition-colors"
      	[placeholder]="'Search flags'"
	  	(input)="search = $any($event).target.value"
    />
</section>
<section class="grid grid-cols-3 mobile:grid-cols-2 text-color-text-primary">
@for (flag of listFlags(search); track flag.flag) {  
<section class="flex items-center py-2">
	<div class="mr-4 hover:underline">
		<img [src]="'assets/img/flags/' + flag.flag + '.svg'" width="24px">
	</div>
	<div>
		{{ flag.country }}
	</div>
	<pmds-cdk-copy-clipboard [textToCopy]="copy(flag.flag)"/>
</section>
}
</section>
@if (listFlags(search).length === 0) { 
<section class="w-full flex justify-center items-center text-color-text-primary">
	No results <span class="pmicons-close-bold text-3xl"></span>
</section>
}
		`,
	}),
};

const listFlags = [
	{ flag: 'AD', country: 'Andorra' },
	{ flag: 'AE', country: 'United Arab Emirates' },
	{ flag: 'AF', country: 'Afghanistan' },
	{ flag: 'AG', country: 'Antigua and Barbuda' },
	{ flag: 'AI', country: 'Anguilla' },
	{ flag: 'AL', country: 'Albania' },
	{ flag: 'AM', country: 'Armenia' },
	{ flag: 'AN', country: 'Nederlandse Antillen' },
	{ flag: 'AO', country: 'Angola' },
	{ flag: 'AQ', country: 'Antarctica' },
	{ flag: 'AR', country: 'Argentina' },
	{ flag: 'AS', country: 'American Samoa' },
	{ flag: 'AT', country: 'Austria' },
	{ flag: 'AU', country: 'Australia' },
	{ flag: 'AW', country: 'Aruba' },
	{ flag: 'AX', country: 'Aland Islands' },
	{ flag: 'AZ', country: 'Azerbaijan' },
	{ flag: 'BA', country: 'Bosnia and Herzegovina' },
	{ flag: 'BB', country: 'Barbados' },
	{ flag: 'BD', country: 'Bangladesh' },
	{ flag: 'BE', country: 'Belgium' },
	{ flag: 'BF', country: 'Burkina Faso' },
	{ flag: 'BG', country: 'Bulgaria' },
	{ flag: 'BH', country: 'Bahrain' },
	{ flag: 'BI', country: 'Burundi' },
	{ flag: 'BJ', country: 'Benin' },
	{ flag: 'BL', country: 'Saint Barthélemy' },
	{ flag: 'BM', country: 'Bermuda' },
	{ flag: 'BN', country: 'Brunei' },
	{ flag: 'BO', country: 'Bolivia' },
	{ flag: 'BQ', country: 'British Antarctic Territory' },
	{ flag: 'BR', country: 'Brazil' },
	{ flag: 'BS', country: 'Bahamas' },
	{ flag: 'BT', country: 'Bhutan' },
	{ flag: 'BV', country: 'Bouvet Island' },
	{ flag: 'BW', country: 'Botswana' },
	{ flag: 'BY', country: 'Belarus' },
	{ flag: 'BZ', country: 'Belize' },
	{ flag: 'CA', country: 'Canada' },
	{ flag: 'CC', country: 'Cocos [Keeling] Islands' },
	{ flag: 'CD', country: 'Congo - Kinshasa' },
	{ flag: 'CF', country: 'Central African Republic' },
	{ flag: 'CG', country: 'Congo - Brazzaville' },
	{ flag: 'CH', country: 'Switzerland' },
	{ flag: 'CI', country: 'Côte d,Ivoire' },
	{ flag: 'CK', country: 'Cook Islands' },
	{ flag: 'CL', country: 'Chile' },
	{ flag: 'CM', country: 'Cameroon' },
	{ flag: 'CN', country: 'China' },
	{ flag: 'CO', country: 'Colombia' },
	{ flag: 'CR', country: 'Costa Rica' },
	{ flag: 'CS', country: 'Serbia and Montenegro' },
	{ flag: 'CU', country: 'Cuba' },
	{ flag: 'CV', country: 'Cape Verde' },
	{ flag: 'CW', country: 'Curaçao' },
	{ flag: 'CX', country: 'Christmas Island' },
	{ flag: 'CY', country: 'Cyprus' },
	{ flag: 'CZ', country: 'Czech Republic' },
	{ flag: 'DE', country: 'Germany' },
	{ flag: 'DJ', country: 'Djibouti' },
	{ flag: 'DK', country: 'Denmark' },
	{ flag: 'DM', country: 'Dominica' },
	{ flag: 'DO', country: 'Dominican Republic' },
	{ flag: 'DZ', country: 'Algeria' },
	{ flag: 'Default', country: 'Default' },
	{ flag: 'EC', country: 'Ecuador' },
	{ flag: 'EE', country: 'Estonia' },
	{ flag: 'EG', country: 'Egypt' },
	{ flag: 'EH', country: 'Western Sahara' },
	{ flag: 'ER', country: 'Eritrea' },
	{ flag: 'ES', country: 'Spain' },
	{ flag: 'ET', country: 'Ethiopia' },
	{ flag: 'EU', country: 'Europe' },
	{ flag: 'FI', country: 'Finland' },
	{ flag: 'FJ', country: 'Fiji' },
	{ flag: 'FK', country: 'Falkland Islands' },
	{ flag: 'FM', country: 'Micronesia' },
	{ flag: 'FO', country: 'Faroe Islands' },
	{ flag: 'FR', country: 'France' },
	{ flag: 'GA', country: 'Gabon' },
	{ flag: 'GB', country: 'United Kingdom' },
	{ flag: 'GD', country: 'Grenada' },
	{ flag: 'GE', country: 'Georgia' },
	{ flag: 'GF', country: 'French Guiana' },
	{ flag: 'GG', country: 'Guernsey' },
	{ flag: 'GH', country: 'Ghana' },
	{ flag: 'GI', country: 'Gibraltar' },
	{ flag: 'GL', country: 'Greenland' },
	{ flag: 'GM', country: 'Gambia' },
	{ flag: 'GN', country: 'Guinea' },
	{ flag: 'GP', country: 'Guadeloupe' },
	{ flag: 'GQ', country: 'Equatorial Guinea' },
	{ flag: 'GR', country: 'Greece' },
	{ flag: 'GS', country: 'South Georgia and the South Sandwich Islands' },
	{ flag: 'GT', country: 'Guatemala' },
	{ flag: 'GU', country: 'Guam' },
	{ flag: 'GW', country: 'Guinea-Bissau' },
	{ flag: 'GY', country: 'Guyana' },
	{ flag: 'HK', country: 'Hong Kong SAR China' },
	{ flag: 'HM', country: 'Heard Island and McDonald Islands' },
	{ flag: 'HN', country: 'Honduras' },
	{ flag: 'HR', country: 'Croatia' },
	{ flag: 'HT', country: 'Haiti' },
	{ flag: 'HU', country: 'Hungary' },
	{ flag: 'ID', country: 'Indonesia' },
	{ flag: 'IE', country: 'Ireland' },
	{ flag: 'IL', country: 'Israel' },
	{ flag: 'IM', country: 'Isle of Man' },
	{ flag: 'IN', country: 'India' },
	{ flag: 'IO', country: 'British Indian Ocean Territory' },
	{ flag: 'IQ', country: 'Iraq' },
	{ flag: 'IR', country: 'Iran' },
	{ flag: 'IS', country: 'Iceland' },
	{ flag: 'IT', country: 'Italy' },
	{ flag: 'JE', country: 'Jersey' },
	{ flag: 'JM', country: 'Jamaica' },
	{ flag: 'JO', country: 'Jordan' },
	{ flag: 'JP', country: 'Japan' },
	{ flag: 'KE', country: 'Kenya' },
	{ flag: 'KG', country: 'Kyrgyzstan' },
	{ flag: 'KH', country: 'Cambodia' },
	{ flag: 'KI', country: 'Kiribati' },
	{ flag: 'KM', country: 'Comoros' },
	{ flag: 'KN', country: 'Saint Kitts and Nevis' },
	{ flag: 'KP', country: 'North Korea' },
	{ flag: 'KR', country: 'South Korea' },
	{ flag: 'KW', country: 'Kuwait' },
	{ flag: 'KY', country: 'Cayman Islands' },
	{ flag: 'KZ', country: 'Kazakhstan' },
	{ flag: 'LA', country: 'Laos' },
	{ flag: 'LB', country: 'Lebanon' },
	{ flag: 'LC', country: 'Saint Lucia' },
	{ flag: 'LI', country: 'Liechtenstein' },
	{ flag: 'LK', country: 'Sri Lanka' },
	{ flag: 'LR', country: 'Liberia' },
	{ flag: 'LS', country: 'Lesotho' },
	{ flag: 'LT', country: 'Lithuania' },
	{ flag: 'LU', country: 'Luxembourg' },
	{ flag: 'LV', country: 'Latvia' },
	{ flag: 'LY', country: 'Libya' },
	{ flag: 'MA', country: 'Morocco' },
	{ flag: 'MC', country: 'Monaco' },
	{ flag: 'MD', country: 'Moldova' },
	{ flag: 'ME', country: 'Montenegro' },
	{ flag: 'MF', country: 'Saint Martin' },
	{ flag: 'MG', country: 'Madagascar' },
	{ flag: 'MH', country: 'Marshall Islands' },
	{ flag: 'MK', country: 'Macedonia' },
	{ flag: 'ML', country: 'Mali' },
	{ flag: 'MM', country: 'Myanmar [Burma]' },
	{ flag: 'MN', country: 'Mongolia' },
	{ flag: 'MO', country: 'Macau SAR China' },
	{ flag: 'MP', country: 'Northern Mariana Islands' },
	{ flag: 'MQ', country: 'Martinique' },
	{ flag: 'MR', country: 'Mauritania' },
	{ flag: 'MS', country: 'Montserrat' },
	{ flag: 'MT', country: 'Malta' },
	{ flag: 'MU', country: 'Mauritius' },
	{ flag: 'MV', country: 'Maldives' },
	{ flag: 'MW', country: 'Malawi' },
	{ flag: 'MX', country: 'Mexico' },
	{ flag: 'MY', country: 'Malaysia' },
	{ flag: 'MZ', country: 'Mozambique' },
	{ flag: 'NA', country: 'Namibia' },
	{ flag: 'NC', country: 'New Caledonia' },
	{ flag: 'NE', country: 'Niger' },
	{ flag: 'NF', country: 'Norfolk Island' },
	{ flag: 'NG', country: 'Nigeria' },
	{ flag: 'NI', country: 'Nicaragua' },
	{ flag: 'NL', country: 'Netherlands' },
	{ flag: 'NO', country: 'Norway' },
	{ flag: 'NP', country: 'Nepal' },
	{ flag: 'NR', country: 'Nauru' },
	{ flag: 'NU', country: 'Niue' },
	{ flag: 'NZ', country: 'New Zealand' },
	{ flag: 'OM', country: 'Oman' },
	{ flag: 'PA', country: 'Panama' },
	{ flag: 'PE', country: 'Peru' },
	{ flag: 'PF', country: 'French Polynesia' },
	{ flag: 'PG', country: 'Papua New Guinea' },
	{ flag: 'PH', country: 'Philippines' },
	{ flag: 'PK', country: 'Pakistan' },
	{ flag: 'PL', country: 'Poland' },
	{ flag: 'PM', country: 'Saint Pierre and Miquelon' },
	{ flag: 'PN', country: 'Pitcairn Islands' },
	{ flag: 'PR', country: 'Puerto Rico' },
	{ flag: 'PS', country: 'Palestinian Territories' },
	{ flag: 'PT', country: 'Portugal' },
	{ flag: 'PW', country: 'Palau' },
	{ flag: 'PY', country: 'Paraguay' },
	{ flag: 'QA', country: 'Qatar' },
	{ flag: 'RE', country: 'Réunion' },
	{ flag: 'RO', country: 'Romania' },
	{ flag: 'RS', country: 'Serbia' },
	{ flag: 'RU', country: 'Russia' },
	{ flag: 'RW', country: 'Rwanda' },
	{ flag: 'SA', country: 'Saudi Arabia' },
	{ flag: 'SB', country: 'Solomon Islands' },
	{ flag: 'SC', country: 'Seychelles' },
	{ flag: 'SD', country: 'Sudan' },
	{ flag: 'SE', country: 'Sweden' },
	{ flag: 'SG', country: 'Singapore' },
	{ flag: 'SH', country: 'Saint Helena' },
	{ flag: 'SI', country: 'Slovenia' },
	{ flag: 'SJ', country: 'Svalbard and Jan Mayen' },
	{ flag: 'SK', country: 'Slovakia' },
	{ flag: 'SL', country: 'Sierra Leone' },
	{ flag: 'SM', country: 'San Marino' },
	{ flag: 'SN', country: 'Senegal' },
	{ flag: 'SO', country: 'Somalia' },
	{ flag: 'SR', country: 'Suriname' },
	{ flag: 'SS', country: 'South Sudan' },
	{ flag: 'ST', country: 'São Tomé and Príncipe' },
	{ flag: 'SV', country: 'El Salvador' },
	{ flag: 'SX', country: 'Sint Maarten' },
	{ flag: 'SY', country: 'Syria' },
	{ flag: 'SZ', country: 'Swaziland' },
	{ flag: 'TC', country: 'Turks and Caicos Islands' },
	{ flag: 'TD', country: 'Chad' },
	{ flag: 'TF', country: 'French Southern Territories' },
	{ flag: 'TG', country: 'Togo' },
	{ flag: 'TH', country: 'Thailand' },
	{ flag: 'TJ', country: 'Tajikistan' },
	{ flag: 'TK', country: 'Tokelau' },
	{ flag: 'TL', country: 'Timor-Leste' },
	{ flag: 'TM', country: 'Turkmenistan' },
	{ flag: 'TN', country: 'Tunisia' },
	{ flag: 'TO', country: 'Tonga' },
	{ flag: 'TR', country: 'Turkey' },
	{ flag: 'TT', country: 'Trinidad and Tobago' },
	{ flag: 'TV', country: 'Tuvalu' },
	{ flag: 'TW', country: 'Taiwan' },
	{ flag: 'TZ', country: 'Tanzania' },
	{ flag: 'UA', country: 'Ukraine' },
	{ flag: 'UG', country: 'Uganda' },
	{ flag: 'UM', country: 'U.S. Minor Outlying Islands' },
	{ flag: 'US', country: 'United States' },
	{ flag: 'UY', country: 'Uruguay' },
	{ flag: 'UZ', country: 'Uzbekistan' },
	{ flag: 'VA', country: 'Vatican City' },
	{ flag: 'VC', country: 'Saint Vincent and the Grenadines' },
	{ flag: 'VE', country: 'Venezuela' },
	{ flag: 'VG', country: 'British Virgin Islands' },
	{ flag: 'VI', country: 'U.S. Virgin Islands' },
	{ flag: 'VN', country: 'Vietnam' },
	{ flag: 'VU', country: 'Vanuatu' },
	{ flag: 'WF', country: 'Wallis and Futuna' },
	{ flag: 'WS', country: 'Samoa' },
	{ flag: 'XA', country: 'American Samoa' },
	{ flag: 'XK', country: 'Kosovo' },
	{ flag: 'XO', country: 'Autralia' },
	{ flag: 'XZ', country: 'New Zealand' },
	{ flag: 'YE', country: 'Yemen' },
	{ flag: 'YT', country: 'Mayotte' },
	{ flag: 'ZA', country: 'South Africa' },
	{ flag: 'ZM', country: 'Zambia' },
	{ flag: 'ZR', country: 'Congo' },
	{ flag: 'ZW', country: 'Zimbabwe' },
];
