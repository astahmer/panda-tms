/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type NavbarRightVariant = {
  
}

type NavbarRightVariantMap = {
  [key in keyof NavbarRightVariant]: Array<NavbarRightVariant[key]>
}

export type NavbarRightVariantProps = {
  [key in keyof NavbarRightVariant]?: ConditionalValue<NavbarRightVariant[key]>
}

interface NavbarRightRecipe {
  __type: NavbarRightVariantProps
  (props?: NavbarRightVariantProps): string
  raw: (props?: NavbarRightVariantProps) => NavbarRightVariantProps
  variantMap: NavbarRightVariantMap
  variantKeys: Array<keyof NavbarRightVariant>
  splitVariantProps<Props extends NavbarRightVariantProps>(props: Props): [NavbarRightVariantProps, Pretty<Omit<Props, keyof NavbarRightVariantProps>>]
}

/** A navbar mobile menu styles */
export declare const navbarRight: NavbarRightRecipe