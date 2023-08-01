/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type CheckboxVariant = {
  
}

type CheckboxVariantMap = {
  [key in keyof CheckboxVariant]: Array<CheckboxVariant[key]>
}

export type CheckboxVariantProps = {
  [key in keyof CheckboxVariant]?: ConditionalValue<CheckboxVariant[key]>
}

interface CheckboxRecipe {
  __type: CheckboxVariantProps
  (props?: CheckboxVariantProps): string
  raw: (props?: CheckboxVariantProps) => CheckboxVariantProps
  variantMap: CheckboxVariantMap
  variantKeys: Array<keyof CheckboxVariant>
  splitVariantProps<Props extends CheckboxVariantProps>(props: Props): [CheckboxVariantProps, Pretty<Omit<Props, keyof CheckboxVariantProps>>]
}

/** A checkbox style */
export declare const checkbox: CheckboxRecipe