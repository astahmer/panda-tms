/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type BadgeVariant = {
  
}

type BadgeVariantMap = {
  [key in keyof BadgeVariant]: Array<BadgeVariant[key]>
}

export type BadgeVariantProps = {
  [key in keyof BadgeVariant]?: ConditionalValue<BadgeVariant[key]>
}

interface BadgeRecipe {
  __type: BadgeVariantProps
  (props?: BadgeVariantProps): string
  raw: (props?: BadgeVariantProps) => BadgeVariantProps
  variantMap: BadgeVariantMap
  variantKeys: Array<keyof BadgeVariant>
  splitVariantProps<Props extends BadgeVariantProps>(props: Props): [BadgeVariantProps, Pretty<Omit<Props, keyof BadgeVariantProps>>]
}

/** A badge styles */
export declare const badge: BadgeRecipe