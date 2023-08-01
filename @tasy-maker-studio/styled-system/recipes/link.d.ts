/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type LinkVariant = {
  variant: "sidebar" | "toc" | "mdx"
}

type LinkVariantMap = {
  [key in keyof LinkVariant]: Array<LinkVariant[key]>
}

export type LinkVariantProps = {
  [key in keyof LinkVariant]?: ConditionalValue<LinkVariant[key]>
}

interface LinkRecipe {
  __type: LinkVariantProps
  (props?: LinkVariantProps): string
  raw: (props?: LinkVariantProps) => LinkVariantProps
  variantMap: LinkVariantMap
  variantKeys: Array<keyof LinkVariant>
  splitVariantProps<Props extends LinkVariantProps>(props: Props): [LinkVariantProps, Pretty<Omit<Props, keyof LinkVariantProps>>]
}

/** A link styles */
export declare const link: LinkRecipe