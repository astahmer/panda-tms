import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tagsInputFn = createRecipe('tagsInput', {}, [])

export const tagsInput = Object.assign(tagsInputFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})