import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const promoBarFn = createRecipe('promoBar', {
  "variant": "primary"
}, [])

export const promoBar = Object.assign(promoBarFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "variant"
],
  variantMap: {
  "variant": [
    "primary",
    "secondary",
    "tertiary",
    "accent",
    "info",
    "danger"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "variant"
])
  },
})