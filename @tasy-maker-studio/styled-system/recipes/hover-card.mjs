import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const hoverCardFn = createRecipe('hoverCard', {}, [])

export const hoverCard = Object.assign(hoverCardFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})