export const template = `
<pmds-cdk-button
	label="Open fullscreen"
	(buttonClick)="showLoader=true"
/>
@if(showLoader) {
	<pmds-cdk-loader
		[isPrimary]="isPrimary"
		[title]="title"
		[subtitle]="subtitle"
		[bgClass]="bgClass"
		[embedBody]="embedBody"
		[dataQA]="dataQA"
		[isFullscreen]="isFullscreen"
		(click)="showLoader = false"
	/>
}
`;
