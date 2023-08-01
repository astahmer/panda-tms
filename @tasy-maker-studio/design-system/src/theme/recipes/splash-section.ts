import { defineRecipe } from '@pandacss/dev';

const splashSection = defineRecipe({
  name: 'splashSection',
  description: 'Styles for the Splash Section Component',
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
});

export { splashSection };
