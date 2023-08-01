/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type NavbarLeftVariant = {
  
}

type NavbarLeftVariantMap = {
  [key in keyof NavbarLeftVariant]: Array<NavbarLeftVariant[key]>
}

export type NavbarLeftVariantProps = {
  [key in keyof NavbarLeftVariant]?: ConditionalValue<NavbarLeftVariant[key]>
}

interface NavbarLeftRecipe {
  __type: NavbarLeftVariantProps
  (props?: NavbarLeftVariantProps): string
  raw: (props?: NavbarLeftVariantProps) => NavbarLeftVariantProps
  variantMap: NavbarLeftVariantMap
  variantKeys: Array<keyof NavbarLeftVariant>
  splitVariantProps<Props extends NavbarLeftVariantProps>(props: Props): [NavbarLeftVariantProps, Pretty<Omit<Props, keyof NavbarLeftVariantProps>>]
}

/** A navbar left styles */
export declare const navbarLeft: NavbarLeftRecipe