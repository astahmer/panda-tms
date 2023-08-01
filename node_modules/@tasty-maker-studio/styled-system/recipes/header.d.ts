/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type HeaderVariant = {
  type: "h1" | "h2" | "h3" | "h4"
}

type HeaderVariantMap = {
  [key in keyof HeaderVariant]: Array<HeaderVariant[key]>
}

export type HeaderVariantProps = {
  [key in keyof HeaderVariant]?: ConditionalValue<HeaderVariant[key]>
}

interface HeaderRecipe {
  __type: HeaderVariantProps
  (props?: HeaderVariantProps): string
  raw: (props?: HeaderVariantProps) => HeaderVariantProps
  variantMap: HeaderVariantMap
  variantKeys: Array<keyof HeaderVariant>
  splitVariantProps<Props extends HeaderVariantProps>(props: Props): [HeaderVariantProps, Pretty<Omit<Props, keyof HeaderVariantProps>>]
}

/** A header style for <h*> type Elements */
export declare const header: HeaderRecipe