import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const radioFn = createRecipe('radio', {}, [])

export const radio = Object.assign(radioFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})