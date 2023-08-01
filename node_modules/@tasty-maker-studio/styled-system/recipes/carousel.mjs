import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const carouselFn = createRecipe('carousel', {}, [])

export const carousel = Object.assign(carouselFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})