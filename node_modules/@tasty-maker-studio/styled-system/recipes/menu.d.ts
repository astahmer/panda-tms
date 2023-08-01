/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type MenuVariant = {
  
}

type MenuVariantMap = {
  [key in keyof MenuVariant]: Array<MenuVariant[key]>
}

export type MenuVariantProps = {
  [key in keyof MenuVariant]?: ConditionalValue<MenuVariant[key]>
}

interface MenuRecipe {
  __type: MenuVariantProps
  (props?: MenuVariantProps): string
  raw: (props?: MenuVariantProps) => MenuVariantProps
  variantMap: MenuVariantMap
  variantKeys: Array<keyof MenuVariant>
  splitVariantProps<Props extends MenuVariantProps>(props: Props): [MenuVariantProps, Pretty<Omit<Props, keyof MenuVariantProps>>]
}

/** A menu style */
export declare const menu: MenuRecipe