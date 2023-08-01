import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const ratingGroupFn = createRecipe('ratingGroup', {}, [])

export const ratingGroup = Object.assign(ratingGroupFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})