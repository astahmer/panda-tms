import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonFn = createRecipe('button', {
  "variant": "primary",
  "shape": "square"
}, [])

export const button = Object.assign(buttonFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "variant",
  "shape"
],
  variantMap: {
  "variant": [
    "primary",
    "secondary",
    "tertiary",
    "accent",
    "info",
    "danger",
    "link",
    "icon",
    "outline"
  ],
  "shape": [
    "rounded",
    "square"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "variant",
  "shape"
])
  },
})