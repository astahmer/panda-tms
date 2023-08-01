import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const stickySectionFn = createRecipe('stickySection', {}, [])

export const stickySection = Object.assign(stickySectionFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})