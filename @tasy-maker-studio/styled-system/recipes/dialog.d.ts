/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type DialogVariant = {
  
}

type DialogVariantMap = {
  [key in keyof DialogVariant]: Array<DialogVariant[key]>
}

export type DialogVariantProps = {
  [key in keyof DialogVariant]?: ConditionalValue<DialogVariant[key]>
}

interface DialogRecipe {
  __type: DialogVariantProps
  (props?: DialogVariantProps): string
  raw: (props?: DialogVariantProps) => DialogVariantProps
  variantMap: DialogVariantMap
  variantKeys: Array<keyof DialogVariant>
  splitVariantProps<Props extends DialogVariantProps>(props: Props): [DialogVariantProps, Pretty<Omit<Props, keyof DialogVariantProps>>]
}

/** A dialog style */
export declare const dialog: DialogRecipe