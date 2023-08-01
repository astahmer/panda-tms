import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const dividerFn = createRecipe('divider', {}, [])

export const divider = Object.assign(dividerFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})