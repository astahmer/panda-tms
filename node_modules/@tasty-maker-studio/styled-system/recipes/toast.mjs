import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const toastFn = createRecipe('toast', {
  "variant": "primary"
}, [])

export const toast = Object.assign(toastFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "variant"
],
  variantMap: {
  "variant": [
    "primary"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "variant"
])
  },
})