import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const popoverFn = createRecipe('popover', {}, [])

export const popover = Object.assign(popoverFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})