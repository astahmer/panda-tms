import { defineRecipe } from '@pandacss/dev';

const navbarRight = defineRecipe({
  name: 'navbarRight',
  description: 'A navbar mobile menu styles',
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginRight: '1rem'
  }
});

export { navbarRight };
