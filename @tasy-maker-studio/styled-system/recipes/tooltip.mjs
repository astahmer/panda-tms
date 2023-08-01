import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tooltipFn = createRecipe('tooltip', {}, [])

export const tooltip = Object.assign(tooltipFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})