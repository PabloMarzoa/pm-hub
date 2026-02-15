export const componentInfo = `

Before use:<br><br>
<b>· Desktop:</b> The maximum number of shortcuts on desktop are six on the same row.<br>
<b>· Tablet:</b> The maximum number of shortcuts on tablet are also six, but if the screen is smaller, they will be displayed with an horizontal scroll.<br>
<b>· Mobile:</b> The maximum number of shortcuts on mobile are also six, but they will be displayed in rows of two shortcuts each.<br>

Import **PmdsCdkShortcutComponent** from **@pmhub/pmds-cdk**

~~~~
import { PmdsCdkShortcutComponent } from '../pmds-cdk-shortcut.component';
~~~~

Add to import array the **PmdsCdkShortcutComponent** in your component

~~~~
imports: [
	PmdsCdkShortcutComponent
]
~~~~

Selector: **pmds-cdk-shortcut**

~~~~
<pmds-cdk-shortcut>
</pmds-cdk-shortcut>
~~~~
`;
