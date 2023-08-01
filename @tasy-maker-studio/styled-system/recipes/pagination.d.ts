/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type PaginationVariant = {
  
}

type PaginationVariantMap = {
  [key in keyof PaginationVariant]: Array<PaginationVariant[key]>
}

export type PaginationVariantProps = {
  [key in keyof PaginationVariant]?: ConditionalValue<PaginationVariant[key]>
}

interface PaginationRecipe {
  __type: PaginationVariantProps
  (props?: PaginationVariantProps): string
  raw: (props?: PaginationVariantProps) => PaginationVariantProps
  variantMap: PaginationVariantMap
  variantKeys: Array<keyof PaginationVariant>
  splitVariantProps<Props extends PaginationVariantProps>(props: Props): [PaginationVariantProps, Pretty<Omit<Props, keyof PaginationVariantProps>>]
}

/** A pagination style */
export declare const pagination: PaginationRecipe