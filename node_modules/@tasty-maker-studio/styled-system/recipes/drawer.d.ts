/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type DrawerVariant = {
  variant: "right" | "left"
size: "sm" | "md" | "full"
}

type DrawerVariantMap = {
  [key in keyof DrawerVariant]: Array<DrawerVariant[key]>
}

export type DrawerVariantProps = {
  [key in keyof DrawerVariant]?: ConditionalValue<DrawerVariant[key]>
}

interface DrawerRecipe {
  __type: DrawerVariantProps
  (props?: DrawerVariantProps): string
  raw: (props?: DrawerVariantProps) => DrawerVariantProps
  variantMap: DrawerVariantMap
  variantKeys: Array<keyof DrawerVariant>
  splitVariantProps<Props extends DrawerVariantProps>(props: Props): [DrawerVariantProps, Pretty<Omit<Props, keyof DrawerVariantProps>>]
}

/** A drawer style */
export declare const drawer: DrawerRecipe