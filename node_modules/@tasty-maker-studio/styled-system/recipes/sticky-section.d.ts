/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type StickySectionVariant = {
  
}

type StickySectionVariantMap = {
  [key in keyof StickySectionVariant]: Array<StickySectionVariant[key]>
}

export type StickySectionVariantProps = {
  [key in keyof StickySectionVariant]?: ConditionalValue<StickySectionVariant[key]>
}

interface StickySectionRecipe {
  __type: StickySectionVariantProps
  (props?: StickySectionVariantProps): string
  raw: (props?: StickySectionVariantProps) => StickySectionVariantProps
  variantMap: StickySectionVariantMap
  variantKeys: Array<keyof StickySectionVariant>
  splitVariantProps<Props extends StickySectionVariantProps>(props: Props): [StickySectionVariantProps, Pretty<Omit<Props, keyof StickySectionVariantProps>>]
}

/** Styles for the Sticky Section Component */
export declare const stickySection: StickySectionRecipe