/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type ColorPickerVariant = {
  
}

type ColorPickerVariantMap = {
  [key in keyof ColorPickerVariant]: Array<ColorPickerVariant[key]>
}

export type ColorPickerVariantProps = {
  [key in keyof ColorPickerVariant]?: ConditionalValue<ColorPickerVariant[key]>
}

interface ColorPickerRecipe {
  __type: ColorPickerVariantProps
  (props?: ColorPickerVariantProps): string
  raw: (props?: ColorPickerVariantProps) => ColorPickerVariantProps
  variantMap: ColorPickerVariantMap
  variantKeys: Array<keyof ColorPickerVariant>
  splitVariantProps<Props extends ColorPickerVariantProps>(props: Props): [ColorPickerVariantProps, Pretty<Omit<Props, keyof ColorPickerVariantProps>>]
}

/** A color picker style */
export declare const colorPicker: ColorPickerRecipe