import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const checkboxFn = createRecipe('checkbox', {}, [])

export const checkbox = Object.assign(checkboxFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})