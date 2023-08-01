/**
 * This is essentially the imports  of the Dialog component from @ark-ui/react
 */
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
  type DialogBackdropProps,
  type DialogCloseTriggerProps,
  type DialogContainerProps,
  type DialogContentProps,
  type DialogDescriptionProps,
  type DialogProps,
  type DialogTitleProps,
  type DialogTriggerProps
} from '@ark-ui/react';
/**
 * The following imports are the src/theme/recipes for the
 * Drawer component and LateralDrawer component
 */
import {
  drawer,
  lateralDrawer,
  type DrawerVariantProps,
  type LateralDrawerVariantProps
} from '@tasty-maker-studio/styled-system/recipes';

const drawerStyles = drawer;
const lateralDrawerStyles = lateralDrawer;
export {
  Dialog,
  DialogBackdrop,
  DialogTrigger,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogTitle,
  DialogDescription,
  //  DrawerPresence,
  Portal,
  drawerStyles,
  lateralDrawerStyles
};

export type {
  DialogProps,
  DialogBackdropProps,
  DialogTriggerProps,
  DialogCloseTriggerProps,
  DialogContainerProps,
  DialogContentProps,
  DialogTitleProps,
  //  DrawerPresencePropsType,
  DialogDescriptionProps,
  DrawerVariantProps,
  LateralDrawerVariantProps
};
