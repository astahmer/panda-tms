import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const drawerFn = createRecipe('drawer', {
  "variant": "right",
  "size": "sm"
}, [])

export const drawer = Object.assign(drawerFn, {
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