import { addons } from '@storybook/manager-api';
import PMTheme from './PMTheme';

addons.setConfig({
  theme: PMTheme,
  panelPosition: 'right',
  showPanel: true,
  toolbar: {
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true },
    grid: { hidden: true },

  },
});