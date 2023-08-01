import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const navbarMobileMenuFn = createRecipe('navbarMobileMenu', {}, [])

export const navbarMobileMenu = Object.assign(navbarMobileMenuFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})