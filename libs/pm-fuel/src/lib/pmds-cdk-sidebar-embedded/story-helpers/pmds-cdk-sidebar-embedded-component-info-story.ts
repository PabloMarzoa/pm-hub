export const componentInfo = `

Import **PmdsCdkSidebarEmbeddedComponent** from **../../../index**

~~~~
import { PmdsCdkSidebarEmbeddedComponent } from '../pmds-cdk-sidebar-embedded.component';
~~~~

Add to import array the **PmdsCdkSidebarEmbeddedComponent** in your component

~~~~
imports: [
	PmdsCdkSidebarEmbeddedComponent
]
~~~~

Create a **sidebar-custom-content.component.ts**:

~~~~

@Component({
  selector: 'nxt-ui-sidebar-custom-content',
  standalone: true,
  imports: [],
  template: '
    // template here
  '
})
export class SidebarCustomContentComponent {
	...
}
~~~~

Selector: **pmds-cdk-sidebar-embedded**, add into tags the general content and put in **sidebarComponent** the custom component create for content into sidebar

~~~~
<pmds-cdk-sidebar-embedded
	[config]="config"
	[sidebarComponent]="SidebarCustomContentComponent" // <- SIDEBAR TEMPLATE
	>
	// <- GENERAL TEMPLATE
</pmds-cdk-sidebar-embedded>
~~~~
`;
