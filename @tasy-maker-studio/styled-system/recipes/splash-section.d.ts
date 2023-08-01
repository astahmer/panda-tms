/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type SplashSectionVariant = {
  
}

type SplashSectionVariantMap = {
  [key in keyof SplashSectionVariant]: Array<SplashSectionVariant[key]>
}

export type SplashSectionVariantProps = {
  [key in keyof SplashSectionVariant]?: ConditionalValue<SplashSectionVariant[key]>
}

interface SplashSectionRecipe {
  __type: SplashSectionVariantProps
  (props?: SplashSectionVariantProps): string
  raw: (props?: SplashSectionVariantProps) => SplashSectionVariantProps
  variantMap: SplashSectionVariantMap
  variantKeys: Array<keyof SplashSectionVariant>
  splitVariantProps<Props extends SplashSectionVariantProps>(props: Props): [SplashSectionVariantProps, Pretty<Omit<Props, keyof SplashSectionVariantProps>>]
}

/** Styles for the Splash Section Component */
export declare const splashSection: SplashSectionRecipe