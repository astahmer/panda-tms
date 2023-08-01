import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const markdownFn = createRecipe('markdown', {}, [])

export const markdown = Object.assign(markdownFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})