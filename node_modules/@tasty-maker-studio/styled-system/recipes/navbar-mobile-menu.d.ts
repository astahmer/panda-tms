/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type NavbarMobileMenuVariant = {
  
}

type NavbarMobileMenuVariantMap = {
  [key in keyof NavbarMobileMenuVariant]: Array<NavbarMobileMenuVariant[key]>
}

export type NavbarMobileMenuVariantProps = {
  [key in keyof NavbarMobileMenuVariant]?: ConditionalValue<NavbarMobileMenuVariant[key]>
}

interface NavbarMobileMenuRecipe {
  __type: NavbarMobileMenuVariantProps
  (props?: NavbarMobileMenuVariantProps): string
  raw: (props?: NavbarMobileMenuVariantProps) => NavbarMobileMenuVariantProps
  variantMap: NavbarMobileMenuVariantMap
  variantKeys: Array<keyof NavbarMobileMenuVariant>
  splitVariantProps<Props extends NavbarMobileMenuVariantProps>(props: Props): [NavbarMobileMenuVariantProps, Pretty<Omit<Props, keyof NavbarMobileMenuVariantProps>>]
}

/** A navbar mobile menu styles */
export declare const navbarMobileMenu: NavbarMobileMenuRecipe