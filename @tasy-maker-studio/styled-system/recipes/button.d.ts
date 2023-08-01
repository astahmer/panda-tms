/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type ButtonVariant = {
  variant: "primary" | "secondary" | "tertiary" | "accent" | "info" | "danger" | "link" | "icon" | "outline"
shape: "rounded" | "square"
}

type ButtonVariantMap = {
  [key in keyof ButtonVariant]: Array<ButtonVariant[key]>
}

export type ButtonVariantProps = {
  [key in keyof ButtonVariant]?: ConditionalValue<ButtonVariant[key]>
}

interface ButtonRecipe {
  __type: ButtonVariantProps
  (props?: ButtonVariantProps): string
  raw: (props?: ButtonVariantProps) => ButtonVariantProps
  variantMap: ButtonVariantMap
  variantKeys: Array<keyof ButtonVariant>
  splitVariantProps<Props extends ButtonVariantProps>(props: Props): [ButtonVariantProps, Pretty<Omit<Props, keyof ButtonVariantProps>>]
}

/** A button styles */
export declare const button: ButtonRecipe