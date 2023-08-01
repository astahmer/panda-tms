import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const navbarRightFn = createRecipe('navbarRight', {}, [])

export const navbarRight = Object.assign(navbarRightFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})