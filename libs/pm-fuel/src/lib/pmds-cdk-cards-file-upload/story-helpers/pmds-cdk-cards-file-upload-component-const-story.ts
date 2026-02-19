export const template: string = `<pmds-cdk-cards-file-upload
[accept]="accept"
[dataQA]="dataQA"
[literals]="literals"
[multiFiles]="multiFiles"
[skeleton]="skeleton"
[disabledLoading]="disabledLoading"
[(state)]="state"
(fileSelected)="fileSelected($event)"
/>`