////////Angular imports
import { FormGroupDirective, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
////////Third party libraries
import { moduleMetadata } from '@storybook/angular';
////////PPMDS libraries

import { PmdsCdkRadioButtonsComponent } from '../../../index';
import { PmdsCdkCopyClipboardComponent } from '../../../index';

export default {
	title: 'Foundations/Images',
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
			subtitle: 'How to use our images',
			source: {
				type: 'code',
			},
			description: {
				component: `
1 - Add in your **angular.json** in [your-project].architect.build.options.assets this code:

~~~
{
  "glob": "**/*",
  "input": "node_modules/../../../index/src/assets",
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
<code><section class="flex items-center">'[src]="resourcesPath + 'ngAssets[APP_NAME]/img/objects/empty-calculator.svg'"'&nbsp;&nbsp;<img src="assets/img/objects/empty-calculator.svg" width="24px"></section></code>

**TIP** we separate svg in categories (objects/characters/logos), if you need only category or only one svg, in your angular.json import only this:

~~~
{
	"glob": "**/*",
	"input": "node_modules/../../../index/src/assets/img/logos",
	"output": "assets/img/logos"
}
...
{
	"glob": "error-500.svg",
	"input": "node_modules/../../../index/src/assets/img/objects/",
	"output": "assets/img"
  }
~~~
			`,
			},
		},
	},
};

export const Docs = {
	render: () => ({
		props: {
			listImg: (text: string) =>
				text
					? [...characters, ...objects, ...logos, ...concepts].filter(
							(img) =>
								img.name
									.toLowerCase()
									.includes(text.toLowerCase())
					  )
					: [...characters, ...objects, ...logos, ...concepts],
			copy: (img: string) => {
				return `resourcesPath + 'ngAssets[APP_NAME]/img/${img}.svg'`.trim();
			},
		},
		template: `
<section class="pb-4 flex flex-col mobile:relative text-color-text-primary">
	<input
		class="w-full p-3 border border-color-border-default rounded-md text-color-text-primary bg-color-background-default focus:border-color-border-focus outline-none transition-colors"
      	[placeholder]="'Search image'"
	  	(input)="search = $any($event).target.value"
    />
</section>
<section class="grid grid-cols-3 mobile:grid-cols-2 text-color-text-primary">
@for (img of listImg(search); track img.name) {
	<section class="flex flex-col grow items-center py-2 px-4">
		<section class="h-32">
			<img class="p-4 h-full" [src]="'assets/img/' + img.path + '.svg'" [ngClass]="img.invertClass">
		</section>
		<div class="flex items-center">
			{{ img.name }}
			<pmds-cdk-copy-clipboard class="ml-1" [textToCopy]="copy(img.path)"/>
		</div>
	</section>
}
</section>
@if (listImg(search).length === 0) { 
<section class="w-full flex justify-center items-center text-color-text-primary">
	No results <span class="pmicons-close-bold text-3xl"></span>
</section>
}
		`,
	}),
};

const characters = [
	{ name: 'man sofa', path: 'characters/man-sofa' },
	{ name: 'man tablet', path: 'characters/man-tablet' },
	{ name: 'man think blue', path: 'characters/man-think-blue' },
	{ name: 'woman reading', path: 'characters/woman-reading' },
	{ name: 'woman sofa', path: 'characters/woman-sofa' },
	{ name: 'woman tablet', path: 'characters/woman-tablet' },
	{ name: 'woman think blue', path: 'characters/woman-think-blue' },
	{ name: 'woman think red', path: 'characters/woman-think-red' },
	{ name: 'call-center', path: 'characters/call-center-saas' },
	{ name: 'playing-golf', path: 'characters/playing-golf-saas' },
	{ name: 'working', path: 'characters/working-saas' },
	{ name: 'children', path: 'characters/children-saas' },
	{ name: 'couple', path: 'characters/couple-saas' },
];
const objects = [
	{ name: 'empty calculator', path: 'objects/empty-calculator' },
	{ name: 'empty computer', path: 'objects/empty-computer' },
	{ name: 'error 500', path: 'objects/error-500' },
	{ name: 'error 503', path: 'objects/error-503' },
	{ name: 'transaction', path: 'objects/transaction' },
	{ name: 'bars', path: 'objects/bars' },
	{ name: 'clipboard', path: 'objects/clipboard' },
	{ name: 'postal card', path: 'objects/postal-card' },
	{ name: 'transaction hands', path: 'objects/transaction-hands' },
	{ name: 'warning computer', path: 'objects/warning-computer' },
	{ name: 'glossary', path: 'objects/glossary' },
];

