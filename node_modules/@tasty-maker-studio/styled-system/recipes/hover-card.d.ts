/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type HoverCardVariant = {
  
}

type HoverCardVariantMap = {
  [key in keyof HoverCardVariant]: Array<HoverCardVariant[key]>
}

export type HoverCardVariantProps = {
  [key in keyof HoverCardVariant]?: ConditionalValue<HoverCardVariant[key]>
}

interface HoverCardRecipe {
  __type: HoverCardVariantProps
  (props?: HoverCardVariantProps): string
  raw: (props?: HoverCardVariantProps) => HoverCardVariantProps
  variantMap: HoverCardVariantMap
  variantKeys: Array<keyof HoverCardVariant>
  splitVariantProps<Props extends HoverCardVariantProps>(props: Props): [HoverCardVariantProps, Pretty<Omit<Props, keyof HoverCardVariantProps>>]
}

/** A hover card style */
export declare const hoverCard: HoverCardRecipe