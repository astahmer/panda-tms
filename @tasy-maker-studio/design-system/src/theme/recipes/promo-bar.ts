import { defineRecipe } from '@pandacss/dev';

const promoBar = defineRecipe({
  name: 'promoBar',
  description: 'A promo bar styles',
  base: {
    fontFamily: '"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: '13px',
    textAlign: 'center',
    height: '25px',
    width: 'full',
    lineHeight: '25px'
  },
  defaultVariants: {
    variant: 'primary'
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: 'primary.500',
        color: 'primary.950'
      },
      secondary: {
        backgroundColor: 'secondary.500',
        color: 'white'
      },
      tertiary: {
        backgroundColor: 'tertiary.500',
        color: 'secondary.600'
      },
      accent: {
        backgroundColor: 'accent.500',
        color: 'accent.50'
      },
      info: {
        backgroundColor: 'info.500',
        color: 'accent.400'
      },
      danger: {
        backgroundColor: 'danger.500',
        color: 'rose.300'
      }
    }
  }
});

export { promoBar };
