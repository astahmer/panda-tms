import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const inputFn = createRecipe('input', {
  "variant": "outline",
  "size": "md"
}, [])

export const input = Object.assign(inputFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "variant",
  "size"
],
  variantMap: {
  "variant": [
    "outline"
  ],
  "size": [
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "variant",
  "size"
])
  },
})