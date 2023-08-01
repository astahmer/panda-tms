/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type RatingGroupVariant = {
  
}

type RatingGroupVariantMap = {
  [key in keyof RatingGroupVariant]: Array<RatingGroupVariant[key]>
}

export type RatingGroupVariantProps = {
  [key in keyof RatingGroupVariant]?: ConditionalValue<RatingGroupVariant[key]>
}

interface RatingGroupRecipe {
  __type: RatingGroupVariantProps
  (props?: RatingGroupVariantProps): string
  raw: (props?: RatingGroupVariantProps) => RatingGroupVariantProps
  variantMap: RatingGroupVariantMap
  variantKeys: Array<keyof RatingGroupVariant>
  splitVariantProps<Props extends RatingGroupVariantProps>(props: Props): [RatingGroupVariantProps, Pretty<Omit<Props, keyof RatingGroupVariantProps>>]
}

/** A rating group style */
export declare const ratingGroup: RatingGroupRecipe