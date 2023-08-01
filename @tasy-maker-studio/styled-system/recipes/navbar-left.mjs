import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const navbarLeftFn = createRecipe('navbarLeft', {}, [])

export const navbarLeft = Object.assign(navbarLeftFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})