/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type CarouselVariant = {
  
}

type CarouselVariantMap = {
  [key in keyof CarouselVariant]: Array<CarouselVariant[key]>
}

export type CarouselVariantProps = {
  [key in keyof CarouselVariant]?: ConditionalValue<CarouselVariant[key]>
}

interface CarouselRecipe {
  __type: CarouselVariantProps
  (props?: CarouselVariantProps): string
  raw: (props?: CarouselVariantProps) => CarouselVariantProps
  variantMap: CarouselVariantMap
  variantKeys: Array<keyof CarouselVariant>
  splitVariantProps<Props extends CarouselVariantProps>(props: Props): [CarouselVariantProps, Pretty<Omit<Props, keyof CarouselVariantProps>>]
}

/** A carousel style */
export declare const carousel: CarouselRecipe