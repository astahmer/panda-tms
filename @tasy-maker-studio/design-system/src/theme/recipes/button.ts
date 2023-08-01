import { defineRecipe } from '@pandacss/dev';

const button = defineRecipe({
  name: 'button',
  description: 'A button styles',
  base: {
    padding: '0.4rem 0.9rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    _disabled: {
      color: 'gray.400',
      cursor: 'not-allowed'
    },
    fontFamily: '"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif'
  },
  defaultVariants: {
    variant: 'primary',
    shape: 'square'
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: 'primary.500',
        borderColor: 'primary.600',
        color: 'accent.800',
        _hover: {
          backgroundColor: 'primary.400'
        }
      },
      secondary: {
        backgroundColor: 'secondary.500',
        borderColor: 'secondary.600',
        color: 'accent.800',
        _hover: {
          backgroundColor: 'secondary.400'
        }
      },
      tertiary: {
        backgroundColor: 'tertiary.500',
        borderColor: 'tertiary.600',
        color: 'accent.800',
        _hover: {
          backgroundColor: 'tertiary.400'
        },
        _selected: {
          background: 'bg.subtle'
        }
      },
      accent: {
        backgroundColor: 'accent.500',
        borderColor: 'accent.600',
        color: 'accent.50',
        _hover: {
          backgroundColor: 'accent.400'
        }
      },
      info: {
        backgroundColor: 'info.500',
        borderColor: 'info.600',
        color: 'accent.800',
        _hover: {
          backgroundColor: 'info.400'
        }
      },
      danger: {
        backgroundColor: 'danger.400',
        borderColor: 'danger.500',
        color: 'zinc.950',
        _hover: {
          backgroundColor: 'danger.500'
        }
      },
      link: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        _hover: {
          textDecoration: 'underline'
        },
        height: 'auto !important',
        px: '0 !important'
      },
      icon: {
        background: 'transparent',
        color: 'inherit',
        border: 'none',
        cursor: 'pointer',
        height: 'auto !important',
        px: '0 !important'
      },
      outline: {
        background: 'transparent',
        borderColor: 'white',
        color: 'white',
        transitionDuration: '0.25s',
        textDecoration: 'none',
        _hover: {
          backgroundColor: 'accent.500',
          borderColor: 'accent.500'
        }
      }
    },
    shape: {
      rounded: {
        borderRadius: 'sm'
      },
      square: {
        borderRadius: '0'
      }
    }
  }
});

export { button };
