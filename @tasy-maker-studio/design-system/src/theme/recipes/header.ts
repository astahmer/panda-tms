import { defineRecipe } from '@pandacss/dev';

export const header: any = defineRecipe({
  name: 'header',
  description: 'A header style for <h*> type Elements',
  base: {},
  variants: {
    type: {
      h1: {
        display: 'block',
        fontSize: '2rem',
        marginTop: '0.67rem',
        marginBottom: '0.67rem',
        marginLeft: '0',
        marginRight: '0',
        fontWeight: 'bold'
      },
      h2: {
        display: 'block',
        fontSize: ' 1.5rem',
        marginTop: '0.83rem',
        marginBottom: '0.83rem',
        marginLeft: '0',
        marginRight: '0',
        fontWeight: 'bold'
      },
      h3: {
        display: 'block',
        fontSize: '1.7rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        marginLeft: '0',
        marginRight: '0',
        fontWeight: 'bold'
      },
      h4: {
        display: 'block',
        fontSize: '1rem',
        marginTop: '1.33rem',
        marginBottom: '1.33rem',
        marginLeft: '0',
        marginRight: '0',
        fontWeight: 'bold'
      }
    }
  },
  defaultVariants: {
    type: 'h1'
  }
});
