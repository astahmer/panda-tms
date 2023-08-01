import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const switchRecipeFn = createRecipe('switchRecipe', {}, [])

export const switchRecipe = Object.assign(switchRecipeFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})