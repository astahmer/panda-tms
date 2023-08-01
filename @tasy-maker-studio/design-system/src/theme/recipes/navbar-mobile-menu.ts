import { defineRecipe } from '@pandacss/dev';

const navbarMobileMenu = defineRecipe({
  name: 'navbarMobileMenu',
  description: 'A navbar mobile menu styles',
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginLeft: '1rem',
    hideFrom: 'sm'
  }
});

export { navbarMobileMenu };
