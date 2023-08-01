/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type InputVariant = {
  variant: "outline"
size: "sm" | "md" | "lg" | "xl" | "2xl"
}

type InputVariantMap = {
  [key in keyof InputVariant]: Array<InputVariant[key]>
}

export type InputVariantProps = {
  [key in keyof InputVariant]?: ConditionalValue<InputVariant[key]>
}

interface InputRecipe {
  __type: InputVariantProps
  (props?: InputVariantProps): string
  raw: (props?: InputVariantProps) => InputVariantProps
  variantMap: InputVariantMap
  variantKeys: Array<keyof InputVariant>
  splitVariantProps<Props extends InputVariantProps>(props: Props): [InputVariantProps, Pretty<Omit<Props, keyof InputVariantProps>>]
}

/** An input style */
export declare const input: InputRecipe