import { definePreset } from '@pandacss/dev';
import type { Preset } from '@pandacss/types';

import { recipes } from './recipes';
import { textStyles } from './text-styles';
import { tokens } from './tokens';

const tmsPandaPreset = definePreset({
  theme: {
    extend: {
      recipes,
      textStyles,
      tokens,
      breakpoints: {
        xss: '320px',
        xs: '480px'
      },
      keyframes: {
        slideLeftIn: {
          '0%': { right: '-100%' },
          '100%': { right: '0' }
        },
        slideRightOut: {
          '0%': { right: '0' },
          '100%': { right: '-100%' }
        },
        slideRightIn: {
          '0%': { left: '-100%' },
          '100%': { left: '0' }
        },
        slideLeftOut: {
          '0%': { left: '0' },
          '100%': { left: '-100%' }
        }
      }
    }
  }
}) as Preset;

export { tmsPandaPreset };
