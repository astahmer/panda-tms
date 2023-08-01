/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type SliderVariant = {
  
}

type SliderVariantMap = {
  [key in keyof SliderVariant]: Array<SliderVariant[key]>
}

export type SliderVariantProps = {
  [key in keyof SliderVariant]?: ConditionalValue<SliderVariant[key]>
}

interface SliderRecipe {
  __type: SliderVariantProps
  (props?: SliderVariantProps): string
  raw: (props?: SliderVariantProps) => SliderVariantProps
  variantMap: SliderVariantMap
  variantKeys: Array<keyof SliderVariant>
  splitVariantProps<Props extends SliderVariantProps>(props: Props): [SliderVariantProps, Pretty<Omit<Props, keyof SliderVariantProps>>]
}

/** A slider style */
export declare const slider: SliderRecipe