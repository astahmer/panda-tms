import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const selectFn = createRecipe('select', {
  "variant": "outline",
  "size": "md"
}, [])

export const select = Object.assign(selectFn, {
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
    "xs",
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