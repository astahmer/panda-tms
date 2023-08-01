/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type SelectVariant = {
  variant: "outline"
size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}

type SelectVariantMap = {
  [key in keyof SelectVariant]: Array<SelectVariant[key]>
}

export type SelectVariantProps = {
  [key in keyof SelectVariant]?: ConditionalValue<SelectVariant[key]>
}

interface SelectRecipe {
  __type: SelectVariantProps
  (props?: SelectVariantProps): string
  raw: (props?: SelectVariantProps) => SelectVariantProps
  variantMap: SelectVariantMap
  variantKeys: Array<keyof SelectVariant>
  splitVariantProps<Props extends SelectVariantProps>(props: Props): [SelectVariantProps, Pretty<Omit<Props, keyof SelectVariantProps>>]
}

/** A select style */
export declare const select: SelectRecipe