/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type RadioVariant = {
  
}

type RadioVariantMap = {
  [key in keyof RadioVariant]: Array<RadioVariant[key]>
}

export type RadioVariantProps = {
  [key in keyof RadioVariant]?: ConditionalValue<RadioVariant[key]>
}

interface RadioRecipe {
  __type: RadioVariantProps
  (props?: RadioVariantProps): string
  raw: (props?: RadioVariantProps) => RadioVariantProps
  variantMap: RadioVariantMap
  variantKeys: Array<keyof RadioVariant>
  splitVariantProps<Props extends RadioVariantProps>(props: Props): [RadioVariantProps, Pretty<Omit<Props, keyof RadioVariantProps>>]
}

/** A radio style */
export declare const radio: RadioRecipe