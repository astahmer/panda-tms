/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type PopoverVariant = {
  
}

type PopoverVariantMap = {
  [key in keyof PopoverVariant]: Array<PopoverVariant[key]>
}

export type PopoverVariantProps = {
  [key in keyof PopoverVariant]?: ConditionalValue<PopoverVariant[key]>
}

interface PopoverRecipe {
  __type: PopoverVariantProps
  (props?: PopoverVariantProps): string
  raw: (props?: PopoverVariantProps) => PopoverVariantProps
  variantMap: PopoverVariantMap
  variantKeys: Array<keyof PopoverVariant>
  splitVariantProps<Props extends PopoverVariantProps>(props: Props): [PopoverVariantProps, Pretty<Omit<Props, keyof PopoverVariantProps>>]
}

/** A popover style */
export declare const popover: PopoverRecipe