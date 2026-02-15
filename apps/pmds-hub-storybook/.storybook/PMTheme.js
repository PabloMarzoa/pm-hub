// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';
import logoUrl from './assets/logo.png';

export default create({
  base: 'light',
  brandTitle: 'PMHub',
  brandImage: logoUrl,
  brandTarget: '_self',
  colorPrimary: '#3DC7AD',
  colorSecondary: '#3DC7AD',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#3DC7AD',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#3DC7AD',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});