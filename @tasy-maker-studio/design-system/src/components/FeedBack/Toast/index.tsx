'use client';

import {
  Toast,
  ToastCloseTrigger,
  ToastCloseTriggerProps,
  ToastDescription,
  ToastDescriptionProps,
  ToastGroup,
  ToastGroupProps,
  ToastPlacements,
  ToastPlacementsProps,
  ToastProps,
  ToastProvider,
  ToastProviderProps,
  ToastTitle,
  ToastTitleProps,
  toastAnatomy,
  useToast
} from '@ark-ui/react';
import {
  styled,
  type HTMLStyledProps
} from '@tasty-maker-studio/styled-system/jsx';
import {
  toast,
  type ToastVariantProps
} from '@tasty-maker-studio/styled-system/recipes';

const toastStyles = toast;

export type ToastPropsAll = ToastVariantProps &
  ToastProps &
  HTMLStyledProps<'div'>;

export const TmsToast = (props: ToastPropsAll) => {
  const { children, variant, ...rest } = props;
  return (
    <Toast className={toastStyles({ variant })} {...rest}>
      {children}
    </Toast>
  );
};

export {
  toastStyles,
  type ToastProps as TmsToastProps,
  ToastCloseTrigger as TmsToastCloseTrigger,
  type ToastCloseTriggerProps as TmsToastCloseTriggerProps,
  ToastDescription as TmsToastDescription,
  type ToastDescriptionProps as TmsToastDescriptionProps,
  ToastGroup as TmsToastGroup,
  type ToastGroupProps as TmsToastGroupProps,
  ToastPlacements as TmsToastPlacements,
  type ToastPlacementsProps as TmsToastPlacementsProps,
  ToastProvider as TmsToastProvider,
  useToast as useTmsToast,
  type ToastProviderProps as TmsToastProviderProps,
  ToastTitle as TmsToastTitle,
  type ToastTitleProps as TmsToastTitleProps,
  toastAnatomy as tmsToastAnatomy
};
