/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type AvatarVariant = {
  
}

type AvatarVariantMap = {
  [key in keyof AvatarVariant]: Array<AvatarVariant[key]>
}

export type AvatarVariantProps = {
  [key in keyof AvatarVariant]?: ConditionalValue<AvatarVariant[key]>
}

interface AvatarRecipe {
  __type: AvatarVariantProps
  (props?: AvatarVariantProps): string
  raw: (props?: AvatarVariantProps) => AvatarVariantProps
  variantMap: AvatarVariantMap
  variantKeys: Array<keyof AvatarVariant>
  splitVariantProps<Props extends AvatarVariantProps>(props: Props): [AvatarVariantProps, Pretty<Omit<Props, keyof AvatarVariantProps>>]
}

/** An avatar style */
export declare const avatar: AvatarRecipe