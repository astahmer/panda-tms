import { defineRecipe } from '@pandacss/dev';

import { textStyles } from '../text-styles';

export const text = defineRecipe({
  name: 'text',
  description: 'A paragraph style Text Element',
  // base: {
  //    fontStyle:'none'
  // },
  variants: {
    size: {
      '7xl': {
        ...textStyles['7xl'].value
      },
      '6xl': {
        ...textStyles['6xl'].value
      },
      '5xl': {
        ...textStyles['5xl'].value
      },
      '4xl': {
        ...textStyles['4xl'].value
      },
      '3xl': {
        ...textStyles['3xl'].value
      },
      '2xl': {
        ...textStyles['2xl'].value
      },
      xl: {
        ...textStyles.xl.value
      },
      lg: {
        ...textStyles.lg.value
      },
      md: {
        ...textStyles.md.value
      },
      sm: {
        ...textStyles.sm.value
      },
      xs: {
        ...textStyles.xs.value
      }
    }
  },
  defaultVariants: {
    size: 'xl'
  }
});