const logos = [
	{
		name: 'logo horizontal main desktop tablet',
		path: 'logos/horizontal-main-desktop-tablet',
	},
	{
		name: 'logo horizontal main mobile',
		path: 'logos/horizontal-main-mobile',
	},
	{
		name: 'logo horizontal mono desktop-tablet',
		path: 'logos/horizontal-mono-desktop-tablet',
	},
	{
		name: 'logo horizontal mono mobile',
		path: 'logos/horizontal-mono-mobile',
		invertClass: 'bg-color-text-primary',
	},
	{
		name: 'logo horizontal negative01 desktop tablet',
		path: 'logos/horizontal-negative01-desktop-tablet',
		invertClass: 'bg-color-text-primary',
	},
	{
		name: 'logo horizontal negative01 mobile',
		path: 'logos/horizontal-negative01-mobile',
		invertClass: 'bg-color-text-primary',
	},
	{
		name: 'logo horizontal negative02 desktop tablet',
		path: 'logos/horizontal-negative02-desktop-tablet',
		invertClass: 'bg-color-text-primary',
	},
	{
		name: 'logo horizontal negative02 mobile',
		path: 'logos/horizontal-negative02-mobile',
		invertClass: 'bg-color-text-primary',
	},
	{
		name: 'logo others alternative desktop tablet',
		path: 'logos/others-alternative-desktop-tablet',
	},
	{
		name: 'logo others powered desktop tablet',
		path: 'logos/others-powered-desktop-tablet',
		invertClass: 'bg-color-text-primary',
	},
	{
		name: 'logo vertical main desktop tablet',
		path: 'logos/vertical-main-desktop-tablet',
	},
	{
		name: 'logo vertical mono desktop tablet',
		path: 'logos/vertical-mono-desktop-tablet',
	},
	{
		name: 'logo vertical negative01 desktop tablet',
		path: 'logos/vertical-negative01-desktop-tablet',
		invertClass: 'bg-color-text-primary',
	},
	{
		name: 'logo vertical negative01 desktop tablet',
		path: 'logos/vertical-negative01-desktop-tablet',
		invertClass: 'bg-color-text-primary',
	},
	{
		name: 'logo saas invert',
		path: 'logos/logo-1-saas',
		invertClass: 'bg-color-text-primary',
	},
	{ name: 'logo saas', path: 'logos/logo-saas' },
];

