import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const headerFn = createRecipe('header', {
  "type": "h1"
}, [])

export const header = Object.assign(headerFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "type"
],
  variantMap: {
  "type": [
    "h1",
    "h2",
    "h3",
    "h4"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "type"
])
  },
})