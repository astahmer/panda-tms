import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const navbarMiddleFn = createRecipe('navbarMiddle', {}, [])

export const navbarMiddle = Object.assign(navbarMiddleFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})