/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type ToastVariant = {
  variant: "primary"
}

type ToastVariantMap = {
  [key in keyof ToastVariant]: Array<ToastVariant[key]>
}

export type ToastVariantProps = {
  [key in keyof ToastVariant]?: ConditionalValue<ToastVariant[key]>
}

interface ToastRecipe {
  __type: ToastVariantProps
  (props?: ToastVariantProps): string
  raw: (props?: ToastVariantProps) => ToastVariantProps
  variantMap: ToastVariantMap
  variantKeys: Array<keyof ToastVariant>
  splitVariantProps<Props extends ToastVariantProps>(props: Props): [ToastVariantProps, Pretty<Omit<Props, keyof ToastVariantProps>>]
}

/** A toast style */
export declare const toast: ToastRecipe