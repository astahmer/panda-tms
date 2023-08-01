import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const avatarFn = createRecipe('avatar', {}, [])

export const avatar = Object.assign(avatarFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})