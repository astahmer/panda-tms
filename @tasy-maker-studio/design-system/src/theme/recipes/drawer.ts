import { dialogAnatomy } from '@ark-ui/react';
import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts(dialogAnatomy.build());

export const drawer = defineRecipe({
  name: 'drawer',
  description: 'A drawer style',
  base: parts({
    backdrop: {
      position: 'fixed',
      background: 'rgb(0,0,0,0.2)',
      inset: '0',
      zIndex: '99'
    },
    container: {
      display: 'flex',
      background: 'rgb(0,0,0,0.2)',
      inset: '0',
      zIndex: '99'
    },
    content: {
      position: 'absolute',
      zIndex: '99999',
      background: 'neutral.50',
      height: '100%',
      minW: 'xs',
      overflowY: 'auto',
      border: 'none',
      width: '100%'
    },
    closeTrigger: {
      position: 'absolute',
      top: '0',
      background: 'neutral.50',
      color: 'white',
      fontSize: 'md',
      width: '3rem',
      height: '3rem',
      border: 'none',
      boxShadow: 'inset  -1px -1px   rgba(0,0,0,1/0.2)'
    },
    title: {
      fontWeight: 'semibold',
      textStyle: 'lg',
      w: 'full',
      height: '30px',
      textAlign: 'center'
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm'
    }
  }),
  variants: {
    variant: {
      right: parts({
        content: {
          top: '0',
          bottom: '0',
          right: '0',
          '&[data-state=open]': { animation: 'slideLeftIn 0.5s ease-out' },
          '&[data-state=closed]': { animation: 'slideRightOut 0.5s ease-in' }
        },
        closeTrigger: {
          left: '0'
        }
      }),
      left: parts({
        content: {
          top: '0',
          bottom: '0',
          left: '0',
          '&[data-state=open]': { animation: 'slideRightIn 0.5s ease-out' },
          '&[data-state=closed]': { animation: 'slideLeftOut 0.5s ease-in' }
        },
        closeTrigger: {
          right: '0'
        }
      })
    },
    size: {
      sm: parts({
        content: {
          width: '35%',
          minWidth: '250px'
        }
      }),
      md: parts({
        content: {
          width: '50%',
          minWidth: '400px'
        }
      }),
      full: parts({
        content: {
          width: 'full',
          minWidth: '1005'
        }
      })
    }
  },
  defaultVariants: {
    variant: 'right',
    size: 'sm'
  }
});
