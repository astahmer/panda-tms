/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type SegmentGroupVariant = {
  
}

type SegmentGroupVariantMap = {
  [key in keyof SegmentGroupVariant]: Array<SegmentGroupVariant[key]>
}

export type SegmentGroupVariantProps = {
  [key in keyof SegmentGroupVariant]?: ConditionalValue<SegmentGroupVariant[key]>
}

interface SegmentGroupRecipe {
  __type: SegmentGroupVariantProps
  (props?: SegmentGroupVariantProps): string
  raw: (props?: SegmentGroupVariantProps) => SegmentGroupVariantProps
  variantMap: SegmentGroupVariantMap
  variantKeys: Array<keyof SegmentGroupVariant>
  splitVariantProps<Props extends SegmentGroupVariantProps>(props: Props): [SegmentGroupVariantProps, Pretty<Omit<Props, keyof SegmentGroupVariantProps>>]
}

/** A segment group style */
export declare const segmentGroup: SegmentGroupRecipe