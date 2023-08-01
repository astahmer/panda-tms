/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type MarkdownVariant = {
  
}

type MarkdownVariantMap = {
  [key in keyof MarkdownVariant]: Array<MarkdownVariant[key]>
}

export type MarkdownVariantProps = {
  [key in keyof MarkdownVariant]?: ConditionalValue<MarkdownVariant[key]>
}

interface MarkdownRecipe {
  __type: MarkdownVariantProps
  (props?: MarkdownVariantProps): string
  raw: (props?: MarkdownVariantProps) => MarkdownVariantProps
  variantMap: MarkdownVariantMap
  variantKeys: Array<keyof MarkdownVariant>
  splitVariantProps<Props extends MarkdownVariantProps>(props: Props): [MarkdownVariantProps, Pretty<Omit<Props, keyof MarkdownVariantProps>>]
}

/** A recipe for markdown content */
export declare const markdown: MarkdownRecipe