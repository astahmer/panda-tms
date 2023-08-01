import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const lateralDrawerFn = createRecipe('lateralDrawer', {
  "variant": "right",
  "size": "sm"
}, [])

export const lateralDrawer = Object.assign(lateralDrawerFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "variant",
  "size"
],
  variantMap: {
  "variant": [
    "right",
    "left"
  ],
  "size": [
    "sm",
    "md",
    "full"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "variant",
  "size"
])
  },
})