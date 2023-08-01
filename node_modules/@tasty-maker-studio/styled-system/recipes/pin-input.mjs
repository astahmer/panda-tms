import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const pinInputFn = createRecipe('pinInput', {}, [])

export const pinInput = Object.assign(pinInputFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})