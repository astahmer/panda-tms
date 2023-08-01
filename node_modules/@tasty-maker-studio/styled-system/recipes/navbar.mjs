import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const navbarFn = createRecipe('navbar', {}, [])

export const navbar = Object.assign(navbarFn, {
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
    "danger",
    "transparent"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "variant"
])
  },
})