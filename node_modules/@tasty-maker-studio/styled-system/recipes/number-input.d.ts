/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type NumberInputVariant = {
  
}

type NumberInputVariantMap = {
  [key in keyof NumberInputVariant]: Array<NumberInputVariant[key]>
}

export type NumberInputVariantProps = {
  [key in keyof NumberInputVariant]?: ConditionalValue<NumberInputVariant[key]>
}

interface NumberInputRecipe {
  __type: NumberInputVariantProps
  (props?: NumberInputVariantProps): string
  raw: (props?: NumberInputVariantProps) => NumberInputVariantProps
  variantMap: NumberInputVariantMap
  variantKeys: Array<keyof NumberInputVariant>
  splitVariantProps<Props extends NumberInputVariantProps>(props: Props): [NumberInputVariantProps, Pretty<Omit<Props, keyof NumberInputVariantProps>>]
}

/** A number input style */
export declare const numberInput: NumberInputRecipe