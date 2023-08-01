import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tabsFn = createRecipe('tabs', {}, [])

export const tabs = Object.assign(tabsFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "variant"
],
  variantMap: {
  "variant": [
    "fill"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "variant"
])
  },
})