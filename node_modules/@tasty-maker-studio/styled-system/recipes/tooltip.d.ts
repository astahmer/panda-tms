/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type TooltipVariant = {
  
}

type TooltipVariantMap = {
  [key in keyof TooltipVariant]: Array<TooltipVariant[key]>
}

export type TooltipVariantProps = {
  [key in keyof TooltipVariant]?: ConditionalValue<TooltipVariant[key]>
}

interface TooltipRecipe {
  __type: TooltipVariantProps
  (props?: TooltipVariantProps): string
  raw: (props?: TooltipVariantProps) => TooltipVariantProps
  variantMap: TooltipVariantMap
  variantKeys: Array<keyof TooltipVariant>
  splitVariantProps<Props extends TooltipVariantProps>(props: Props): [TooltipVariantProps, Pretty<Omit<Props, keyof TooltipVariantProps>>]
}

/** A tooltip style */
export declare const tooltip: TooltipRecipe