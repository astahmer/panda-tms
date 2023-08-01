import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const badgeFn = createRecipe('badge', {}, [])

export const badge = Object.assign(badgeFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})