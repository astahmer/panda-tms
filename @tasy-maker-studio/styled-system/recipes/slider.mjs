import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const sliderFn = createRecipe('slider', {}, [])

export const slider = Object.assign(sliderFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})