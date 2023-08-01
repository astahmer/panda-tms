import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const linkFn = createRecipe('link', {}, [])

export const link = Object.assign(linkFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "variant"
],
  variantMap: {
  "variant": [
    "sidebar",
    "toc",
    "mdx"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "variant"
])
  },
})