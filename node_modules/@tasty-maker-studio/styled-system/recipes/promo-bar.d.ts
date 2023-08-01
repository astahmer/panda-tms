/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type PromoBarVariant = {
  variant: "primary" | "secondary" | "tertiary" | "accent" | "info" | "danger"
}

type PromoBarVariantMap = {
  [key in keyof PromoBarVariant]: Array<PromoBarVariant[key]>
}

export type PromoBarVariantProps = {
  [key in keyof PromoBarVariant]?: ConditionalValue<PromoBarVariant[key]>
}

interface PromoBarRecipe {
  __type: PromoBarVariantProps
  (props?: PromoBarVariantProps): string
  raw: (props?: PromoBarVariantProps) => PromoBarVariantProps
  variantMap: PromoBarVariantMap
  variantKeys: Array<keyof PromoBarVariant>
  splitVariantProps<Props extends PromoBarVariantProps>(props: Props): [PromoBarVariantProps, Pretty<Omit<Props, keyof PromoBarVariantProps>>]
}

/** A promo bar styles */
export declare const promoBar: PromoBarRecipe