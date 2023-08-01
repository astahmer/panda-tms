/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type DividerVariant = {
  
}

type DividerVariantMap = {
  [key in keyof DividerVariant]: Array<DividerVariant[key]>
}

export type DividerVariantProps = {
  [key in keyof DividerVariant]?: ConditionalValue<DividerVariant[key]>
}

interface DividerRecipe {
  __type: DividerVariantProps
  (props?: DividerVariantProps): string
  raw: (props?: DividerVariantProps) => DividerVariantProps
  variantMap: DividerVariantMap
  variantKeys: Array<keyof DividerVariant>
  splitVariantProps<Props extends DividerVariantProps>(props: Props): [DividerVariantProps, Pretty<Omit<Props, keyof DividerVariantProps>>]
}

/** A divider style */
export declare const divider: DividerRecipe