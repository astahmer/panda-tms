/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type TextVariant = {
  size: "7xl" | "6xl" | "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs"
}

type TextVariantMap = {
  [key in keyof TextVariant]: Array<TextVariant[key]>
}

export type TextVariantProps = {
  [key in keyof TextVariant]?: ConditionalValue<TextVariant[key]>
}

interface TextRecipe {
  __type: TextVariantProps
  (props?: TextVariantProps): string
  raw: (props?: TextVariantProps) => TextVariantProps
  variantMap: TextVariantMap
  variantKeys: Array<keyof TextVariant>
  splitVariantProps<Props extends TextVariantProps>(props: Props): [TextVariantProps, Pretty<Omit<Props, keyof TextVariantProps>>]
}

/** A paragraph style Text Element */
export declare const text: TextRecipe