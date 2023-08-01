import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const menuFn = createRecipe('menu', {}, [])

export const menu = Object.assign(menuFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})