import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const dialogFn = createRecipe('dialog', {}, [])

export const dialog = Object.assign(dialogFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})