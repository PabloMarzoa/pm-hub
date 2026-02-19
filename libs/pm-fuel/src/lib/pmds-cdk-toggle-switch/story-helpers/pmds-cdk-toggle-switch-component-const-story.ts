export const template = `
<form [formGroup]="exampleForm">
    <pmds-cdk-toggle-switch
        [dataQA]="dataQA"
        [size]="size"
        [isDisabled]="isDisabled"
        [label]="label"
        [compact]="compact"
        formControlName="switch"
    />
</form>
`;
