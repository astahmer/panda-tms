import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const radioGroupFn = createRecipe('radioGroup', {}, [])

export const radioGroup = Object.assign(radioGroupFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})