const concepts = [
	{
		name: 'a health insurance for every family',
		path: 'concepts/a-health-insurance-for-every-family',
	},
	{ name: 'academy pm', path: 'concepts/academy-pm' },
	{ name: 'account activation', path: 'concepts/account-activation' },
	{ name: 'account companies', path: 'concepts/account-companies' },
	{
		name: 'account order in foreign currency',
		path: 'concepts/account-order-in-foreign-currency',
	},
	{ name: 'account', path: 'concepts/account' },
	{ name: 'account2', path: 'concepts/account2' },
	{
		name: 'accumulate advantages world 123',
		path: 'concepts/accumulate advantages world 123',
	},
	{ name: 'activity international', path: 'concepts/activity-international' },
	{ name: 'app pin', path: 'concepts/app-pin' },
	{ name: 'app pm', path: 'concepts/app-pm' },
	{ name: 'apply ifrru', path: 'concepts/apply-ifrru' },
	{ name: 'bank card', path: 'concepts/bank-card' },
	{ name: 'banking card', path: 'concepts/banking card' },
	{ name: 'bizum', path: 'concepts/bizum' },
	{ name: 'bolsas global', path: 'concepts/bolsas-global' },
	{
		name: 'bolsas ibero americanas',
		path: 'concepts/bolsas-ibero-americanas',
	},
	{ name: 'business expansion', path: 'concepts/business-expansion' },
	{ name: 'call center', path: 'concepts/call-center' },
	{ name: 'call code', path: 'concepts/call-code' },
	{ name: 'capitalize 2018', path: 'concepts/capitalize-2018' },
	{ name: 'capitalize more', path: 'concepts/capitalize-more' },
	{ name: 'capitalize', path: 'concepts/capitalize' },
	{ name: 'car in your name', path: 'concepts/car-in-your-name' },
	{ name: 'card u', path: 'concepts/card-u' },
	{ name: 'check food balance', path: 'concepts/check-food-balance' },
	{ name: 'checklist done', path: 'concepts/checklist-done' },
	{ name: 'children', path: 'concepts/children' },
	{ name: 'choose safe', path: 'concepts/choose-safe' },
	{ name: 'code access', path: 'concepts/code-access' },
	{ name: 'company card', path: 'concepts/company-card' },
	{ name: 'confetti', path: 'concepts/confetti' },
	{ name: 'confirm app pin', path: 'concepts/confirm-app-pin' },
	{ name: 'confirming', path: 'concepts/confirming' },
	{ name: 'congratulations', path: 'concepts/congratulations' },
	{ name: 'cooperative working', path: 'concepts/cooperative-working' },
	{ name: 'credit lines', path: 'concepts/credit-lines' },
	{ name: 'customer select', path: 'concepts/customer-select' },
	{ name: 'customer service 1', path: 'concepts/customer-service-1' },
	{ name: 'customer service 2', path: 'concepts/customer-service-2' },
	{
		name: 'decarbonized credit circular economy',
		path: 'concepts/decarbonized-credit-circular-economy',
	},
	{ name: 'design future', path: 'concepts/design-future' },
	{ name: 'device certification', path: 'concepts/device-certification' },
	{ name: 'device name', path: 'concepts/device-name' },
	{ name: 'digilosofia', path: 'concepts/digilosofia' },
	{ name: 'digitais solutions', path: 'concepts/digitais-solutions' },
	{ name: 'digital life', path: 'concepts/digital-life' },
	{ name: 'digital payments', path: 'concepts/digital-payments' },
	{ name: 'doing business', path: 'concepts/doing-business' },
	{ name: 'ebroker', path: 'concepts/ebroker' },
	{ name: 'emailing', path: 'concepts/emailing' },
	{ name: 'energy efficiency', path: 'concepts/energy-efficiency' },
	{ name: 'error 500', path: 'concepts/error-500' },
	{ name: 'error 503', path: 'concepts/error-503' },
	{ name: 'error call fail', path: 'concepts/error-call-fail' },
	{ name: 'error pin fail', path: 'concepts/error-pin-fail' },
	{ name: 'error time out', path: 'concepts/error-time-out' },
	{ name: 'error', path: 'concepts/error' },
	{ name: 'evaluating a home 01', path: 'concepts/evaluating-a-home-01' },
	{ name: 'evaluating a home 02', path: 'concepts/evaluating-a-home-02' },
	{ name: 'executive', path: 'concepts/executive' },
	{ name: 'face id', path: 'concepts/face-id' },
	{ name: 'factoring', path: 'concepts/factoring' },
	{
		name: 'flexible cash management',
		path: 'concepts/flexible-cash-management',
	},
	{ name: 'food card', path: 'concepts/food-card' },
	{ name: 'fpr another bank', path: 'concepts/fpr-another-bank' },
	{ name: 'geolocation', path: 'concepts/geolocation' },
	{ name: 'global', path: 'concepts/global' },
	{ name: 'glossary', path: 'concepts/glossary' },
	{ name: 'government society', path: 'concepts/government-society' },
	{ name: 'happy', path: 'concepts/happy' },
	{
		name: 'health insurance for your employees',
		path: 'concepts/health-insurance-for-your-employees',
	},
	{ name: 'health online doctor', path: 'concepts/health-online-doctor' },
	{ name: 'healthcare providers', path: 'concepts/healthcare-providers' },
	{ name: 'higher profitability', path: 'concepts/higher-profitability' },
	{ name: 'home management', path: 'concepts/home-management' },
	{ name: 'home safety', path: 'concepts/home-safety' },
	{ name: 'home success', path: 'concepts/home-success' },
	{ name: 'home', path: 'concepts/home' },
	{ name: 'house credit', path: 'concepts/house-credit' },
	{ name: 'ifrru support urban', path: 'concepts/ifrru-support-urban' },
	{ name: 'inbox', path: 'concepts/inbox' },
	{ name: 'insurance decision', path: 'concepts/insurance-decision' },
	{
		name: 'Insurance household services',
		path: 'concepts/Insurance-household-services',
	},
	{ name: 'internationalization', path: 'concepts/internationalization' },
	{ name: 'invest cohesion', path: 'concepts/invest-cohesion' },
	{ name: 'invest sem risco', path: 'concepts/invest-sem-risco' },
	{ name: 'jump', path: 'concepts/jump' },
	{ name: 'keys', path: 'concepts/keys' },
	{ name: 'less fpr risk', path: 'concepts/less-fpr-risk' },
	{ name: 'line support insurance', path: 'concepts/line-support-insurance' },
	{ name: 'long term rental', path: 'concepts/long-term-rental' },
	{ name: 'lower rate', path: 'concepts/lower-rate' },
	{ name: 'major rentability', path: 'concepts/major-rentability' },
	{ name: 'market bags', path: 'concepts/market-bags' },
	{ name: 'market information', path: 'concepts/market-information' },
	{ name: 'mbway payments', path: 'concepts/mbway-payments' },
	{ name: 'mbway', path: 'concepts/mbway' },
	{ name: 'mobile 1', path: 'concepts/mobile-1' },
	{ name: 'mobile access 1', path: 'concepts/mobile-access-1' },
	{ name: 'mobile access 2', path: 'concepts/mobile-access-2' },
	{ name: 'mobile access 3', path: 'concepts/mobile-access-3' },
	{ name: 'mobile access 4', path: 'concepts/mobile-access-4' },
	{ name: 'mobile banking app', path: 'concepts/mobile-banking-app' },
	{ name: 'mobile', path: 'concepts/mobile' },
	{ name: 'money loan', path: 'concepts/money-loan' },
	{ name: 'my aegon pm 1', path: 'concepts/my-aegon-pm-1' },
	{ name: 'my aegon pm', path: 'concepts/my-aegon-pm' },
	{ name: 'netbanco', path: 'concepts/netbanco' },
	{ name: 'netbank company', path: 'concepts/netbank-company' },
	{ name: 'new car', path: 'concepts/new-car' },
	{ name: 'new installations', path: 'concepts/new-installations' },
	{ name: 'no data', path: 'concepts/no-data' },
	{ name: 'notifications', path: 'concepts/notifications' },
	{ name: 'offer card advice', path: 'concepts/offer-card-advice' },
	{ name: 'online banking', path: 'concepts/online-banking' },
	{ name: 'online copia', path: 'concepts/online-copia' },
	{ name: 'online credit', path: 'concepts/online-credit' },
	{ name: 'online personal credit', path: 'concepts/online-personal-credit' },
	{ name: 'online shopping', path: 'concepts/online-shopping' },
	{ name: 'online', path: 'concepts/online' },
	{ name: 'open banking 1', path: 'concepts/open-banking-1' },
	{ name: 'open banking 3', path: 'concepts/open-banking-3' },
	{ name: 'open banking', path: 'concepts/open-banking' },
	{ name: 'pay mbway', path: 'concepts/pay-mbway' },
	{ name: 'payment companies', path: 'concepts/payment-companies' },
	{ name: 'payment methods', path: 'concepts/payment-methods' },
	{
		name: 'payment pm credit',
		path: 'concepts/payment-pm-credit',
	},
	{ name: 'payment suppliers', path: 'concepts/payment-suppliers' },
	{ name: 'pending tasks', path: 'concepts/pending-tasks' },
	{
		name: 'personal credit online 2',
		path: 'concepts/personal-credit-online-2',
	},
	{
		name: 'personal credit online 3',
		path: 'concepts/personal-credit-online-3',
	},
	{ name: 'photos', path: 'concepts/photos' },
	{ name: 'playing golf', path: 'concepts/playing-golf' },
	{ name: 'portal trade', path: 'concepts/portal-trade' },
	{ name: 'pos last generation', path: 'concepts/pos-last-generation' },
	{ name: 'pos regis', path: 'concepts/pos-regis' },
	{ name: 'preferences', path: 'concepts/preferences' },
	{ name: 'pressroom', path: 'concepts/pressroom' },
	{ name: 'profitable investment', path: 'concepts/profitable-investment' },
	{ name: 'protect car unforeseen', path: 'concepts/protect-car-unforeseen' },
	{ name: 'protocol credit lines', path: 'concepts/protocol-credit-lines' },
	{ name: 'pushing for study', path: 'concepts/pushing-for-study' },
	{
		name: 'receive send money abroad',
		path: 'concepts/receive-send-money-abroad',
	},
	{
		name: 'rede doctor future healthcare',
		path: 'concepts/rede-doctor-future-healthcare',
	},
	{ name: 'reduced spread', path: 'concepts/reduced-spread' },
	{ name: 'reform value', path: 'concepts/reform-value' },
	{ name: 'rentability', path: 'concepts/rentability' },
	{ name: 'replacement car', path: 'concepts/replacement-car' },
	{ name: 'running', path: 'concepts/running' },
	{ name: 'savings', path: 'concepts/savings' },
	{ name: 'security key', path: 'concepts/security-key' },
	{
		name: 'seguro vlife insuranceida',
		path: 'concepts/seguro-vlife insuranceida',
	},
	{ name: 'selfie', path: 'concepts/selfie' },
	{ name: 'send money app', path: 'concepts/send-money-app' },
	{ name: 'sibs api market', path: 'concepts/sibs-api-market' },
	{ name: 'simple credit', path: 'concepts/simple-credit' },
	{ name: 'sitting', path: 'concepts/sitting' },
	{ name: 'sms code', path: 'concepts/sms-code' },
	{ name: 'solar energy', path: 'concepts/solar-energy' },
	{
		name: 'special deposit foreign currency special deposit foreign currency',
		path: 'concepts/special-deposit-foreign-currency-special-deposit-foreign-currency',
	},
	{
		name: 'special line innovative companies',
		path: 'concepts/special-line-innovative-companies',
	},
	{ name: 'start with an account', path: 'concepts/start-with-an-account' },
	{ name: 'student A', path: 'concepts/student-A' },
	{ name: 'student B', path: 'concepts/student-B' },
	{ name: 'students', path: 'concepts/students' },
	{ name: 'success', path: 'concepts/success' },
	{ name: 'sustainable city', path: 'concepts/sustainable-city' },
	{ name: 'teleworking B', path: 'concepts/teleworking-B' },
	{ name: 'terms of service', path: 'concepts/terms-of-service' },
	{ name: 'tocuh id', path: 'concepts/tocuh-id' },
	{ name: 'trainee scholarship', path: 'concepts/trainee-scholarship' },
	{ name: 'training online', path: 'concepts/training-online' },
	{ name: 'transfer mbway', path: 'concepts/transfer-mbway' },
	{ name: 'transfers', path: 'concepts/transfers' },
	{ name: 'universia', path: 'concepts/universia' },
	{ name: 'various projects', path: 'concepts/various-projects' },
	{ name: 'web 1', path: 'concepts/web-1' },
	{ name: 'web 2', path: 'concepts/web-2' },
	{ name: 'web 3', path: 'concepts/web-3' },
	{ name: 'woman shopping', path: 'concepts/woman-shopping' },
	{ name: 'working', path: 'concepts/working' },
	{ name: 'world 123 advantages', path: 'concepts/world-123-advantages' },
	{ name: 'world 123', path: 'concepts/world-123' },
	{ name: 'world account 123', path: 'concepts/world-account-123' },
	{ name: 'world card 123', path: 'concepts/world-card-123' },
	{
		name: 'a health insurance for every family',
		path: 'concepts/a-health-insurance-for-every-family-saas',
	},
	{ name: 'academy pm', path: 'concepts/academy-pm-saas' },
	{ name: 'account activation', path: 'concepts/account-activation-saas' },
	{ name: 'account companies', path: 'concepts/account-companies-saas' },
	{
		name: 'account order in foreign currency',
		path: 'concepts/account-order-in-foreign-currency-saas',
	},
	{ name: 'account', path: 'concepts/account-saas' },
	{ name: 'account2', path: 'concepts/account2-saas' },
	{
		name: 'accumulate advantages world 123',
		path: 'concepts/accumulate-advantages-world-123-saas',
	},
	{
		name: 'activity international',
		path: 'concepts/activity-international-saas',
	},
	{ name: 'app pin', path: 'concepts/app-pin-saas' },
	{ name: 'app pm', path: 'concepts/app-pm-saas' },
	{ name: 'apply ifrru', path: 'concepts/apply-ifrru-saas' },
	{ name: 'bank card', path: 'concepts/bank-card-saas' },
	{ name: 'banking card', path: 'concepts/banking-card-saas' },
	{ name: 'bizum', path: 'concepts/bizum-saas' },
	{ name: 'bolsas global', path: 'concepts/bolsas-global-saas' },
	{
		name: 'bolsas ibero americanas',
		path: 'concepts/bolsas-ibero-americanas-saas',
	},
	{ name: 'call code', path: 'concepts/call-code-saas' },
	{ name: 'capitalize 2018', path: 'concepts/capitalize-2018-saas' },
	{ name: 'capitalize more', path: 'concepts/capitalize-more-saas' },
	{ name: 'capitalize', path: 'concepts/capitalize-saas' },
	{ name: 'car in your name', path: 'concepts/car-in-your-name-saas' },
	{ name: 'card world 123', path: 'concepts/card-world-123-saas' },
	{ name: 'card u', path: 'concepts/card-u-saas' },
	{ name: 'check food balance', path: 'concepts/check-food-balance-saas' },
	{ name: 'checklist done', path: 'concepts/checklist-done-saas' },
	{ name: 'choose safe', path: 'concepts/choose-safe-saas' },
	{ name: 'code access', path: 'concepts/code-access-saas' },
	{ name: 'company card', path: 'concepts/company-card-saas' },
	{ name: 'confetti', path: 'concepts/confetti-saas' },
	{ name: 'confirm app pin', path: 'concepts/confirm-app-pin-saas' },
	{ name: 'confirming', path: 'concepts/confirming-saas' },
	{ name: 'congratulations', path: 'concepts/congratulations-saas' },
	{ name: 'credit lines', path: 'concepts/credit-lines-saas' },
	{ name: 'customer service 1', path: 'concepts/customer-service-1-saas' },
	{ name: 'customer service 2', path: 'concepts/customer-service-2-saas' },
	{ name: 'customer select', path: 'concepts/customer-select-saas' },
	{
		name: 'decarbonized credit circular economy',
		path: 'concepts/decarbonized-credit-circular-economy-saas',
	},
	{ name: 'design future', path: 'concepts/design-future-saas' },
	{
		name: 'device certification',
		path: 'concepts/device-certification-saas',
	},
	{ name: 'device name', path: 'concepts/device-name-saas' },
	{ name: 'digilosofia', path: 'concepts/digilosofia-saas' },
	{ name: 'digitais solutions', path: 'concepts/digitais-solutions-saas' },
	{ name: 'digital payments', path: 'concepts/digital-payments-saas' },
	{ name: 'doing business', path: 'concepts/doing-business-saas' },
	{ name: 'ebroker', path: 'concepts/ebroker-saas' },
	{ name: 'emailing', path: 'concepts/emailing-saas' },
	{ name: 'energy efficiency', path: 'concepts/energy-efficiency-saas' },
	{ name: 'Error 500', path: 'concepts/Error-500-saas' },
	{ name: 'Error 503', path: 'concepts/Error-503-saas' },
	{ name: 'error call fail', path: 'concepts/error-call-fail-saas' },
	{ name: 'error pin fail', path: 'concepts/error-pin-fail-saas' },
	{ name: 'error time out', path: 'concepts/error-time-out-saas' },
	{ name: 'evaluating a home 3', path: 'concepts/evaluating-a-home-3-saas' },
	{ name: 'evaluating a home 4', path: 'concepts/evaluating-a-home-4-saas' },
	{ name: 'face id', path: 'concepts/face-id-saas' },
	{ name: 'factoring', path: 'concepts/factoring-saas' },
	{
		name: 'flexible cash management',
		path: 'concepts/flexible-cash-management-saas',
	},
	{ name: 'food card', path: 'concepts/food-card-saas' },
	{ name: 'fpr another bank', path: 'concepts/fpr-another-bank-saas' },
	{ name: 'geolocation', path: 'concepts/geolocation-saas' },
	{ name: 'global', path: 'concepts/global-saas' },
	{ name: 'glossary', path: 'concepts/glossary-saas' },
	{ name: 'government society', path: 'concepts/government-society-saas' },
	{ name: 'growth tourism', path: 'concepts/growth-tourism-saas' },
	{ name: 'happy', path: 'concepts/happy-saas' },
	{
		name: 'health insurance for your employees',
		path: 'concepts/health-insurance-for-your-employees-saas',
	},
	{
		name: 'health online doctor',
		path: 'concepts/health-online-doctor-saas',
	},
	{
		name: 'healthcare providers',
		path: 'concepts/healthcare-providers-saas',
	},
	{
		name: 'higher profitability',
		path: 'concepts/higher-profitability-saas',
	},
	{ name: 'home management', path: 'concepts/home-management-saas' },
	{ name: 'home safety', path: 'concepts/home-safety-saas' },
	{ name: 'home success', path: 'concepts/home-success-saas' },
	{ name: 'home', path: 'concepts/home-saas' },
	{ name: 'house credit', path: 'concepts/house-credit-saas' },
	{ name: 'ifrru support urban', path: 'concepts/ifrru-support-urban-saas' },
	{ name: 'inbox', path: 'concepts/inbox-saas' },
	{
		name: 'Insurance Household Services',
		path: 'concepts/Insurance-Household-Services-saas',
	},
	{ name: 'insurance decision', path: 'concepts/insurance-decision-saas' },
	{
		name: 'internationalization',
		path: 'concepts/internationalization-saas',
	},
	{ name: 'invest cohesion', path: 'concepts/invest-cohesion-saas' },
	{ name: 'invest sem risco', path: 'concepts/invest-sem-risco-saas' },
	{ name: 'keys', path: 'concepts/keys-saas' },
	{ name: 'less fpr risk', path: 'concepts/less-fpr-risk-saas' },
	{
		name: 'line support insurance',
		path: 'concepts/line-support-insurance-saas',
	},
	{ name: 'long term rental', path: 'concepts/long-term-rental-saas' },
	{ name: 'lower rate', path: 'concepts/lower-rate-saas' },
	{ name: 'major rentability', path: 'concepts/major-rentability-saas' },
	{ name: 'market bags', path: 'concepts/market-bags-saas' },
	{ name: 'market information', path: 'concepts/market-information-saas' },
	{ name: 'mbway payments', path: 'concepts/mbway-payments-saas' },
	{ name: 'mbway', path: 'concepts/mbway-saas' },
	{ name: 'mobile access1', path: 'concepts/mobile-access1-saas' },
	{ name: 'mobile access2', path: 'concepts/mobile-access2-saas' },
	{ name: 'mobile access3', path: 'concepts/mobile-access3-saas' },
	{ name: 'mobile access4', path: 'concepts/mobile-access4-saas' },
	{ name: 'mobile banking app', path: 'concepts/mobile-banking-app-saas' },
	{ name: 'mobile', path: 'concepts/mobile-saas' },
	{ name: 'mobile1', path: 'concepts/mobile1-saas' },
	{ name: 'money loan', path: 'concepts/money-loan-saas' },
	{ name: 'my aegon pm', path: 'concepts/my-aegon-pm-saas' },
	{ name: 'my aegon pm', path: 'concepts/my-aegon-pm-saas' },
	{ name: 'netbanco', path: 'concepts/netbanco-saas' },
	{ name: 'netbank company', path: 'concepts/netbank-company-saas' },
	{ name: 'new car', path: 'concepts/new-car-saas' },
	{ name: 'new installations', path: 'concepts/new-installations-saas' },
	{ name: 'no data', path: 'concepts/no-data-saas' },
	{ name: 'notifications', path: 'concepts/notifications-saas' },
	{ name: 'offer card advice', path: 'concepts/offer-card-advice-saas' },
	{ name: 'online banking', path: 'concepts/online-banking-saas' },
	{ name: 'online credit', path: 'concepts/online-credit-saas' },
	{
		name: 'online personal credit',
		path: 'concepts/online-personal-credit-saas',
	},
	{ name: 'online shopping', path: 'concepts/online-shopping-saas' },
	{ name: 'online 2', path: 'concepts/online-2-saas' },
	{ name: 'online', path: 'concepts/online-saas' },
	{ name: 'open banking 1', path: 'concepts/open-banking-1-saas' },
	{ name: 'open banking 3', path: 'concepts/open-banking-3-saas' },
	{ name: 'open banking', path: 'concepts/open-banking-saas' },
	{ name: 'Pay MBWay 2', path: 'concepts/Pay-MBWay-2-saas' },
	{ name: 'payment companies', path: 'concepts/payment-companies-saas' },
	{ name: 'payment methods', path: 'concepts/payment-methods-saas' },
	{
		name: 'payment pm credit',
		path: 'concepts/payment-pm-credit-saas',
	},
	{ name: 'payment suppliers', path: 'concepts/payment-suppliers-saas' },
	{ name: 'Pending tasks', path: 'concepts/Pending-tasks-saas' },
	{
		name: 'personal credit online2',
		path: 'concepts/personal-credit-online2-saas',
	},
	{
		name: 'personal credit online3',
		path: 'concepts/personal-credit-online3-saas',
	},
	{ name: 'photos', path: 'concepts/photos-saas' },
	{ name: 'portal trade', path: 'concepts/portal-trade-saas' },
	{ name: 'pos last generation', path: 'concepts/pos-last-generation-saas' },
	{ name: 'pos regis', path: 'concepts/pos-regis-saas' },
	{ name: 'preferences', path: 'concepts/preferences-saas' },
	{ name: 'pressroom', path: 'concepts/pressroom-saas' },
	{
		name: 'profitable investment',
		path: 'concepts/profitable-investment-saas',
	},
	{
		name: 'protect car unforeseen',
		path: 'concepts/protect-car-unforeseen-saas',
	},
	{
		name: 'protocol credit lines',
		path: 'concepts/protocol-credit-lines-saas',
	},
	{ name: 'pushing new car', path: 'concepts/pushing-new-car-saas' },
	{ name: 'pushing for study', path: 'concepts/pushing-for-study-saas' },
	{
		name: 'receive send money abroad',
		path: 'concepts/receive-send-money-abroad-saas',
	},
	{
		name: 'rede doctor future healthcare',
		path: 'concepts/rede-doctor-future-healthcare-saas',
	},
	{ name: 'reduced spread', path: 'concepts/reduced-spread-saas' },
	{ name: 'reform value', path: 'concepts/reform-value-saas' },
	{ name: 'rentability', path: 'concepts/rentability-saas' },
	{ name: 'replacement car', path: 'concepts/replacement-car-saas' },
	{ name: 'savings', path: 'concepts/savings-saas' },
	{ name: 'security key', path: 'concepts/security-key-saas' },
	{
		name: 'seguro vlife insuranceida',
		path: 'concepts/seguro-vlife-insuranceida-saas',
	},
	{ name: 'selfie A (female)', path: 'concepts/selfie-A-(female)-saas' },
	{ name: 'send money app', path: 'concepts/send-money-app-saas' },
	{ name: 'sibs api market', path: 'concepts/sibs-api-market-saas' },
	{ name: 'sms code', path: 'concepts/sms-code-saas' },
	{ name: 'solar energy', path: 'concepts/solar-energy-saas' },
	{
		name: 'special deposit foreign currency special deposit foreign currency',
		path: 'concepts/special-deposit-foreign-currency-special-deposit-foreign-currency-saas',
	},
	{
		name: 'special line innovative companies',
		path: 'concepts/special-line-innovative-companies-saas',
	},
	{
		name: 'start with an account',
		path: 'concepts/start-with-an-account-saas',
	},
	{ name: 'students', path: 'concepts/students-saas' },
	{ name: 'sustainable city', path: 'concepts/sustainable-city-saas' },
	{
		name: 'sustainable investment',
		path: 'concepts/sustainable-investment-saas',
	},
	{ name: 'teleworking B', path: 'concepts/teleworking-B-saas' },
	{ name: 'terms of service', path: 'concepts/terms-of-service-saas' },
	{ name: 'tocuh id', path: 'concepts/tocuh-id-saas' },
	{ name: 'trainee scholarship', path: 'concepts/trainee-scholarship-saas' },
	{ name: 'training online', path: 'concepts/training-online-saas' },
	{ name: 'transfer mbway', path: 'concepts/transfer-mbway-saas' },
	{ name: 'Transfers', path: 'concepts/Transfers-saas' },
	{ name: 'universia', path: 'concepts/universia-saas' },
	{ name: 'various projects', path: 'concepts/various-projects-saas' },
	{ name: 'web1', path: 'concepts/web1-saas' },
	{ name: 'web2', path: 'concepts/web2-saas' },
	{ name: 'web3', path: 'concepts/web3-saas' },
	{ name: 'woman shopping', path: 'concepts/woman-shopping-saas' },
	{
		name: 'world 123 advantages',
		path: 'concepts/world-123-advantages-saas',
	},
	{ name: 'world account 123', path: 'concepts/world-account-123-saas' },
	{ name: 'world card 123', path: 'concepts/world-card-123-saas' },
];
