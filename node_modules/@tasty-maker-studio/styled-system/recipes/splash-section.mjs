import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const splashSectionFn = createRecipe('splashSection', {}, [])

export const splashSection = Object.assign(splashSectionFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})