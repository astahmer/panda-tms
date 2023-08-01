/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type NavbarVariant = {
  variant: "primary" | "secondary" | "tertiary" | "accent" | "info" | "danger" | "transparent"
}

type NavbarVariantMap = {
  [key in keyof NavbarVariant]: Array<NavbarVariant[key]>
}

export type NavbarVariantProps = {
  [key in keyof NavbarVariant]?: ConditionalValue<NavbarVariant[key]>
}

interface NavbarRecipe {
  __type: NavbarVariantProps
  (props?: NavbarVariantProps): string
  raw: (props?: NavbarVariantProps) => NavbarVariantProps
  variantMap: NavbarVariantMap
  variantKeys: Array<keyof NavbarVariant>
  splitVariantProps<Props extends NavbarVariantProps>(props: Props): [NavbarVariantProps, Pretty<Omit<Props, keyof NavbarVariantProps>>]
}

/** A navbar styles */
export declare const navbar: NavbarRecipe