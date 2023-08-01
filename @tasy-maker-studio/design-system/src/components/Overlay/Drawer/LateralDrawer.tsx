'use client';

import { VStack } from '@tasty-maker-studio/styled-system/jsx';

import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogProps,
  DialogTitle,
  LateralDrawerVariantProps,
  Portal,
  lateralDrawerStyles
} from './DialogParts';

//Combine the props of the Dialog component with the props of the LateralDrawerVariantProps recipe
type LateralDrawerPropsType = DialogProps &
  LateralDrawerVariantProps & {
    /** main body content of the drawer */
    children?: React.ReactNode;
    /** side of the screen  the drawer will appear*/
    variant?: 'left' | 'right';
    /** size of the drawer */
    size?: 'sm' | 'md' | 'lg' | 'full';
    /** icon, text,  or Typography Component  to be used as the close button */
    closeIcon?: React.ReactNode | string;
    /** text or Typography Component  as the header of the drawer */
    headerText?: React.ReactNode | string;
    /** text Typography Component  as the description of the drawer */
    descriptionText?: React.ReactNode | string;
    /** boolean to control the open state of the drawer */
    isOpen: boolean;
    /** function to update the open state of the drawer */
    updateIsOpen: (value: boolean) => void;
  };
/**
 * Lateral Drawer component that slides in from the left or right side of the screen.
 * @param props: LateralDrawerPropsType  The props of the LateralDrawer component
 */
const LateralDrawer = (props: LateralDrawerPropsType) => {
  const {
    children,
    variant = 'left',
    size = 'sm',
    closeIcon,
    headerText,
    descriptionText,
    isOpen = false,
    updateIsOpen
  } = props;

  return (
    <Dialog open={isOpen} onClose={() => updateIsOpen(false)}>
      <Portal>
        <DialogBackdrop className={lateralDrawerStyles({ variant, size })} />
        <DialogContainer className={lateralDrawerStyles({ variant, size })}>
          <DialogContent>
            {closeIcon && (
              <DialogCloseTrigger asChild>{closeIcon}</DialogCloseTrigger>
            )}
            <VStack position={'relative'} h={'100%'} gap={'6'} mt="4rem">
              {headerText && <DialogTitle>{headerText}</DialogTitle>}
              {descriptionText && (
                <DialogDescription>{descriptionText}</DialogDescription>
              )}
              {children}
            </VStack>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  );
};

export { LateralDrawer, type LateralDrawerPropsType };
