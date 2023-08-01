/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type RadioGroupVariant = {
  
}

type RadioGroupVariantMap = {
  [key in keyof RadioGroupVariant]: Array<RadioGroupVariant[key]>
}

export type RadioGroupVariantProps = {
  [key in keyof RadioGroupVariant]?: ConditionalValue<RadioGroupVariant[key]>
}

interface RadioGroupRecipe {
  __type: RadioGroupVariantProps
  (props?: RadioGroupVariantProps): string
  raw: (props?: RadioGroupVariantProps) => RadioGroupVariantProps
  variantMap: RadioGroupVariantMap
  variantKeys: Array<keyof RadioGroupVariant>
  splitVariantProps<Props extends RadioGroupVariantProps>(props: Props): [RadioGroupVariantProps, Pretty<Omit<Props, keyof RadioGroupVariantProps>>]
}

/** A radio group style */
export declare const radioGroup: RadioGroupRecipe