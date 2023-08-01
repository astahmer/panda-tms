import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const textFn = createRecipe('text', {
  "size": "xl"
}, [])

export const text = Object.assign(textFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "size"
],
  variantMap: {
  "size": [
    "7xl",
    "6xl",
    "5xl",
    "4xl",
    "3xl",
    "2xl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "size"
])
  },
})