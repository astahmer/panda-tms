/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type SwitchRecipeVariant = {
  
}

type SwitchRecipeVariantMap = {
  [key in keyof SwitchRecipeVariant]: Array<SwitchRecipeVariant[key]>
}

export type SwitchRecipeVariantProps = {
  [key in keyof SwitchRecipeVariant]?: ConditionalValue<SwitchRecipeVariant[key]>
}

interface SwitchRecipeRecipe {
  __type: SwitchRecipeVariantProps
  (props?: SwitchRecipeVariantProps): string
  raw: (props?: SwitchRecipeVariantProps) => SwitchRecipeVariantProps
  variantMap: SwitchRecipeVariantMap
  variantKeys: Array<keyof SwitchRecipeVariant>
  splitVariantProps<Props extends SwitchRecipeVariantProps>(props: Props): [SwitchRecipeVariantProps, Pretty<Omit<Props, keyof SwitchRecipeVariantProps>>]
}

/** A switch style */
export declare const switchRecipe: SwitchRecipeRecipe