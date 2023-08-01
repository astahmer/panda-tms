import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const segmentGroupFn = createRecipe('segmentGroup', {}, [])

export const segmentGroup = Object.assign(segmentGroupFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})