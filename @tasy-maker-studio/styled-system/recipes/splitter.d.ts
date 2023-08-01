/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type SplitterVariant = {
  
}

type SplitterVariantMap = {
  [key in keyof SplitterVariant]: Array<SplitterVariant[key]>
}

export type SplitterVariantProps = {
  [key in keyof SplitterVariant]?: ConditionalValue<SplitterVariant[key]>
}

interface SplitterRecipe {
  __type: SplitterVariantProps
  (props?: SplitterVariantProps): string
  raw: (props?: SplitterVariantProps) => SplitterVariantProps
  variantMap: SplitterVariantMap
  variantKeys: Array<keyof SplitterVariant>
  splitVariantProps<Props extends SplitterVariantProps>(props: Props): [SplitterVariantProps, Pretty<Omit<Props, keyof SplitterVariantProps>>]
}

/** A splitter style */
export declare const splitter: SplitterRecipe