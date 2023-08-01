import { defineRecipe } from '@pandacss/dev';

const navbarLeft = defineRecipe({
  name: 'navbarLeft',
  description: 'A navbar left styles',
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginLeft: '1rem'
    // TODO: breaking build
    // xsOnly: {
    //   textAlign: 'center'
    // }
  }
});

export { navbarLeft };
