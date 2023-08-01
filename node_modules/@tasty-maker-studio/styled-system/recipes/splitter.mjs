import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const splitterFn = createRecipe('splitter', {}, [])

export const splitter = Object.assign(splitterFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})