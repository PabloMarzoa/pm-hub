# pm-fuel

Unified library containing UI components, utilities, pipes, directives, and styles for Payment Hub applications.

[**Storybook Demo**](https://pablomarzoa.github.io/?path=/docs/introduction--docs)

## Installation

```bash
npm install pm-fuel
```

## Features

### UI Components
A comprehensive set of UI components:

#### Structural & Inputs
- **Buttons**: `PmdsCdkButtonComponent`, `PmdsCdkRadioButtonsComponent`
- **Inputs**: `PmdsCdkPhoneInputComponent`, `PmdsCdkCheckboxComponent`, `PmdsCdkTextComponent`
- **Navigation**: `PmdsCdkMenuAndSubmenuComponent`, `PmdsCdkSidebarEmbeddedComponent`

#### Data Display
- **Table**: `PmdsCdkTableComponent` - Feature-rich data tables.
- **Cards**: `PmdsCdkDynamicCardComponent`, `PmdsCdkCardsSelectorComponent`

#### Visualization (Graphs)
- `PmdsCdkGraphsLineChartComponent`
- `PmdsCdkGraphsSequentialBarChartComponent`
- `PmdsCdkGraphsPieChartComponent`

#### Utilities
- `PmdsCdkLoaderComponent`
- `PmdsCdkCopyClipboardComponent`

### Core & Common Utilities

#### Pipes
- `PmdsPipeAmountFormat`
- `PmdsPipeAccountFormat`
- `PmdsPipeDateTime`
- `PmdsPipeTruncateEllipsis`

#### Directives
- `PmdsDirectiveTooltip`
- `PmdsDirectiveNoLeadingSpacesInput`
- `PmdsDirectiveTitle`

#### Core Services
- **Validators**: `PmdsUtilValidators`
- **Storage**: `PmdsCoreStorageService`
- **Cache**: `PmdsCoreCacheService`

### Styles
Includes core design tokens:
- **Fonts**: `@use 'pm-fuel/src/lib/utils/pmds-util-styles/src/assets/styles/fonts.scss';`
- **Icons**: `@use 'pm-fuel/src/lib/utils/pmds-util-styles/src/assets/styles/icons.scss';`
- **Colors**: `@use 'pm-fuel/src/lib/utils/pmds-util-styles/src/assets/styles/pm-colors.scss';`

## Usage

import { PmdsCdkButtonComponent, PmdsPipeAmountFormat } from 'pm-fuel';

@Component({
  imports: [PmdsCdkButtonComponent, PmdsPipeAmountFormat],
  template: `
    <pmds-cdk-button label="Click Me" (buttonClick)="onClick()"></pmds-cdk-button>
    <p>{{ value | pmdsPipeAmountFormat }}</p>
  `
})
export class MyComponent {}
```
