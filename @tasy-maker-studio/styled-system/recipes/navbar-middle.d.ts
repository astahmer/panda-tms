/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type NavbarMiddleVariant = {
  
}

type NavbarMiddleVariantMap = {
  [key in keyof NavbarMiddleVariant]: Array<NavbarMiddleVariant[key]>
}

export type NavbarMiddleVariantProps = {
  [key in keyof NavbarMiddleVariant]?: ConditionalValue<NavbarMiddleVariant[key]>
}

interface NavbarMiddleRecipe {
  __type: NavbarMiddleVariantProps
  (props?: NavbarMiddleVariantProps): string
  raw: (props?: NavbarMiddleVariantProps) => NavbarMiddleVariantProps
  variantMap: NavbarMiddleVariantMap
  variantKeys: Array<keyof NavbarMiddleVariant>
  splitVariantProps<Props extends NavbarMiddleVariantProps>(props: Props): [NavbarMiddleVariantProps, Pretty<Omit<Props, keyof NavbarMiddleVariantProps>>]
}

/** A navbar middle styles */
export declare const navbarMiddle: NavbarMiddleRecipe