import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const paginationFn = createRecipe('pagination', {}, [])

export const pagination = Object.assign(paginationFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})