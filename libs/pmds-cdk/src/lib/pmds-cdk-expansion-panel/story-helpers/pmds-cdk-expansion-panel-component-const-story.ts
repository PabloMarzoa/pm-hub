export const template = `
<section class="h-[600px]">
  <pmds-cdk-expansion-panel 
    [actions]="actions"
    [title]="title" 
    [tooltip]="tooltip" 
    [openByDefault]="openByDefault" 
    [skeleton]="skeleton" 
    [skeletonOpen]="skeletonOpen" 
    [dataQA]="dataQA">
      <div class="h-[500px] flex items-center justify-center p-3 border border-color-border-error text-color-text-error">
        Additional content 
      </div>
  </pmds-cdk-expansion-panel>
</section>`;

