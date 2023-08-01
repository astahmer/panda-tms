import { defineRecipe } from '@pandacss/dev';

const navbarMiddle = defineRecipe({
  name: 'navbarMiddle',
  description: 'A navbar middle styles',
  base: {
    hideBelow: 'xs',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
});

export { navbarMiddle };
