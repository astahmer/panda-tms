/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type TagsInputVariant = {
  
}

type TagsInputVariantMap = {
  [key in keyof TagsInputVariant]: Array<TagsInputVariant[key]>
}

export type TagsInputVariantProps = {
  [key in keyof TagsInputVariant]?: ConditionalValue<TagsInputVariant[key]>
}

interface TagsInputRecipe {
  __type: TagsInputVariantProps
  (props?: TagsInputVariantProps): string
  raw: (props?: TagsInputVariantProps) => TagsInputVariantProps
  variantMap: TagsInputVariantMap
  variantKeys: Array<keyof TagsInputVariant>
  splitVariantProps<Props extends TagsInputVariantProps>(props: Props): [TagsInputVariantProps, Pretty<Omit<Props, keyof TagsInputVariantProps>>]
}

/** A tags input style */
export declare const tagsInput: TagsInputRecipe