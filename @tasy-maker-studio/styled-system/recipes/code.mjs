import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const codeFn = createRecipe('code', {}, [])

export const code = Object.assign(codeFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})