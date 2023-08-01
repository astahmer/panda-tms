import { defineRecipe } from '@pandacss/dev';

export const navbar = defineRecipe({
  name: 'navbar',
  description: 'A navbar styles',
  base: {
    padding: '0.4rem 0',
    fontFamily: '"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
    width: 'full',
    display: 'flex',
    justifyContent: 'space-between',
    height: '25px',
    overflow: 'hidden'
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: 'primary.500'
        // suggested text color: 'primary.950'
      },
      secondary: {
        backgroundColor: 'secondary.500'
        // suggested text color: 'white'
      },
      tertiary: {
        backgroundColor: 'tertiary.500'
        // suggested text color: 'secondary.600'
      },
      accent: {
        backgroundColor: 'accent.500'
        // suggested text color: 'accent.50'
      },
      info: {
        backgroundColor: 'info.500'
        // suggested text color: 'accent.400'
      },
      danger: {
        backgroundColor: 'danger.500'
        // suggested text color: 'rose.300'
      },
      transparent: {
        backgroundColor: 'transparent'
        // suggested text color: 'black'
      }
    }
  }
});
