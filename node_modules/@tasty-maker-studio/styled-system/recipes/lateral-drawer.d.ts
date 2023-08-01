/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type LateralDrawerVariant = {
  variant: "right" | "left"
size: "sm" | "md" | "full"
}

type LateralDrawerVariantMap = {
  [key in keyof LateralDrawerVariant]: Array<LateralDrawerVariant[key]>
}

export type LateralDrawerVariantProps = {
  [key in keyof LateralDrawerVariant]?: ConditionalValue<LateralDrawerVariant[key]>
}

interface LateralDrawerRecipe {
  __type: LateralDrawerVariantProps
  (props?: LateralDrawerVariantProps): string
  raw: (props?: LateralDrawerVariantProps) => LateralDrawerVariantProps
  variantMap: LateralDrawerVariantMap
  variantKeys: Array<keyof LateralDrawerVariant>
  splitVariantProps<Props extends LateralDrawerVariantProps>(props: Props): [LateralDrawerVariantProps, Pretty<Omit<Props, keyof LateralDrawerVariantProps>>]
}

/** A lateral drawl  style */
export declare const lateralDrawer: LateralDrawerRecipe