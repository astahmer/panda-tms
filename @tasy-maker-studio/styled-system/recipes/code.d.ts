/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type CodeVariant = {
  
}

type CodeVariantMap = {
  [key in keyof CodeVariant]: Array<CodeVariant[key]>
}

export type CodeVariantProps = {
  [key in keyof CodeVariant]?: ConditionalValue<CodeVariant[key]>
}

interface CodeRecipe {
  __type: CodeVariantProps
  (props?: CodeVariantProps): string
  raw: (props?: CodeVariantProps) => CodeVariantProps
  variantMap: CodeVariantMap
  variantKeys: Array<keyof CodeVariant>
  splitVariantProps<Props extends CodeVariantProps>(props: Props): [CodeVariantProps, Pretty<Omit<Props, keyof CodeVariantProps>>]
}

/** A code style */
export declare const code: CodeRecipe