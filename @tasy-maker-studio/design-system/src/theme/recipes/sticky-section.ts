import { defineRecipe } from '@pandacss/dev';

const stickySection = defineRecipe({
  name: 'stickySection',
  description: 'Styles for the Sticky Section Component',
  base: {
    display: 'flex',
    flexDirection: 'column',
    top: '0',
    position: 'sticky'
  }
});

export { stickySection };
