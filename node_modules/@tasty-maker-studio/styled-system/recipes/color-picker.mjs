import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const colorPickerFn = createRecipe('colorPicker', {}, [])

export const colorPicker = Object.assign(colorPickerFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [],
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, [])
  },
})