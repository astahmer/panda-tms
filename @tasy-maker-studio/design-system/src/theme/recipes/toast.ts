import { toastAnatomy } from '@ark-ui/react';
import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts(toastAnatomy.build());

export const toast = defineRecipe({
  name: 'toast',
  description: 'A toast style',
  base: parts({
    root: {
      color: 'white',
      borderRadius: 'xl',
      borderWidth: '1px',
      boxShadow: 'lg',
      minWidth: 'xs',
      p: '4'
    },
    group: {
      p: '4'
    },
    title: {
      fontWeight: 'semibold',
      textStyle: 'sm'
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm'
    }
  }),
  defaultVariants: {
    variant: 'primary'
  },
  variants: {
    variant: {
      primary: {
        color: 'white',
        backgroundColor: 'orange.400',
        _hover: {
          backgroundColor: 'orange.500'
        },
        _focusVisible: {
          zIndex: 1,
          '--shadow': {
            base: 'colors.orange.50',
            _dark: 'colors.gray.700'
          },
          boxShadow: '0 0 0 4px var(--shadow)'
        }
      }
    }
  }
});
