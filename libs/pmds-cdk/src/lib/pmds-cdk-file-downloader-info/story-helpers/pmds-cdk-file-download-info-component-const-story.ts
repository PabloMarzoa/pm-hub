export const template = `
<section class="h-[700px]">
  <pmds-cdk-file-downloader-info 
    [buttons]="buttons"
    [file]="file" 
    [errorIncluded]="errorIncluded" 
    [literals]="literals"
    [dataQA]="dataQA">
      <div class="h-[500px] flex items-center justify-center p-3 border border-color-border-error text-color-text-error">
        Additional content 
      </div>
  </pmds-cdk-file-downloader-info>
</section>`;

