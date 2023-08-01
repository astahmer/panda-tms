/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type TabsVariant = {
  variant: "fill"
}

type TabsVariantMap = {
  [key in keyof TabsVariant]: Array<TabsVariant[key]>
}

export type TabsVariantProps = {
  [key in keyof TabsVariant]?: ConditionalValue<TabsVariant[key]>
}

interface TabsRecipe {
  __type: TabsVariantProps
  (props?: TabsVariantProps): string
  raw: (props?: TabsVariantProps) => TabsVariantProps
  variantMap: TabsVariantMap
  variantKeys: Array<keyof TabsVariant>
  splitVariantProps<Props extends TabsVariantProps>(props: Props): [TabsVariantProps, Pretty<Omit<Props, keyof TabsVariantProps>>]
}

/** A tabs style */
export declare const tabs: TabsRecipe