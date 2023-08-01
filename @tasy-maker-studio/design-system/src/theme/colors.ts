import { defineTokens } from '@pandacss/dev';

export const colors = defineTokens.colors({
  current: { value: 'currentColor' },
  black: { value: '#000000' },
  white: { value: '#ffffff' },
  blackAlpha: {
    50: { value: 'rgba(0, 0, 0, 0.04)' },
    100: { value: 'rgba(0, 0, 0, 0.06)' },
    200: { value: 'rgba(0, 0, 0, 0.08)' },
    300: { value: 'rgba(0, 0, 0, 0.16)' },
    400: { value: 'rgba(0, 0, 0, 0.24)' },
    500: { value: 'rgba(0, 0, 0, 0.36)' },
    600: { value: 'rgba(0, 0, 0, 0.48)' },
    700: { value: 'rgba(0, 0, 0, 0.64)' },
    800: { value: 'rgba(0, 0, 0, 0.80)' },
    900: { value: 'rgba(0, 0, 0, 0.92)' }
  },
  whiteAlpha: {
    50: { value: 'rgba(255, 255, 255, 0.04)' },
    100: { value: 'rgba(255, 255, 255, 0.06)' },
    200: { value: 'rgba(255, 255, 255, 0.08)' },
    300: { value: 'rgba(255, 255, 255, 0.16)' },
    400: { value: 'rgba(255, 255, 255, 0.24)' },
    500: { value: 'rgba(255, 255, 255, 0.36)' },
    600: { value: 'rgba(255, 255, 255, 0.48)' },
    700: { value: 'rgba(255, 255, 255, 0.64)' },
    800: { value: 'rgba(255, 255, 255, 0.80)' },
    900: { value: 'rgba(255, 255, 255, 0.92)' }
  },
  primary: {
    50: { value: '#e4e8d6' },
    100: { value: '#dfe3ce' },
    200: { value: '#d9dec6' },
    300: { value: '#d4d9bd' },
    400: { value: '#ced5b5' },
    500: { value: '#c9d0ad' },
    600: { value: '#b5bb9c' },
    700: { value: '#a1a68a' },
    800: { value: '#8d9279' },
    900: { value: '#797d68' },
    950: { value: '#656857' }
  },
  secondary: {
    50: { value: '#e6cfbe' },
    100: { value: '#e1c5b1' },
    200: { value: '#dcbba4' },
    300: { value: '#d7b197' },
    400: { value: '#d2a88a' },
    500: { value: '#cd9e7d' },
    600: { value: '#b98e71' },
    700: { value: '#a47e64' },
    800: { value: '#906f58' },
    900: { value: '#7b5f4b' },
    950: { value: '#674f3f' }
  },
  tertiary: {
    50: { value: '#fff9ec' },
    100: { value: '#fff8e8' },
    200: { value: '#fff7e4' },
    300: { value: '#fff5e1' },
    400: { value: '#fff4dd' },
    500: { value: '#fff3d9' },
    600: { value: '#e6dbc3' },
    700: { value: '#ccc2ae' },
    800: { value: '#b3aa98' },
    900: { value: '#999282' },
    950: { value: '#807a6d' }
  },
  accent: {
    50: { value: '#a0a2a7' },
    100: { value: '#8c8f95' },
    200: { value: '#797c84' },
    300: { value: '#666972' },
    400: { value: '#535761' },
    500: { value: '#40444f' },
    600: { value: '#3a3d47' },
    700: { value: '#33363f' },
    800: { value: '#2d3037' },
    900: { value: '#26292f' },
    950: { value: '#202228' }
  },
  info: {
    50: { value: '#d6d9de' },
    100: { value: '#ced1d7' },
    200: { value: '#c6cad0' },
    300: { value: '#bdc2c9' },
    400: { value: '#b5bbc3' },
    500: { value: '#adb3bc' },
    600: { value: '#9ca1a9' },
    700: { value: '#8a8f96' },
    800: { value: '#797d84' },
    900: { value: '#686b71' },
    950: { value: '#575a5e' }
  },
  danger: {
    50: { value: '#c2a5ad' },
    100: { value: '#b6939d' },
    200: { value: '#aa818c' },
    300: { value: '#9d6f7c' },
    400: { value: '#915d6b' },
    500: { value: '#854b5b' },
    600: { value: '#784452' },
    700: { value: '#6a3c49' },
    800: { value: '#5d3540' },
    900: { value: '#502d37' },
    950: { value: '#43262e' }
  }
});
