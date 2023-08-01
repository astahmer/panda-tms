import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const numberInputFn = createRecipe('numberInput', {}, [])

export const numberInput = Object.assign(numberInputFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})